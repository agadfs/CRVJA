// Systems/renderMapAndEntitiesSystem.js
import React from "react";

export const RenderMapAndEntitiesSystem = ({ mapEntities, entities }) => {
  return (
    <div style={{ position: "relative", width: "250px", height: "250px" }}>
      <div style={{ position: "fixed", top: 0, right: 0 }}>
        {entities?.map((entity) => (
          <div key={entity.components.id}>
            <div>{entity.components.name}</div>
            <div>HP: {entity.components.hp}</div>
          </div>
        ))}
      </div>
      {mapEntities?.map((tile) => (
        <div
          key={tile.id}
          style={{
            position: "absolute",
            left: `${tile.components.x * 50}px`,
            top: `${tile.components.y * 50}px`,
            width: "50px",
            height: "50px",
            backgroundColor: tile.components.walkable ? "#ddd" : "#555",
            border: "1px solid #000",
          }}
        />
      ))}
      {entities?.map((entity) => (
        <div
          key={entity.components.id}
          style={{
            position: "absolute",
            left: `${entity.components.x * 50}px`,
            top: `${entity.components.y * 50}px`,
            width: "50px",
            height: "50px",
            backgroundColor: entity.components.isPlayer ? "blue" : "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            border: "1px solid #000",
          }}
        >
          <p
            style={{
              position: "absolute",
              display: "flex",
              textWrap: "nowrap",
              bottom: "70%",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
              overflow: "visible",
              backgroundColor: "rgb(0,0,0,0.3)",
              zIndex: 10,
            }}
          >
            {entity.components.name} {entity.components.id}
          </p>
        </div>
      ))}
    </div>
  );
};
