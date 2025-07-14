export function decodeAMOSLines(byteArray) {
  let i = 0;
  const result = [];

  while (i + 4 < byteArray.length) {
    const lineLengthWords = byteArray[i];
    const lineNumber = (byteArray[i + 2] << 8) | byteArray[i + 3];
    const lineLength = lineLengthWords * 2;

    if (lineLengthWords === 0 || lineNumber === 0 || i + lineLength > byteArray.length) {
      i++;
      continue;
    }

    const lineBytes = byteArray.slice(i + 4, i + lineLength);
    const tokens = tokenizeAMOSBytes(lineBytes);
    result.push({ lineNumber, tokens });

    i += lineLength;
  }

  return result;
}

function tokenizeAMOSBytes(bytes) {
  const tokens = [];
  let ptr = 0;

  while (ptr < bytes.length) {
    const byte = bytes[ptr];

    if (byte === 0x03 && ptr + 1 < bytes.length) {
      const len = bytes[ptr + 1];
      const str = String.fromCharCode(...bytes.slice(ptr + 2, ptr + 2 + len));
      tokens.push({ type: "string", value: str });
      ptr += 2 + len;

    } else if (byte === 0x1C && ptr + 4 < bytes.length) {
      const float = new DataView(bytes.slice(ptr + 1, ptr + 5).buffer).getFloat32(0, true);
      tokens.push({ type: "float", value: float });
      ptr += 5;

    } else if (byte === 0xFF && ptr + 1 < bytes.length) {
      const tokenCode = 256 + bytes[ptr + 1];
      tokens.push({ type: "token", value: tokenCode });
      ptr += 2;

    } else if (byte >= 128) {
      tokens.push({ type: "token", value: byte });
      ptr++;

    } else if (byte >= 32 && byte < 127) {
      let str = "";
      while (ptr < bytes.length && bytes[ptr] >= 32 && bytes[ptr] < 127) {
        str += String.fromCharCode(bytes[ptr]);
        ptr++;
      }
      tokens.push({ type: "identifier", value: str });

    } else {
      tokens.push({ type: "raw", value: byte });
      ptr++;
    }
  }

  return tokens;
}

