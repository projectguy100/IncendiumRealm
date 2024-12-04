const gameContainer = document.getElementById("game-container");
const playerInput = document.getElementById("player-input");
const submitBtn = document.getElementById("submit-btn");
const coordinatesDisplay = document.getElementById("coordinates");

// Add the system prefix for system messages
const systemPrefix = "[System] "; // This is the variable to use for system messages

const world = new World(5); // Create a 5x5 world

// Function to update the coordinates display at the top
function updateCoordinates() {
    const { x, y } = world.playerPosition; // Get current player position
    coordinatesDisplay.textContent = `Coordinates: (${x}, ${y})`; // Update display
}

function addMessage(text, className = "") {
    // If the message is a system message, prepend the [System] label
    if (className === "system-message") {
        text = systemPrefix + text;
    }

    // Append the message to the console
    gameContainer.textContent += text + "\n"; // Adding newline for readability
    gameContainer.scrollTop = gameContainer.scrollHeight; // Auto-scroll to the bottom
}

// Initialize the game
function startGame() {
    addMessage("Welcome to the Incendium Realm!", "system-message");
    addMessage("You are in a vast world. Explore by typing 'north', 'south', 'east', or 'west'.", "system-message");
    displayCurrentTile();
    updateCoordinates(); // Display the starting coordinates
}

// Show the current tile's description
function displayCurrentTile() {
    const tileDescription = world.getCurrentTile();
    addMessage(`You are in a ${tileDescription}.`, "system-message");
}

// Handle player input
submitBtn.addEventListener("click", () => {
    const action = playerInput.value.trim().toLowerCase();
    playerInput.value = "";

    const validActions = ["north", "south", "east", "west"];
    if (!validActions.includes(action)) {
        addMessage("Invalid action! Try 'north', 'south', 'east', or 'west'.", "system-message");
        return;
    }

    if (world.move(action)) {
        displayCurrentTile();
        updateCoordinates(); // Update coordinates after the move
    } else {
        addMessage("You cannot move in that direction.", "system-message");
    }
});

// Start the game
startGame();
