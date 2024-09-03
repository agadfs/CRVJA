// GameTest/Systems/idAssignmentSystem.js

let entityId = 0; // Keep track of unique IDs

// Function to assign a unique ID to an entity
export const assignIdToEntity = (entity) => {
  entity.id = ++entityId;
  return entity;
};
