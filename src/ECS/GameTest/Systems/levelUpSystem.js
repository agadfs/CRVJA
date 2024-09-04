
export const LevelUpSystem = (entities, setStopGame) => {
  entities.forEach((entity) => {
    // Check if the entity is a player
    if (entity.components.isPlayer) {
      const xpComponent = entity.components;
      const levelComponent = entity.components;

      // Define the XP threshold to level up
      const xpThreshold = levelComponent.level * 100; // Example: 100 XP per level

      if (xpComponent.xp >= xpThreshold) {
        // Level up the player
        levelComponent.level += 1;
        xpComponent.xp -= xpThreshold; // Reset XP by subtracting the threshold
        xpComponent.stopGame = true; // Stop the game when the player levels up
        // Log the level-up event
        console.log(`Player has leveled up to level ${levelComponent.level}!`);
        
      }
    }
  });
};
