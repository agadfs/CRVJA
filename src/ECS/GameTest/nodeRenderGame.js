// GameTest/Game.js

import { useEffect, useRef, useState } from "react";
import { PositionComponent } from "./Components/positionComponent";
import { HealthComponent } from "./Components/healthComponent";
import { MovementSystem } from "./Systems/movementSystem";
import { CollisionSystem } from "./Systems/collisionSystem";
import { PlayerInputSystem } from "./Systems/playerInputSystem";
import { AIMovementSystem } from "./Systems/aiMovementSystem";
import { RenderMapAndEntitiesSystem } from "./Systems/renderMapAndEntitiesSystem";
import { initializeMap } from "./initializeMap";
import { IDComponent } from "./Components/idComponent";
import { addComponent, createEntity } from "./Entities/entityManager";
import { AttackSystem } from "./Systems/attackSystem";
import { setPlayerComponent } from "./Components/setPlayerComponent";
import { setEntityNameComponent } from "./Components/setEnitityNameComponent";
import { addPlayerAttackComponent } from "./Components/addPlayerAttackComponent";
import { setNpcCanWalkComponent } from "./Components/setWalkableNpcComponent";
import { RespawnSystem } from "./Systems/respawnSystem";

const Game = () => {
  const [entities, setEntities] = useState([]);
  const entitiesRef = useRef(entities);
  const [mapEntities, setMapEntities] = useState(initializeMap); // Initialize map here

  useEffect(() => {
    let initialEntities = [];
    /* Create player */
    const player = createEntity();
    addComponent(player, IDComponent());
    addComponent(player, PositionComponent(11, 11)); // Starting position
    addComponent(player, HealthComponent(100)); // Starting health
    addComponent(player, setPlayerComponent());
    addComponent(player, setEntityNameComponent("Player"));
    addPlayerAttackComponent(player, {
      name: "Arrow",
      damage: 2,
      range: 4,
      aoe: false,
      aoeArea: 0,
      cooldown: 2000,
      currentCooldown: 0,
    });

    addPlayerAttackComponent(player, {
      name: "Punch",
      damage: 5,
      range: 2,
      aoe: false,
      aoeArea: 0,
      cooldown: 1000,
      currentCooldown: 0,
    });

    initialEntities.push(player);


    setEntities(initialEntities);
    entitiesRef.current = initialEntities;

    const cleanupPlayerInput = PlayerInputSystem(
      () => entitiesRef.current,
      mapEntities
    );

    const gameLoop = () => {
      const updatedEntities = [...entitiesRef.current];
      RespawnSystem(updatedEntities, mapEntities);
      MovementSystem(updatedEntities, mapEntities);
      CollisionSystem(updatedEntities);
      AIMovementSystem(updatedEntities, mapEntities);
      AttackSystem(updatedEntities, mapEntities);   

      entitiesRef.current = updatedEntities;
      setEntities(updatedEntities);

      requestAnimationFrame(gameLoop);
    };

    requestAnimationFrame(gameLoop);

    return () => {
      cleanupPlayerInput();
      cancelAnimationFrame(gameLoop);
    };
  }, [mapEntities]);

  return (
    <div>
      <RenderMapAndEntitiesSystem
        mapEntities={mapEntities}
        entities={entities}
      />
    </div>
  );
};

export default Game;
