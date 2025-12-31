# **App Name**: Apex Anomaly

## Core Features:

- State Machine: Transitions between NEWSLETTER, GLITCH, TERMINAL, and LOCKDOWN phases based on user interactions.
- Phase 1: Newsletter: Presents content in a Steampunk/Industrial visual style with news articles, a scrolling ticker, and interactive ads. Mimics 'The Daily Grind'.
- Phase 1: 'The Gate' Search Bar: A broken search bar that triggers the glitch sequence if the user types 'COLDFRIES'.
- Phase 1: 'The Puzzle' Ads: Displays 4 vertical ads; clicking them triggers a modal with a 'wage theft' animation; closing reveals a letter, spelling 'COLDFRIES'.
- Phase 2: Glitch Sequence: Simulates a 'Blue Screen of Death' (BSOD) for 1.5 seconds then transitions to the TERMINAL phase.
- Phase 3: Terminal: Displays a legacy terminal interface with employee profile data (Bob Dwyer) and a 'Sticky Note' hint.
- Phase 3: Input Trap: A section where the user must correctly identify the threat (DECIBOT) to initiate the lockdown phase.

## Style Guidelines:

- Phase 1: Background should be aged, stained parchment paper texture (beige/sepia #fdfbf7) with CSS grain. Concept: Antiquity.
- Phase 1: Polished brass (gold/orange) and rusted copper (brown/red) for borders and accents.
- Phase 3: Background is Deep Black (#000000). Text is Phosphor Green (#33ff00) or Amber (#ffb000).
- Phase 4: Background is Dark Red (#330000). Text is Bright Red (#ff0000).
- Phase 1: 'Playfair Display' for Headlines (serif) and 'Courier Prime' for Body (monospace). Note: currently only Google Fonts are supported.
- Phase 2/3: 'VT323' for Terminal Monospace. Note: currently only Google Fonts are supported.
- Phase 1: Small copper rivets in navigation bar corners; ornate flourishes on ads; woodcut etching placeholders for images
- Phase 1: 3-column grid layout with main content on the left and a sidebar on the right. Ragged edges on article cards (clip-path)
- Global CRT Overlay (Phases 2, 3, 4) featuring repeating linear-gradient background (scanlines) with keyframe flicker and subtle vignette; pulsing opacity on Phase 4 content (alarm effect)