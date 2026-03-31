<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
    }
    .neon-grid {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(143, 245, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(143, 245, 255, 0.05) 1px, transparent 1px);
      animation: grid-scroll 20s linear infinite;
    }
    @keyframes grid-scroll {
      from { background-position: 0 0; }
      to { background-position: 40px 40px; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(var(--rot)); }
      50% { transform: translateY(-20px) rotate(calc(var(--rot) + 5deg)); }
    }
    @keyframes pulse-primary {
      0% { box-shadow: 0 0 0 0 rgba(143, 245, 255, 0.4); }
      70% { box-shadow: 0 0 0 20px rgba(143, 245, 255, 0); }
      100% { box-shadow: 0 0 0 0 rgba(143, 245, 255, 0); }
    }
    @keyframes neon-flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        opacity: 1;
        text-shadow: 0 0 10px rgba(143, 245, 255, 0.8), 0 0 20px rgba(143, 245, 255, 0.4);
      }
      20%, 22%, 24%, 55% {
        opacity: 0.8;
        text-shadow: none;
      }
    }
    .floating-element {
      animation: float 6s ease-in-out infinite;
    }
    .text-glow-layered {
      text-shadow: 
        0 0 10px rgba(143, 245, 255, 0.5),
        0 0 20px rgba(143, 245, 255, 0.3),
        0 0 30px rgba(143, 245, 255, 0.2);
    }
    .pulse-glow {
      animation: pulse-primary 3s infinite;
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen overflow-hidden">
<!-- Background Layer: Kinetic Neon Gallery -->
<div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div class="absolute inset-0 neon-grid opacity-30"></div>
<!-- Floating Decorative Tetrominoes (Abstract/Asymmetric) -->
<div class="absolute top-[15%] left-[10%] w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm floating-element blur-[1px]" style="--glow-color: 143, 245, 255; --rot: -12deg; animation-delay: 0s;"></div>
<div class="absolute bottom-[20%] right-[15%] w-24 h-12 rounded-lg bg-secondary/10 border border-secondary/20 backdrop-blur-sm floating-element blur-[2px]" style="--glow-color: 255, 86, 236; --rot: 45deg; animation-delay: 1s;"></div>
<div class="absolute top-[60%] left-[5%] w-12 h-20 rounded-lg bg-tertiary/10 border border-tertiary/20 backdrop-blur-sm floating-element blur-[1px]" style="--glow-color: 188, 255, 95; --rot: 110deg; animation-delay: 2.5s;"></div>
<!-- Particles / Floating Dots -->
<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
<div class="w-2 h-2 rounded-full bg-primary/40 absolute top-1/4 left-1/3 blur-sm animate-pulse"></div>
<div class="w-1 h-1 rounded-full bg-secondary/40 absolute bottom-1/3 right-1/4 blur-none animate-bounce" style="animation-duration: 4s;"></div>
<div class="w-3 h-3 rounded-full bg-tertiary/20 absolute top-2/3 left-1/2 blur-md animate-pulse" style="animation-duration: 5s;"></div>
</div>
<!-- Large Ambient Glows -->
<div class="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
<div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
</div>
<!-- Shared Component: TopAppBar -->
<header class="fixed top-0 w-full z-50 bg-[#0e0e13]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
<div class="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
<div class="flex items-center gap-4">
<button class="text-[#00F0FF] hover:scale-105 transition-transform duration-300 active:scale-95">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<span class="font-headline tracking-widest uppercase text-sm text-[#00F0FF]">SYSTEM_OS</span>
</div>
<div class="text-xl font-bold tracking-tighter text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] font-headline">
        TETRIS NEON
      </div>
<div class="flex items-center gap-6">
<nav class="hidden md:flex gap-8">
<span class="font-headline text-sm tracking-widest text-[#00F0FF] drop-shadow-md cursor-default">HOME</span>
<span class="font-headline text-sm tracking-widest text-[#f9f5fd]/40 hover:text-[#00F0FF] transition-colors cursor-pointer">ARCHIVE</span>
</nav>
<button class="text-[#00F0FF] hover:scale-105 transition-transform duration-300 active:scale-95">
<span class="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
</button>
</div>
</div>
<div class="bg-gradient-to-b from-[#131319] to-transparent h-1"></div>
</header>
<!-- Main Content: Menu Canvas -->
<main class="relative z-10 flex flex-col items-center justify-center min-h-screen pt-16 pb-24 px-6">
<!-- Central Hero Branding -->
<div class="mb-20 text-center">
<div class="inline-block relative">
<h1 class="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-on-surface leading-none">
<span class="block text-glow-layered opacity-90">TETRIS</span>
<span class="text-primary block -mt-2 drop-shadow-[0_0_35px_rgba(143,245,255,0.6)] animate-[neon-flicker_4s_infinite]">NEON</span>
</h1>
<div class="absolute -right-8 top-4 md:-right-12 font-headline text-xs font-bold tracking-[0.3em] text-secondary uppercase vertical-text transform rotate-90 origin-left opacity-80">
          V.2024.KINETIC
        </div>
</div>
<div class="mt-8 flex flex-col items-center gap-2">
<div class="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
<p class="font-headline text-sm tracking-[0.5em] text-on-surface/60 uppercase">Digital Art Installation</p>
<div class="h-px w-12 bg-gradient-to-r from-transparent via-secondary/40 to-transparent"></div>
</div>
</div>
<!-- Main Navigation Grid (Bento Style & Asymmetric) -->
<div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Primary Action: Start Game -->
<div class="md:col-span-8 group cursor-pointer">
<div class="relative overflow-hidden rounded-xl bg-primary-container p-8 h-48 flex flex-col justify-end transition-all duration-500 hover:scale-[1.03] pulse-glow">
<!-- Animated background pattern for button -->
<div class="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
<div class="absolute top-6 right-6 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
<span class="material-symbols-outlined text-6xl text-on-primary/30" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
<div class="relative z-10">
<span class="font-headline text-xs tracking-widest text-on-primary-fixed/70 block mb-1 group-hover:translate-x-1 transition-transform">INITIALIZE_CORE</span>
<h2 class="font-headline text-4xl font-bold text-on-primary uppercase tracking-tight group-hover:drop-shadow-[0_0_15px_rgba(0,63,67,0.4)] transition-all">START GAME</h2>
</div>
<!-- Decorative Tetromino in background of card -->
<div class="absolute -bottom-4 right-20 w-32 h-16 bg-on-primary/10 rounded-lg rotate-12 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110"></div>
</div>
</div>
<!-- Secondary: Leaderboard -->
<div class="md:col-span-4 group cursor-pointer">
<div class="h-48 rounded-xl bg-surface-container-high border border-outline-variant/10 p-6 flex flex-col justify-between transition-all duration-300 hover:bg-surface-container-highest hover:border-secondary/30">
<div class="flex justify-between items-start">
<span class="material-symbols-outlined text-secondary drop-shadow-[0_0_8px_rgba(255,86,236,0.4)]" data-icon="emoji_events">emoji_events</span>
<span class="font-headline text-[10px] tracking-[0.2em] text-on-surface/30 uppercase">HIGH_SCORES</span>
</div>
<h3 class="font-headline text-xl font-bold tracking-tight text-on-surface group-hover:text-secondary transition-colors">LEADERBOARD</h3>
</div>
</div>
<!-- Tertiary: Settings -->
<div class="md:col-span-5 group cursor-pointer">
<div class="h-40 rounded-xl bg-surface-container border border-outline-variant/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/40 group overflow-hidden relative">
<div class="absolute -right-4 -top-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div class="flex items-center gap-3 relative z-10">
<span class="material-symbols-outlined text-on-surface/40 group-hover:rotate-180 transition-transform duration-1000" data-icon="settings">settings</span>
<span class="font-headline text-[10px] tracking-widest text-on-surface/30">SYSTEM.CFG</span>
</div>
<h3 class="font-headline text-lg font-semibold text-on-surface/80 group-hover:text-primary transition-colors relative z-10">SETTINGS</h3>
</div>
</div>
<!-- Social/Community: Mini Bento -->
<div class="md:col-span-7 flex gap-6">
<div class="flex-1 rounded-xl bg-surface-container-low border border-outline-variant/5 p-6 flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/20 transition-all cursor-pointer group">
<span class="font-headline text-xs tracking-[0.3em] text-on-surface/30 group-hover:text-secondary transition-colors group-hover:tracking-[0.4em]">COMMUNITY</span>
</div>
<div class="flex-1 rounded-xl bg-surface-container-low border border-outline-variant/5 p-6 flex items-center justify-center hover:bg-tertiary/10 hover:border-tertiary/20 transition-all cursor-pointer group">
<span class="font-headline text-xs tracking-[0.3em] text-on-surface/30 group-hover:text-tertiary transition-colors group-hover:tracking-[0.4em]">TUTORIAL</span>
</div>
</div>
</div>
</main>
<!-- Shared Component: BottomNavBar (Active state: NONE since it's a menu but standard is PLAY) -->
<footer class="fixed bottom-0 w-full rounded-t-2xl z-50 bg-[#131319]/90 backdrop-blur-2xl border-t border-[#f9f5fd]/10 shadow-[0_-10px_40px_rgba(0,240,255,0.05)] md:hidden">
<div class="flex justify-around items-center pt-3 pb-6 px-4 w-full">
<!-- Destination: PLAY -->
<div class="flex flex-col items-center justify-center text-[#f9f5fd]/30 hover:text-[#8ff5ff] transition-colors active:scale-90 transition-transform">
<span class="material-symbols-outlined text-2xl" data-icon="play_arrow">play_arrow</span>
<span class="font-headline text-[10px] font-semibold tracking-widest mt-1">PLAY</span>
</div>
<!-- Destination: SCORES -->
<div class="flex flex-col items-center justify-center text-[#f9f5fd]/30 hover:text-[#8ff5ff] transition-colors active:scale-90 transition-transform">
<span class="material-symbols-outlined text-2xl" data-icon="emoji_events">emoji_events</span>
<span class="font-headline text-[10px] font-semibold tracking-widest mt-1">SCORES</span>
</div>
<!-- Destination: SETTINGS -->
<div class="flex flex-col items-center justify-center text-[#f9f5fd]/30 hover:text-[#8ff5ff] transition-colors active:scale-90 transition-transform">
<span class="material-symbols-outlined text-2xl" data-icon="settings">settings</span>
<span class="font-headline text-[10px] font-semibold tracking-widest mt-1">SETTINGS</span>
</div>
</div>
</footer>
<!-- Toast Notification (Asymmetric - Bottom Left) -->
<div class="fixed bottom-10 left-10 z-50 max-w-xs md:block hidden animate-in slide-in-from-left duration-500">
<div class="bg-surface-container-highest/80 border border-primary/20 rounded-lg p-4 shadow-2xl backdrop-blur-lg">
<div class="flex items-start gap-4">
<div class="w-2 h-2 rounded-full bg-primary mt-1.5 animate-pulse shadow-[0_0_8px_#8ff5ff]"></div>
<div>
<p class="font-headline text-[10px] tracking-widest text-on-surface/40 uppercase mb-1">Status</p>
<p class="text-xs text-on-surface font-medium leading-relaxed">Neural engine synchronized. Welcome back, Player 01.</p>
</div>
</div>
</div>
</div>
<!-- Hidden Image Data Alts for Generation Context -->
<div class="hidden">
<img data-alt="abstract kinetic 3d neon glass tetris blocks floating in a dark digital void with soft volumetric cyan and magenta lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ105vhu0JOGpbNjMQU6T43EsAOHGC1rl-K0Xyzpg-h5gwQNWB6sn5IqKSniqR-ndL1b9wRPPo-5bBt0SZkJxBOlmJl_iNin1phYkBJ6GnVSjIocLZRhyD-t8SdmIEl2QJdEzyBdCMZQ_8tVCMshS3_p4MvvnpTbk480Esl2UeROjY8ur-GmliosmfL1WjLL60P55EwPExyftyAiWZkisg2h5xOQDspFEylq_12sIDCz0qugtG8wAUIwSm98SPuuXDPlouR5rfbA"/>
</div>
</body></html>