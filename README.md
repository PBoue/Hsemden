## DigiChildProtect Presentation

Interactive research design presentation built with Vite + React.

Live site: https://forschungsdesign.philippboue.de/

### Prerequisites

- Node.js 20+
- pnpm 9+

### Environment

Create a .env file with your Clerk publishable key:

- VITE_CLERK_PUBLISHABLE_KEY

### Development

1. Install dependencies: pnpm install
2. Start dev server: pnpm dev

### Production (static SSR)

Generate the static site with server-side rendering and prerendering:

- pnpm build:static

The output is written to dist/client.
