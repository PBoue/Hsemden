import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './app/App';
import { slides } from './config/slides-config';

export function getPrerenderRoutes(): string[] {
    const slideRoutes = Array.from(
        { length: slides.length },
        (_, index) => `/slides/${index}`,
    );

    return [
        '/',
        '/slides',
        ...slideRoutes,
        '/bibliography',
        '/glossary',
        '/contact',
        '/navigation', // No-JS navigation page
    ];
}

export function render(url: string) {
    const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
    const appHtml = renderToString(
        <ClerkProvider publishableKey={clerkPublishableKey ?? ''}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </ClerkProvider>,
    );

    return { appHtml };
}
