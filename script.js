/**
 * TETRIS NEON - Kinetic Logic
 */

// Game Constants
const rows = 20;
const cols = 10;

// Tetromino Matrices and Neon Colors
const SHAPES = [
    [],
    [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], // I - Cyan (Electric)
    [[2,0,0],[2,2,2],[0,0,0]],                // J - Blue (Cobalt)
    [[0,0,3],[3,3,3],[0,0,0]],                // L - Orange (Amber)
    [[4,4],[4,4]],                            // O - Yellow (Laser)
    [[0,5,5],[5,5,0],[0,0,0]],                // S - Green (Matrix)
    [[0,6,0],[6,6,6],[0,0,0]],                // T - Purple (Phantom)
    [[7,7,0],[0,7,7],[0,0,0]]                 // Z - Red (Crimson)
];

const COLORS = [
    '',
    '#00F0FF', // I - Cyan (Electric)
    '#007BFF', // J - Blue (Cobalt)
    '#FF9F00', // L - Orange (Amber)
    '#FFEA00', // O - Yellow (Laser)
    '#00FF41', // S - Green (Matrix)
    '#BC00FF', // T - Purple (Phantom)
    '#FF003C'  // Z - Red (Crimson)
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
    menu: document.getElementById('screen-menu'),
    game: document.getElementById('screen-game'),
    leaderboard: document.getElementById('screen-leaderboard'),
    gameOver: document.getElementById('screen-game-over')
};

const boardContainer = document.getElementById('game-board-container');
const scoreVal = document.getElementById('score-val');
const levelVal = document.getElementById('level-val');
const nextCanvas = document.getElementById('next-canvas');
const nextCtx = nextCanvas.getContext('2d');

const finalScore = document.getElementById('final-score');
const finalLevel = document.getElementById('final-level');

// Navigation Links
const navLinks = document.querySelectorAll('.nav-link');

// 1. Initial Screen State
function showScreen(screenId) {
    if (screenId === 'game') {
        // Stop current game if any and start fresh
        resetGame();
        screens.game.classList.remove('hidden');
        screens.menu.classList.add('hidden');
        screens.leaderboard.classList.add('hidden');
        screens.gameOver.classList.add('hidden');
        lastTime = performance.now();
        update();
    } else {
        // Pause/Stop game
        isGameOver = true;
        cancelAnimationFrame(rAF);
        Object.keys(screens).forEach(key => {
            if (key === screenId) {
                screens[key].classList.remove('hidden');
            } else {
                screens[key].classList.add('hidden');
            }
        });
    }
}

// 2. Grid Management
const gridCells = [];
function initGrid() {
    boardContainer.innerHTML = '';
    gridCells.length = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            // Mockup: grid cells are just slots for .solid-cube
            cell.className = 'w-full h-full'; 
            boardContainer.appendChild(cell);
            gridCells.push(cell);
        }
    }
}

// 3. Core Logic
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
            if (m[y][x] !== 0) {
                const boardY = y + o.y;
                const boardX = x + o.x;
                if (boardY < 0) {
                    if (boardX < 0 || boardX >= cols) return true;
                    continue;
                }
                if (!board[boardY] || board[boardY][boardX] !== 0) {
                    return true;
                }
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
        if (player.pos.y < 0) {
            gameOver();
            return;
        }
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
    if (player.pos.y < 0) {
        gameOver();
        return;
    }
    merge(board, player);
    triggerImpactEffect(player.pos.x, player.pos.y);
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
    
    let firstRow = 0;
    for (let y = 0; y < player.matrix.length; y++) {
        if (player.matrix[y].some(val => val !== 0)) {
            firstRow = y;
            break;
        }
    }
    
    player.pos.y = -firstRow;
    player.pos.x = Math.floor(cols / 2) - Math.floor(player.matrix[0].length / 2);
    canHold = true;
    
    if (collide(board, player)) {
        gameOver();
    }
    drawNext();
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
}

function gameOver() {
    isGameOver = true;
    cancelAnimationFrame(rAF);
    finalScore.innerText = score.toLocaleString();
    finalLevel.innerText = level;
    screens.gameOver.classList.remove('hidden');
}

function resetGame() {
    isGameOver = false;
    isPaused = false;
    board = Array.from({length: rows}, () => new Array(cols).fill(0));
    score = 0; level = 1; linesAmt = 0;
    dropInterval = 1000;
    nextMatrix = null;
    initGrid();
    playerReset();
    updateStats();
}

// 4. Rendering
function draw() {
    // Clear DOM cells
    gridCells.forEach(cell => cell.innerHTML = '');

    // Draw Static Board
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                const idx = y * cols + x;
                const cube = document.createElement('div');
                cube.className = 'solid-cube';
                cube.style.setProperty('--block-color', COLORS[value]);
                gridCells[idx].appendChild(cube);
            }
        });
    });

    // Draw Player Ghost
    if (player.matrix && !isGameOver) {
        let ghostY = player.pos.y;
        while(!collide(board, {matrix: player.matrix, pos: {x: player.pos.x, y: ghostY}})) {
            ghostY++;
        }
        ghostY--;

        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    const idx = (ghostY + y) * cols + (player.pos.x + x);
                    if (gridCells[idx] && gridCells[idx].innerHTML === '') {
                        const cube = document.createElement('div');
                        cube.className = 'solid-cube opacity-10 grayscale-[0.5]';
                        cube.style.setProperty('--block-color', COLORS[value]);
                        gridCells[idx].appendChild(cube);
                    }
                }
            });
        });

        // Draw Player Piece
        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    const boardY = player.pos.y + y;
                    const boardX = player.pos.x + x;
                    const idx = boardY * cols + boardX;
                    if (gridCells[idx]) {
                        gridCells[idx].innerHTML = ''; // overwrite ghost
                        const container = document.createElement('div');
                        container.className = 'w-full h-full piece-active';
                        const cube = document.createElement('div');
                        cube.className = 'solid-cube';
                        cube.style.setProperty('--block-color', COLORS[value]);
                        container.appendChild(cube);
                        gridCells[idx].appendChild(container);
                    }
                }
            });
        });
    }
}

function drawNext() {
    const size = 18;
    nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
    if (!nextMatrix) return;
    const offsetX = (nextCanvas.width - nextMatrix[0].length * size) / 2;
    const offsetY = (nextCanvas.height - nextMatrix.length * size) / 2;
    nextMatrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                nextCtx.fillStyle = COLORS[value];
                nextCtx.strokeStyle = 'rgba(0,0,0,0.3)';
                nextCtx.fillRect(offsetX + x * size, offsetY + y * size, size, size);
                nextCtx.strokeRect(offsetX + x * size, offsetY + y * size, size, size);
            }
        });
    });
}

// 5. Visual Effects
function triggerImpactEffect(gridX, gridY) {
    const container = document.getElementById('board-impact-container');
    container.classList.add('landed-impact-shake');
    setTimeout(() => container.classList.remove('landed-impact-shake'), 250);
}

// 6. Game Loop
function update(time = 0) {
    if (isGameOver || isPaused) return;
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) playerDrop();
    draw();
    rAF = requestAnimationFrame(update);
}

// 7. Input Handling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => { showScreen(link.dataset.target); });
});

document.getElementById('play-now-btn').addEventListener('click', () => showScreen('game'));
document.getElementById('replay-btn').addEventListener('click', () => showScreen('game'));
document.getElementById('header-menu-btn').addEventListener('click', () => showScreen('menu'));

// Tactile
document.getElementById('ctrl-left').addEventListener('click', () => playerMove(-1));
document.getElementById('ctrl-right').addEventListener('click', () => playerMove(1));
document.getElementById('ctrl-down').addEventListener('click', () => playerDrop());
document.getElementById('ctrl-up').addEventListener('click', () => playerRotate(1));
document.getElementById('ctrl-rotate').addEventListener('click', () => playerRotate(1));
document.getElementById('ctrl-hard-drop').addEventListener('click', () => playerHardDrop());

// Keyboard
document.addEventListener('keydown', event => {
    if (isGameOver || isPaused || screens.game.classList.contains('hidden')) return;
    if (event.code === 'ArrowLeft') playerMove(-1);
    else if (event.code === 'ArrowRight') playerMove(1);
    else if (event.code === 'ArrowDown') playerDrop();
    else if (event.code === 'ArrowUp') playerRotate(1);
    else if (event.code === 'Space') playerHardDrop();
});

// Initialize
showScreen('menu');
