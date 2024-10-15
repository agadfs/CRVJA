

test("readBank", async () => {
  const fs = require("fs");
  let dataRead;
  let numberExpected = 0;
  let objectsArray = [];
  fs.readFile("./tests/testFolderForWrittenTests/tileset.abk", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    dataRead = data;

    
    let byte0 = data[0];
    let byte1 = data[1];
    let byte2 = data[2];
    let byte3 = data[3];
    if (byte0 == 0x41 && byte1 == 0x6d && byte2 == 0x49 && byte3 == 0x63) {
      console.log("The file is a valid ABK file");
    }

    let byte4 = data[4];
    let byte5 = data[5];
    let numberOfIcons = ((byte4 & 0xff) << 8) | (byte5 & 0xff);
    if (numberOfIcons > 0) {
      numberExpected = numberOfIcons;
    }

    /* Sprites Bank */
    let offset = 6; 

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
    console.log("How many sprites: ", objectsArray.length);
    console.log("Array of sprites: ", objectsArray);
    console.log("Data being read: ",dataRead.toString("hex").replace(/(.)(.)/g, "$1$2 "));
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(objectsArray.length).toBe(numberExpected);
});
