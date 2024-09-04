// Systems/healthOrbSpawnSystem.js
import { createEntity, addComponent } from "../Entities/entityManager";
import { PositionComponent } from "../Components/positionComponent";
import { PickableComponent } from "../Components/pickableComponent";
import { IDComponent } from "../Components/idComponent";

let orbSpawnTimer = 0; // Timer to track time passed

export const HealthOrbSpawnSystem = (
  entities,
  mapEntities,
  player,
  deltaTime
) => {
  orbSpawnTimer += deltaTime;
  const findStopGame = entities.filter((entity) => entity.components.isPlayer);
  if(findStopGame[0].components.stopGame && findStopGame[0].components.stopGame === true) {
    return;
  }
  if (
    orbSpawnTimer >= 20000 &&
    entities.filter((entity) => entity.components.itemType === "HealthOrb")
      .length <= 4
  ) {
    // 20 seconds and maximum of 5 orbs
    const spawnPosition = findRandomSpawnPosition(mapEntities, entities);

    if (spawnPosition) {
      const healthOrb = createEntity();
      const playerLevel = player.components.level;
      const healingAmount = 50 * playerLevel;
      addComponent(healthOrb, IDComponent());
      addComponent(
        healthOrb,
        PositionComponent(spawnPosition.x, spawnPosition.y)
      );
      addComponent(
        healthOrb,
        PickableComponent("HealthOrb", { type: "heal", amount: healingAmount })
      );

      entities.push(healthOrb);
      console.log(
        `A health orb has spawned at (${spawnPosition.x}, ${spawnPosition.y}) healing ${healingAmount} health.`
      );
      console.log(healthOrb);
    }

    orbSpawnTimer = 0; // Reset the timer
  }
};

// Helper function to find a random spawn position
function findRandomSpawnPosition(mapEntities, entities) {
  const walkableTiles = mapEntities.filter((tile) => tile.components.walkable);
  const availableTiles = walkableTiles.filter((tile) => {
    const { x, y } = tile.components;
    return !entities.some(
      (entity) => entity.components.x === x && entity.components.y === y
    );
  });

  if (availableTiles.length > 0) {
    const randomTile =
      availableTiles[Math.floor(Math.random() * availableTiles.length)];
    return { x: randomTile.components.x, y: randomTile.components.y };
  }

  return null;
}
