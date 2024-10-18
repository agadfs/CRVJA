
export function loadBank(bank, bankId){
  
    const path = "./src/AMIGAFOLDER/" + bank;
   
     const readTheFIle = fs.readFile(path, (err, data) => {
       if (err) {
         console.error("Error reading file:", err);
         return;
       }
       const buffer = Uint8Array.from(data);
       console.log(buffer);
 
       let offset = 6;
       const numberExpected = (buffer[4] << 8) | buffer[5];
       let objectsArray = [];
       for (let i = 0; i < numberExpected; i++) {
         const width = (data[offset] << 8) | data[offset + 1];
         const height = (data[offset + 2] << 8) | data[offset + 3];
         const depth = (data[offset + 4] << 8) | data[offset + 5];
         const hotspotX = (data[offset + 6] << 8) | data[offset + 7];
         const hotspotY = (data[offset + 8] << 8) | data[offset + 9];
 
         const planarGraphicData = [];
         const dataSize = width * 2 * height * depth;
 
         for (let j = 0; j < dataSize; j++) {
           planarGraphicData.push(data[offset + 10 + j]);
         }
 
         const objectBuilder = {
           width,
           height,
           depth,
           hotspotX,
           hotspotY,
           planarGraphicData,
         };
 
         objectsArray.push(objectBuilder);
         offset += 10 + dataSize;
       }
 
       // Initialize colorPalette to hold 32 colors (64 bytes in total)
       let colorPalette = [];
 
       // Loop through each pair of bytes in the color palette section (32 colors x 2 bytes)
       for (let k = offset; k < offset + 64; k += 2) {
         const byte1 = data[k];
         const byte2 = data[k + 1];
 
         const color1 = (byte1 << 8) | byte2;
 
         // Extract the red, green, and blue components (4 bits each)
         const red = (color1 >> 8) & 0xF;   // Top 4 bits for red
         const green = (color1 >> 4) & 0xF; // Next 4 bits for green
         const blue = color1 & 0xF;         // Bottom 4 bits for blue
 
         // Convert 4-bit values (0-15) to 8-bit values (0-255) by multiplying by 17
         const red8 = (red * 17).toString(16).padStart(2, "0");
         const green8 = (green * 17).toString(16).padStart(2, "0");
         const blue8 = (blue * 17).toString(16).padStart(2, "0");
 
         // Format as HTML color code #RRGGBB
         console.log(color1.toString(16));
         const color = '#' + red8 + green8 + blue8;
         colorPalette.push(color.toUpperCase());
       }
 
       console.log(colorPalette);
       console.log(objectsArray);
       
     });
  
 };