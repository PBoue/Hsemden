import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const clientRoot = path.resolve(projectRoot, 'dist/client');
const serverEntry = path.resolve(projectRoot, 'dist/server/entry-server.js');

const fallbackRoutes = [
    '/',
    '/slides',
    ...Array.from({ length: 11 }, (_, i) => `/slides/${i}`),
    '/bibliography',
    '/glossary',
    '/contact',
];

function normalizeRoutes(routes)
{
    const seen = new Set();
    const normalized = [];

    for (const route of routes)
    {
        if (typeof route !== 'string') continue;
        const trimmed = route.trim();
        if (!trimmed) continue;
        const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
        const withoutTrailingSlash =
            withLeadingSlash.length > 1
                ? withLeadingSlash.replace(/\/+$/, '')
                : withLeadingSlash;
        if (seen.has(withoutTrailingSlash)) continue;
        seen.add(withoutTrailingSlash);
        normalized.push(withoutTrailingSlash);
    }

    return normalized;
}

function routeToFile(route)
{
    if (route === '/' || route === '') return 'index.html';
    const cleaned = route.replace(/^\//, '').replace(/\/$/, '');
    return path.join(cleaned, 'index.html');
}

async function main()
{
    const templatePath = path.join(clientRoot, 'index.html');
    const template = await fs.readFile(templatePath, 'utf-8');

    const mod = await import(pathToFileURL(serverEntry).href);
    if (typeof mod.render !== 'function')
    {
        throw new Error('SSR bundle does not export render(url)');
    }

    const routes = normalizeRoutes(
        typeof mod.getPrerenderRoutes === 'function'
            ? await mod.getPrerenderRoutes()
            : fallbackRoutes,
    );

    await Promise.all(
        routes.map(async (url) =>
        {
            const { appHtml } = await mod.render(url);
            const html = template.replace('<!--app-html-->', appHtml);
            const outFile = path.join(clientRoot, routeToFile(url));
            await fs.mkdir(path.dirname(outFile), { recursive: true });
            await fs.writeFile(outFile, html, 'utf-8');
        }),
    );

    console.log(`Prerendered ${routes.length} routes into dist/client`);
}

main().catch((err) =>
{
    console.error(err);
    process.exit(1);
});
