// Systems/respawnSystem.js

import { createEntity, addComponent } from "../Entities/entityManager";
import { IDComponent } from "../Components/idComponent";
import { PositionComponent } from "../Components/positionComponent";
import { HealthComponent } from "../Components/healthComponent";
import { setEntityNameComponent } from "../Components/setEnitityNameComponent";
import { setNpcCanWalkComponent } from "../Components/setWalkableNpcComponent";
import { addPlayerAttackComponent } from "../Components/addPlayerAttackComponent";

export const RespawnSystem = (entities, mapEntities) => {
  // Check the number of entities
  if (entities.length < 4) {
    // Define a position to respawn the goblin (e.g., random position)
    // Make sure the position is walkable and not occupied
    const spawnPosition = findSpawnPosition(mapEntities, entities);

    if (spawnPosition) {
      // Create a new goblin entity
      const goblin = createEntity();
      addComponent(goblin, IDComponent());
      addComponent(goblin, PositionComponent(spawnPosition.x, spawnPosition.y)); // Set spawn position
      addComponent(goblin, HealthComponent(50)); // Starting health
      addComponent(goblin, setEntityNameComponent("Goblin Respawned"));
      addComponent(goblin, setNpcCanWalkComponent(true));
      addPlayerAttackComponent(goblin, {
        name: "Punch",
        damage: 5,
        range: 2,
        aoe: false,
        aoeArea: 0,
        cooldown: 1000,
        currentCooldown: 0,
      });

      // Add the new goblin to the entities list
      entities.push(goblin);
      console.log(`A new goblin has spawned at (${spawnPosition.x}, ${spawnPosition.y})`);
    }
  }
};

// Helper function to find a suitable spawn position
function findSpawnPosition(mapEntities, entities) {
  // Find all walkable tiles that are not occupied
  const walkableTiles = mapEntities.filter((tile) => tile.components.walkable);

  // Check each walkable tile to see if it's occupied
  for (const tile of walkableTiles) {
    const { x, y } = tile.components;
    const isOccupied = entities.some(
      (entity) => entity.components.x === x && entity.components.y === y
    );

    if (!isOccupied) {
      // Return the first available walkable and unoccupied tile
      return { x, y };
    }
  }

  return null; // No available position found
}
