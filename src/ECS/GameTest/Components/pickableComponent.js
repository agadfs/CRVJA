
export const PickableComponent = (type, effect) => ({
    type: "PickableComponent",
    itemType: type,    // e.g., 'HealthOrb', 'ManaOrb', etc.
    effect,            // Function or object defining the effect of picking up the item
  });
  