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