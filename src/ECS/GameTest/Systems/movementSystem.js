// systems/MovementSystem.js
export const MovementSystem = (entities, grid) => {
    entities.forEach((entity) => {
      const position = entity.components.position;
      const velocity = entity.components.velocity;
  
      if (position && velocity) {
        // Calculate new position
        const newX = position.x + velocity.vx;
        const newY = position.y + velocity.vy;
  
        // Check grid bounds and tile walkability
        if (grid[newY] && grid[newY][newX] && grid[newY][newX].walkable) {
          position.x = newX;
          position.y = newY;
        }
      }
    });
  };
  
  // systems/CollisionSystem.js
  export const CollisionSystem = (entities) => {
    // Example collision logic
    const projectiles = entities.filter((e) => e.components.damage);
    const goblins = entities.filter((e) => e.components.health);
  
    projectiles.forEach((projectile) => {
      goblins.forEach((goblin) => {
        if (projectile.components.position.x === goblin.components.position.x &&
            projectile.components.position.y === goblin.components.position.y) {
          goblin.components.health.hp -= projectile.components.damage.damage;
          // Remove projectile or handle it
        }
      });
    });
  };
  