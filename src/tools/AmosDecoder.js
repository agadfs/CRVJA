import React, { use, useEffect, useState } from "react";
import AMOS_TOKEN_MAP from "./AMOS_TOKEN_MAP.json";

const be16 = (b, i) => (b[i] << 8) | b[i + 1];
const be32 = (b, i) =>
  (b[i] << 24) | (b[i + 1] << 16) | (b[i + 2] << 8) | b[i + 3];

const EXT_MAP = {
  8: {
    4144: "Turbo Draw", // Ext#8@4144
    4162: "Blitter Fill", // Ext#8@4162
    4636: "Blitter Clear", // Ext#8@4636
    4772: "Blitter Copy Limit", // Ext#8@4772
    4786: "Blitter Copy", // Ext#8@4786
  },
};

const DEFAULT_KWS = {
  // punctuation
  0x005c: ",",
  0x0054: ":",
  0x0064: ";",
  // flow / control
  0x023c: "For",
  0x02be: "If",

  0x02da: "End If",
  0x027e: "Do",
  0x0286: "Loop",
  0x0094: "To",
  0x0640: "Dim",
  0x0ae2: "Screen Swap",
  0x0cca: "Wait Vbl",
  0x5d8: "", // Unkown purpose, after a Do
  0x0060: "", // Unkown purpose, after a If
  // screen / setup
  0x09ea: "Screen Open",
  0x70c: "Cos",
  0x702: "Sin",
  0x246: "Next",
  0x476: "Print",
  0x0c90: "Lowres",
  0x0d34: "Flash Off",
  0x1446: "Curs Off",
  0x1de0: "Hide",
  0x06ca: "Degree",
  0x13dc: "Paper",
  0x0bae: "Cls",
  0x0cfc: "Palette",
  0x13d2: "Pen",
  0x012c: "Double Buffer",
  0x0e2c: "Autoback", // shows before “: Double Buffer 0” in your line

  // math / print / etc
  0x0458: "Add",
  0x0462: "Add",
  0x1378: "Locate", // appears in your If…Locate… line
  0x12ce: "Timer", // reserved variable ‘Timer’

  // parens (you’re seeing them around I / A)
  0x0074: "(", // you see as ⟨0x74⟩
  0x007c: ")", // you see as ⟨0x7c⟩
};

// basic operators you see in assignments/math
const OP_KWS = {
  0xffa2: "=", // x = 64
  0xffca: "-", // -32
  0xffc0: "+",
  0xffe2: "*",
  0xffec: "/",
};

export default function AMOSDecoder({ onDecoded }) {
  const [codeBytes, setCodeBytes] = useState([]);
  const [log, setLog] = useState("");
  const [parsedLines, setParsedLines] = useState([]);
  const fileInputRef = React.useRef();
  const [inferredTokenMap, setInferredTokenMap] = useState({});

  useEffect(() => {
    setInferredTokenMap(AMOS_TOKEN_MAP);
  }, []);

  function smartJoin(tokens) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const curr = tokens[i];
      const prev = tokens[i - 1];

      const noSpace =
        i === 0 ||
        curr === ")" ||
        curr === "," ||
        curr === "(" ||
        prev === "(" ||
        prev === "," ||
        // identifier immediately followed by "("
        (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(prev) && curr === "(");

      out += (noSpace ? "" : " ") + curr;
    }
    return out;
  }

  function getFormattedLines(lines) {
    return parsedLines
      .map((line) => `${smartJoin(line.tokens.map(formatToken))}`)
      .join("\n");
  }

  useEffect(() => {
    if (parsedLines.length > 0 && typeof onDecoded === "function") {
      onDecoded(getFormattedLines(parsedLines));
    
    }
  }, [parsedLines, onDecoded]);

  function formatToken(t) {
    if (t.type === "comment") return `'${t.string}'`;
    if (t.type === "string") return `${t.quote}${t.string}${t.quote}`;
    if (t.type === "null") return ""; // don't print EOL marker
    if (t.type === "int_decimal") return String(t.value);
    if (t.type === "int_hex") return "$" + t.value.toString(16);

    // show names:
    if (
      t.type === "varref" ||
      t.type === "label" ||
      t.type === "proc_call" ||
      t.type === "label_ref"
    ) {
      return t.name ?? "[name?]";
    }

    // keywords/extensions:
    if (t.type === "keyword" && t.text) return t.text;
    if (t.type === "extension")
      return t.name ?? `Ext#${t.extNum}@${t.extOffset}`;

    // last resort:
    if (t.token != null) return `⟨0x${t.token.toString(16)}⟩`;
    return `[${t.type}]`;
  }

  function parseTokens(code, lineStart, lineEnd, lineNum, indent, lineWordLen) {
    const tokens = [];
    let ptr = lineStart;
    let parenDepth = 0;
    const classifyToken = (token) => {
      switch (token) {
        case 0x0000:
          return "null";
        case 0x0006:
          return "varref";
        case 0x000c:
          return "label";
        case 0x0012:
          return "proc_call";
        case 0x0018:
          return "label_ref";
        case 0x0026:
          return "string_double";
        case 0x002e:
          return "string_single";
        case 0x001e:
          return "int_binary";
        case 0x0036:
          return "int_hex";
        case 0x003e:
          return "int_decimal";
        case 0x0046:
          return "float_single";
        case 0x2b6a:
          return "float_double";
        case 0x064a: // Rem
        case 0x0652: // ' (single-quote remark)
          return "remark";
        case 0x004e:
          return "extension";
        default:
          return null;
      }
    };

    while (ptr < lineEnd) {
      const token = be16(code, ptr);
      const signedToken = (token << 16) >> 16;

      const type = classifyToken(token);
      if (type === "null") {
        ptr += 2;
        break;
      }

      switch (type) {
        case "varref":
        case "label":
        case "proc_call":
        case "label_ref": {
          const unk = be16(code, ptr + 2);
          const len = code[ptr + 4];
          const flags = code[ptr + 5];
          const padded = (len + 1) & ~1;
          const strBytes = code.slice(ptr + 6, ptr + 6 + padded);

          let rawName = new TextDecoder("latin1").decode(
            strBytes.slice(0, len)
          );

          // strip weird trailing whitespace characters AMOS sometimes stores
          // (NBSP, zero-width no-break, zero-width space, etc.)
          rawName = rawName.replace(/[\u00A0\uFEFF\u200B]+$/g, "");
          // also strip any ASCII control chars that might sneak in
          rawName = rawName.replace(/[\u0000-\u001F\u007F]+$/g, "");

          const name = rawName; // or .trimEnd() too if you want
         
          tokens.push({ type, token, unk, len, flags, name, ptr });
          ptr += 6 + padded;
          break;
        }

        case "string_double":
        case "string_single": {
          const len = be16(code, ptr + 2); // BIG-endian
          const padded = (len + 1) & ~1;
          const raw = code.slice(ptr + 4, ptr + 4 + padded);
          const text = new TextDecoder("latin1").decode(raw.slice(0, len));
          tokens.push({
            type: "string",
            quote: type === "string_double" ? '"' : "'",
            string: text,
            raw: [...raw],
            length: len,
            ptr,
          });
          ptr += 4 + padded;
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
          const val = be32(code, ptr + 2) >>> 0; // BIG-endian 32-bit
          tokens.push({ type, value: val, ptr });
          ptr += 6;
          break;
        }

        case "float_single": {
          const view = new DataView(
            Uint8Array.from([
              code[ptr + 2],
              code[ptr + 3],
              code[ptr + 4],
              code[ptr + 5],
            ]).buffer
          );
          const value = view.getFloat32(0, /*littleEndian=*/ false); // BIG-endian
          tokens.push({ type: "float", value, ptr });
          ptr += 6;
          break;
        }
        case "float_double": {
          const arr = code.slice(ptr + 2, ptr + 10);
          const view = new DataView(Uint8Array.from(arr).buffer);
          const value = view.getFloat64(0, /*littleEndian=*/ false);
          tokens.push({ type: "float64", value, ptr });
          ptr += 10;
          break;
        }
        case "remark": {
          // 2 bytes token, then 1 byte unused, 1 byte len, then string (null-terminated, even padded)
          const len = code[ptr + 3];
          const padded = (len + 1) & ~1;
          const raw = code.slice(ptr + 4, ptr + 4 + padded);
          const text = new TextDecoder("latin1")
            .decode(raw.slice(0, len))
            .trimEnd();
          tokens.push({ type: "comment", string: text });
          ptr += 4 + padded;
          break;
        }
        case "extension": {
          const extNum = code[ptr + 2];
          const extOffset = (be16(code, ptr + 4) << 16) >> 16;
          const name = EXT_MAP[extNum]?.[extOffset];
          tokens.push({ type: "extension", extNum, extOffset, name, ptr });
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
          if (token === 0x0074) {
            // '('
            parenDepth++;
            tokens.push({ type: "keyword", token, text: "(" });
            ptr += 2;
            continue;
          }
          if (token === 0x007c) {
            // ')'
            if (parenDepth > 0) {
              parenDepth--;
              tokens.push({ type: "keyword", token, text: ")" });
            }
            // If depth == 0, it's a stray ')' (e.g., the “For)” you saw) -> skip it
            ptr += 2;
            continue;
          }
          if (token === 0x027e) {
            // Do
            tokens.push({ type: "keyword", token, text: "Do" });
            ptr += 4; // 2-byte token + 2-byte extra
            continue;
          }
          if (token === 0x02be) {
            // If
            tokens.push({ type: "keyword", token, text: "If" });
            ptr += 4; // 2-byte token + 2-byte extra
            continue;
          }
          const kw = DEFAULT_KWS[token];
          if (kw) {
            tokens.push({ type: "keyword", token, text: kw });
            ptr += 2;
            break;
          }

          const op = OP_KWS[token];
          if (op) {
            tokens.push({ type: "keyword", token, text: op });
            ptr += 2;
            break;
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
        }
      }
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

      // In handleFile(), after `const code = buffer.slice(20, 20 + tokenizedLength);`
      let offset = 0,
        lineNum = 0;
      const parsed = [];
      while (offset + 2 <= code.length) {
        const nWords = code[offset]; // 1 byte: length in words
        const indent = code[offset + 1]; // 1 byte: indent
        if (nWords === 0) break; // safety: malformed
        const lineStart = offset;
        const lineEnd = lineStart + nWords * 2; // whole line span (bytes)
        const tokenStart = lineStart + 2; // tokens begin after header

        if (lineEnd > code.length) break; // safety

        const parsedLine = parseTokens(
          code,
          tokenStart,
          lineEnd,
          lineNum,
          indent,
          nWords
        );
        parsed.push(parsedLine);

        // Sanity: last word should be $0000
        const last = be16(code, lineEnd - 2);
        if (last !== 0x0000) {
          console.warn(
            `Line ${lineNum} missing $0000 terminator (found 0x${last.toString(16)})`
          );
        }

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
    <div>
      <button
        onClick={() => fileInputRef.current?.click()}
        style={{
          backgroundColor: "#00aaaa",
          color: "white",
          fontWeight: "bold",
          padding: "10px 20px",
          border: "4px solid #006666",
          boxShadow: "4px 4px 0 #004444",
          textShadow: "1px 1px 0 #006666",
          letterSpacing: "1px",
          fontFamily: "monospace",
          minWidth: "300px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "all 0.1s ease-in-out",
        }}
        onMouseDown={(e) => {
          e.target.style.transform = "translate(4px, 4px)";
          e.target.style.boxShadow = "0 0 0 #004444";
        }}
        onMouseUp={(e) => {
          e.target.style.transform = "translate(0, 0)";
          e.target.style.boxShadow = "4px 4px 0 #004444";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translate(0, 0)";
          e.target.style.boxShadow = "4px 4px 0 #004444";
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translate(2px, 2px)";
          e.target.style.boxShadow = "2px 2px 0 #004444";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translate(0, 0)";
          e.target.style.boxShadow = "4px 4px 0 #004444";
        }}
      >
        LOAD .AMOS FILE
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFile}
        style={{ display: "none" }}
        accept=".amos, .AMOS"
      />

      <pre style={{ whiteSpace: "pre-wrap", marginTop: 10 }}>{log}</pre>
    </div>
  );
}
