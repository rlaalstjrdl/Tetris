<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }
        .tetris-grid-bg {
            background-image: linear-gradient(to right, rgba(72, 71, 77, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(72, 71, 77, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen overflow-hidden">
<!-- Gameplay Background (Dimmed) -->
<div class="fixed inset-0 z-0 overflow-hidden opacity-30 grayscale-[0.5] blur-[2px]">
<div class="absolute inset-0 tetris-grid-bg"></div>
<!-- Simulated Tetrominoes -->
<div class="absolute bottom-[10%] left-[20%] w-40 h-20 bg-secondary-container opacity-40 rounded-sm shadow-[0_0_20px_rgba(201,124,255,0.4)]"></div>
<div class="absolute bottom-[25%] left-[45%] w-20 h-40 bg-primary-container opacity-40 rounded-sm shadow-[0_0_20px_rgba(143,245,255,0.4)]"></div>
<div class="absolute bottom-[15%] right-[25%] w-32 h-24 bg-tertiary-container opacity-40 rounded-sm shadow-[0_0_20px_rgba(142,255,113,0.4)]"></div>
</div>
<!-- Top Navigation Anchor -->
<header class="bg-[#0e0e13] dark:bg-[#0e0e13] flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#00F0FF]">menu</span>
<span class="text-2xl font-black italic tracking-tighter text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] font-headline uppercase">TETRIS NEON</span>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex gap-8">
<span class="text-[#00F0FF] font-headline tracking-tighter uppercase font-bold cursor-pointer hover:text-[#8ff5ff] transition-colors">PLAY</span>
<span class="text-slate-500 font-headline tracking-tighter uppercase font-bold cursor-pointer hover:text-[#8ff5ff] transition-colors">LEVELS</span>
<span class="text-slate-500 font-headline tracking-tighter uppercase font-bold cursor-pointer hover:text-[#8ff5ff] transition-colors">LEADERS</span>
</div>
<span class="material-symbols-outlined text-[#00F0FF]">settings</span>
</div>
</header>
<!-- Main Overlay Canvas -->
<main class="relative z-10 flex items-center justify-center min-h-screen p-6">
<!-- Game Over Modal -->
<div class="w-full max-w-md bg-surface-container-lowest/60 backdrop-blur-xl rounded-full p-1 shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-outline-variant/10 overflow-hidden">
<div class="bg-surface-container-high/40 p-8 md:p-12 flex flex-col items-center">
<!-- Game Over Headline -->
<div class="relative mb-12">
<h1 class="text-6xl md:text-8xl font-headline font-black italic tracking-tighter text-error drop-shadow-[0_0_20px_rgba(255,113,108,0.8)] leading-none text-center">
                        GAME OVER
                    </h1>
<div class="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-error to-transparent opacity-50"></div>
</div>
<!-- Stats Bento Grid -->
<div class="grid grid-cols-1 gap-4 w-full mb-12">
<div class="bg-surface-container-highest/50 p-6 rounded-xl flex justify-between items-end">
<div>
<p class="text-on-surface-variant text-xs font-headline uppercase tracking-widest mb-1">FINAL SCORE</p>
<p class="text-4xl font-headline font-bold text-primary tracking-tight">128,450</p>
</div>
<span class="material-symbols-outlined text-primary-dim text-3xl opacity-50">military_tech</span>
</div>
<div class="bg-surface-container-highest/50 p-6 rounded-xl flex justify-between items-end">
<div>
<p class="text-on-surface-variant text-xs font-headline uppercase tracking-widest mb-1">LEVEL REACHED</p>
<p class="text-4xl font-headline font-bold text-secondary tracking-tight">14</p>
</div>
<span class="material-symbols-outlined text-secondary-dim text-3xl opacity-50">speed</span>
</div>
</div>
<!-- Action Buttons -->
<div class="flex flex-col w-full gap-4">
<button class="w-full bg-gradient-to-br from-primary to-primary-container py-5 rounded-xl text-on-primary font-headline font-extrabold text-lg tracking-widest uppercase shadow-[0_0_30px_rgba(143,245,255,0.4)] active:scale-95 transition-all duration-100 hover:brightness-110">
                        TRY AGAIN
                    </button>
<button class="w-full bg-surface-container-highest/80 border border-outline-variant/30 py-5 rounded-xl text-on-surface font-headline font-bold text-lg tracking-widest uppercase active:scale-95 transition-all duration-100 hover:bg-surface-bright">
                        HOME
                    </button>
</div>
<!-- Personal Best Indicator -->
<div class="mt-8 flex items-center gap-2 text-on-surface-variant/60">
<span class="material-symbols-outlined text-sm">history</span>
<p class="text-[10px] font-headline uppercase tracking-widest">PERSONAL BEST: 142,000</p>
</div>
</div>
</div>
</main>
<!-- Bottom Navigation Shell -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#131319]/80 backdrop-blur-xl md:hidden">
<a class="flex flex-col items-center justify-center bg-[#25252d] text-[#00F0FF] rounded-xl px-4 py-1 shadow-[0_0_15px_rgba(0,240,255,0.3)]" href="#">
<span class="material-symbols-outlined" data-icon="videogame_asset">videogame_asset</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">PLAY</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all" href="#">
<span class="material-symbols-outlined" data-icon="layers">layers</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">LEVELS</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all" href="#">
<span class="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">LEADERS</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">PROFILE</span>
</a>
</nav>
<!-- Background Decoration -->
<div class="fixed top-20 right-[-10%] w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
<div class="fixed bottom-20 left-[-10%] w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>
</body></html>