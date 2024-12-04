class World {
    constructor(size) {
        this.size = size; // Size of the square grid
        this.grid = this.generateGrid(); // 2D array representing the world
        this.playerPosition = { x: 0, y: 0 }; // Player starts at top-left
    }

    // Generate the world with random biomes and structures
    generateGrid() {
        const grid = [];
        for (let y = 0; y < this.size; y++) {
            const row = [];
            for (let x = 0; x < this.size; x++) {
                if (x === 2 && y === 2) {
                    row.push("Abandoned House"); // Place a structure
                } else {
                    row.push("Forest"); // Default biome
                }
            }
            grid.push(row);
        }
        return grid;
    }

    // Get the description of the current tile
    getCurrentTile() {
        const { x, y } = this.playerPosition;
        return this.grid[y][x];
    }

    // Move the player if the action is valid
    move(action) {
        const { x, y } = this.playerPosition;
        if (action === "north" && y > 0) this.playerPosition.y--;
        else if (action === "south" && y < this.size - 1) this.playerPosition.y++;
        else if (action === "west" && x > 0) this.playerPosition.x--;
        else if (action === "east" && x < this.size - 1) this.playerPosition.x++;
        else return false; // Invalid move
        return true; // Successful move
    }
}
