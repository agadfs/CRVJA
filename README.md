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
Prerequisites
Ensure you have the following installed:

Node.js (version 12 or later)
npm (comes with Node.js)
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/ecs-game-project.git
cd ecs-game-project
Install Dependencies

Run the following command to install all necessary dependencies:

bash
Copy code
```
npm install
```
Running the Game
To start the game in development mode, use the following command:

bash
Copy code
```
npm run dev
```
This command will start the development server, allowing you to see live updates as you modify the code.

# Project Structure
src/Components: Contains all ECS components such as PositionComponent, HealthComponent, IDComponent, etc.
src/Entities: Manages entity creation and component management.
src/Systems: Includes all game logic systems such as MovementSystem, CollisionSystem, AttackSystem, AIMovementSystem, and RespawnSystem.
src/GameTest: The main game logic and initialization.
public: Contains static assets and the HTML entry point.
package.json: Contains project metadata and scripts.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any bug fixes or enhancements.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details.

