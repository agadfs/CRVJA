// Systems/playerInputSystem.js

export const PlayerInputSystem = (getEntities, mapEntities) => {
  const handleKeyDown = (event) => {
    

    const entities = getEntities(); // Always fetch the latest entities
    const player = entities.find((e) => e.components.isPlayer);

    if (!player) {
      console.error("Player entity not found");
      return;
    }
    if(player.components.stopGame && player.components.stopGame === true) {
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
