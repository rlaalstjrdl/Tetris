<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>TETRIS NEON - Leaderboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "secondary": "#ff56ec",
              "error-container": "#9f0519",
              "surface-container-low": "#131319",
              "on-primary-container": "#005359",
              "primary-dim": "#00deec",
              "outline": "#76747b",
              "inverse-primary": "#006a71",
              "surface": "#0e0e13",
              "on-error-container": "#ffa8a3",
              "on-tertiary-fixed": "#294300",
              "on-tertiary": "#3d6100",
              "surface-tint": "#8ff5ff",
              "on-secondary-container": "#fff5f9",
              "primary-fixed-dim": "#00deec",
              "on-secondary-fixed": "#63005d",
              "on-surface-variant": "#acaab1",
              "surface-container-highest": "#25252d",
              "on-background": "#f9f5fd",
              "on-secondary": "#41003c",
              "primary-fixed": "#00eefc",
              "surface-container": "#19191f",
              "inverse-on-surface": "#55545b",
              "on-error": "#490006",
              "tertiary": "#bcff5f",
              "tertiary-container": "#a2f31f",
              "background": "#0e0e13",
              "primary": "#8ff5ff",
              "tertiary-fixed-dim": "#95e400",
              "surface-container-lowest": "#000000",
              "error-dim": "#d7383b",
              "surface-variant": "#25252d",
              "secondary-dim": "#ff56ec",
              "surface-bright": "#2c2b33",
              "secondary-fixed": "#ffbdee",
              "tertiary-fixed": "#a2f31f",
              "on-primary-fixed": "#003f43",
              "on-primary-fixed-variant": "#005e64",
              "on-tertiary-container": "#365700",
              "secondary-container": "#ab00a1",
              "on-tertiary-fixed-variant": "#3d6200",
              "error": "#ff716c",
              "on-primary": "#005d63",
              "inverse-surface": "#fcf8ff",
              "on-secondary-fixed-variant": "#94008b",
              "on-surface": "#f9f5fd",
              "surface-dim": "#0e0e13",
              "tertiary-dim": "#95e400",
              "outline-variant": "#48474d",
              "secondary-fixed-dim": "#ffa7ec",
              "surface-container-high": "#1f1f26",
              "primary-container": "#00eefc"
            },
            fontFamily: {
              "headline": ["Space Grotesk"],
              "body": ["Manrope"],
              "label": ["Space Grotesk"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .neon-glow-primary {
            text-shadow: 0 0 8px rgba(143, 245, 255, 0.5);
        }
        .glass-panel {
            backdrop-filter: blur(20px);
            background: rgba(19, 19, 25, 0.8);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
<!-- TopAppBar Shell -->
<header class="fixed top-0 w-full z-50 bg-[#0e0e13]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
<div class="flex justify-between items-center px-6 py-4 w-full">
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-[#00F0FF] hover:scale-105 transition-transform duration-300 active:scale-95" data-icon="menu">menu</button>
<h1 class="font-['Space_Grotesk'] text-xl font-bold tracking-tighter text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] uppercase">TETRIS NEON</h1>
</div>
<button class="material-symbols-outlined text-[#00F0FF] hover:scale-105 transition-transform duration-300 active:scale-95" data-icon="leaderboard">leaderboard</button>
</div>
<div class="bg-gradient-to-b from-[#131319] to-transparent h-1 w-full"></div>
</header>
<main class="pt-24 pb-32 px-4 md:px-8 max-w-4xl mx-auto min-h-screen">
<!-- Hero Section / Header Title -->
<div class="mb-12">
<span class="font-label text-xs tracking-[0.3em] text-primary opacity-60 uppercase mb-2 block">GLOBAL RANKINGS</span>
<h2 class="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">HALL OF <span class="text-primary neon-glow-primary">FAME</span></h2>
<div class="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
</div>
<!-- Top 3 Podium (Visual Asymmetry) -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<!-- Rank 2 -->
<div class="order-2 md:order-1 glass-panel p-6 rounded-xl border border-outline-variant/10 flex flex-col items-center justify-end h-64 relative overflow-hidden group">
<div class="absolute top-4 left-4 font-headline text-5xl font-extrabold opacity-10 italic group-hover:opacity-20 transition-opacity">02</div>
<div class="mb-4">
<span class="material-symbols-outlined text-4xl text-outline-variant" data-icon="workspace_premium" data-weight="fill" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
</div>
<span class="font-headline text-xl font-bold mb-1">CYBER_PUNK</span>
<span class="font-label text-sm text-primary">845,200</span>
<div class="absolute bottom-0 left-0 w-full h-1 bg-outline-variant/30"></div>
</div>
<!-- Rank 1 (The Anchor) -->
<div class="order-1 md:order-2 glass-panel p-8 rounded-xl border-2 border-primary/30 flex flex-col items-center justify-center h-80 relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
<div class="absolute top-0 right-0 p-4">
<div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="stars" data-weight="fill" style="font-variation-settings: 'FILL' 1;">stars</span>
</div>
</div>
<div class="font-headline text-7xl font-black opacity-10 absolute -bottom-4 -left-4 italic">01</div>
<div class="mb-6 relative">
<div class="w-24 h-24 rounded-full border-2 border-tertiary p-1">
<img alt="Player Avatar" class="w-full h-full object-cover rounded-full filter grayscale contrast-125" data-alt="futuristic neon aesthetic portrait of a gamer in dark room with cyan and magenta lighting reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZT9PY5rlIkyI3eC953t05PIOzBzB20uowJ6ia1ExCqdsT1OfQGEposC6Gb0Lq2xl1dbaAnQHN93biR2X1s1Gh_kmrmX9YY0fhm1aYK43B57A6EjF-W2JfbK2LpBPt5OXkLTvcZuGq0L_O8MVCjp4t3aIMhA5JbtDZ7nvK9eNoE6I4UEM5By5HPWUzE9pqjQt30NkujdtraaFY_yqP1QtZc3xXau1hXnrpTc7syG5ef9zO2UCeJVEZmhA4IUlDXz3JxI1-h5PAlg"/>
</div>
<div class="absolute -bottom-2 -right-2 bg-tertiary text-on-tertiary text-[10px] font-bold px-2 py-0.5 rounded-full">PRO</div>
</div>
<h3 class="font-headline text-2xl font-bold tracking-wide mb-1 uppercase">NEON_VOID</h3>
<span class="font-headline text-3xl font-black text-tertiary drop-shadow-[0_0_15px_rgba(188,255,95,0.4)]">1,240,500</span>
</div>
<!-- Rank 3 -->
<div class="order-3 glass-panel p-6 rounded-xl border border-outline-variant/10 flex flex-col items-center justify-end h-56 relative overflow-hidden group">
<div class="absolute top-4 left-4 font-headline text-5xl font-extrabold opacity-10 italic group-hover:opacity-20 transition-opacity">03</div>
<div class="mb-4">
<span class="material-symbols-outlined text-4xl text-secondary-container/60" data-icon="workspace_premium" data-weight="fill" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
</div>
<span class="font-headline text-xl font-bold mb-1">GRID_RUNNER</span>
<span class="font-label text-sm text-secondary">712,000</span>
<div class="absolute bottom-0 left-0 w-full h-1 bg-secondary/30"></div>
</div>
</div>
<!-- Leaderboard List 4-10 -->
<div class="space-y-3">
<!-- Header Row -->
<div class="flex items-center px-6 py-2 opacity-40">
<div class="w-12 font-label text-[10px] tracking-widest uppercase">Rank</div>
<div class="flex-grow font-label text-[10px] tracking-widest uppercase px-4">Player</div>
<div class="w-32 text-right font-label text-[10px] tracking-widest uppercase">Score</div>
</div>
<!-- List Item 4 -->
<div class="flex items-center bg-surface-container-low/50 hover:bg-surface-container transition-colors rounded-lg px-6 py-4 group">
<div class="w-12 font-headline font-bold text-lg opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all">04</div>
<div class="flex-grow flex items-center gap-3 px-4">
<div class="w-8 h-8 rounded-sm bg-surface-container-highest overflow-hidden">
<img alt="Avatar" data-alt="minimalist abstract pixel art profile icon in neon blue tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjOPE44P3iNoe6YCT05enjcikrMUkNsS2NTrMCZi9Devgd-0mTrZ-SZxaon1mm675XYzvDa2FtwwhesrKaVt9ADevQXYj0qPLmKAQPMtuZHWA7HfTKZ4xGUq3mztPanyF0qJkiHbwx_QPoLxjg74VW4BgKkel2JjhkAa3jpeQnltrDxH_iVQqk8A3YziquFuVZwv1RomuyY_37_TJfgq6JrHwY9j8p92C2AI-1uLBXQ4DUDaMLTdtrN0Tgrs12GxuuWV7uriLORQ"/>
</div>
<span class="font-body font-semibold tracking-wide">HYPER_SPACE</span>
</div>
<div class="w-32 text-right font-headline font-bold text-on-surface/80 group-hover:text-primary transition-colors">654,200</div>
</div>
<!-- List Item 5 -->
<div class="flex items-center bg-surface-container-low/50 hover:bg-surface-container transition-colors rounded-lg px-6 py-4 group">
<div class="w-12 font-headline font-bold text-lg opacity-40 group-hover:text-primary group-hover:opacity-100">05</div>
<div class="flex-grow flex items-center gap-3 px-4">
<div class="w-8 h-8 rounded-sm bg-surface-container-highest overflow-hidden">
<img alt="Avatar" data-alt="macro close up of glowing computer components with deep purple and green light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkLsf9EoMkUea2SE2xMyax3oWjFaw_uA00JiMmSAAwKM9IGz2VlUhDaduw4f4FPEjhJzp9jJjXLcejjOAviHoMIuzcVvr399mVJ-_vwTg6DO1Hq90_pwApYHJRodYGkgdKPyfpvWp6F7PfWVONowFbGSRuVd1dc3LkoRdKn6Q7Ia7R4K9aBcMkh8nDM-UO_sHum7izRZ36zUXjrxvLyuOwIi3_aVGTdhiUsjNMFrniNF-sakeOD9HgNe4jA4yIMouzipxQ31djlQ"/>
</div>
<span class="font-body font-semibold tracking-wide">BLOCK_MASTER</span>
</div>
<div class="w-32 text-right font-headline font-bold text-on-surface/80 group-hover:text-primary">598,000</div>
</div>
<!-- List Item 6 -->
<div class="flex items-center bg-surface-container-low/50 hover:bg-surface-container transition-colors rounded-lg px-6 py-4 group">
<div class="w-12 font-headline font-bold text-lg opacity-40 group-hover:text-primary group-hover:opacity-100">06</div>
<div class="flex-grow flex items-center gap-3 px-4">
<div class="w-8 h-8 rounded-sm bg-surface-container-highest overflow-hidden"></div>
<span class="font-body font-semibold tracking-wide">ZERO_GRAVITY</span>
</div>
<div class="w-32 text-right font-headline font-bold text-on-surface/80 group-hover:text-primary">521,450</div>
</div>
<!-- List Item 7 -->
<div class="flex items-center bg-surface-container-low/50 hover:bg-surface-container transition-colors rounded-lg px-6 py-4 group">
<div class="w-12 font-headline font-bold text-lg opacity-40 group-hover:text-primary group-hover:opacity-100">07</div>
<div class="flex-grow flex items-center gap-3 px-4">
<div class="w-8 h-8 rounded-sm bg-surface-container-highest overflow-hidden"></div>
<span class="font-body font-semibold tracking-wide">SYNTH_WAVE</span>
</div>
<div class="w-32 text-right font-headline font-bold text-on-surface/80 group-hover:text-primary">489,100</div>
</div>
<!-- List Item 8 -->
<div class="flex items-center bg-surface-container-low/50 hover:bg-surface-container transition-colors rounded-lg px-6 py-4 group">
<div class="w-12 font-headline font-bold text-lg opacity-40 group-hover:text-primary group-hover:opacity-100">08</div>
<div class="flex-grow flex items-center gap-3 px-4">
<div class="w-8 h-8 rounded-sm bg-surface-container-highest overflow-hidden"></div>
<span class="font-body font-semibold tracking-wide">QUBIT_USER</span>
</div>
<div class="w-32 text-right font-headline font-bold text-on-surface/80 group-hover:text-primary">442,000</div>
</div>
<!-- List Item 9 -->
<div class="flex items-center bg-surface-container-low/50 hover:bg-surface-container transition-colors rounded-lg px-6 py-4 group border-l-2 border-transparent hover:border-secondary">
<div class="w-12 font-headline font-bold text-lg opacity-40 group-hover:text-secondary group-hover:opacity-100">09</div>
<div class="flex-grow flex items-center gap-3 px-4">
<div class="w-8 h-8 rounded-sm bg-surface-container-highest overflow-hidden"></div>
<span class="font-body font-semibold tracking-wide">VOID_WALKER</span>
</div>
<div class="w-32 text-right font-headline font-bold text-on-surface/80 group-hover:text-secondary">411,000</div>
</div>
<!-- List Item 10 -->
<div class="flex items-center bg-surface-container-low/50 hover:bg-surface-container transition-colors rounded-lg px-6 py-4 group border-l-2 border-transparent hover:border-tertiary">
<div class="w-12 font-headline font-bold text-lg opacity-40 group-hover:text-tertiary group-hover:opacity-100">10</div>
<div class="flex-grow flex items-center gap-3 px-4">
<div class="w-8 h-8 rounded-sm bg-surface-container-highest overflow-hidden"></div>
<span class="font-body font-semibold tracking-wide">DATA_STORM</span>
</div>
<div class="w-32 text-right font-headline font-bold text-on-surface/80 group-hover:text-tertiary">389,500</div>
</div>
</div>
<!-- Call to Action -->
<div class="mt-16 flex flex-col items-center">
<button class="px-12 py-4 bg-gradient-to-r from-primary to-primary-container rounded-full font-headline text-sm font-bold tracking-widest text-[#003f43] uppercase hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(0,238,252,0.3)]">
                JOIN THE FIGHT
            </button>
<p class="mt-4 font-label text-[10px] opacity-40 tracking-widest uppercase">Your best rank: 1,402</p>
</div>
</main>
<!-- BottomNavBar Shell -->
<nav class="fixed bottom-0 w-full bg-[#131319]/90 backdrop-blur-2xl rounded-t-2xl z-50 shadow-[0_-10px_40px_rgba(0,240,255,0.05)] border-t border-[#f9f5fd]/10">
<div class="fixed bottom-0 w-full flex justify-around items-center pt-3 pb-6 px-4">
<a class="flex flex-col items-center justify-center text-[#f9f5fd]/30 hover:text-[#8ff5ff] transition-colors active:scale-90" href="#">
<span class="material-symbols-outlined mb-1" data-icon="play_arrow">play_arrow</span>
<span class="font-['Space_Grotesk'] text-[10px] font-semibold tracking-widest uppercase">PLAY</span>
</a>
<a class="flex flex-col items-center justify-center text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.6)] scale-110 active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined mb-1" data-icon="emoji_events">emoji_events</span>
<span class="font-['Space_Grotesk'] text-[10px] font-semibold tracking-widest uppercase">SCORES</span>
</a>
<a class="flex flex-col items-center justify-center text-[#f9f5fd]/30 hover:text-[#8ff5ff] transition-colors active:scale-90" href="#">
<span class="material-symbols-outlined mb-1" data-icon="settings">settings</span>
<span class="font-['Space_Grotesk'] text-[10px] font-semibold tracking-widest uppercase">SETTINGS</span>
</a>
</div>
</nav>
</body></html>