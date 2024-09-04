// Systems/renderMapAndEntitiesSystem.js
import React from "react";

export const RenderMapAndEntitiesSystem = ({ mapEntities, entities }) => {
  return (
    <div style={{ position: "relative", width: "250px", height: "250px" }}>
      <div style={{ position: "fixed", top: 100, right: 100, display:"flex", flexDirection:"column", gap:"30px" }}>
        {entities?.filter((entity) => !entity.components.itemType).map((entity) => (
          <div key={entity.components.id}>
            <div>{entity.components.name}</div>
            
            <div>HP: {entity.components.hp}</div>
            <div>Level: {entity.components.level}</div>
            {entity.components.isPlayer && <div>Xp: {entity.components.xp}</div>}
            {entity.components.stopGame && entity.components.stopGame === true && 
            <div>
              <div> Game is Paused </div>
              <button onClick={() => {
                entity.components.stopGame = false;
              }} > Unpause </button>
            </div>
            }
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
      {entities?.filter((entity) => !entity.components.itemType).map((entity) => (
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
            {entity.components.name} 
          </p>
          <p
            style={{
              position: "absolute",
              display: "flex",
              textWrap: "nowrap",
              bottom: "120%",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
              overflow: "visible",
              backgroundColor: "rgb(0,0,0,0.3)",
              zIndex: 10,
            }}
          >
            Level: {entity.components.level} 
          </p>
        </div>
      ))}
      {entities?.filter((entity) => entity.components.itemType).map((entity) => (
        <div
          key={entity.components.id}
          style={{
            position: "absolute",
            left: `${entity.components.x * 50}px`,
            top: `${entity.components.y * 50}px`,
            width: "50px",
            height: "50px",
            backgroundColor: "green",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            border: "1px solid #000",
          }}
        >
          
        </div>
      ))}
    </div>
  );
};
