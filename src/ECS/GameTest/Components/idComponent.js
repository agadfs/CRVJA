// GameTest/Components/idComponent.js

let entityId = 0; // Keep track of unique IDs

// Function to create an ID component with a unique ID
export const IDComponent = () => {
  return { id: ++entityId };
};
