---
name: Engineering Precision Glassmorphism
colors:
  surface: '#141218'
  surface-dim: '#141218'
  surface-bright: '#3b383e'
  surface-container-lowest: '#0f0d13'
  surface-container-low: '#1d1b20'
  surface-container: '#211f24'
  surface-container-high: '#2b292f'
  surface-container-highest: '#36343a'
  on-surface: '#e6e0e9'
  on-surface-variant: '#cbc4d2'
  inverse-surface: '#e6e0e9'
  inverse-on-surface: '#322f35'
  outline: '#948e9c'
  outline-variant: '#494551'
  surface-tint: '#cfbcff'
  primary: '#cfbcff'
  on-primary: '#381e72'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#6750a4'
  secondary: '#cdc0e9'
  on-secondary: '#342b4b'
  secondary-container: '#4d4465'
  on-secondary-container: '#bfb2da'
  tertiary: '#e7c365'
  on-tertiary: '#3e2e00'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#141218'
  on-background: '#e6e0e9'
  surface-variant: '#36343a'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  container-margin-desktop: 80px
  container-margin-mobile: 20px
  gutter: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is engineered for a high-performance learning environment, blending the precision of technical documentation with the futuristic allure of modern glassmorphism. It targets ambitious engineers who value clarity, speed, and cutting-edge aesthetics. 

The visual language balances **Futuristic Minimalism** with **Engineering Professionalism**. Every element feels like a layer of a high-tech HUD, utilizing translucent surfaces and light-refracting borders to create a sense of depth and focus. The interface should feel like a premium laboratory tool—transparent yet sturdy, allowing the content (the code and the concepts) to remain the hero while the UI provides a sophisticated architectural framework.

## Colors
The palette is anchored by a deep **Engineering Blue** gradient that represents logic and depth. While the design system supports both modes, the "Dark Mode" is the signature experience, mimicking a developer’s IDE or a high-end workstation.

- **Primary Gradient:** Used for main actions, progress indicators, and "Level Up" moments.
- **Surface Strategy:** Glassmorphism is achieved through semi-transparent fills. In light mode, use high-opacity white glass; in dark mode, use a deep slate-tinted glass.
- **Accents:** Success Green is reserved for validated code and completed modules. AI Purple is used exclusively for intelligent features and automated pathfinding. Trending Orange highlights high-demand skills.

## Typography
The typography system uses a tri-font approach to emphasize the engineering context. 

1. **Hanken Grotesk** (Headings): Sharp and contemporary, used to give titles an authoritative, modern feel.
2. **Geist** (Body): A technical, highly legible sans-serif designed for precision.
3. **JetBrains Mono** (Labels/Code): Used for micro-copy, status labels, and actual code blocks to maintain the developer-centric atmosphere.

Letter spacing should be slightly tightened for large displays to maintain a compact, "designed" look. Code snippets must always use monospaced fonts to ensure logical alignment of syntax.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous safe areas to allow the backdrop blurs to breathe. 

- **Desktop:** A 12-column grid with a maximum content width of 1440px. Gutters are kept wide (24px) to prevent the "glass" panels from feeling cluttered.
- **Mobile:** A 4-column grid with 20px side margins. Panels should generally span the full width to maximize readability.
- **Stacking:** Elements are grouped in logical "modules" using an 8px base unit. Vertical rhythm is driven by the density of information; code-heavy areas use `stack-sm`, while landing sections use `stack-lg`.

## Elevation & Depth
Depth is the cornerstone of this design system. Rather than traditional shadows, depth is communicated through **Refractive Layers**:

1. **Backdrop Blur:** Every glass surface must have a blur between `12px` (standard cards) and `24px` (modals/overlays).
2. **The "Inner Glow" Border:** Use a 1px solid border with a light-tinted transparency (e.g., `rgba(255,255,255, 0.2)`) to simulate the edge of a glass pane catching light.
3. **Ambient Shadows:** Use extremely soft, large-radius shadows (Blur: 40px, Spread: -10px) with very low opacity (10-15%) to lift the glass panes off the background without creating "dirt" on the UI.
4. **Z-Axis Hierarchy:** Background elements are sharp; mid-ground elements are blurred glass; foreground elements (tooltips/popovers) have the highest blur and brightest border.

## Shapes
The shape language is bold and approachable, utilizing high-radius corners to contrast the "coldness" of technical engineering content. 

- **Primary Containers:** Use `rounded-xl` (24px) for most dashboard cards and skill modules.
- **Interactive Elements:** Buttons and input fields should follow a pill-shaped or near-pill-shaped aesthetic to make them feel tactile and distinct from the structural containers.
- **Icons:** Use a consistent 2px stroke width with slightly rounded terminals to match the typography.

## Components
- **Glass Buttons:** Primary buttons use the Engineering Blue gradient. Secondary buttons use a "Frosted" effect: a semi-transparent white background with a slightly thicker 2px border.
- **Skill Chips:** Small, monospaced text labels inside high-radius capsules. Use accent colors (Success, AI, Trending) for the background at 15% opacity with 100% opacity text.
- **The "Logic" Card:** The standard container for content. Must feature a `backdrop-filter: blur(16px)` and a subtle top-to-bottom linear gradient border.
- **Input Fields:** Subtly recessed. Use a darker glass fill than the parent card to create an "inset" physical feel. On focus, the 1px border should animate to the Primary Blue.
- **Progress Arc:** Use the primary gradient for skill-tracking visualizations. The background track should be a faint, translucent line to maintain the glass aesthetic.
- **Code Block:** Dark-themed regardless of the global mode. It should look like a "window" into the machine, with a slightly deeper blur than surrounding UI.