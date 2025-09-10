# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a cybersecurity portfolio website built for Mojetioluwa Bolaji-Busola, showcasing expertise in penetration testing and ethical hacking. The project uses a modern React stack with a cyberpunk aesthetic theme.

**Tech Stack:**
- Vite (build tool)
- React 18 + TypeScript
- shadcn/ui components
- Tailwind CSS with custom cyberpunk theme
- React Router for navigation
- TanStack Query for state management

## Architecture

### Application Structure
The application follows a component-based architecture with clear separation of concerns:

- **`src/App.tsx`**: Root application component with routing setup, query client, and global providers (Toaster, Tooltip)
- **`src/pages/Index.tsx`**: Main portfolio page that orchestrates all portfolio sections
- **`src/components/portfolio/`**: Domain-specific components for each portfolio section (Hero, About, Skills, Experience, Projects, Education, Contact)
- **`src/components/ui/`**: Reusable UI components from shadcn/ui library
- **`src/components/`**: Custom components like MouseFollowPaint, CircleCursor, GlitchText for interactive effects

### Routing Strategy
Simple single-page application with React Router:
- `/` - Main portfolio page
- `*` - Catch-all route to NotFound page
- Add new routes above the catch-all route in `App.tsx`

### Theming System
The project uses a sophisticated cyberpunk theme system:

**Custom CSS Properties** (defined in `src/index.css`):
- `--cyber-green`, `--cyber-blue` - Primary accent colors
- `--cyber-dark`, `--cyber-darker` - Background colors  
- `--gradient-cyber`, `--gradient-dark` - Background gradients
- `--shadow-cyber`, `--shadow-blue` - Glow effects
- `--transition-smooth`, `--transition-bounce` - Animation timings

**Tailwind Extensions** (in `tailwind.config.ts`):
- `cyber.*` color palette
- `bg-gradient-cyber`, `bg-gradient-dark` backgrounds
- `shadow-cyber`, `shadow-blue` glow effects

## Common Development Commands

### Development Server
```bash
npm run dev
```
Starts Vite dev server on `http://localhost:8080` (configured in vite.config.ts)

### Build Commands
```bash
npm run build          # Production build
npm run build:dev      # Development build with dev mode
npm run preview        # Preview production build
```

### Code Quality
```bash
npm run lint          # Run ESLint on all TypeScript files
```

### Package Management
The project uses npm with `package-lock.json`. Bun lockfile (`bun.lockb`) is also present but npm should be preferred for consistency.

## Development Guidelines

### Component Development
- Portfolio sections go in `src/components/portfolio/`
- Reusable UI components use shadcn/ui patterns in `src/components/ui/`
- Custom interactive components go directly in `src/components/`
- Use TypeScript interfaces for component props
- Follow the existing cyberpunk theming patterns

### Styling Approach
- Use Tailwind CSS classes with custom theme extensions
- Leverage CSS custom properties for consistent theming
- Apply cyber-themed colors: `cyber-green`, `cyber-blue`, `cyber-dark`
- Use glow effects: `shadow-cyber`, `shadow-blue` for interactive elements
- Implement smooth transitions with custom timing functions

### State Management
- TanStack Query is configured globally for server state
- Local component state with React hooks for UI state
- No global state management library - keep state localized

### Path Aliases
Configured in `vite.config.ts` and `components.json`:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

### Adding New UI Components
Use shadcn/ui CLI to add components:
```bash
npx shadcn-ui@latest add [component-name]
```

### Code Quality Rules
- ESLint configured with React hooks and TypeScript rules
- `@typescript-eslint/no-unused-vars` is disabled
- React refresh plugin for hot reloading

## Interactive Features

The portfolio includes several custom interactive components:
- **MouseFollowPaint**: Canvas-based mouse trail effect
- **CircleCursor**: Custom cursor with hover effects  
- **GlitchText**: Text with cyberpunk glitch animations
- **Sidebar**: Collapsible navigation (though currently not used in main portfolio)

These components demonstrate advanced React patterns and Canvas API usage for creating engaging user experiences.

## Deployment Notes

The project is integrated with Lovable (lovable.dev) for automatic deployment:
- Changes made via Lovable are automatically committed
- Local changes should be pushed to trigger Lovable updates
- Custom domain setup available through Lovable project settings
