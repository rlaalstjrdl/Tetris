<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
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
      text-shadow: 0 0 10px rgba(143, 245, 255, 0.5), 0 0 20px rgba(143, 245, 255, 0.3);
    }
    .glass-panel {
      backdrop-filter: blur(20px);
      background: rgba(19, 19, 25, 0.7);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface text-on-surface font-body min-h-screen selection:bg-primary selection:text-on-primary overflow-hidden">
<!-- Top App Bar -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 w-full bg-[#0e0e13]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
<div class="flex items-center gap-4">
<button class="text-[#00F0FF] hover:scale-105 transition-transform duration-300 active:scale-95">
<span class="material-symbols-outlined">menu</span>
</button>
<h1 class="text-xl font-bold tracking-tighter text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] font-['Space_Grotesk'] uppercase">TETRIS NEON</h1>
</div>
<div class="flex items-center gap-6">
<button class="text-[#f9f5fd]/40 hover:scale-105 transition-transform duration-300 hover:text-[#00F0FF]">
<span class="material-symbols-outlined">leaderboard</span>
</button>
</div>
</header>
<!-- Background Game Simulation (Blurred) -->
<main class="relative pt-24 pb-32 min-h-screen flex items-center justify-center overflow-hidden">
<div class="absolute inset-0 z-0 opacity-20 scale-110 pointer-events-none grid grid-cols-10 gap-1 p-8 blur-sm">
<!-- Simulated Tetris Grid -->
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-primary rounded-sm aspect-square shadow-[inset_0_0_8px_rgba(143,245,255,0.6)]"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-secondary rounded-sm aspect-square shadow-[inset_0_0_8px_rgba(255,86,236,0.6)]"></div>
<div class="bg-secondary rounded-sm aspect-square shadow-[inset_0_0_8px_rgba(255,86,236,0.6)]"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-tertiary rounded-sm aspect-square shadow-[inset_0_0_8px_rgba(188,255,95,0.6)]"></div>
<div class="bg-tertiary rounded-sm aspect-square shadow-[inset_0_0_8px_rgba(188,255,95,0.6)]"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
<div class="bg-surface-container-low rounded-sm aspect-square"></div>
</div>
<!-- Game Over Overlay -->
<div class="relative z-10 w-full max-w-2xl mx-auto px-6">
<div class="glass-panel border border-outline-variant/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-center">
<!-- Header Section -->
<div class="mb-12 text-center">
<span class="font-label text-sm tracking-[0.4em] text-primary/60 uppercase mb-4 block">Session Terminated</span>
<h2 class="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-surface neon-glow-primary">
            GAME OVER
          </h2>
</div>
<!-- Stats Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
<!-- Final Score Card -->
<div class="bg-surface-container-high rounded-xl p-6 flex flex-col justify-between border-l-4 border-primary">
<span class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Final Score</span>
<div class="flex items-baseline gap-2 mt-2">
<span class="font-headline text-4xl text-on-surface">124,500</span>
<span class="text-primary text-sm font-label">PTS</span>
</div>
</div>
<!-- Level Reached Card -->
<div class="bg-surface-container-high rounded-xl p-6 flex flex-col justify-between">
<span class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Level Reached</span>
<div class="flex items-baseline gap-2 mt-2">
<span class="font-headline text-4xl text-on-surface">18</span>
<span class="text-tertiary text-sm font-label">MAX</span>
</div>
</div>
<!-- High Score Comparison -->
<div class="bg-surface-container-high rounded-xl p-6 flex flex-col justify-between md:col-span-2 relative overflow-hidden">
<div class="relative z-10 flex justify-between items-end">
<div>
<span class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Personal Best</span>
<div class="font-headline text-2xl text-on-surface mt-1">142,800</div>
</div>
<div class="text-right">
<div class="flex items-center gap-1 text-secondary font-label text-xs uppercase mb-1">
<span class="material-symbols-outlined text-sm">trending_down</span>
                  18,300 to record
                </div>
<div class="w-48 h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary" style="width: 87%;"></div>
</div>
</div>
</div>
</div>
</div>
<!-- Actions -->
<div class="flex flex-col md:flex-row gap-4 w-full">
<button class="flex-1 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 px-8 rounded-full font-label text-sm font-bold tracking-widest uppercase hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(143,245,255,0.3)]">
            REPLAY
          </button>
<button class="flex-1 bg-surface-container-highest text-on-surface py-4 px-8 rounded-full font-label text-sm font-bold tracking-widest uppercase hover:bg-surface-bright active:scale-95 transition-all duration-300 border border-outline-variant/20">
            MAIN MENU
          </button>
</div>
<!-- Decorative Metadata -->
<div class="mt-8 flex gap-8">
<div class="flex items-center gap-2 opacity-30">
<span class="material-symbols-outlined text-xs">timer</span>
<span class="font-label text-[10px] tracking-widest uppercase">Time: 12:44</span>
</div>
<div class="flex items-center gap-2 opacity-30">
<span class="material-symbols-outlined text-xs">layers</span>
<span class="font-label text-[10px] tracking-widest uppercase">Lines: 154</span>
</div>
</div>
</div>
</div>
</main>
<!-- Bottom Navigation -->
<nav class="fixed bottom-0 w-full flex justify-around items-center pt-3 pb-6 px-4 bg-[#131319]/90 backdrop-blur-2xl border-t border-[#f9f5fd]/10 z-50">
<a class="flex flex-col items-center justify-center text-[#f9f5fd]/30 hover:text-[#8ff5ff] transition-colors active:scale-90" href="#">
<span class="material-symbols-outlined mb-1">play_arrow</span>
<span class="font-['Space_Grotesk'] text-[10px] font-semibold tracking-widest uppercase">PLAY</span>
</a>
<a class="flex flex-col items-center justify-center text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.6)] scale-110 active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined mb-1">emoji_events</span>
<span class="font-['Space_Grotesk'] text-[10px] font-semibold tracking-widest uppercase">SCORES</span>
</a>
<a class="flex flex-col items-center justify-center text-[#f9f5fd]/30 hover:text-[#8ff5ff] transition-colors active:scale-90" href="#">
<span class="material-symbols-outlined mb-1">settings</span>
<span class="font-['Space_Grotesk'] text-[10px] font-semibold tracking-widest uppercase">SETTINGS</span>
</a>
</nav>
</body></html>