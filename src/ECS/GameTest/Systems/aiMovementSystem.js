// Systems/aiMovementSystem.js
export const AIMovementSystem = (entities, map) => {
  const currentTime = Date.now();
  const moveInterval = 1000; // Move every second

  // Find all entities that have AI behavior
  const aiEntities = entities.filter((entity) => entity.components.canWalk); // or any other flag you use for NPCs

  aiEntities.forEach((entity) => {
    const position = entity.components;
    if(entity.lastMoveTime === undefined) {
      entity.lastMoveTime = currentTime;
    }
    // Check if enough time has passed since the last move
    if (currentTime - entity.lastMoveTime >= moveInterval) {
      const directions = [
        { x: 0, y: -1 }, // up
        { x: 0, y: 1 },  // down
        { x: -1, y: 0 }, // left
        { x: 1, y: 0 },  // right
      ];

      const randomDirection = directions[Math.floor(Math.random() * directions.length)];

      const newX = position.x + randomDirection.x;
      const newY = position.y + randomDirection.y;

      // Use same logic as player to find target tile
      const targetTile = map.find(
        (tile) => tile.components.x === newX && tile.components.y === newY
      );

      if (targetTile) {
        if (targetTile.components.walkable) {
          const entityOnTargetTile = entities.find(
            (entity) => entity.components.x === newX && entity.components.y === newY
          );

          if (!entityOnTargetTile) {
            // No other entity is on the target tile, proceed to move
            position.x = newX;
            position.y = newY;
           
          } else {
            console.log("Another entity is already on the target tile");
          }
         
        } else {
          console.log(`Entity ${entity.id} cannot move to non-walkable tile (${newX}, ${newY})`);
        }
      } else {
        console.log(`Entity ${entity.id} cannot move to out of bounds (${newX}, ${newY})`);
      }

      entity.lastMoveTime = currentTime; // Update last move time
    }
  });
};
