import React, { use, useEffect, useState } from "react";
import AMOS_TOKEN_MAP from "./AMOS_TOKEN_MAP.json";

export default function AMOSDecoder() {
  const [codeBytes, setCodeBytes] = useState([]);
  const [log, setLog] = useState("");
  const [parsedLines, setParsedLines] = useState([]);
  const [ascText, setAscText] = useState("");
  const [inferredTokenMap, setInferredTokenMap] = useState({});

  useEffect(() => {
    setInferredTokenMap(AMOS_TOKEN_MAP);
  }, []);

  function formatToken(t) {
    if (t.type === "comment") return `${t.string}`;
    if (t.type === "unknown") return `⟨0x${t.token?.toString(16)}⟩`;
    return `[${t.type}]`;
  }
  function parseTokens(code, lineStart, lineEnd, lineNum, indent, lineWordLen) {
    const tokens = [];
    let ptr = lineStart;
    while (ptr < lineEnd) {
      const token = new Int16Array([code[ptr] | (code[ptr + 1] << 8)])[0];

      if (token === 0x0000) {
        tokens.push({ type: "null" });
        break;
      }

      // Apostrophe or REM comment
      if (token === 0x0052 || token === 0x0652) {
        ptr += 2; // skip the 2-byte token

        const strBytes = code.slice(ptr, lineEnd); // 🔥 the rest of the line is the comment
        const str = new TextDecoder("latin1").decode(strBytes);

        tokens.push({ type: "comment", string: str.trim() }); // optional: trim whitespace
        break; // a comment ends the line
      }

      // Integer constant (0x0006)
      if (token === 0x0006) {
        const value = (code[ptr + 2] << 8) | code[ptr + 3];
        tokens.push({ type: "int", value, format: "int16" });
        ptr += 4;
        continue;
      }

      // Float value (0x0104)
      if (token === 0x0104) {
        const view = new DataView(code.buffer, code.byteOffset + ptr + 2, 4);
        const value = view.getFloat32(0, true);
        tokens.push({ type: "float", value });
        ptr += 6;
        continue;
      }

      // String literal (0xFE00)
      if (token === 0xfe00) {
        const length = code[ptr + 2];
        const strBytes = code.slice(ptr + 3, ptr + 3 + length);
        const str = new TextDecoder("latin1").decode(strBytes);
        tokens.push({ type: "string", value: `"${str}"` });
        const padded = length % 2 === 0 ? length : length + 1;
        ptr += 3 + padded;
        continue;
      }

      // Variable name (0x3E00)
      if (token === 0x3e00) {
        const length = code[ptr + 2];
        const strBytes = code.slice(ptr + 3, ptr + 3 + length);
        const name = new TextDecoder("latin1").decode(strBytes);
        tokens.push({ type: "variable", name });
        ptr += 3 + length + (length % 2 === 0 ? 0 : 1);
        continue;
      }
      const unsignedToken = token & 0xffff;
      const hex = unsignedToken.toString(16).padStart(4, "0").toUpperCase();

      const commandName = inferredTokenMap[hex] || AMOS_TOKEN_MAP[hex];

      if (commandName) {
        tokens.push({
          type: "command",
          token: unsignedToken,
          name: commandName,
        });
        ptr += 2;
        continue;
      }

      // Unknown token
      tokens.push({
        type: "unknown",
        token: unsignedToken,
        signed: token,
        ptr,
        byte: [code[ptr], code[ptr + 1]],
        lineNum,
      });
      console.warn(
        `Unknown token 0x${hex} (signed: ${token}) at line ${lineNum}, ptr=${ptr}`
      );
      ptr += 2;
    }

    return { indent, tokens };
  }

  function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const buffer = new Uint8Array(reader.result);

      // 1️⃣ Header and length
      const headerBytes = buffer.slice(0, 16);
      const headerString = new TextDecoder("latin1").decode(headerBytes);
      const tokenizedLengthBytes = buffer.slice(16, 20);
      const tokenizedLength =
        (tokenizedLengthBytes[0] << 24) |
        (tokenizedLengthBytes[1] << 16) |
        (tokenizedLengthBytes[2] << 8) |
        tokenizedLengthBytes[3];

      console.log(
        "🧩 Header bytes:",
        [...headerBytes].map((b) => b.toString(16).padStart(2, "0")).join(" ")
      );
      console.log("📄 Header string:", `"${headerString}"`);
      console.log(
        "📏 Tokenized BASIC length bytes:",
        [...tokenizedLengthBytes]
          .map((b) => b.toString(16).padStart(2, "0"))
          .join(" ")
      );
      console.log("📦 Tokenized BASIC length (bytes):", tokenizedLength);

      // 2️⃣ Extract tokenized BASIC code
      const code = buffer.slice(20, 20 + tokenizedLength);

      // 3️⃣ Parse lines — only REM and ' comments
      let offset = 0;
let lineNum = 0;
const parsed = [];

while (offset + 1 < code.length) {
  const lineStart = offset;
  let ptr = offset;

  // Scan until we hit 0x0000 (end-of-line token)
  while (ptr + 1 < code.length) {
    const token = code[ptr] | (code[ptr + 1] << 8);
    ptr += 2;
    if (token === 0x0000) break;
    // Skip token-specific lengths to reach next token properly if needed (optional)
  }

  const lineEnd = ptr + 2; // Include the 0x0000 token
  const maybeIndent = code[lineStart + 2];

  let indent = 0;
  let tokenStart = lineStart + 2;
  if (maybeIndent >= 0 && maybeIndent <= 15) {
    indent = maybeIndent;
    tokenStart = lineStart + 3;
  }

  const parsedLine = parseTokens(code, tokenStart, lineEnd, lineNum, indent, (lineEnd - lineStart) / 2);
  parsed.push(parsedLine);

  offset = lineEnd;
  lineNum++;
}


      setParsedLines(parsed); // ✅ Now this works!
      setCodeBytes([...code]);
      console.log(`📏 Total lines parsed: ${lineNum}`);
    };

    reader.readAsArrayBuffer(file);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>AMOS File Decoder</h2>
      Amos file:
      <input type="file" onChange={handleFile} />
      <pre style={{ whiteSpace: "pre-wrap", marginTop: 10 }}>{log}</pre>
      {codeBytes.length > 0 && (
        <>
          <h3>Code read</h3>
          <div
            style={{
              maxHeight: 300,
              overflowY: "auto",
              background: "#222",
              color: "#0f0",
              padding: 10,
            }}
          >
            {parsedLines.length > 0 && (
              <>
                <div
                  style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
                >
                  {parsedLines.map((line, idx) => (
                    <div key={idx}>
                      [{line.indent}] {line.tokens.map(formatToken).join(" ")}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
