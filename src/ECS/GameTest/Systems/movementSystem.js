/* CURRENTLY the game movement system doesnt have acceleration, 
so the AI and player have their separate movements systems for the same grid for now 
 
this global movement system will be used for both the player and the AI with acceleration
*/

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

/* This is a example how the collision would work for any kind of entity, for now the collision is handled on their
movement system, of the AI and the player */
export const CollisionSystem = (entities) => {
  const projectiles = entities.filter((e) => e.components.damage);
  const goblins = entities.filter((e) => e.components.health);

  projectiles.forEach((projectile) => {
    goblins.forEach((goblin) => {
      if (
        projectile.components.position.x === goblin.components.position.x &&
        projectile.components.position.y === goblin.components.position.y
      ) {
        goblin.components.health.hp -= projectile.components.damage.damage;
      }
    });
  });
};
