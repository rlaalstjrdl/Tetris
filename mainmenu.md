<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            background-color: #0e0e13;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .neon-glow-primary {
            text-shadow: 0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3);
        }
        .neon-glow-secondary {
            text-shadow: 0 0 10px rgba(201, 124, 255, 0.5), 0 0 20px rgba(201, 124, 255, 0.3);
        }
        .glass-panel {
            background: rgba(37, 37, 45, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .grid-bg {
            background-image: 
                linear-gradient(to right, rgba(143, 245, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(143, 245, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
        }
    </style>
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
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-body text-on-surface selection:bg-primary selection:text-on-primary">
<!-- Background Layer -->
<div class="fixed inset-0 z-0 grid-bg overflow-hidden">
<!-- Falling Tetrominoes (Simulated visual elements) -->
<div class="absolute top-[-100px] left-[10%] opacity-20 rotate-12">
<div class="grid grid-cols-2 gap-1">
<div class="w-10 h-10 bg-secondary rounded-sm shadow-[0_0_15px_#c97cff]"></div>
<div class="w-10 h-10 bg-secondary rounded-sm shadow-[0_0_15px_#c97cff]"></div>
<div class="w-10 h-10 bg-secondary rounded-sm shadow-[0_0_15px_#c97cff]"></div>
<div class="w-10 h-10 bg-secondary rounded-sm shadow-[0_0_15px_#c97cff]"></div>
</div>
</div>
<div class="absolute top-[20%] right-[15%] opacity-15 -rotate-45">
<div class="flex flex-col gap-1">
<div class="w-10 h-10 bg-primary rounded-sm shadow-[0_0_15px_#8ff5ff]"></div>
<div class="w-10 h-10 bg-primary rounded-sm shadow-[0_0_15px_#8ff5ff]"></div>
<div class="w-10 h-10 bg-primary rounded-sm shadow-[0_0_15px_#8ff5ff]"></div>
<div class="w-10 h-10 bg-primary rounded-sm shadow-[0_0_15px_#8ff5ff]"></div>
</div>
</div>
<div class="absolute bottom-[30%] left-[5%] opacity-10 rotate-180">
<div class="grid grid-cols-3 gap-1">
<div class="w-10 h-10 bg-tertiary rounded-sm shadow-[0_0_15px_#8eff71]"></div>
<div class="w-10 h-10 bg-tertiary rounded-sm shadow-[0_0_15px_#8eff71]"></div>
<div class="w-10 h-10 bg-transparent"></div>
<div class="w-10 h-10 bg-transparent"></div>
<div class="w-10 h-10 bg-tertiary rounded-sm shadow-[0_0_15px_#8eff71]"></div>
<div class="w-10 h-10 bg-tertiary rounded-sm shadow-[0_0_15px_#8eff71]"></div>
</div>
</div>
<!-- Gradient Overlay for Depth -->
<div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none"></div>
</div>
<!-- Navigation Shell (TopAppBar) -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0e0e13] dark:bg-[#0e0e13]">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#00F0FF] cursor-pointer hover:text-[#8ff5ff] transition-colors active:scale-95 duration-100" data-icon="menu">menu</span>
<div class="font-['Space_Grotesk'] text-2xl font-black italic tracking-tighter text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] uppercase">
                TETRIS NEON
            </div>
</div>
<div class="flex items-center gap-6">
<span class="hidden md:block font-['Space_Grotesk'] text-slate-500 tracking-tighter uppercase font-bold text-sm hover:text-[#8ff5ff] transition-colors cursor-pointer">HISTORY</span>
<span class="hidden md:block font-['Space_Grotesk'] text-slate-500 tracking-tighter uppercase font-bold text-sm hover:text-[#8ff5ff] transition-colors cursor-pointer">STORE</span>
<span class="material-symbols-outlined text-[#00F0FF] cursor-pointer hover:text-[#8ff5ff] transition-colors active:scale-95 duration-100" data-icon="settings">settings</span>
</div>
</header>
<!-- Main Canvas Content -->
<main class="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-6">
<!-- Hero Section -->
<div class="w-full max-w-4xl flex flex-col items-center mb-16">
<div class="relative group">
<h1 class="font-headline text-[8rem] md:text-[12rem] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary-container to-secondary leading-none select-none drop-shadow-[0_0_40px_rgba(0,240,255,0.4)]">
                    TETRIS
                </h1>
<div class="absolute -bottom-4 right-0 font-headline text-2xl font-bold tracking-[0.5em] text-secondary neon-glow-secondary opacity-80 uppercase">
                    NEON KINETIC
                </div>
</div>
</div>
<!-- Menu Action Grid -->
<div class="w-full max-w-md space-y-4">
<!-- PRIMARY ACTION: PLAY -->
<button class="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-primary-container rounded-xl py-6 flex items-center justify-center shadow-[0_10px_30px_rgba(0,240,255,0.3)] hover:shadow-[0_15px_40px_rgba(0,240,255,0.5)] transition-all duration-300 active:scale-95">
<div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="relative flex items-center gap-3">
<span class="material-symbols-outlined text-on-primary text-3xl" data-icon="play_arrow" data-weight="fill">play_arrow</span>
<span class="font-headline text-3xl font-black text-on-primary tracking-tighter uppercase">PLAY NOW</span>
</div>
</button>
<!-- SECONDARY ACTIONS -->
<div class="grid grid-cols-2 gap-4">
<button class="glass-panel flex flex-col items-start justify-end p-6 rounded-xl min-h-[140px] group transition-all hover:bg-surface-container-highest active:scale-95 shadow-lg">
<span class="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform" data-icon="leaderboard">leaderboard</span>
<div>
<span class="block font-headline text-lg font-bold text-on-surface uppercase tracking-tight">LEADERBOARD</span>
<span class="block font-body text-xs text-on-surface-variant font-medium">Rank #1,204</span>
</div>
</button>
<button class="glass-panel flex flex-col items-start justify-end p-6 rounded-xl min-h-[140px] group transition-all hover:bg-surface-container-highest active:scale-95 shadow-lg">
<span class="material-symbols-outlined text-tertiary text-4xl mb-4 group-hover:scale-110 transition-transform" data-icon="sports_esports">sports_esports</span>
<div>
<span class="block font-headline text-lg font-bold text-on-surface uppercase tracking-tight">LEVELS</span>
<span class="block font-body text-xs text-on-surface-variant font-medium">42 Unlocked</span>
</div>
</button>
</div>
<!-- TERTIARY ROW -->
<button class="w-full glass-panel flex items-center justify-between px-6 py-5 rounded-xl group transition-all hover:bg-surface-container-highest active:scale-95">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="settings">settings</span>
<span class="font-headline text-base font-bold text-on-surface uppercase tracking-wide">SYSTEM SETTINGS</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</button>
</div>
<!-- Bento Grid Stats (Decorative/Informational) -->
<div class="w-full max-w-4xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="glass-panel p-6 rounded-2xl flex flex-col justify-between overflow-hidden relative">
<div class="relative z-10">
<p class="font-label text-xs font-bold text-on-surface-variant tracking-[0.2em] mb-1">GLOBAL TOP SCORE</p>
<p class="font-headline text-4xl font-black text-primary neon-glow-primary">2,485,000</p>
</div>
<div class="mt-4 flex items-center gap-2 relative z-10">
<div class="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="User" class="w-full h-full object-cover" data-alt="Avatar of a legendary tetris player with neon gaming headphones and futuristic visor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADQgjudH5qJlbm8DbVZYjrCKXBHrqlAuq_j3zdZibrGNVx7IvbZJHLEByc_EERH9Qj-8Q1Eu6deHVfvVi2SQanee0wjP9VRDOIMSULXPmrIitexjdipKPZxG4F4a3DZrEz69IFCSKaXS3gq6hoM0Zy2R9x6jqyc5arMNeCPmfJ01XmIXTwbBHaNCbcLhTezQ8BId8RK2RS0KCj1a59eF7mIoX3yHnYjUGqh-yWEcvH80U9qtf8mwrZuScV2jsxVA4EHzffAMOcTA"/>
</div>
<span class="text-xs font-bold font-headline text-on-surface tracking-tight">NEON_RAVER_99</span>
</div>
<div class="absolute -right-4 -bottom-4 opacity-10">
<span class="material-symbols-outlined text-8xl" data-icon="military_tech">military_tech</span>
</div>
</div>
<div class="glass-panel p-6 rounded-2xl md:col-span-2 overflow-hidden relative min-h-[160px]">
<div class="flex justify-between items-start relative z-10">
<div>
<p class="font-label text-xs font-bold text-on-surface-variant tracking-[0.2em] mb-1">SEASON 04 EVENT</p>
<h3 class="font-headline text-3xl font-black text-on-surface uppercase leading-tight">CHROME DUST<br/>TOURNAMENT</h3>
</div>
<div class="bg-secondary/20 px-3 py-1 rounded-full">
<span class="font-headline text-[10px] font-black text-secondary uppercase tracking-widest">LIVE NOW</span>
</div>
</div>
<div class="mt-4 relative z-10">
<button class="text-xs font-bold font-headline text-primary border-b-2 border-primary/30 hover:border-primary transition-all pb-0.5">JOIN TOURNAMENT</button>
</div>
<!-- Abstract Graphic -->
<div class="absolute right-0 bottom-0 top-0 w-1/3 opacity-30 bg-gradient-to-l from-secondary/40 to-transparent"></div>
<img alt="Tournament Art" class="absolute top-0 right-0 w-full h-full object-cover opacity-20 mix-blend-screen pointer-events-none" data-alt="Futuristic chrome blocks floating in a purple nebula with digital data streams and light streaks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUm2Q0EcfnEQg34_iKaTcL4CymcZiMztvSB08-okJ91SVGrqqJze09Wqw1yYcfh8PQKcMWMlJtA90A1E34XMg5L4uksyBnvNAjUDk3TfTLiGpZSJXGFL8kh9ddk9V2G8BeGICvVY8-KzhH2dFENPRHrsCbI4X01PZgwIav_5-3np0U5zkQ98WPdeonbkMdG4m-GE9y9Jip5ZzQZk8Xj1EK4vuy2LmxY_SCo2QDxpLp5UgLF8F6iaWA1XnhuQ4h6WRx6uw0C73aZw"/>
</div>
</div>
</main>
<!-- Navigation Shell (BottomNavBar) -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#131319]/80 backdrop-blur-xl md:hidden">
<div class="flex flex-col items-center justify-center bg-[#25252d] text-[#00F0FF] rounded-xl px-4 py-1 shadow-[0_0_15px_rgba(0,240,255,0.3)] active:scale-90 duration-150 ease-out cursor-pointer">
<span class="material-symbols-outlined" data-icon="videogame_asset" data-weight="fill">videogame_asset</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">PLAY</span>
</div>
<div class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all active:scale-90 duration-150 ease-out cursor-pointer">
<span class="material-symbols-outlined" data-icon="layers">layers</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">LEVELS</span>
</div>
<div class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all active:scale-90 duration-150 ease-out cursor-pointer">
<span class="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">LEADERS</span>
</div>
<div class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all active:scale-90 duration-150 ease-out cursor-pointer">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">PROFILE</span>
</div>
</nav>
</body></html>