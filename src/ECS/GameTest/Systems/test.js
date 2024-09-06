"use client";
import { useEffect, useRef, useState } from "react";


/* TO DO

To smooth edges of not connectable tiles

ADD 1 more tile to check, between above and previous so if going left to right
it needs to check above, previous and top left

if going right to left it needs to check above, previous and top right

*/


export const SeeTheMadeAlgorithmComponent = () => {
  const canvasRef = useRef(null); // Reference to the canvas element
  const [uploadedImage, setUploadedImage] = useState(null); // Uploaded image data URL
  const multiplier = 10; // Scale factor for the recreated image
  const [rgbTiles, setRgbTiles] = useState([]); // Store unique RGB colors
  const [rgbTouches, setRgbTouches] = useState({}); // Store counts of RGB pairs touching
  const randomCanvasRef = useRef(null);
  const mapSize = 150;
  // Handle image file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file && file.type === "image/png") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); // Store the image as a data URL
      };
      reader.readAsDataURL(file); // Convert the file to a data URL for display
    } else {
      alert("Please upload a valid PNG file.");
    }
  };

  // Helper function to get the RGB string for uniqueness
  const getRgbString = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

  // Function to process the image and recreate it using individual RGB values
  const processImage = () => {
    if (!uploadedImage) return;

    let newImg = []; // Store extracted pixel colors here
    let uniqueRgbSet = new Set(); // Temporary set to track unique RGB values
    let touchCounter = {}; // To track RGB pairs that touch

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Create a new image and load the uploaded PNG
    const img = new Image();
    img.src = uploadedImage;
    img.onload = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the original 12x12 image onto the canvas (for pixel extraction)
      ctx.drawImage(img, 0, 0, 12, 12);

      // Now extract pixel data and store it in newImg
      for (let y = 0; y < 12; y++) {
        for (let x = 0; x < 12; x++) {
          // Get the color data for the 1x1 pixel at position (x, y)
          const imageData = ctx.getImageData(x, y, 1, 1);
          const pixelData = imageData.data;

          // Extract RGB and Alpha values
          const r = pixelData[0]; // Red
          const g = pixelData[1]; // Green
          const b = pixelData[2]; // Blue
          const a = pixelData[3] / 255; // Alpha (normalized between 0 and 1)

          // Create an RGB string (without alpha for uniqueness)
          const rgbString = getRgbString(r, g, b);
         
          // If the RGB string is not already in the set, add it
          if (!uniqueRgbSet.has(rgbString)) {
            uniqueRgbSet.add(rgbString); // Add to set to track uniqueness
            setRgbTiles((prevTiles) => [...prevTiles, { r, g, b, a }]); // Add to state
          }

          // Push each pixel's RGBA value into newImg array
          newImg.push({ r, g, b, a, rgbString });
        }
      }

      // Now, check how many times each RGB touches another
      for (let y = 0; y < 12; y++) {
        for (let x = 0; x < 12; x++) {
          const pixelIndex = y * 12 + x;
          const currentPixel = newImg[pixelIndex];
          const neighbors = getNeighbors(x, y, newImg); // Get the neighbors of the current pixel
          neighbors.forEach((neighbor) => {
            const currentRgb = currentPixel.rgbString;
            const neighborRgb = neighbor.rgbString;
            const key = `${currentRgb}-${neighborRgb}`;
            if (currentRgb === "rgb(0, 0, 0)" || neighborRgb === "rgb(0, 0, 0)") return;

            // Increment the count for this pair of RGBs
            if (!touchCounter[key]) {
              touchCounter[key] = 1;
            } else {
              touchCounter[key]++;
            }
          });
        }
      }

      setRgbTouches(touchCounter);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < 12; y++) {
        for (let x = 0; x < 12; x++) {
          const pixelIndex = y * 12 + x;
          const { r, g, b, a } = newImg[pixelIndex];

          ctx.fillStyle = ` rgb(${r}, ${g}, ${b}, ${a})`;

          // Draw a 10x10 pixel square for each original 1x1 pixel
          ctx.fillRect(x * multiplier, y * multiplier, multiplier, multiplier); // Scale by 10x
        }
      }
    };
  };

  const getNeighbors = (x, y, imgData) => {
    const neighbors = [];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ];

    directions.forEach(([dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < 12 && newY >= 0 && newY < 12) {
        const neighborIndex = newY * 12 + newX;
        neighbors.push(imgData[neighborIndex]);
      }
    });

    return neighbors;
  };
  const generateRandomCanvas = () => {
    if (rgbTiles.length === 0 || Object.keys(rgbTouches).length === 0) return;

    const canvas = randomCanvasRef.current;
    const ctx = canvas.getContext("2d");

    const pixelSize = 10; // Size of each square pixel in the random canvas

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Start with a random initial color
    let previousTile = rgbTiles[Math.floor(Math.random() * rgbTiles.length)];
    let tileAbove = previousTile;
    let theMap = Array(mapSize).fill(Array(mapSize).fill(null));
    const pickTileByProbability = (tiles) => {
      const totalCount = tiles.reduce((sum, tile) => sum + tile.count, 0);
      tiles.forEach((tile) => {
        tile.chance = tile.count / totalCount;
      });
      const random = Math.random();
      let cumulativeChance = 0;
      for (let tile of tiles) {
        cumulativeChance += tile.chance;
        if (random < cumulativeChance) {
          return tile.rgb;
        }
      }
    };
    for (let y = 0; y < mapSize; y++) {
      if (y % 2) {
        /* LINHA ÍMPAR: Direita para Esquerda */
        
        for (let x = mapSize - 1; x >= 0; x--) {
          if (x === mapSize - 1) {
          } else {
            // Pega o tile anterior e o de cima

            previousTile = theMap[y][x+1];
            if (!previousTile) {
              previousTile = theMap[y-1][x];
            }

            tileAbove = theMap[y-1][x];

            // Mesma lógica de busca dos possíveis tiles que tocam o tile anterior e o de cima
            let previousTileRgb = `rgb(${previousTile.r}, ${previousTile.g}, ${previousTile.b})`;
            let possibleTilesFromPrevious = Object.entries(rgbTouches)
              .filter(([key]) => key.startsWith(previousTileRgb))
              .map(([key, count]) => {
                const [, neighborRgb] = key.split("-");
                return { rgb: neighborRgb, count };
              });

            let possibleTilesFromAbove = [];
            let tileAboveRgb;
            if (y > 0) {
              tileAboveRgb = `rgb(${tileAbove.r}, ${tileAbove.g}, ${tileAbove.b})`;
              possibleTilesFromAbove = Object.entries(rgbTouches)
                .filter(([key]) => key.startsWith(tileAboveRgb))
                .map(([key, count]) => {
                  const [, neighborRgb] = key.split("-");
                  return { rgb: neighborRgb, count };
                });
            }

            // Mistura as possibilidades e seleciona um tile
            let possibleTiles = possibleTilesFromPrevious.filter((prevTile) =>
              possibleTilesFromAbove.some(
                (aboveTile) => aboveTile.rgb === prevTile.rgb
              )
            );

            let chosenTileRgb;

            const getATile = pickTileByProbability(possibleTiles);
            chosenTileRgb = getATile;

            // Encontra o tile correspondente baseado no RGB escolhido
            let chosenTile = rgbTiles.find(
              (tile) => `rgb(${tile.r}, ${tile.g}, ${tile.b})` === chosenTileRgb
            );

            if (!chosenTile) {
              chosenTile = previousTile;
            }

            // Desenha o tile escolhido no canvas
            ctx.fillStyle = `rgb(${chosenTile.r}, ${chosenTile.g}, ${chosenTile.b}, ${chosenTile.a})`;
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);

            // Adiciona o tile escolhido ao mapa
            theMap[y][x] = chosenTile;
            
          }
        }
      } else {
        /* LINHA PAR                     */
        for (let x = 0; x < mapSize - 1; x++) {
          if (x === 0 && y === 0) {
            // Start with a random color for the first pixel in each row
            previousTile = rgbTiles[Math.floor(Math.random() * rgbTiles.length)];
            tileAbove = previousTile;
            ctx.fillStyle = `rgb(${previousTile.r}, ${previousTile.g}, ${previousTile.b}, ${previousTile.a})`;
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);

            theMap[0][0] = previousTile;
            console.log("First Pixel", previousTile);
          } else {
          
            
            previousTile = theMap[y][x-1];
            if (!previousTile) {
              previousTile = theMap[y-1][x];
            }
           
            if(y>0){
              tileAbove = theMap[y-1][x];
            }
            
            let possibleTilesFromAbove = [];
            // Get possible tiles that can touch previousTile

            let previousTileRgb = `rgb(${previousTile.r}, ${previousTile.g}, ${previousTile.b})`;
            let possibleTilesFromPrevious = Object.entries(rgbTouches)
              .filter(([key]) => key.startsWith(previousTileRgb)) // Filter pairs starting with previousTileRgb
              .map(([key, count]) => {
                const [, neighborRgb] = key.split("-"); // Get the neighbor RGB
                return { rgb: neighborRgb, count }; // Return RGB and its touch count
              });

            let possibleTiles = [];
            if (y > 0) {
              let tileAboveRgb = `rgb(${tileAbove.r}, ${tileAbove.g}, ${tileAbove.b})`;
              possibleTilesFromAbove = Object.entries(rgbTouches)
                .filter(([key]) => key.startsWith(tileAboveRgb)) // Filter pairs starting with tileAboveRgb
                .map(([key, count]) => {
                  const [, neighborRgb] = key.split("-");
                  return { rgb: neighborRgb, count };
                });
            }

            if(possibleTilesFromAbove.length > 0){
              possibleTiles = possibleTilesFromPrevious.filter((prevTile) =>
                possibleTilesFromAbove.some(
                  (aboveTile) => aboveTile.rgb === prevTile.rgb
                )
              );

            }else{
              possibleTiles = possibleTilesFromPrevious;
            }
           

            let chosenTileRgb;

            const getATile = pickTileByProbability(possibleTiles);
            chosenTileRgb = getATile;
            // Find the corresponding tile in rgbTiles based on the chosen RGB
           
            let chosenTile = rgbTiles.find(
              (tile) => `rgb(${tile.r}, ${tile.g}, ${tile.b})` === chosenTileRgb
            );

           

            // Draw the chosen tile on the canvas
            ctx.fillStyle = `rgb(${chosenTile.r}, ${chosenTile.g}, ${chosenTile.b}, ${chosenTile.a})`;
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
              theMap[y][x] = chosenTile;
           
          }
        }
      }
    }

    console.log("The Map", theMap);
  };
  useEffect(() => {
    processImage(); // Process the image every time it's updated
  }, [uploadedImage]);
  useEffect(() => {
    generateRandomCanvas(); // Generate random canvas when rgbTiles are updated
  }, [rgbTiles]);
  return (
    <>
      <input type="file" accept="image/png" onChange={handleFileChange} />
      {uploadedImage && (
        <div style={{maxHeight:"100px", overflow:"scroll", border:"1px solid black"}}>
          <h3>Recreated Image from Pixels:</h3>
          {/* Canvas to render the recreated image */}
          <canvas
            ref={canvasRef}
            width={12 * multiplier} // 12 pixels * 10 = 120px width
            height={12 * multiplier} // 12 pixels * 10 = 120px height
            style={{ border: "1px solid black" }}
          />
        </div>
      )}

      {/* Display the unique RGB tiles */}
      {rgbTiles.length > 0 && (
        <div style={{maxHeight:"100px", overflow:"scroll", border:"1px solid black"}}>
          <h3>Step 1: Find unique RGB Tiles:</h3>
          <ul  style={{display:"flex", gap:"10px", flexDirection:"column"}}>
            {rgbTiles.map((tile, index) => (
              <li style={{display:"flex", gap:"10px"}} key={index}>
                RGB: ({tile.r}, {tile.g}, {tile.b}), Alpha: {tile.a}
                <div style={{border:"2px solid black", width:"30px", height:"30px",backgroundColor:`rgb(${tile.r},${tile.g},${tile.b})`}}>

                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display how many times RGB tiles touch each other */}
      {Object.keys(rgbTouches).length > 0 && (
        <div style={{maxHeight:"100px", overflow:"scroll", border:"1px solid black"}}>
          <h3>Step 2: RGB Touches (Count of neighbors touching):</h3>
          <ul>
            {Object.entries(rgbTouches).map(([key, count], index) => {
              // Split the key into two RGB strings
              const [rgb1, rgb2] = key.split("-");
              return (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  {/* Display first color box */}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: rgb1,
                      marginRight: "10px",
                      border: "1px solid black",
                    }}
                  />
                  {/* Display second color box */}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: rgb2,
                      marginRight: "10px",
                      border: "1px solid black",
                    }}
                  />
                  {/* Display the count of touches */}
                  <span>{count} touches</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {rgbTiles.length > 0 && (
        <div>
          <button onClick={() => generateRandomCanvas()} >Regenerate</button>
          <h3>Random Generated Canvas from RGB Tiles :</h3>
          {/* Canvas to randomly generate colors based on rgbTiles */}
          <canvas
            ref={randomCanvasRef}
            width={mapSize * 10} // Set canvas size to 300x300
            height={mapSize * 10}
            style={{ border: "1px solid black" }}
          />
        </div>
      )}
    </>
  );
};
