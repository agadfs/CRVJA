import { GridMapComponent } from "./Components/gridMapComponent";
import { addComponent, createEntity } from "./Entities/entityManager";
import { assignIdToEntity } from "./Systems/entityAssingSystem";

/* This is only to set the Map Properties */

export const initializeMap = (seed) => {
  const mapEntities = [];
  const borderSizeX = 17;
  const borderSizeY = 16;
 
  function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
  // Initialize the map layout with walkable tiles (true = walkable)
  let mapLayout = Array.from({ length: borderSizeY }, () =>
    Array(borderSizeX).fill(true)
  );

  // Add walls to the borders (non-walkable = false)
  for (let y = 0; y < borderSizeY; y++) {
    for (let x = 0; x < borderSizeX; x++) {
      if (y === 0 || y === borderSizeY - 1 || x === 0 || x === borderSizeX - 1) {
        mapLayout[y][x] = false; // Walls on the borders
      }
    }
  }

  for (let y = 1; y < borderSizeY - 1; y++) {
    for (let x = 1; x < borderSizeX - 1; x++) {
      if (seededRandom(seed + y * borderSizeX + x) < 0.15) {
        mapLayout[y][x] = false; // Add random walls
      }
    }
  }
  // Create entities based on the map layout
  for (let y = 0; y < mapLayout.length; y++) {
    for (let x = 0; x < mapLayout[y].length; x++) {
      const walkable = mapLayout[y][x]; // Use the layout to determine if it's walkable
      const tile = createEntity(); // Create a generic entity
      assignIdToEntity(tile); // Assign a unique ID to the tile
      addComponent(tile, GridMapComponent(x, y, walkable)); // Add the grid map component
      mapEntities.push(tile);
    }
  }

  return mapEntities; // Return the fully initialized map entities
};
