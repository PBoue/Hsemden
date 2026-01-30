import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './app/App';
import { slidesConfig } from './config/slides-config';

export function getPrerenderRoutes(): string[] {
    const slideRoutes = Array.from(
        { length: slidesConfig.length },
        (_, index) => `/slides/${index}`,
    );

    return [
        '/',
        '/slides',
        ...slideRoutes,
        '/bibliography',
        '/glossary',
        '/contact',
    ];
}

export function render(url: string) {
    const appHtml = renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>,
    );

    return { appHtml };
}
