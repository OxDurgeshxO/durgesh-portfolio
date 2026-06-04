# Design Brief: Durgesh Dutt Sinha — Digital Portfolio

**Direction:** Premium 3D digital portfolio with dark-first glassmorphism aesthetic, cyan/blue/purple accent palette, and immersive floating particle effects. Tech-forward, contemporary, emotionally engaging.

**Tone:** Bold, innovative, professional yet approachable. Celebrates technical depth and creative vision through ambient motion and luminous glassmorphic surfaces.

| Hue | Purpose | OKLCH | Usage |
|-----|---------|-------|-------|
| Background | Primary surface | 0.12L, 0C, — | Page & card base |
| Card | Secondary surface | 0.18L, 0C, — | Elevated containers |
| Cyan | Primary accent | 0.7L, 0.21C, 200° | Interactive highlights, glow effects |
| Purple | Secondary accent | 0.65L, 0.22C, 270° | Accent layers, depth contrast |
| Text | Foreground | 0.95L, 0C, — | Primary content |

**Typography:** Space Grotesk (display), DM Sans (body, 400/500), Geist Mono (code). Tight leading (1.2), generous sizing for clarity and presence. Hierarchy: 3.5rem hero / 1.5rem heading / 1rem body.

**Glassmorphism Component Patterns:** Frosted glass cards (backdrop-filter: blur, inset border cyan/purple glow), floating shadows (glass-elevated shadow), text over blurred backgrounds with 0.85+ opacity for readability. Inset borders at 0.15-0.2 opacity for depth illusion.

**Motion Choreography:** Floating cards (float: 3s ease-in-out infinite, 20px Y-axis), glow pulses (glow-pulse: 2s, cyan expansion), particle drift (particle-drift: 4s ease-out, 100px XY drift, scale fade). Staggered entry animations (200ms intervals). No bounce; emphasis on smooth, cosmic drift.

**Elevation & Depth:** 4-level shadow system — base (no shadow), card (glass-elevated 8px), glow-cyan / glow-purple (30px aura + inset 20px), particle layer (highest z-index for drift). Inset highlights reinforce glassmorphism illusion.

**Structural Zones:** Hero (40vh, centered, floating), projects grid (3 cols / 2 cols mobile, glow cards), about section (split: text left / floating code right), contact footer (dark, minimal). All zones use card-based layout within 1.5rem padding.

**Spacing & Rhythm:** 8px base unit. Padding: 1.5rem / 2rem (mobile/desktop), gap: 1rem cards, 2rem sections. Margins: top 3rem section dividers, 0.5rem inline element clusters.

**Constraints:** Mobile-first responsive (rem units), dark theme only (no light mode toggle), WCAG AA contrast minimum 4.5:1 for text, 3:1 for UI elements. Glassmorphism requires backdrop-filter browser support; fallback to opaque cards. Particle animations disabled on prefers-reduced-motion.

**Signature Detail:** Cyan glow pulses on hover / scroll-reveal; floating cards respond to viewport scroll with parallax (translateY 5-20% of scroll distance). Particles spawn on portfolio item reveal, drift bottom-left with fade.
