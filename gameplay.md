<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Tetris Neon - Gameplay</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "outline": "#76747b",
                        "background": "#0e0e13",
                        "on-secondary-fixed": "#530082",
                        "on-secondary-container": "#fff5ff",
                        "surface-container": "#19191f",
                        "surface-dim": "#0e0e13",
                        "outline-variant": "#48474d",
                        "primary-fixed": "#00eefc",
                        "surface": "#0e0e13",
                        "on-secondary-fixed-variant": "#7c00c0",
                        "on-error-container": "#ffa8a3",
                        "secondary-container": "#9000de",
                        "on-tertiary-fixed-variant": "#0d6200",
                        "inverse-primary": "#006a71",
                        "primary-dim": "#00deec",
                        "on-surface-variant": "#acaab1",
                        "on-error": "#490006",
                        "error": "#ff716c",
                        "on-primary": "#005d63",
                        "secondary-fixed-dim": "#e1b2ff",
                        "on-tertiary": "#0d6100",
                        "on-primary-container": "#005359",
                        "tertiary": "#8eff71",
                        "on-primary-fixed-variant": "#005e64",
                        "on-background": "#f9f5fd",
                        "primary": "#8ff5ff",
                        "primary-container": "#00eefc",
                        "inverse-on-surface": "#55545b",
                        "tertiary-container": "#2ff801",
                        "on-surface": "#f9f5fd",
                        "error-dim": "#d7383b",
                        "on-primary-fixed": "#003f43",
                        "tertiary-fixed": "#2ff801",
                        "surface-variant": "#25252d",
                        "surface-bright": "#2c2b33",
                        "secondary-dim": "#aa30fa",
                        "surface-container-low": "#131319",
                        "inverse-surface": "#fcf8ff",
                        "tertiary-fixed-dim": "#2be800",
                        "on-tertiary-fixed": "#064200",
                        "on-secondary": "#350056",
                        "secondary": "#c97cff",
                        "surface-container-highest": "#25252d",
                        "surface-container-lowest": "#000000",
                        "tertiary-dim": "#2be800",
                        "on-tertiary-container": "#0b5800",
                        "error-container": "#9f0519",
                        "secondary-fixed": "#e9c4ff",
                        "primary-fixed-dim": "#00deec",
                        "surface-tint": "#8ff5ff",
                        "surface-container-high": "#1f1f26"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "fontFamily": {
                        "headline": ["Space Grotesk"],
                        "body": ["Plus Jakarta Sans"],
                        "label": ["Space Grotesk"]
                    }
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #0e0e13;
            min-height: max(884px, 100dvh);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .game-grid {
            background-image: 
                linear-gradient(to right, rgba(143, 245, 255, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(143, 245, 255, 0.08) 1px, transparent 1px);
            background-size: 24px 24px;
        }

        /* Bold Solid Block Styling - Focused on Sharp Neon Edges */
        .solid-cube {
            position: relative;
            background: var(--block-color);
            box-sizing: border-box;
            margin: 0.5px;
            width: 23px;
            height: 23px;
            box-shadow: 
                inset 2px 2px 0px rgba(255, 255, 255, 0.5),
                inset -3px -3px 0px rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(0, 0, 0, 0.4);
        }

        /* Clean Falling Piece - No glow while falling */
        .piece-active .solid-cube {
            filter: saturate(1.5) brightness(1.1);
        }

        /* Landing Shockwave Effect */
        @keyframes shockwave {
            0% { transform: scale(0.5); opacity: 1; border-width: 8px; }
            100% { transform: scale(3.5); opacity: 0; border-width: 1px; }
        }
        .shockwave {
            position: absolute;
            border: 2px solid var(--impact-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 50;
            animation: shockwave 0.5s cubic-bezier(0, 0.5, 0.5, 1) forwards;
        }

        /* Impact Particle Burst */
        @keyframes particle-out {
            0% { transform: translate(0, 0) scale(1); opacity: 1; }
            100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
        }
        .impact-particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--impact-color);
            box-shadow: 0 0 8px var(--impact-color);
            border-radius: 50%;
            animation: particle-out 0.6s ease-out forwards;
        }

        /* Screen Shake */
        @keyframes heavy-shake {
            0% { transform: translate(0, 0); }
            10% { transform: translate(-3px, -2px); }
            20% { transform: translate(3px, 2px); }
            30% { transform: translate(-3px, 1px); }
            40% { transform: translate(2px, -1px); }
            50% { transform: translate(-1px, 2px); }
            60% { transform: translate(1px, -2px); }
            100% { transform: translate(0, 0); }
        }
        .landed-impact-shake {
            animation: heavy-shake 0.25s ease-out;
        }

        .dpad-btn:active {
            background-color: rgba(0, 240, 255, 0.15);
            border-color: #00F0FF;
            color: #00F0FF;
            transform: scale(0.95);
        }
    </style>
</head>
<body class="text-on-background min-h-screen flex flex-col overflow-hidden">
<!-- TopAppBar -->
<header class="bg-[#0e0e13] flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50">
<div class="flex items-center gap-4">
<button class="text-[#00F0FF] hover:text-[#8ff5ff] transition-colors active:scale-95 duration-100">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 class="text-2xl font-black italic tracking-tighter text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] font-['Space_Grotesk'] uppercase">TETRIS NEON</h1>
</div>
<button class="text-[#00F0FF] hover:text-[#8ff5ff] transition-colors active:scale-95 duration-100">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<!-- Main Game Canvas -->
<main class="flex-grow flex flex-col pt-20 pb-28 px-4 max-w-lg mx-auto w-full relative">
<div class="flex gap-4 items-start h-full">
<!-- Game Board -->
<div class="relative flex-grow aspect-[10/20] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl outline-variant/10 outline outline-1 landed-impact-shake">
<div class="absolute inset-0 game-grid"></div>
<!-- Impact Visuals Layer -->
<div class="absolute inset-0 pointer-events-none z-40">
<!-- Impact Point 1: At Bottom (Cyan I-Piece) -->
<div class="shockwave" style="top: 480px; left: 132px; width: 40px; height: 40px; --impact-color: #00FFFF;"></div>
<div class="impact-particle" style="top: 480px; left: 132px; --dx: -30px; --dy: -40px; --impact-color: #00FFFF;"></div>
<div class="impact-particle" style="top: 480px; left: 132px; --dx: 30px; --dy: -20px; --impact-color: #00FFFF;"></div>
<div class="impact-particle" style="top: 480px; left: 132px; --dx: 0px; --dy: -60px; --impact-color: #00FFFF;"></div>
<!-- Impact Point 2: At Mid-stack (Magenta T-Piece contact) -->
<div class="shockwave" style="top: 360px; left: 72px; width: 30px; height: 30px; --impact-color: #FF00FF;"></div>
</div>
<!-- Game Pieces Display -->
<div class="absolute inset-0 p-1">
<!-- Complex Custom Shape (The "Cross") - Static Stacked -->
<div class="absolute top-[408px] left-[24px] flex flex-wrap w-[72px]">
<div class="w-6 h-6 ml-6 solid-cube" style="--block-color: #ff3d00;"></div>
<div class="solid-cube" style="--block-color: #ff3d00;"></div>
<div class="solid-cube" style="--block-color: #ff3d00;"></div>
<div class="solid-cube" style="--block-color: #ff3d00;"></div>
<div class="w-6 h-6 ml-6 solid-cube" style="--block-color: #ff3d00;"></div>
</div>
<!-- L-Piece (Orange) - Static Stacked -->
<div class="absolute top-[432px] left-[168px] flex flex-col">
<div class="solid-cube" style="--block-color: #FF8C00;"></div>
<div class="solid-cube" style="--block-color: #FF8C00;"></div>
<div class="flex">
<div class="solid-cube" style="--block-color: #FF8C00;"></div>
<div class="solid-cube" style="--block-color: #FF8C00;"></div>
</div>
</div>
<!-- I-Piece (Cyan) - JUST LANDED (Moment of Impact) -->
<div class="absolute top-[384px] left-[120px] flex flex-col">
<div class="solid-cube" style="--block-color: #00BFFF;"></div>
<div class="solid-cube" style="--block-color: #00BFFF;"></div>
<div class="solid-cube" style="--block-color: #00BFFF;"></div>
<div class="solid-cube" style="--block-color: #00BFFF;"></div>
</div>
<!-- ACTIVE FALLING PIECE: Z-Piece (Red) - Clean and Sharp -->
<div class="absolute top-[120px] left-[48px] piece-active">
<div class="flex">
<div class="solid-cube" style="--block-color: #FF0000;"></div>
<div class="solid-cube" style="--block-color: #FF0000;"></div>
</div>
<div class="flex translate-x-6">
<div class="solid-cube" style="--block-color: #FF0000;"></div>
<div class="solid-cube" style="--block-color: #FF0000;"></div>
</div>
</div>
<!-- ACTIVE FALLING PIECE: J-Piece (Blue) -->
<div class="absolute top-[48px] left-[144px] piece-active">
<div class="solid-cube" style="--block-color: #0000FF;"></div>
<div class="flex">
<div class="solid-cube" style="--block-color: #0000FF;"></div>
<div class="solid-cube" style="--block-color: #0000FF;"></div>
<div class="solid-cube" style="--block-color: #0000FF;"></div>
</div>
</div>
</div>
</div>
<!-- Side HUD -->
<div class="flex flex-col gap-4 w-28 shrink-0">
<div class="bg-surface-container-high rounded-xl p-4 flex flex-col items-end shadow-lg border border-outline-variant/10">
<span class="text-on-surface-variant font-headline text-[10px] tracking-widest uppercase">SCORE</span>
<span class="text-secondary font-headline text-2xl font-bold leading-tight">24,850</span>
</div>
<!-- Expanded NEXT Preview with variety -->
<div class="bg-surface-container-high rounded-xl p-4 flex flex-col items-center gap-4 shadow-lg border border-outline-variant/10">
<span class="text-on-surface-variant font-headline text-[10px] tracking-widest uppercase self-end">NEXT</span>
<!-- S-Piece in preview -->
<div class="scale-75">
<div class="flex translate-x-3">
<div class="solid-cube" style="--block-color: #32CD32;"></div>
<div class="solid-cube" style="--block-color: #32CD32;"></div>
</div>
<div class="flex">
<div class="solid-cube" style="--block-color: #32CD32;"></div>
<div class="solid-cube" style="--block-color: #32CD32;"></div>
</div>
</div>
<!-- O-Piece in preview -->
<div class="scale-75 -mt-2">
<div class="flex">
<div class="solid-cube" style="--block-color: #FFD700;"></div>
<div class="solid-cube" style="--block-color: #FFD700;"></div>
</div>
<div class="flex">
<div class="solid-cube" style="--block-color: #FFD700;"></div>
<div class="solid-cube" style="--block-color: #FFD700;"></div>
</div>
</div>
</div>
<div class="bg-surface-container-high rounded-xl p-4 flex flex-col items-end shadow-lg mt-auto border border-outline-variant/10">
<span class="text-on-surface-variant font-headline text-[10px] tracking-widest uppercase">LEVEL</span>
<span class="text-primary font-headline text-2xl font-bold">12</span>
</div>
</div>
</div>
<!-- Tactile Controls Section -->
<div class="mt-8 grid grid-cols-12 gap-2 items-center h-40">
<!-- D-Pad -->
<div class="col-span-5 relative w-32 h-32 mx-auto">
<button class="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center text-primary-container shadow-inner border border-outline-variant/20 transition-all dpad-btn">
<span class="material-symbols-outlined" data-icon="keyboard_arrow_up">keyboard_arrow_up</span>
</button>
<button class="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center text-primary-container shadow-inner border border-outline-variant/20 transition-all dpad-btn">
<span class="material-symbols-outlined" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
</button>
<button class="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center text-primary-container shadow-inner border border-outline-variant/20 transition-all dpad-btn">
<span class="material-symbols-outlined" data-icon="keyboard_arrow_left">keyboard_arrow_left</span>
</button>
<button class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center text-primary-container shadow-inner border border-outline-variant/20 transition-all dpad-btn">
<span class="material-symbols-outlined" data-icon="keyboard_arrow_right">keyboard_arrow_right</span>
</button>
</div>
<!-- Hard Drop Button -->
<div class="col-span-2 flex justify-center">
<button class="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary shadow-[0_0_15px_rgba(47,248,1,0.2)] border border-tertiary/20 active:scale-90 transition-all relative overflow-hidden group">
<div class="absolute inset-0 bg-tertiary/10 opacity-0 group-active:opacity-100 transition-opacity"></div>
<span class="material-symbols-outlined text-3xl font-bold" data-icon="vertical_align_bottom">vertical_align_bottom</span>
</button>
</div>
<!-- Rotate Buttons -->
<div class="col-span-5 flex gap-3 justify-end items-center pr-2">
<button class="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center shadow-[0_4px_12px_rgba(0,238,252,0.3)] active:scale-95 transition-transform duration-150">
<span class="material-symbols-outlined text-2xl" data-icon="rotate_left">rotate_left</span>
</button>
<button class="w-18 h-18 rounded-full bg-gradient-to-br from-secondary to-secondary-container text-on-secondary-container flex items-center justify-center shadow-[0_6px_18px_rgba(201,124,255,0.3)] active:scale-95 transition-transform duration-150">
<span class="material-symbols-outlined text-3xl" data-icon="rotate_right">rotate_right</span>
</button>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="bg-[#131319]/80 backdrop-blur-xl fixed bottom-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<a class="flex flex-col items-center justify-center bg-[#25252d] text-[#00F0FF] rounded-xl px-4 py-1 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all active:scale-90 duration-150 ease-out" href="#">
<span class="material-symbols-outlined" data-icon="videogame_asset" style="font-variation-settings: 'FILL' 1;">videogame_asset</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold mt-1">PLAY</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all" href="#">
<span class="material-symbols-outlined" data-icon="layers">layers</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold mt-1">LEVELS</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all" href="#">
<span class="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold mt-1">LEADERS</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold mt-1">PROFILE</span>
</a>
</nav>
<!-- Background Decoration -->
<div class="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
<div class="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
<div class="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full"></div>
</div>
</body></html>