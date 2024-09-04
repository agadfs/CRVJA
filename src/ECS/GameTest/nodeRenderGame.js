"use client";
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
import { RespawnSystem } from "./Systems/respawnSystem";
import { LevelComponent, XpComponent } from "./Components/LevelComponent";
import { HealthOrbSpawnSystem } from "./Systems/healthOrbSystem";
import { PickupSystem } from "./Systems/pickUpSystem";
import { LevelUpSystem } from "./Systems/levelUpSystem";

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
    addComponent(player, LevelComponent(1));
    addComponent(player, XpComponent(0));

    addPlayerAttackComponent(player, {
      name: "Punch",
      damage: 50,
      range: 2,
      tier: 1,
      aoe: false,
      aoeArea: 0,
      cooldown: 1000,
      currentCooldown: 0,
      selected: true,
      selectedPosition: 0,
    });
    addPlayerAttackComponent(player, {
      name: "Kick",
      damage: 2,
      range: 4,
      tier: 1,
      aoe: false,
      aoeArea: 0,
      cooldown: 2000,
      currentCooldown: 0,
      selected: false,
      selectedPosition: 0,
    });
    addPlayerAttackComponent(player, {
      name: "FireBall",
      damage: 2,
      range: 4,
      tier: 1,
      aoe: false,
      aoeArea: 0,
      cooldown: 2000,
      currentCooldown: 0,
      selected: false,
      selectedPosition: 0,
    });

    addPlayerAttackComponent(player, {
      name: "Fire Aura",
      damage: 3,
      range: 2,
      tier: 1,
      aoe: true,
      aoeArea: 2,
      cooldown: 200,
      currentCooldown: 0,
      selected: false,
      selectedPosition: 0,
    });

    addPlayerAttackComponent(player, {
      name: "Lightining Aura",
      damage: 2,
      range: 3,
      tier: 1,
      aoe: true,
      aoeArea: 2,
      cooldown: 200,
      selected: false,
      selectedPosition: 0,
    });

    addPlayerAttackComponent(player, {
      name: "Ice Aura",
      damage: 1,
      range: 4,
      tier: 1,
      aoe: true,
      aoeArea: 2,
      cooldown: 200,
      currentCooldown: 0,
      selected: false,
      selectedPosition: 0,
    });

    addPlayerAttackComponent(player, {
      name: "Axe Throw",
      damage: 2,
      range: 4,
      tier: 1,
      aoe: false,
      aoeArea: 0,
      cooldown: 1000,
      currentCooldown: 0,
      selected: false,
      selectedPosition: 0,
    });

    initialEntities.push(player);

    setEntities(initialEntities);
    entitiesRef.current = initialEntities;

    const cleanupPlayerInput = PlayerInputSystem(
      () => entitiesRef.current,
      mapEntities
    );

    let lastTime = performance.now(); // Initial time for the game loop

    const gameLoop = (currentTime) => {
      const deltaTime = currentTime - lastTime; // Time difference between frames
      lastTime = currentTime;
      const updatedEntities = [...entitiesRef.current];
      RespawnSystem(updatedEntities, mapEntities);
      MovementSystem(updatedEntities, mapEntities);
      CollisionSystem(updatedEntities);
      AIMovementSystem(updatedEntities, mapEntities);
      AttackSystem(updatedEntities, mapEntities);
      HealthOrbSpawnSystem(updatedEntities, mapEntities, player, deltaTime); // Pass deltaTime
      PickupSystem(updatedEntities); // Handle pickups for any pickable entity
      LevelUpSystem(updatedEntities);
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
