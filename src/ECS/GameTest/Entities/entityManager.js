
let entityId = 0; // Start with 0 to ensure unique IDs

// Function to create a new entity with a unique ID
export const createEntity = () => {
  return { id: ++entityId, components: {} };
};

// Function to add components to an entity
export const addComponent = (entity, component) => {
  entity.components = { ...entity.components, ...component };
  return entity;
};

