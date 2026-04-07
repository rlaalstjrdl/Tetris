<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>TETRIS NEON - Leaderboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&amp;family=Plus+Jakarta+Sans:wght@300..800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                    "headline": [
                            "Space Grotesk"
                    ],
                    "body": [
                            "Plus Jakarta Sans"
                    ],
                    "label": [
                            "Space Grotesk"
                    ]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .neon-glow-primary {
            text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }
        .neon-glow-tertiary {
            text-shadow: 0 0 10px rgba(142, 255, 113, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #131319;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #25252d;
            border-radius: 10px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-background text-on-background font-body selection:bg-primary/30 min-h-screen flex flex-col">
<!-- TopAppBar -->
<header class="bg-[#0e0e13] dark:bg-[#0e0e13] flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50">
<div class="flex items-center gap-4">
<button class="text-[#00F0FF] active:scale-95 duration-100 transition-colors hover:text-[#8ff5ff]">
<span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<h1 class="font-['Space_Grotesk'] tracking-tighter uppercase font-bold text-2xl italic text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                TETRIS NEON
            </h1>
</div>
<button class="text-[#00F0FF] active:scale-95 duration-100 transition-colors hover:text-[#8ff5ff]">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main class="flex-grow pt-24 pb-32 px-6 max-w-5xl mx-auto w-full">
<!-- Hero Section / Title -->
<div class="mb-12 flex flex-col items-start">
<span class="font-label text-primary font-bold tracking-widest text-xs mb-2">WORLD RANKINGS</span>
<h2 class="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-background uppercase italic leading-none">
                Hall of <span class="text-tertiary neon-glow-tertiary">Flux</span>
</h2>
</div><!-- Search Bar Section -->
<div class="mb-10 w-full max-w-2xl">
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-primary/70 group-focus-within:text-primary transition-colors">search</span>
</div>
<input class="w-full bg-surface-container-low border-2 border-primary/20 focus:border-primary/80 focus:ring-0 text-on-surface font-label text-sm tracking-widest py-4 pl-12 pr-4 rounded-xl transition-all placeholder:text-on-surface-variant/40 outline-none shadow-[0_0_15px_rgba(0,240,255,0.05)] focus:shadow-[0_0_20px_rgba(0,240,255,0.2)]" placeholder="SEARCH FOR A PLAYER..." type="text"/>
<div class="absolute inset-y-0 right-4 flex items-center">
<button class="bg-primary/10 hover:bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-lg transition-colors tracking-tighter">
                FILTER
            </button>
</div>
</div>
</div>
<!-- Podium / Top 3 Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<!-- Rank 2 -->
<div class="md:order-1 bg-surface-container-high backdrop-blur-xl bg-opacity-60 p-6 rounded-xl relative flex flex-col items-center justify-end overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="w-20 h-20 rounded-full border-2 border-secondary mb-4 p-1">
<img class="w-full h-full object-cover rounded-full" data-alt="Portrait of a serious male gamer with neon lighting highlights on his face in a dark room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaEoroiivbCKIIjwiQprNV_Ov15tGK9hLjfPoAPlVUHvTsbXPKLKyxPgU9tS_QF3zPYovtPryiAqWprrsAYFAFGxJQB6drKmedg2gcQoGRSJAaAM7pcvwkX-ck1SnEnUfrnoPwuAMhOTPF-UaD3xpE9V6ikeBt0uByMMeU-7KcLpYXxur79rvTrqTVMJq1eM8BcrGsR0OTqqcoRhg7yoh38xbrjg-BLyzfIuwwXa_MBdJRt-3n9s8F2vEqMy4TrMGVKeJmeCtcNg"/>
</div>
<span class="font-headline text-2xl font-bold text-secondary italic mb-1">#2 NEON_SAMURAI</span>
<span class="font-headline text-4xl font-black text-on-surface tracking-tighter">842,500</span>
<div class="mt-4 px-3 py-1 bg-secondary/20 rounded-lg">
<span class="font-label text-[10px] text-secondary font-bold">LVL 88</span>
</div>
</div>
<!-- Rank 1 - Primary focus -->
<div class="md:order-2 bg-surface-container-highest backdrop-blur-2xl p-8 rounded-xl relative flex flex-col items-center justify-center overflow-hidden border-b-4 border-tertiary shadow-[0_10px_40px_-15px_rgba(142,255,113,0.3)]">
<div class="absolute -top-10 -right-10 w-40 h-40 bg-tertiary/20 blur-[80px] rounded-full"></div>
<div class="relative">
<div class="w-32 h-32 rounded-full border-4 border-tertiary mb-6 p-1.5 shadow-[0_0_25px_rgba(142,255,113,0.4)]">
<img class="w-full h-full object-cover rounded-full" data-alt="Close-up artistic portrait of a woman with vibrant neon green hair and sharp cyber-punk makeup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlkZR4esL9w1ta32lG5jnsAmm322ygzh4JxkElKLJzrx46JhYBPmG0nTOv6UlMCf6wTIt-_i24zc8n42lBdwWts8klaEAEteBLl1yawoLc9nlCz3evB2pp_E8S6ZMQ25xP6cfXbYOahd4z-KoWIiBIWyidFOl-V2FzmpPkWSDKxHiLzQehLalm6oRGTA5YPxHpuYWjl_cisBC-d3pc_zXYhQsVzPpkAUX5Movka7tDw0je4wDumllD2RFiPVh0Qw1pztlgGn1inA"/>
</div>
<div class="absolute -bottom-2 -right-2 bg-tertiary text-background w-10 h-10 rounded-full flex items-center justify-center font-headline font-black text-xl italic border-4 border-surface-container-highest">1</div>
</div>
<span class="font-headline text-3xl font-black text-tertiary neon-glow-tertiary italic mb-2 tracking-tight">CYBER_QUEEN</span>
<span class="font-headline text-5xl md:text-6xl font-black text-on-surface tracking-tighter">1,205,400</span>
<div class="mt-4 px-4 py-1.5 bg-tertiary text-background rounded-lg">
<span class="font-label text-xs font-black">ULTRA ELITE</span>
</div>
</div>
<!-- Rank 3 -->
<div class="md:order-3 bg-surface-container-high backdrop-blur-xl bg-opacity-60 p-6 rounded-xl relative flex flex-col items-center justify-end overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="w-20 h-20 rounded-full border-2 border-primary mb-4 p-1">
<img class="w-full h-full object-cover rounded-full" data-alt="Digital artist portrait with blue and cyan lighting and modern tech aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY5AXS4AIi0AD7LS1W_rQUW6-xfBtJWQUcW5SMlPDiZM1DM3E1Xp9IQavlIlqlU1gZ8oZ4wSFSQ0rC5WhAZqotXv9VjjYp5jzaQoQisAa0HPYhS8c4Z-v4Pof55xctPuDzISh6ryX9GND3jhke8_hRtMJpXEwB09wxnjIO0UUgcVNgZ9Y7V84ppOw7zKGDt5XhkJp-bfFHGzvllyXBRlmScIacweknRBixIeWkdEqfojFrligpY6jsjkuiPs7bQZocphBc9iEP-A"/>
</div>
<span class="font-headline text-2xl font-bold text-primary italic mb-1">#3 VOID_RUNNER</span>
<span class="font-headline text-4xl font-black text-on-surface tracking-tighter">710,200</span>
<div class="mt-4 px-3 py-1 bg-primary/20 rounded-lg">
<span class="font-label text-[10px] text-primary font-bold">LVL 72</span>
</div>
</div>
</div><!-- Search Bar Section -->
<div class="mb-10 w-full max-w-2xl">
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-primary/70 group-focus-within:text-primary transition-colors">search</span>
</div>
<input class="w-full bg-surface-container-low border-2 border-primary/20 focus:border-primary/80 focus:ring-0 text-on-surface font-label text-sm tracking-widest py-4 pl-12 pr-4 rounded-xl transition-all placeholder:text-on-surface-variant/40 outline-none shadow-[0_0_15px_rgba(0,240,255,0.05)] focus:shadow-[0_0_20px_rgba(0,240,255,0.2)]" placeholder="SEARCH FOR A PLAYER..." type="text"/>
<div class="absolute inset-y-0 right-4 flex items-center">
<button class="bg-primary/10 hover:bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-lg transition-colors tracking-tighter">
                FILTER
            </button>
</div>
</div>
</div>
<!-- Leaderboard List -->
<div class="bg-surface-container-low rounded-2xl p-1 md:p-4 mb-8">
<div class="flex items-center justify-between px-6 py-4 opacity-50 font-label text-[10px] uppercase font-bold tracking-widest">
<div class="flex gap-12">
<span class="w-8">RANK</span>
<span>PLAYER</span>
</div>
<span>SCORE</span>
</div>
<div class="space-y-2">
<!-- User's Highlighted Rank -->
<div class="flex items-center justify-between px-6 py-5 bg-surface-container-highest rounded-xl border-l-4 border-primary shadow-[0_0_20px_rgba(0,240,255,0.15)] transform scale-[1.02]">
<div class="flex items-center gap-6">
<span class="font-headline text-2xl font-black italic text-primary w-8">24</span>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Stylized avatar of a user with blue lighting and digital artifacts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJpz352-_f8DQc-UIOLWxGJfr56TUP4tRCVxiH4_GVBS5uNrZ8ND76LnuPmtQqvxP6nKq_9btojVCeoJuMFwkZtVoUjoYdzeyl0UW3rg-n25B8T7jlJaLPL4oZ9vrQICSm0Bo__zd1OAF91QNV_iDa25DXJ0whEtickikdWq3xPFlgJBaaTdrnSdiukplv8zKasMuyE72JlV4X88Us3z83v3suaNefAHJKUSuPgRJ7pu9BKxRgeEHXpxoW1lN3RL_uRyBg6Sn1dQ"/>
</div>
<div class="flex flex-col">
<span class="font-headline font-bold text-lg text-on-surface leading-none mb-1 uppercase tracking-tight">YOU</span>
<span class="font-label text-[10px] text-primary font-bold uppercase">Personal Best: 242k</span>
</div>
</div>
</div>
<div class="flex flex-col items-end">
<span class="font-headline text-2xl font-black text-on-surface tracking-tighter">242,100</span>
</div>
</div>
<!-- Regular Rows -->
<div class="flex items-center justify-between px-6 py-4 hover:bg-surface-container-high transition-colors rounded-xl group">
<div class="flex items-center gap-6">
<span class="font-headline text-xl font-bold italic text-on-surface-variant w-8 group-hover:text-on-surface transition-colors">4</span>
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" data-alt="Digital representation of a gamer profile with moody studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDue1goXPcXvIj8vUxOZW3VA78kvokRA30W3-D246JkHblOWyQapQmiAuCKdBvUwFWo77qAD-xkc5W6Xv11_zbuSiIxuupd6aIrZQlVrxPu8rFp3nTr28IOKRpaFveFb0pVA88c76IA6G1gdfVfbPOOix4EcinWvel8DxmOr9gkVCsLGFBm7mNbOFdBHYNC91Yf5y--B7LQAjlUqGFWBKIqGEiNOPpTjXCmq3SDSj6ZxYbke_hptVtt4GlEB6UUkXCkSoq5JHkx4g"/>
</div>
<span class="font-headline font-bold text-on-surface-variant group-hover:text-on-surface uppercase tracking-tight">GLITCH_MASTER</span>
</div>
</div>
<span class="font-headline text-xl font-bold text-on-surface-variant group-hover:text-on-surface tracking-tighter">695,400</span>
</div>
<div class="flex items-center justify-between px-6 py-4 hover:bg-surface-container-high transition-colors rounded-xl group">
<div class="flex items-center gap-6">
<span class="font-headline text-xl font-bold italic text-on-surface-variant w-8 group-hover:text-on-surface transition-colors">5</span>
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" data-alt="Cyberpunk female portrait with purple and pink glowing elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsr0p9Z1od0HMFWexMp8Jvb4pA2sJvQ4hPuvMstcoF4tHJ346nWDfSat6Oovj-rEhr5XGvjCTzoDQxbM_9FvrRDvAAfxID2ROOeXRherDqrgOHcqjg2FQOL4E_YxDkrkWm3V9ew05ZcifFvrStbemJ-SUNfX1lCHrgVeN_4F_EVNnKIcQ0HsWKGngfIvWHwoUmeB6Ibr7Xt6AblIO2h9Tdry2c9r3ZEmkN2_729Ub9sJV2hCnsOLIURuLIB2l4lBIF_BbOUMUgQw"/>
</div>
<span class="font-headline font-bold text-on-surface-variant group-hover:text-on-surface uppercase tracking-tight">PIXEL_REAPER</span>
</div>
</div>
<span class="font-headline text-xl font-bold text-on-surface-variant group-hover:text-on-surface tracking-tighter">682,000</span>
</div>
<div class="flex items-center justify-between px-6 py-4 hover:bg-surface-container-high transition-colors rounded-xl group">
<div class="flex items-center gap-6">
<span class="font-headline text-xl font-bold italic text-on-surface-variant w-8 group-hover:text-on-surface transition-colors">6</span>
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" data-alt="Close up of man with high-tech glasses reflecting neon displays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ4KncijLn_3U-3T6u1m1hw0pisK-cHfuPPjlSCj4deNnFKQjSW2UMzU_53JBNlsBQKlmyf9cYeFGzJ_n5zxJYwygOOtvyz9TpNNsTGIyoABUn-YO6a6-B11KVko2ZAxKCj-WhgG-RmsyK37eDsmaWQVSbsZqua6jRNTYC8RlBB1EfIxwqYh6HcWd6goJkjmNI9P6yxFteZLIlywq9tL_YlrwYpuNcMdxOuCRoXVSnfsSWAwxHuRNhID3IMXZLR3q4qveHUY1z_A"/>
</div>
<span class="font-headline font-bold text-on-surface-variant group-hover:text-on-surface uppercase tracking-tight">NULL_VECTOR</span>
</div>
</div>
<span class="font-headline text-xl font-bold text-on-surface-variant group-hover:text-on-surface tracking-tighter">650,150</span>
</div>
</div>
</div>
<!-- Call to action button -->
<div class="flex justify-center mb-12">
<button class="bg-gradient-to-tr from-primary to-primary-container text-on-primary font-headline font-black py-4 px-12 rounded-xl uppercase tracking-widest shadow-[0_0_30px_rgba(0,238,252,0.3)] hover:shadow-[0_0_45px_rgba(0,238,252,0.5)] active:scale-95 transition-all">
                Challenge Top 3
            </button>
</div><!-- Search Bar Section -->
<div class="mb-10 w-full max-w-2xl">
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-primary/70 group-focus-within:text-primary transition-colors">search</span>
</div>
<input class="w-full bg-surface-container-low border-2 border-primary/20 focus:border-primary/80 focus:ring-0 text-on-surface font-label text-sm tracking-widest py-4 pl-12 pr-4 rounded-xl transition-all placeholder:text-on-surface-variant/40 outline-none shadow-[0_0_15px_rgba(0,240,255,0.05)] focus:shadow-[0_0_20px_rgba(0,240,255,0.2)]" placeholder="SEARCH FOR A PLAYER..." type="text"/>
<div class="absolute inset-y-0 right-4 flex items-center">
<button class="bg-primary/10 hover:bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-lg transition-colors tracking-tighter">
                FILTER
            </button>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#131319]/80 backdrop-blur-xl rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<button class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all active:scale-90 duration-150 ease-out">
<span class="material-symbols-outlined mb-1" data-icon="videogame_asset">videogame_asset</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">PLAY</span>
</button>
<button class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all active:scale-90 duration-150 ease-out">
<span class="material-symbols-outlined mb-1" data-icon="layers">layers</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">LEVELS</span>
</button>
<button class="flex flex-col items-center justify-center bg-[#25252d] text-[#00F0FF] rounded-xl px-4 py-1 shadow-[0_0_15px_rgba(0,240,255,0.3)] active:scale-90 duration-150 ease-out">
<span class="material-symbols-outlined mb-1" data-icon="leaderboard" style="font-variation-settings: 'FILL' 1;">leaderboard</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">LEADERS</span>
</button>
<button class="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:bg-[#25252d] transition-all active:scale-90 duration-150 ease-out">
<span class="material-symbols-outlined mb-1" data-icon="person">person</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold">PROFILE</span>
</button>
</nav>
<!-- Decorative background elements -->
<div class="fixed top-[20%] -left-20 w-64 h-64 bg-secondary/5 blur-[100px] pointer-events-none -z-10"></div>
<div class="fixed bottom-[10%] -right-20 w-80 h-80 bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>
<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none -z-20 overflow-hidden">
<div class="grid grid-cols-12 gap-1 w-full h-full rotate-12 scale-150">
<!-- Simulated grid background -->
<div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div>
<div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div><div class="border border-on-surface-variant"></div>
</div>
</div>
</body></html>