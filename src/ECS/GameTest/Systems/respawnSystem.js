// Systems/respawnSystem.js

import { createEntity, addComponent } from "../Entities/entityManager";
import { IDComponent } from "../Components/idComponent";
import { PositionComponent } from "../Components/positionComponent";
import { HealthComponent } from "../Components/healthComponent";
import { setEntityNameComponent } from "../Components/setEnitityNameComponent";
import { setNpcCanWalkComponent } from "../Components/setWalkableNpcComponent";
import { addPlayerAttackComponent } from "../Components/addPlayerAttackComponent";
import { LevelComponent } from "../Components/LevelComponent";

let currentNpcLevel = 1;

export const RespawnSystem = (entities, mapEntities) => {
  // Check the number of entities
  if (entities.filter((entity) => !entity.components.itemType).length < 4) {
    // Define a position to respawn the goblin (e.g., random position)
    // Make sure the position is walkable and not occupied
    const spawnPosition = findSpawnPosition(mapEntities, entities);

    if (spawnPosition) {
      // Create a new goblin entity
      const goblin = createEntity();
      addComponent(goblin, IDComponent());
      addComponent(goblin, PositionComponent(spawnPosition.x, spawnPosition.y)); // Set spawn position
      addComponent(goblin, HealthComponent(10 * currentNpcLevel)); // Starting health
      if (currentNpcLevel <= 5) {
        addComponent(goblin, setEntityNameComponent(`Goblin`));
      } else if (currentNpcLevel > 5 && currentNpcLevel <= 10) {
        addComponent(goblin, setEntityNameComponent(`Goblin Warrior`));
      } else if (currentNpcLevel > 10 && currentNpcLevel <= 20) {
        addComponent(goblin, setEntityNameComponent(`Goblin Elite`));
      } else {
        addComponent(goblin, setEntityNameComponent(`Goblin King`));
      }
      addComponent(goblin, setNpcCanWalkComponent(true));
      addComponent(goblin, LevelComponent(currentNpcLevel));
      addPlayerAttackComponent(goblin, {
        name: "Punch",
        damage: 2 * currentNpcLevel,
        range: 2,
        aoe: false,
        aoeArea: 0,
        cooldown: 1000,
        currentCooldown: 0,
        selected: true,
        selectedPosition: 0,
        tier:1
      });

      // Add the new goblin to the entities list
      entities.push(goblin);
      console.log(
        `A new goblin has spawned at (${spawnPosition.x}, ${spawnPosition.y})`
      );
      currentNpcLevel++;
    }
  }
};

// Helper function to find a suitable spawn position
function findSpawnPosition(mapEntities, entities) {
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
