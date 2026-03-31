<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>TETRIS NEON - Kinetic Play</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
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
        .glass-panel {
            background: rgba(37, 37, 45, 0.4);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        
        /* 3D Neon Block Styles */
        .neon-block {
            position: relative;
            border-radius: 4px;
            border-width: 2px;
            box-shadow: inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px currentColor;
            overflow: hidden;
        }
        .neon-block::before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            height: 40%;
            background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
            border-radius: 2px;
        }
        .neon-block::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 70%);
        }

        .block-cyan { background-color: rgba(143, 245, 255, 0.7); border-color: #8ff5ff; color: #8ff5ff; }
        .block-magenta { background-color: rgba(255, 86, 236, 0.7); border-color: #ff56ec; color: #ff56ec; }
        .block-lime { background-color: rgba(188, 255, 95, 0.7); border-color: #bcff5f; color: #bcff5f; }
        .block-yellow { background-color: rgba(255, 225, 0, 0.7); border-color: #ffe100; color: #ffe100; }
        .block-orange { background-color: rgba(255, 126, 0, 0.7); border-color: #ff7e00; color: #ff7e00; }

        /* Grid Effects */
        .scanline-grid {
            background: 
                linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            background-size: 100% 4px, 3px 100%;
            pointer-events: none;
        }
        
        .grid-glow {
            box-shadow: inset 0 0 50px rgba(0, 240, 255, 0.05);
        }

        /* Control Button States */
        .control-btn {
            background: rgba(25, 25, 31, 0.6);
            border: 1px solid rgba(0, 240, 255, 0.2);
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .control-btn:active {
            background: rgba(0, 240, 255, 0.15);
            border-color: #00F0FF;
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.6);
            transform: scale(0.9) translateY(2px);
            color: #00F0FF;
        }
        .control-btn-magenta:active {
            background: rgba(255, 86, 236, 0.15);
            border-color: #ff56ec;
            box-shadow: 0 0 30px rgba(255, 86, 236, 0.6);
            color: #ff56ec;
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
<!-- Top App Bar -->
<header class="fixed top-0 w-full z-50 bg-[#0e0e13]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5">
<nav class="flex justify-between items-center px-6 py-4 w-full">
<button class="material-symbols-outlined text-[#00F0FF] hover:scale-105 transition-transform duration-300 active:scale-95">menu</button>
<h1 class="text-xl font-headline font-bold tracking-tighter text-[#00F0FF] drop-shadow-[0_0_12px_rgba(0,240,255,0.6)] uppercase italic">TETRIS NEON</h1>
<button class="material-symbols-outlined text-[#00F0FF] hover:scale-105 transition-transform duration-300 active:scale-95">leaderboard</button>
</nav>
</header>
<main class="min-h-screen pt-24 pb-32 px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
<!-- Left Side: HOLD Module -->
<aside class="hidden md:flex flex-col gap-8 self-start mt-12">
<div class="surface-container-high rounded-lg p-6 w-32 glass-panel border border-outline-variant/15">
<span class="font-label text-[10px] uppercase tracking-widest text-on-surface/40 block mb-4">HOLD</span>
<div class="aspect-square flex items-center justify-center bg-surface-container-lowest/50 rounded-lg">
<div class="grid grid-cols-2 gap-1">
<div class="w-6 h-6 neon-block block-lime"></div>
<div class="w-6 h-6 neon-block block-lime"></div>
<div class="w-6 h-6 neon-block block-lime"></div>
<div class="w-6 h-6 neon-block block-lime"></div>
</div>
</div>
</div>
<div class="surface-container-high rounded-lg p-6 w-32 glass-panel border border-outline-variant/15">
<span class="font-label text-[10px] uppercase tracking-widest text-on-surface/40 block mb-4">LEVEL</span>
<span class="font-headline text-3xl font-bold text-primary drop-shadow-[0_0_8px_rgba(143,245,255,0.4)]">12</span>
</div>
</aside>
<!-- Center: Game Board -->
<section class="relative group">
<!-- The Well Background -->
<div class="surface-container-low p-1.5 rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/10 overflow-hidden">
<div class="relative grid grid-cols-10 grid-rows-20 gap-px bg-surface-container-lowest w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-lg grid-glow">
<!-- Scanline overlay -->
<div class="absolute inset-0 scanline-grid z-10 opacity-40"></div>
<!-- Sample Static Blocks -->
<script>
    for(let i=0; i<150; i++) document.write('<div class="bg-white/5 border-[0.5px] border-white/5"></div>');
</script>
<!-- Falling Piece (I-Block) -->
<div class="neon-block block-cyan"></div>
<div class="neon-block block-cyan"></div>
<div class="neon-block block-cyan"></div>
<div class="neon-block block-cyan"></div>
<script>for(let i=0; i<6; i++) document.write('<div class="bg-white/5 border-[0.5px] border-white/5"></div>');</script>
<script>for(let i=0; i<20; i++) document.write('<div class="bg-white/5 border-[0.5px] border-white/5"></div>');</script>
<!-- Settled Blocks -->
<div class="bg-white/5 border-[0.5px] border-white/5"></div>
<div class="bg-white/5 border-[0.5px] border-white/5"></div>
<div class="neon-block block-magenta"></div>
<div class="neon-block block-magenta"></div>
<script>for(let i=0; i<6; i++) document.write('<div class="bg-white/5 border-[0.5px] border-white/5"></div>');</script>
<div class="bg-white/5 border-[0.5px] border-white/5"></div>
<div class="neon-block block-magenta"></div>
<div class="neon-block block-magenta"></div>
<div class="neon-block block-orange"></div>
<div class="neon-block block-orange"></div>
<div class="neon-block block-orange"></div>
<div class="neon-block block-orange"></div>
<script>for(let i=0; i<3; i++) document.write('<div class="bg-white/5 border-[0.5px] border-white/5"></div>');</script>
</div>
</div>
<!-- Background Glow -->
<div class="absolute -inset-10 bg-primary/10 blur-[100px] -z-10 rounded-full animate-pulse"></div>
</section>
<!-- Right Side: NEXT & SCORE -->
<aside class="flex flex-row md:flex-col gap-6 md:gap-8 self-center md:self-end md:mb-12">
<div class="surface-container-high rounded-lg p-6 w-36 md:w-40 glass-panel border border-outline-variant/15">
<span class="font-label text-[10px] uppercase tracking-widest text-on-surface/40 block mb-4">NEXT</span>
<div class="aspect-square flex items-center justify-center bg-surface-container-lowest/50 rounded-lg">
<div class="grid grid-cols-3 gap-1">
<div class="w-6 h-6 neon-block block-magenta"></div>
<div class="w-6 h-6 neon-block block-magenta"></div>
<div class="w-6 h-6 neon-block block-magenta"></div>
<div class="w-6 h-6"></div>
<div class="w-6 h-6 neon-block block-magenta"></div>
<div class="w-6 h-6"></div>
</div>
</div>
</div>
<div class="surface-container-high rounded-lg p-6 w-44 md:w-48 glass-panel border border-outline-variant/15 shadow-xl">
<span class="font-label text-[10px] uppercase tracking-widest text-on-surface/40 block mb-2">SCORE</span>
<span class="font-headline text-3xl font-bold tracking-tight text-on-surface drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">14,250</span>
<div class="mt-4 pt-4 border-t border-outline-variant/10">
<span class="font-label text-[10px] uppercase tracking-widest text-on-surface/40 block mb-1">LINES</span>
<span class="font-headline text-xl font-medium text-tertiary">42</span>
</div>
</div>
</aside>
</main>
<!-- Touch Controls Pad -->
<div class="fixed bottom-24 w-full px-6 md:hidden z-40">
<div class="flex justify-between items-end max-w-md mx-auto">
<!-- D-Pad Left/Right/Down -->
<div class="grid grid-cols-3 gap-4">
<div class="col-start-2"></div>
<button class="w-16 h-16 rounded-full control-btn flex items-center justify-center text-primary/80">
<span class="material-symbols-outlined text-3xl">keyboard_arrow_left</span>
</button>
<button class="w-16 h-16 rounded-full control-btn flex items-center justify-center text-primary/80">
<span class="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
</button>
<button class="w-16 h-16 rounded-full control-btn flex items-center justify-center text-primary/80">
<span class="material-symbols-outlined text-3xl">keyboard_arrow_right</span>
</button>
</div>
<!-- Rotate Action -->
<button class="w-24 h-24 rounded-full control-btn control-btn-magenta flex items-center justify-center text-secondary/80 border-secondary/30">
<span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">rotate_right</span>
</button>
</div>
</div>
<!-- Bottom Navigation Bar -->
<footer class="fixed bottom-0 w-full rounded-t-2xl z-50 bg-[#131319]/95 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,240,255,0.1)]">
<div class="fixed bottom-0 w-full flex justify-around items-center pt-3 pb-6 px-4">
<a class="flex flex-col items-center justify-center text-[#00F0FF] drop-shadow-[0_0_12px_rgba(0,240,255,0.7)] scale-110" href="#">
<span class="material-symbols-outlined mb-1">play_arrow</span>
<span class="font-label text-[10px] font-semibold tracking-widest uppercase">PLAY</span>
</a>
<a class="flex flex-col items-center justify-center text-[#f9f5fd]/30 hover:text-[#8ff5ff] transition-all" href="#">
<span class="material-symbols-outlined mb-1">emoji_events</span>
<span class="font-label text-[10px] font-semibold tracking-widest uppercase">SCORES</span>
</a>
<a class="flex flex-col items-center justify-center text-[#f9f5fd]/30 hover:text-[#8ff5ff] transition-all" href="#">
<span class="material-symbols-outlined mb-1">settings</span>
<span class="font-label text-[10px] font-semibold tracking-widest uppercase">SETTINGS</span>
</a>
</div>
</footer>
</body></html>