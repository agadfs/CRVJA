// Components/playerAttackComponent.js

export const addPlayerAttackComponent = (entity, newAttack) => {
  if (!entity.components.attacks) {
    // Initialize the attacks component if it doesn't exist
    entity.components.attacks = [];
  }

  // Find the attack by name
  const existingAttackIndex = entity.components.attacks.findIndex(
    (attack) => attack.name === newAttack.name
  );

  if (existingAttackIndex > -1) {
    // If an attack with the same name exists, update it
    entity.components.attacks[existingAttackIndex] = {
      ...entity.components.attacks[existingAttackIndex],
      ...newAttack,
    };
  } else {
    // If no attack with the same name exists, add the new attack
    entity.components.attacks.push(newAttack);
  }
};
