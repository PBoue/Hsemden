import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
    plugins: [
        // The React and Tailwind plugins are both required for Make, even if
        // Tailwind is not being actively used – do not remove them
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            // Alias @ to the src directory
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: isSsrBuild ? 'dist/server' : 'dist/client',
        emptyOutDir: true,
        ssrManifest: !isSsrBuild,
    },
    ssr: {
        // Bundle these deps for SSR to avoid ESM/CJS edge cases
        noExternal: ['motion'],
    },
}));
