// Systems/attackSystem.js

export const AttackSystem = (entities, mapEntities) => {
  const player = entities.find((e) => e.components.isPlayer);

  if (!player) {
    console.error("Player entity not found");
    return;
  }


  const playerPosition = { x: player.components.x, y: player.components.y };

  // Function to calculate the distance between two positions
  const calculateDistance = (pos1, pos2) => {
    return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y);
  };

  // Iterate over each entity to handle attacks
  entities.forEach((attacker) => {
    if (
      !attacker.components.attacks ||
      attacker.components.attacks.length === 0
    ) {
      return; // Skip if the entity has no attacks
    }

    const attackerPosition = {
      x: attacker.components.x,
      y: attacker.components.y,
    };
    const attackerAttacks = attacker.components.attacks;

    let target = null;
    let targetPosition = null;

    // Determine the target based on whether the attacker is the player or an NPC
    if (attacker.components.isPlayer) {
      // If the attacker is the player, target NPCs
      const potentialTargets = entities.filter(
        (entity) => entity !== player && entity.components.hp > 0
      );

      target = potentialTargets.reduce((closest, current) => {
        const currentDistance = calculateDistance(attackerPosition, {
          x: current.components.x,
          y: current.components.y,
        });
        const closestDistance = closest
          ? calculateDistance(attackerPosition, {
              x: closest.components.x,
              y: closest.components.y,
            })
          : Infinity;

        return currentDistance < closestDistance ? current : closest;
      }, null);
    } else {
      // If the attacker is an NPC, target the player
      target = player;
      targetPosition = playerPosition;
    }

    // If there's no valid target, skip this attacker
    if (!target || target.components.hp <= 0) {
      return;
    }

    // Iterate over each attack of the attacker
    attackerAttacks.forEach((attack) => {
      if (attack.currentCooldown > 0) {
        return; // Skip this attack if it's on cooldown
      }

      targetPosition = targetPosition || {
        x: target.components.x,
        y: target.components.y,
      };
      const distance = calculateDistance(attackerPosition, targetPosition);

      // Check if the target is within range of the attack
      if (attack.range >= distance) {
        // Apply the damage to the target
        target.components.hp -= attack.damage;
        console.log(
          `${attacker.components.name} attacks ${target.components.name} with ${attack.name}, dealing ${attack.damage} damage!`
        );
        if (target.components.isPlayer && target.components.hp <= 0) {
          window.location.reload();
          alert("Player is defeated. Game Over!");
        
        }

        // Check if the target's HP is zero or less
        if (target.components.hp <= 0) {
          // Find the index of the entity to remove
          const indexToRemove = entities.indexOf(target);
          if (indexToRemove > -1) {
            // Update the map to mark the tile as walkable
            const targetTile = mapEntities.find(
              (tile) =>
                tile.components.x === target.components.x &&
                tile.components.y === target.components.y
            );
            if (targetTile) {
              targetTile.components.walkable = true;
              console.log(
                `Tile at (${target.components.x}, ${target.components.y}) is now walkable.`
              );
            }

            // Remove the entity from the entities array
            if (target.components.isPlayer) {
              console.log("Player is defeated. Game Over!");
            } else {
              entities.splice(indexToRemove, 1);
              console.log(
                `Entity ${target.components.name} has been defeated and removed from the game.`
              );
            }
          }
        }

        // Set the attack to its cooldown
        attack.currentCooldown = attack.cooldown;
      }
    });
  });

  // Update cooldowns for all attacks
  entities.forEach((entity) => {
    if (entity.components.attacks) {
      entity.components.attacks.forEach((attack) => {
        if (attack.currentCooldown > 0) {
          attack.currentCooldown -= 1; // Decrement the cooldown
        }
      });
    }
  });
};
