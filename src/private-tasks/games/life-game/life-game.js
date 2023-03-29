// Constants
const ROWS = 50;
const COLS = 50;
const CELL_SIZE = 10;
const SPEED = 100;

// Create canvas
const canvas = document.getElementById('canvas');
canvas.width = COLS * CELL_SIZE;
canvas.height = ROWS * CELL_SIZE;
const ctx = canvas.getContext('2d');

// Initialize grid
let grid = [];
for (let row = 0; row < ROWS; row++) {
  grid[row] = [];
  for (let col = 0; col < COLS; col++) {
    grid[row][col] = Math.floor(Math.random() * 2);
  }
}

// Draw grid
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 1) {
        ctx.fillStyle = '#333';
        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
  }
}

// Update grid
function updateGrid() {
  let newGrid = [];
  for (let row = 0; row < ROWS; row++) {
    newGrid[row] = [];
    for (let col = 0; col < COLS; col++) {
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          let r = row + i;
          let c = col + j;
          if (r < 0) {
            r = ROWS - 1;
          } else if (r >= ROWS) {
            r = 0;
          }
          if (c < 0) {
            c = COLS - 1;
          } else if (c >= COLS) {
            c = 0;
          }
          neighbors += grid[r][c];
        }
      }
      if (grid[row][col] === 1 && (neighbors < 2 || neighbors > 3)) {
        newGrid[row][col] = 0;
      } else if (grid[row][col] === 0 && neighbors === 3) {
        newGrid[row][col] = 1;
      } else {
        newGrid[row][col] = grid[row][col];
      }
    }
  }
  grid = newGrid;
}

// Start animation loop
setInterval(() => {
  updateGrid();
  drawGrid();
}, SPEED);
