
export const PickupSystem = (entities) => {
    // Find the player entity
    const player = entities.find(e => e.components.isPlayer);
    const playerPosition = player.components;
  
    // Iterate over all entities to find pickable items
    entities.forEach((entity, index) => {
      if (entity.components.itemType) {
        const pickablePosition = entity.components;
  
        // Check if the player is on the same position as the pickable item
        if (playerPosition.x === pickablePosition.x && playerPosition.y === pickablePosition.y) {
          const pickable = entity.components;
  
          // Apply the effect of the pickable item
          applyEffect(player, pickable.effect);
  
          // Remove the pickable item from the game (or mark it as picked up)
          entities.splice(index, 1);
  
          console.log(`Player picked up a ${pickable.itemType}!`);
        }
      }
    });
  };
  
  // Function to apply the effect of a pickable item to the player
  function applyEffect(player, effect) {
    if (effect.type === 'heal') {
      player.components.hp += effect.amount;
      console.log(`Player healed by ${effect.amount} points!`);
    }
    // Future effects can be handled here (e.g., mana restore, power-up, etc.)
  }
  