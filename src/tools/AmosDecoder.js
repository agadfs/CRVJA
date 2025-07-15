import React, { use, useEffect, useState } from "react";
import AMOS_TOKEN_MAP from "./AMOS_TOKEN_MAP.json";

export default function AMOSDecoder() {
  const [codeBytes, setCodeBytes] = useState([]);
  const [log, setLog] = useState("");
  const [parsedLines, setParsedLines] = useState([]);

  const [inferredTokenMap, setInferredTokenMap] = useState({});

  useEffect(() => {
    setInferredTokenMap(AMOS_TOKEN_MAP);
  }, []);
function formatToken(t) {
  if (t.type === "comment") return `'${t.string}'`;
  if (t.type === "string") return `${t.quote}${t.string}${t.quote}`;
  if (t.type === "string_le_word") return `"${t.value}"`;
  if (t.type === "unknown") return `⟨0x${t.token?.toString(16)}⟩`;
  if (t.type === "null") return "[null]";
  if (t.type === "int_decimal") return "[int_decimal]";
  if (t.type === "varref") return "[varref]";
  return `[${t.type}]`;
}
function decodeLittleEndianString(words) {
  const bytes = [];
  for (const word of words) {
    bytes.push(word & 0xff);       // low byte
    bytes.push((word >> 8) & 0xff); // high byte
  }
  return new TextDecoder("latin1").decode(new Uint8Array(bytes));
}
  function parseTokens(code, lineStart, lineEnd, lineNum, indent, lineWordLen) {
  const tokens = [];
  let ptr = lineStart;

  const classifyToken = (token) => {
    switch (token) {
      case 0x0000: return "null";
      case 0x0006: return "varref";
      case 0x000C: return "label";
      case 0x0012: return "proc_call";
      case 0x0018: return "label_ref";
      case 0x0026: return "string_double";
      case 0x002E: return "string_single";
      case 0x001E: return "int_binary";
      case 0x0036: return "int_hex";
      case 0x003E: return "int_decimal";
      case 0x0046: return "float";
      default: return null;
    }
  };

  while (ptr < lineEnd) {
    const token = code[ptr] | (code[ptr + 1] << 8);
    const signedToken = (token << 16) >> 16;

    const type = classifyToken(token);
    if (type === "null") {
      tokens.push({ type: "null" });
      ptr += 2;
      break;
    }

    if (token === 0x0052 || token === 0x0652) {
      ptr += 2;
      const strBytes = code.slice(ptr, lineEnd);
      const nullIndex = strBytes.indexOf(0);
      const comment = new TextDecoder("latin1").decode(
        nullIndex >= 0 ? strBytes.slice(0, nullIndex) : strBytes
      );
      tokens.push({ type: "comment", string: comment.trim() });
      break;
    }

    switch (type) {
      case "varref":
      case "label":
      case "proc_call":
      case "label_ref": {
        const flags = code[ptr + 2] | (code[ptr + 3] << 8);
        const len = code[ptr + 4];
        const strBytes = code.slice(ptr + 5, ptr + 5 + len);
        const text = new TextDecoder("latin1").decode(strBytes);
        tokens.push({
          type,
          token,
          flags,
          name: text,
          length: len,
          ptr,
        });
        ptr += 5 + len;
        break;
      }

      case "string_double":
      case "string_single": {
  ptr += 2; // ✅ Skip token itself
  const len = code[ptr] | (code[ptr + 1] << 8);
  ptr += 2;

  const byteLen = len % 2 === 0 ? len : len + 1; // AMOS rounds to even
  const strBytes = code.slice(ptr, ptr + byteLen);
  const text = new TextDecoder("latin1").decode(strBytes.slice(0, len)); // don't include padding

  tokens.push({
    type: "string",
    quote: type === "string_double" ? '"' : "'",
    string: text,
    raw: [...strBytes],
    length: len,
    ptr,
  });

  ptr += byteLen;
  break;
}

      case "int_binary": {
        const val = code[ptr + 2];
        tokens.push({ type, value: val, ptr });
        ptr += 4;
        break;
      }

      case "int_hex":
      case "int_decimal": {
        const val = (
          code[ptr + 2] |
          (code[ptr + 3] << 8) |
          (code[ptr + 4] << 16) |
          (code[ptr + 5] << 24)
        ) >>> 0;
        tokens.push({ type, value: val, ptr });
        ptr += 6;
        break;
      }

      case "float": {
        const floatBytes = new Uint8Array(code.slice(ptr + 2, ptr + 6));
        const view = new DataView(floatBytes.buffer);
        const value = view.getFloat32(0, true);
        tokens.push({ type, value, ptr });
        ptr += 6;
        break;
      }

      default: {
  // Try to decode a little-endian null-terminated string (AMOS style)
  const maybeStringWords = [];
  let scan = ptr;
  let nullFound = false;

  while (scan + 1 < lineEnd) {
    const word = code[scan] | (code[scan + 1] << 8);
    if (word === 0x0000) {
      nullFound = true;
      break;
    }
    maybeStringWords.push(word);
    scan += 2;
  }

  if (maybeStringWords.length > 2 && nullFound) {
    const decoded = decodeLittleEndianString(maybeStringWords);
    const isPrintable = /^[\x20-\x7E._-]+$/.test(decoded); // basic sanity check

    if (isPrintable) {
      tokens.push({
        type: "string_le_word",
        value: decoded,
        wordCount: maybeStringWords.length,
        ptr,
      });
      ptr = scan + 2; // move past null word
      break;
    }
  }

  // fallback: truly unknown
  tokens.push({
    type: "unknown",
    token,
    signed: signedToken,
    byte: [code[ptr], code[ptr + 1]],
    lineNum,
    ptr,
  });
  console.warn(
    `Unknown token 0x${token.toString(16).padStart(4, "0")} at line ${lineNum}, ptr=${ptr}`
  );
  ptr += 2;
  break;
}}
  }

  console.log("-----------------------------");
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
        if (offset < code.length) {
          const remaining = code.slice(offset);
          console.log(
            `🔍 Parsing line at offset=${offset}, remaining bytes: ${remaining.length}`
          );
        }
        // Scan until we hit 0x0000 (end-of-line token)
        let foundEOL = false;
        while (ptr + 1 < code.length) {
          const token = code[ptr] | (code[ptr + 1] << 8);
          ptr += 2;
          if (token === 0x0000) {
            foundEOL = true;
            break;
          }
        }

        if (!foundEOL) {
          console.warn(
            `⛔ Reached offset=${offset} but no end-of-line (0x0000) found. Stopping.`
          );
          break;
        }

        const lineEnd = ptr; // ✅ linha termina aqui

        const maybeIndent = code[lineStart + 2];

        let indent = 0;
        let tokenStart = lineStart + 2;
        if (maybeIndent >= 0 && maybeIndent <= 15) {
          indent = maybeIndent;
          tokenStart = lineStart + 3;
        }
        console.log(
          `Parsing line ${lineNum} with length in bytes: ${
            (lineEnd - lineStart) / 2
          }) with indent ${indent}`
        );
        const parsedLine = parseTokens(
          code,
          tokenStart,
          lineEnd,
          lineNum,
          indent,
          (lineEnd - lineStart) / 2
        );
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
