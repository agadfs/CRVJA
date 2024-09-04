# ECS Game Project
Welcome to the ECS Game Project! This project implements a simple grid-based game using the Entity-Component-System (ECS) architecture. Players can control a character, interact with non-playable characters (NPCs), and engage in combat. The game features dynamic entity management, including respawning mechanics and AI-driven NPC behavior.

# Features
Entity-Component-System (ECS) Architecture: The game utilizes a modular ECS design for managing game objects and behaviors.
Player and NPC Interactions: Control a player character to explore the game world, encounter NPCs, and engage in combat.
Combat System: Both players and NPCs can perform attacks based on their defined abilities and cooldowns.
AI Movement: NPCs navigate the game world using simple AI behaviors.
Respawn System: Automatically respawn NPCs to maintain a minimum number of entities in the game.
Grid-based Movement: Entities move within a grid-based map, interacting with the environment and each other.

# Getting Started

Ensure you have the following installed:<br />

Node.js (version 12 or later)<br />
npm (comes with Node.js)<br />

# Installation

Clone the Repository

```
git clone https://github.com/yourusername/ecs-game-project.git
```

Go to the project folder

```
cd ecs-game-project
```


Run the following command to install all necessary dependencies:

```
npm install
```

To start the game in development mode, use the following command:

```
npm run dev
```

This command will start the development server, allowing you to see live updates as you modify the code.
To Move the player, use WASD keys on the keyboard.
# Project Structure
src/ECS/GameTest/Components: Contains all ECS components such as PositionComponent, HealthComponent, IDComponent, etc.<br />
src/ECS/GameTest/Entities: Manages entity creation and component management.<br />
src/ECS/GameTest/Systems: Includes all game logic systems such as MovementSystem, CollisionSystem, AttackSystem, AIMovementSystem, and RespawnSystem.<br />
src/ECS/GameTest/GameTest/initializeMap.js: The main game logic and initialization.<br />
src/ECS/GameTest/GameTest/nodeRenderGame.js: The integration with Next.js to render the game<br />
public: Contains static assets and the HTML entry point.<br />
package.json: Contains project metadata and scripts.<br />

# Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any bug fixes or enhancements.<br />

# License
This project is licensed under the MIT License - see the LICENSE.md file for details.

