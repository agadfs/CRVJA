export const PlayerInputSystem = (getEntities, mapEntities) => {
  /* This defines the player speed for now */
  let lastMoveTime = 0; // Timestamp for the last move
  const moveCooldown = 100; // the higher the number, slower the player moves
  /*  */

  const handleKeyDown = (event) => {
    const currentTime = performance.now(); // Current timestamp

    // Check if enough time has passed since the last move
    if (currentTime - lastMoveTime < moveCooldown) {
      return; // Not enough time has passed, ignore the input
    }

    const entities = getEntities(); // Always fetch the latest entities
    const player = entities.find((e) => e.components.isPlayer);

    if (!player) {
      console.error("Player entity not found");
      return;
    }

    // Check if the game is stopped
    if (player.components.stopGame && player.components.stopGame === true) {
      console.log("Game stopped");
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

    if (key === "w") newY -= 1;
    if (key === "s") newY += 1;
    if (key === "a") newX -= 1;
    if (key === "d") newX += 1;

    // Bounds check
    if (newX >= 0 && newY >= 0) {
      const targetTile = mapEntities.find(
        (tile) => tile.components.x === newX && tile.components.y === newY
      );

      if (targetTile && targetTile.components.walkable) {
        const entityOnTargetTile = entities.find(
          (entity) =>
            entity.components.x === newX &&
            entity.components.y === newY &&
            !entity.components.itemType
        );

        if (!entityOnTargetTile) {
          position.x = newX;
          position.y = newY;
          lastMoveTime = currentTime; // Update last move time
        } else {
          console.log("Another entity is already on the target tile");
        }
      } else {
        console.log("New position is not walkable");
      }
    } else {
      console.log("New position is out of bounds");
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
};
