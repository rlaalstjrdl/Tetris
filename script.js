// Game Constants
const rows = 20;
const cols = 10;

// Tetromino Matrices
const SHAPES = [
    [],
    [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], // I - Cyan
    [[2,0,0],[2,2,2],[0,0,0]],                // J - Blue
    [[0,0,3],[3,3,3],[0,0,0]],                // L - Orange
    [[4,4],[4,4]],                            // O - Yellow
    [[0,5,5],[5,5,0],[0,0,0]],                // S - Green
    [[0,6,0],[6,6,6],[0,0,0]],                // T - Purple
    [[7,7,0],[0,7,7],[0,0,0]]                 // Z - Red
];

const COLOR_CLASSES = [
    '',
    'block-cyan',
    'block-blue',
    'block-orange',
    'block-yellow',
    'block-green',
    'block-purple',
    'block-red'
];

// Game State
let board = Array.from({length: rows}, () => new Array(cols).fill(0));
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
let holdMatrix = null;
let canHold = true;

// DOM Elements
const screens = {
    main: document.getElementById('main-menu-screen'),
    game: document.getElementById('game-play-screen'),
    leaderboard: document.getElementById('leaderboard-screen')
};

const boardContainer = document.getElementById('game-board-container');
const scoreVal = document.getElementById('score-val');
const levelVal = document.getElementById('level-val');
const linesVal = document.getElementById('lines-val');
const nextCanvas = document.getElementById('next-canvas');
const nextCtx = nextCanvas.getContext('2d');
const holdCanvas = document.getElementById('hold-canvas');
const holdCtx = holdCanvas.getContext('2d');
const gameOverOverlay = document.getElementById('game-over-overlay');
const finalScore = document.getElementById('final-score');
const finalLines = document.getElementById('final-lines');
const finalLevel = document.getElementById('final-level');

// UI Buttons
const startBtn = document.getElementById('start-game-card');
const replayBtn = document.getElementById('replay-btn');
const menuBackBtn = document.getElementById('menu-back-btn');
const navMenuBtn = document.getElementById('menu-btn');
const navLeaderboardBtn = document.getElementById('nav-leaderboard-btn');
const footerPlayBtn = document.getElementById('footer-play-btn');
const footerLeaderboardBtn = document.getElementById('footer-leaderboard-btn');
const leaderboardCard = document.getElementById('leaderboard-card');

// Initialize DOM Grid
const gridCells = [];
function initGrid() {
    boardContainer.innerHTML = '<div class="absolute inset-0 scanline-grid z-10 opacity-40"></div>';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.className = 'game-grid-cell';
            boardContainer.appendChild(cell);
            gridCells.push(cell);
        }
    }
}

// Core Game Functions
function createPiece() {
    const min = 1;
    const max = SHAPES.length - 1;
    const typeId = Math.floor(Math.random() * (max - min + 1)) + min;
    return SHAPES[typeId].map(row => [...row]);
}

function collide(board, player) {
    const [m, o] = [player.matrix, player.pos];
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

function merge(board, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                const boardY = y + player.pos.y;
                const boardX = x + player.pos.x;
                if (board[boardY]) {
                    board[boardY][boardX] = value;
                }
            }
        });
    });
}

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
        }
    }
    if (dir > 0) matrix.forEach(row => row.reverse());
    else matrix.reverse();
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(board, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

function playerDrop() {
    player.pos.y++;
    if (collide(board, player)) {
        player.pos.y--;
        merge(board, player);
        arenaSweep();
        playerReset();
        updateStats();
    }
    dropCounter = 0;
}

function playerHardDrop() {
    while(!collide(board, player)) {
        player.pos.y++;
    }
    player.pos.y--;
    merge(board, player);
    arenaSweep();
    playerReset();
    updateStats();
}

function playerMove(dir) {
    player.pos.x += dir;
    if (collide(board, player)) {
        player.pos.x -= dir;
    }
}

function playerReset() {
    if (nextMatrix === null) nextMatrix = createPiece();
    player.matrix = nextMatrix;
    nextMatrix = createPiece();
    player.pos.y = 0;
    player.pos.x = Math.floor(cols / 2) - Math.floor(player.matrix[0].length / 2);
    canHold = true;
    if (collide(board, player)) {
        gameOver();
    }
    drawNext();
}

function playerHold() {
    if (!canHold) return;
    if (holdMatrix === null) {
        holdMatrix = player.matrix;
        playerReset();
    } else {
        const temp = player.matrix;
        player.matrix = holdMatrix;
        holdMatrix = temp;
        player.pos.y = 0;
        player.pos.x = Math.floor(cols / 2) - Math.floor(player.matrix[0].length / 2);
        if (collide(board, player)) {
            gameOver();
        }
    }
    canHold = false;
    drawHold();
}

function arenaSweep() {
    let rowCount = 1;
    outer: for (let y = board.length - 1; y >= 0; --y) {
        for (let x = 0; x < board[y].length; ++x) {
            if (board[y][x] === 0) continue outer;
        }
        const row = board.splice(y, 1)[0].fill(0);
        board.unshift(row);
        ++y;
        score += rowCount * 100 * level;
        linesAmt++;
        rowCount *= 2;
    }
    level = Math.floor(linesAmt / 10) + 1;
    dropInterval = 1000 - (level - 1) * 60;
}

function updateStats() {
    scoreVal.innerText = score.toLocaleString();
    levelVal.innerText = level;
    linesVal.innerText = linesAmt;
}

// Rendering
function draw() {
    // Clear styles
    gridCells.forEach(cell => {
        cell.className = 'game-grid-cell';
    });

    // Draw board
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                gridCells[y * cols + x].classList.add('neon-block', COLOR_CLASSES[value]);
            }
        });
    });

    // Draw player and ghost
    if (player.matrix) {
        // Ghost
        let ghostY = player.pos.y;
        while(!collide(board, {matrix: player.matrix, pos: {x: player.pos.x, y: ghostY}})) {
            ghostY++;
        }
        ghostY--;
        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    const idx = (ghostY + y) * cols + (player.pos.x + x);
                    if (gridCells[idx]) gridCells[idx].classList.add('neon-block', COLOR_CLASSES[value], 'opacity-20');
                }
            });
        });

        // Player
        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    const idx = (player.pos.y + y) * cols + (player.pos.x + x);
                    if (gridCells[idx]) {
                        gridCells[idx].classList.remove('opacity-20');
                        gridCells[idx].classList.add('neon-block', COLOR_CLASSES[value]);
                    }
                }
            });
        });
    }
}

function drawNext() {
    const size = 20;
    nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
    const offsetX = (nextCanvas.width - nextMatrix[0].length * size) / 2;
    const offsetY = (nextCanvas.height - nextMatrix.length * size) / 2;
    
    // Canvas rendering for next piece (simpler)
    nextMatrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                nextCtx.fillStyle = '#8ff5ff'; // Simplify to primary for small preview
                nextCtx.fillRect(offsetX + x * size, offsetY + y * size, size - 2, size - 2);
            }
        });
    });
}

function drawHold() {
    const size = 18;
    holdCtx.clearRect(0, 0, holdCanvas.width, holdCanvas.height);
    if (!holdMatrix) return;
    const offsetX = (holdCanvas.width - holdMatrix[0].length * size) / 2;
    const offsetY = (holdCanvas.height - holdMatrix.length * size) / 2;
    holdMatrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                holdCtx.fillStyle = '#bcff5f'; // Lime for hold
                holdCtx.fillRect(offsetX + x * size, offsetY + y * size, size - 2, size - 2);
            }
        });
    });
}

// Game Flow
function update(time = 0) {
    if (isPaused || isGameOver) return;
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) playerDrop();
    draw();
    rAF = requestAnimationFrame(update);
}

function resetGame() {
    board = Array.from({length: rows}, () => new Array(cols).fill(0));
    score = 0; level = 1; linesAmt = 0;
    dropInterval = 1000; isGameOver = false; isPaused = false;
    updateStats();
    nextMatrix = null;
    playerReset();
    gameOverOverlay.classList.add('hidden');
}

function startGame() {
    showScreen('game');
    holdMatrix = null;
    drawHold();
    resetGame();
    lastTime = performance.now();
    update();
}

function gameOver() {
    isGameOver = true;
    cancelAnimationFrame(rAF);
    finalScore.innerText = score.toLocaleString();
    finalLines.innerText = linesAmt;
    if (finalLevel) finalLevel.innerText = level;
    gameOverOverlay.classList.remove('hidden');
}

// Screen Management
function showScreen(screenId) {
    Object.keys(screens).forEach(key => {
        if (key === screenId) {
            screens[key].classList.remove('hidden');
        } else {
            screens[key].classList.add('hidden');
        }
    });
    
    // Show/Hide bottom nav state
    if (screenId === 'game') {
        footerPlayBtn.classList.add('scale-110', 'text-[#00F0FF]');
        footerLeaderboardBtn.classList.remove('scale-110', 'text-[#00F0FF]');
    } else if (screenId === 'leaderboard') {
        footerLeaderboardBtn.classList.add('scale-110', 'text-[#00F0FF]');
        footerPlayBtn.classList.remove('scale-110', 'text-[#00F0FF]');
    } else {
        footerPlayBtn.classList.remove('scale-110', 'text-[#00F0FF]');
        footerLeaderboardBtn.classList.remove('scale-110', 'text-[#00F0FF]');
    }
}

// Event Listeners
startBtn.addEventListener('click', startGame);
replayBtn.addEventListener('click', startGame);
menuBackBtn.addEventListener('click', () => {
    gameOverOverlay.classList.add('hidden');
    showScreen('main');
});
navMenuBtn.addEventListener('click', () => showScreen('main'));
navLeaderboardBtn.addEventListener('click', () => showScreen('leaderboard'));
leaderboardCard.addEventListener('click', () => showScreen('leaderboard'));
footerPlayBtn.addEventListener('click', startGame);
footerLeaderboardBtn.addEventListener('click', () => showScreen('leaderboard'));

// Touch Controls
document.getElementById('ctrl-left').addEventListener('click', () => playerMove(-1));
document.getElementById('ctrl-right').addEventListener('click', () => playerMove(1));
document.getElementById('ctrl-down').addEventListener('click', () => playerDrop());
document.getElementById('ctrl-rotate').addEventListener('click', () => playerRotate(1));

// Keyboard
document.addEventListener('keydown', event => {
    if (isGameOver || isPaused || screens.game.classList.contains('hidden')) return;
    if (event.code === 'ArrowLeft') playerMove(-1);
    else if (event.code === 'ArrowRight') playerMove(1);
    else if (event.code === 'ArrowDown') playerDrop();
    else if (event.code === 'ArrowUp') playerRotate(1);
    else if (event.code === 'Space') playerHardDrop();
    else if (event.code === 'KeyC') playerHold();
});

// Initialization
initGrid();
showScreen('main');
