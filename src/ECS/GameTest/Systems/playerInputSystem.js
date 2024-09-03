// Systems/playerInputSystem.js

export const PlayerInputSystem = (getEntities, map) => {
  const handleKeyDown = (event) => {
    const entities = getEntities(); // Always fetch the latest entities
    const player = entities.find((e) => e.components.isPlayer);

    if (!player) {
      console.error("Player entity not found");
      return;
    }
    if (player.components.hp <= 0) {
      console.error("Player is dead!");
      return;
    }

    const position = player.components;

    const key = event.key;

    let newX = position.x;
    let newY = position.y;

    if (key === "ArrowUp") newY -= 1;
    if (key === "ArrowDown") newY += 1;
    if (key === "ArrowLeft") newX -= 1;
    if (key === "ArrowRight") newX += 1;

    // Bounds check
    if (newX >= 0 && newY >= 0) {
      // Find the corresponding map tile
      const targetTile = map.find(
        (tile) => tile.components.x === newX && tile.components.y === newY
      );

      if (targetTile) {
        if (targetTile.components.walkable) {
          // Check if another entity is already on the target tile
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
          console.log("New position is not walkable");
        }
      } else {
        console.log("Target tile not found");
      }
    } else {
      console.log("New position is out of bounds");
    }
  };

  // Add event listener
  window.addEventListener("keydown", handleKeyDown);

  // Return cleanup function to remove event listener
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
};
