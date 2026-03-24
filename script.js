const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');
const nextCanvas = document.getElementById('next-piece');
const nextCtx = nextCanvas.getContext('2d');

// Sizes configuration
const blockSize = 30; // 30px per block on main board (300/10)
const rows = 20;
const cols = 10;
const nextBlockSize = 24; // smaller blocks for next piece box

// Tetromino colors (Neon style)
const COLORS = [
    null,
    '#00ffff', // I - Cyan
    '#0000ff', // J - Blue
    '#ff7f00', // L - Orange
    '#ffff00', // O - Yellow
    '#00ff00', // S - Green
    '#800080', // T - Purple
    '#ff0000'  // Z - Red
];

// Glow colors for neon effect
const GLOW_COLORS = [
    null,
    'rgba(0, 255, 255, 0.8)',
    'rgba(0, 0, 255, 0.8)',
    'rgba(255, 127, 0, 0.8)',
    'rgba(255, 255, 0, 0.8)',
    'rgba(0, 255, 0, 0.8)',
    'rgba(128, 0, 128, 0.8)',
    'rgba(255, 0, 0, 0.8)'
];

// Tetromino Matrices
const SHAPES = [
    [],
    [ // I
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [ // J
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0],
    ],
    [ // L
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0],
    ],
    [ // O
        [4, 4],
        [4, 4],
    ],
    [ // S
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0],
    ],
    [ // T
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0],
    ],
    [ // Z
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
    ]
];

// Game State variables
let board = createBoard();
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
let rAF = null;
let isPaused = false;
let isGameOver = false;
let score = 0;
let level = 1;
let linesAmt = 0;

const player = {
    pos: {x: 0, y: 0},
    matrix: null,
};

let nextMatrix = null;

// DOM Elements References
const scoreEl = document.getElementById('score');
const levelEl = document.getElementById('level');
const linesEl = document.getElementById('lines');
const overlay = document.getElementById('game-overlay');
const startBtn = document.getElementById('start-btn');
const overlayTitle = document.getElementById('overlay-title');
const overlayMsg = document.getElementById('overlay-msg');

function createBoard() {
    return Array.from({length: rows}, () => new Array(cols).fill(0));
}

function createPiece() {
    const min = 1;
    const max = SHAPES.length - 1;
    const typeId = Math.floor(Math.random() * (max - min + 1)) + min;
    // Deep copy matrix to avoid mutating the original constants
    return SHAPES[typeId].map(row => [...row]);
}

/**
 * Draws a single block with neon glow
 */
function drawBlock(context, x, y, typeId, size) {
    // Optimization: Save and restore context state
    context.save();
    
    // Outer glow settings
    context.fillStyle = COLORS[typeId];
    context.shadowBlur = 15;
    context.shadowColor = GLOW_COLORS[typeId];
    
    // Draw outer block
    context.fillRect(x, y, size, size);
    
    // Draw inner brighter core
    context.fillStyle = '#ffffff';
    context.shadowBlur = 0;
    context.fillRect(x + size * 0.25, y + size * 0.25, size * 0.5, size * 0.5);
    
    context.restore();
}

/**
 * Draws an entire matrix (player piece or board)
 */
function drawMatrix(matrix, offset, context, size) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                // Ensure 1px gap between blocks for grid look
                drawBlock(context, (offset.x + x) * size + 1, (offset.y + y) * size + 1, value, size - 2);
            }
        });
    });
}

function drawNextPiece() {
    nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
    if (!nextMatrix) return;
    
    const c = nextMatrix[0].length;
    const r = nextMatrix.length;
    
    const offsetX = (nextCanvas.width - c * nextBlockSize) / 2;
    const offsetY = (nextCanvas.height - r * nextBlockSize) / 2;
    
    nextMatrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                drawBlock(nextCtx, offsetX + x * nextBlockSize + 1, offsetY + y * nextBlockSize + 1, value, nextBlockSize - 2);
            }
        });
    });
}

function drawGhost() {
    let ghostPos = {x: player.pos.x, y: player.pos.y};
    
    // Find bottom position
    while(!collide(board, {matrix: player.matrix, pos: ghostPos})) {
        ghostPos.y++;
    }
    ghostPos.y--; // go up 1 step up before collision
    
    ctx.globalAlpha = 0.2;
    // Draw transparent ghost piece
    drawMatrix(player.matrix, ghostPos, ctx, blockSize);
    ctx.globalAlpha = 1.0;
}

// Check collisions
function collide(board, playerObj) {
    const m = playerObj.matrix;
    const o = playerObj.pos;
    
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
               (board[y + o.y] && board[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

// Lock piece into board
function merge(board, playerObj) {
    playerObj.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                board[y + playerObj.pos.y][x + playerObj.pos.x] = value;
            }
        });
    });
}

function playerDrop() {
    player.pos.y++;
    if (collide(board, player)) {
        player.pos.y--; // Move back
        merge(board, player); // Lock
        playerReset(); // New piece
        arenaSweep(); // Clear lines
        updateScore();
    }
    dropCounter = 0;
}

function playerHardDrop() {
    while(!collide(board, player)) {
        player.pos.y++;
    }
    player.pos.y--;
    merge(board, player);
    playerReset();
    arenaSweep();
    updateScore();
    dropCounter = 0;
}

function playerMove(dir) {
    player.pos.x += dir;
    if (collide(board, player)) {
        player.pos.x -= dir;
    }
}

function playerReset() {
    if (nextMatrix === null) {
        nextMatrix = createPiece();
    }
    player.matrix = nextMatrix;
    nextMatrix = createPiece();
    
    player.pos.y = 0;
    // Center it
    player.pos.x = Math.floor(cols / 2) - Math.floor(player.matrix[0].length / 2);

    // If immediate collision upon creation -> Game Over
    if (collide(board, player)) {
        gameOver();
    }
    
    drawNextPiece();
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    
    // Wall kick
    while (collide(board, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir); // Revert
            player.pos.x = pos;
            return;
        }
    }
}

function rotate(matrix, dir) {
    // Transpose
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }

    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}

function arenaSweep() {
    let rowCount = 1; // combo multiplier logic
    
    outer: for (let y = board.length - 1; y >= 0; --y) {
        for (let x = 0; x < board[y].length; ++x) {
            if (board[y][x] === 0) {
                continue outer; // Contains empty spot, skip
            }
        }

        // Row is full, remove it
        const row = board.splice(y, 1)[0].fill(0);
        board.unshift(row); // Put empty row on top
        ++y; // Re-check line (since we shifted down)

        score += rowCount * 100 * level;
        linesAmt++;
        rowCount *= 2; 
    }
    
    level = Math.floor(linesAmt / 10) + 1;
    if (level > 15) level = 15;
    // Increase speed as level goes up, base 1000ms
    dropInterval = 1000 - (level - 1) * 60;
}

function updateScore() {
    scoreEl.innerText = score;
    levelEl.innerText = level;
    linesEl.innerText = linesAmt;
}

function update(time = 0) {
    if (isPaused || isGameOver) return;
    
    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }

    draw();
    rAF = requestAnimationFrame(update);
}

function draw() {
    // Background clear
    ctx.fillStyle = '#0d0d14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw faint grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for(let r=0; r<=rows; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * blockSize);
        ctx.lineTo(cols * blockSize, r * blockSize);
        ctx.stroke();
    }
    for(let c=0; c<=cols; c++) {
        ctx.beginPath();
        ctx.moveTo(c * blockSize, 0);
        ctx.lineTo(c * blockSize, rows * blockSize);
        ctx.stroke();
    }

    // Draw settled board blocks
    drawMatrix(board, {x: 0, y: 0}, ctx, blockSize);
    
    // Draw current active piece and ghost
    if (player.matrix) {
        drawGhost();
        drawMatrix(player.matrix, player.pos, ctx, blockSize);
    }
}

function resetGame() {
    board = createBoard();
    score = 0;
    level = 1;
    linesAmt = 0;
    dropInterval = 1000;
    isGameOver = false;
    isPaused = false;
    
    updateScore();
    nextMatrix = null;
    playerReset();
    
    overlay.classList.add('hidden');
}

function startGame() {
    resetGame();
    lastTime = performance.now();
    update();
}

function pauseGame() {
    if (isGameOver || !player.matrix) return;
    isPaused = !isPaused;
    
    if (isPaused) {
        cancelAnimationFrame(rAF);
        overlay.classList.remove('hidden');
        overlayTitle.innerText = 'PAUSED';
        overlayMsg.innerText = 'Press P or Start to Resume';
        startBtn.innerText = 'RESUME';
    } else {
        overlay.classList.add('hidden');
        lastTime = performance.now();
        update(); // Resume Game Loop
    }
}

function gameOver() {
    isGameOver = true;
    cancelAnimationFrame(rAF); // Stop Game Loop
    overlay.classList.remove('hidden');
    overlayTitle.innerText = 'GAME OVER';
    overlayMsg.innerText = `Final Score: ${score}`;
    startBtn.innerText = 'PLAY AGAIN';
}

// Input events
startBtn.addEventListener('click', () => {
    if (isGameOver || !player.matrix || startBtn.innerText === 'PLAY AGAIN') {
        startGame();
    } else {
        pauseGame();
    }
});

document.addEventListener('keydown', event => {
    // Ignore keys if input is focused elsewhere (good practice)
    if (event.target.tagName === 'INPUT') return;

    if (isGameOver) {
        if (event.code === 'Space') startGame();
        return;
    }
    
    if (event.code === 'KeyP') { 
        pauseGame();
        return;
    }
    
    if (isPaused) return;

    if (event.code === 'ArrowLeft') {
        playerMove(-1);
        event.preventDefault();
    } else if (event.code === 'ArrowRight') {
        playerMove(1);
        event.preventDefault();
    } else if (event.code === 'ArrowDown') {
        playerDrop(); // Soft drop
        event.preventDefault();
    } else if (event.code === 'ArrowUp') {
        playerRotate(1);
        event.preventDefault();
    } else if (event.code === 'Space') {
        playerHardDrop();
        event.preventDefault();
    }
});

// Initial draw sequences before Start is clicked
draw();
drawNextPiece();
