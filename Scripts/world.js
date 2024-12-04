class World {
    constructor(size) {
        this.size = size;
        this.grid = this.createWorld(size);
        this.playerPosition = { x: 0, y: 0 }; // Starting position
    }

    // Create a world with biomes and structures
    createWorld(size) {
        let world = [];
        const biomes = ["Forest", "Mountain", "Cave", "Village", "Swamp", "Desert"];
        const structures = ["Abandoned House", "Castle", "Farm", "Tower", "None"];

        for (let x = 0; x < size; x++) {
            world[x] = [];
            for (let y = 0; y < size; y++) {
                const biome = biomes[Math.floor(Math.random() * biomes.length)];
                const structure = structures[Math.floor(Math.random() * structures.length)];
                world[x][y] = { biome, structure };
            }
        }
        return world;
    }

    // Get the description of the current tile (biome + structure)
    getCurrentTile() {
        const { x, y } = this.playerPosition;
        const tile = this.grid[x][y];
        let description = `${tile.biome}`;

        if (tile.structure !== "None") {
            description += ` with a ${tile.structure}`;
        }

        return description;
    }

    // Move the player (if possible)
    move(direction) {
        const { x, y } = this.playerPosition;

        if (direction === "north" && y > 0) {
            this.playerPosition.y -= 1;
            return true;
        } else if (direction === "south" && y < this.size - 1) {
            this.playerPosition.y += 1;
            return true;
        } else if (direction === "east" && x < this.size - 1) {
            this.playerPosition.x += 1;
            return true;
        } else if (direction === "west" && x > 0) {
            this.playerPosition.x -= 1;
            return true;
        }

        return false; // Cannot move in that direction
    }
}
