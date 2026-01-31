import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './app/App';
import './styles/index.css';

const rootElement = document.getElementById('root')!;
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const appElement = (
    <ClerkProvider publishableKey={clerkPublishableKey ?? ''}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ClerkProvider>
);

// Use hydrateRoot if the root has pre-rendered content (production SSG)
// Use createRoot in dev mode where there's no pre-rendered HTML
if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, appElement);
} else {
    createRoot(rootElement).render(appElement);
}
