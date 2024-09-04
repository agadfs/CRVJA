export const getAvailableAttacks = (entities) => {
    const player = entities.find((entity) => entity.components.isPlayer);
    let attacks = player.components.attacks;
  
    let availableAttacks = [];
  
    // Check if the player has 4 selected attacks
    if (attacks.filter((attack) => attack.selected === true).length === 4) {
      // Only return upgradeable attacks if 4 attacks are already selected
      availableAttacks = attacks.filter(
        (attack) => attack.selected === true && attack.tier < 6
      );
    } else {
      // Return all upgradeable attacks
      availableAttacks = attacks.filter((attack) => attack.tier < 6);
    }
  
    // Shuffle the available attacks
    const shuffledAttacks = availableAttacks.sort(() => 0.5 - Math.random());
  
    // Return 3 random attacks (or fewer if there aren't enough)
    return shuffledAttacks.slice(0, 3);
  };
  