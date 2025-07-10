import React, { useState } from "react";
import AMOS_TOKEN_MAP from "./AMOS_TOKEN_MAP.json";

function decryptAMOSProcedure(data) {
  const output = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    output[i] = data[i] ^ ((i * 11 + 7) & 0xff);
  }
  return output;
}

function postProcessAMOS(rawText) {
  const lines = rawText.split("\n");
  const result = [];
  let indent = 0;

  lines.forEach((line) => {
    const trimmed = line.trim();
    const lower = trimmed.toLowerCase();

    if (/(end if|end proc|wend|until|next|loop)/i.test(lower)) indent = Math.max(indent - 1, 0);
    result.push("  ".repeat(indent) + trimmed);
    if (/(if .* then|for .* to .*|while .*|repeat|do|procedure)/i.test(lower)) indent++;
  });

  return result.join("\n");
}
function tokenizeAMOSBytes(byteArray) {
  const tokens = [];
  let ptr = 0;

  while (ptr < byteArray.length) {
    const byte = byteArray[ptr];

    if (byte === 0x03 && ptr + 1 < byteArray.length) {
      const len = byteArray[ptr + 1];
      const str = String.fromCharCode(...byteArray.slice(ptr + 2, ptr + 2 + len));
      tokens.push({ type: "string", value: str });
      ptr += 2 + len;

    } else if (byte === 0x1C && ptr + 4 < byteArray.length) {
      const float = new DataView(byteArray.slice(ptr + 1, ptr + 5).buffer).getFloat32(0, true);
      tokens.push({ type: "float", value: float });
      ptr += 5;

    } else if (byte === 255 && ptr + 1 < byteArray.length) {
      const tokenCode = 256 + byteArray[ptr + 1];
      tokens.push({ type: "token", value: tokenCode });
      ptr += 2;

    } else if (byte >= 128) {
      tokens.push({ type: "token", value: byte });
      ptr++;

    } else if (byte >= 32 && byte < 127) {
      let str = "";
      while (ptr < byteArray.length && byteArray[ptr] >= 32 && byteArray[ptr] < 127) {
        str += String.fromCharCode(byteArray[ptr]);
        ptr++;
      }
      tokens.push({ type: "identifier", value: str });

    } else {
      tokens.push({ type: "unknown", value: byte });
      ptr++;
    }
  }

  return tokens;
}

function decodeAMOSBinary(byteArray) {
  let result = "";
  let i = 0;

  while (i + 4 < byteArray.length) {
    const lineLengthWords = byteArray[i];
    const lineNumber = (byteArray[i + 2] << 8) | byteArray[i + 3];
    const lineLength = lineLengthWords * 2;

    if (lineLengthWords === 0 || lineNumber === 0 || i + lineLength > byteArray.length) {
      i++;
      continue;
    }

    result += `\n${lineNumber} `;
    const lineBytes = byteArray.slice(i + 4, i + lineLength);
    const tokens = tokenizeAMOSBytes(lineBytes);

    for (const tok of tokens) {
      if (tok.type === "token") {
        const keyword = AMOS_TOKEN_MAP[tok.value.toString()] || `[TOKEN_${tok.value}]`;
        result += keyword + " ";
      } else if (tok.type === "string") {
        result += `"${tok.value}" `;
      } else if (tok.type === "float") {
        result += tok.value + " ";
      } else if (tok.type === "identifier") {
        result += tok.value + " ";
      } else {
        result += `[0x${tok.value.toString(16)}] `;
      }
    }

    i += lineLength;
  }

  return result.trim();
}


export default function AMOSDecoder() {
  const [readableAMOS, setReadableAMOS] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const bytes = new Uint8Array(event.target.result);
      const decoded = decodeAMOSBinary(bytes);
      const final = postProcessAMOS(decoded);
      setReadableAMOS(final);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AMOS .AMOS File Decoder</h2>
      <input type="file" accept=".amos" onChange={handleFileUpload} />
      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#111",
          color: "#0f0",
          padding: "10px",
          marginTop: "20px",
          borderRadius: "8px",
        }}
      >
        {readableAMOS || "Upload a .AMOS file to view the decoded output."}
      </pre>
    </div>
  );
}
