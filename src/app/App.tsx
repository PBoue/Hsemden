import { Suspense, useEffect, useState } from 'react';
import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';
import { useClerk, useUser } from '@clerk/clerk-react';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '@/app/components/theme-provider';
import { LanguageProvider, useLanguage } from '@/app/context/LanguageContext';
import { AuthCover } from '@/app/components/AuthCover';
import { SlideNavigationBar } from '@/app/components/SlideNavigationBar';
import { SettingsDrawer } from '@/app/components/SettingsDrawer';
import { TableOfContentsDrawer } from '@/app/components/TableOfContentsDrawer';
import { slides, slidesConfig } from '@/config/slides-config';
import { BibliographyPage } from '@/app/components/BibliographyPage';
import { GlossaryPage } from '@/app/components/GlossaryPage';
import { ContactPage } from '@/app/components/ContactPage';
import { NavigationPage } from '@/app/components/NavigationPage';

type ViewMode = 'presentation' | 'bibliography' | 'glossary' | 'contact';

type SlideIndex = number;

function parseSlideIndex(
    raw: string | undefined,
    maxSlides: number,
): SlideIndex {
    const parsed = raw ? Number.parseInt(raw, 10) : 0;
    if (!Number.isFinite(parsed) || Number.isNaN(parsed)) return 0;
    if (parsed < 0) return 0;
    if (parsed > maxSlides - 1) return maxSlides - 1;
    return parsed;
}

function AppRoutes() {
    const navigate = useNavigate();

    const navigateToSlide = (index: SlideIndex) => {
        const clamped = parseSlideIndex(String(index), slides.length);
        navigate(`/slides/${clamped}`);
        // Scroll to top on slide change
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    const navigateToMeta = (mode: ViewMode, fromSlide: SlideIndex) => {
        const state = { fromSlide };
        if (mode === 'bibliography') navigate('/bibliography', { state });
        else if (mode === 'glossary') navigate('/glossary', { state });
        else if (mode === 'contact') navigate('/contact', { state });
        else navigateToSlide(fromSlide);
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <SlideIndexRoute
                        index={0}
                        onSlideChange={navigateToSlide}
                        onNavigateToMeta={navigateToMeta}
                    />
                }
            />
            <Route
                path="/slides"
                element={
                    <SlideIndexRoute
                        index={0}
                        onSlideChange={navigateToSlide}
                        onNavigateToMeta={navigateToMeta}
                    />
                }
            />
            <Route
                path="/slides/:index"
                element={
                    <SlideRoute
                        onSlideChange={navigateToSlide}
                        onNavigateToMeta={navigateToMeta}
                    />
                }
            />
            <Route
                path="/bibliography"
                element={
                    <MetaRoute
                        mode="bibliography"
                        onSlideChange={navigateToSlide}
                        onNavigateToMeta={navigateToMeta}
                    />
                }
            />
            <Route
                path="/glossary"
                element={
                    <MetaRoute
                        mode="glossary"
                        onSlideChange={navigateToSlide}
                        onNavigateToMeta={navigateToMeta}
                    />
                }
            />
            <Route
                path="/contact"
                element={
                    <MetaRoute
                        mode="contact"
                        onSlideChange={navigateToSlide}
                        onNavigateToMeta={navigateToMeta}
                    />
                }
            />
            <Route
                path="/navigation"
                element={<NavigationPage />}
            />
            <Route
                path="*"
                element={
                    <Navigate
                        to="/slides/0"
                        replace
                    />
                }
            />
        </Routes>
    );
}

function SlideIndexRoute({
    index,
    onSlideChange,
    onNavigateToMeta,
}: {
    index: SlideIndex;
    onSlideChange: (index: SlideIndex) => void;
    onNavigateToMeta: (mode: ViewMode, fromSlide: SlideIndex) => void;
}) {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash?.replace('#', '');
        if (!hash) return;
        const element = document.getElementById(hash);
        if (!element) return;
        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        element.scrollIntoView({
            behavior: reducedMotion ? 'auto' : 'smooth',
            block: 'start',
        });
    }, [location.hash, location.pathname]);

    return (
        <PresentationContent
            routeSlideIndex={index}
            routeViewMode="presentation"
            onSlideChange={onSlideChange}
            onNavigateToMeta={onNavigateToMeta}
        />
    );
}

function SlideRoute({
    onSlideChange,
    onNavigateToMeta,
}: {
    onSlideChange: (index: SlideIndex) => void;
    onNavigateToMeta: (mode: ViewMode, fromSlide: SlideIndex) => void;
}) {
    const location = useLocation();
    const params = useParams();
    const slideIndex = parseSlideIndex(params.index, slides.length);

    useEffect(() => {
        const hash = location.hash?.replace('#', '');
        if (!hash) return;
        const element = document.getElementById(hash);
        if (!element) return;
        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        element.scrollIntoView({
            behavior: reducedMotion ? 'auto' : 'smooth',
            block: 'start',
        });
    }, [location.hash, location.pathname]);

    return (
        <PresentationContent
            routeSlideIndex={slideIndex}
            routeViewMode="presentation"
            onSlideChange={onSlideChange}
            onNavigateToMeta={onNavigateToMeta}
        />
    );
}

function MetaRoute({
    mode,
    onSlideChange,
    onNavigateToMeta,
}: {
    mode: Exclude<ViewMode, 'presentation'>;
    onSlideChange: (index: SlideIndex) => void;
    onNavigateToMeta: (mode: ViewMode, fromSlide: SlideIndex) => void;
}) {
    const location = useLocation();
    const fromState = (location.state as { fromSlide?: number } | null)
        ?.fromSlide;
    const slideIndex = parseSlideIndex(
        typeof fromState === 'number' ? String(fromState) : '0',
        slides.length,
    );

    return (
        <PresentationContent
            routeSlideIndex={slideIndex}
            routeViewMode={mode}
            onSlideChange={onSlideChange}
            onNavigateToMeta={onNavigateToMeta}
        />
    );
}

function PresentationContent({
    routeSlideIndex,
    routeViewMode,
    onSlideChange,
    onNavigateToMeta,
}: {
    routeSlideIndex: SlideIndex;
    routeViewMode: ViewMode;
    onSlideChange: (index: SlideIndex) => void;
    onNavigateToMeta: (mode: ViewMode, fromSlide: SlideIndex) => void;
}) {
    const { t } = useLanguage();
    const { isLoaded, isSignedIn } = useUser();
    const { signOut } = useClerk();
    const isAuthenticated = !!isSignedIn;
    const isLoading = !isLoaded;

    const [currentSlide, setCurrentSlide] = useState(routeSlideIndex);
    const [isTocOpen, setIsTocOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [expandedSlide, setExpandedSlide] = useState<string | null>(null);

    const viewMode = routeViewMode;
    const localizedSlides = slides.map((slide) => ({
        ...slide,
        title: slide.titleKey ? t(slide.titleKey) : slide.title,
        subtitle: slide.subtitleKey ? t(slide.subtitleKey) : slide.subtitle,
    }));
    const localizedSlidesConfig = slidesConfig.map((slideConfig, index) => ({
        ...slideConfig,
        title: slides[index]?.titleKey
            ? t(slides[index].titleKey)
            : slideConfig.title,
    }));

    useEffect(() => {
        setCurrentSlide(routeSlideIndex);
    }, [routeSlideIndex]);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            onSlideChange(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            onSlideChange(currentSlide - 1);
        }
    };

    const goToSlide = (index: number) => {
        onSlideChange(index);
    };

    const handleNavigation = (slideId: string, sectionId?: string) => {
        const slideIndex = slidesConfig.findIndex(
            (s: { id: string }) => s.id === slideId,
        );
        if (slideIndex === -1) return;

        onSlideChange(slideIndex);

        if (sectionId) {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (!element) return;
                const reducedMotion = window.matchMedia(
                    '(prefers-reduced-motion: reduce)',
                ).matches;
                element.scrollIntoView({
                    behavior: reducedMotion ? 'auto' : 'smooth',
                    block: 'start',
                });
            }, 100);
        }
    };

    const handleViewModeChange = (mode: ViewMode) => {
        setIsSettingsOpen(false);
        setIsTocOpen(false);
        onNavigateToMeta(mode, currentSlide);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (viewMode !== 'presentation') return;

            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'Home') {
                e.preventDefault();
                onSlideChange(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                onSlideChange(slides.length - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, viewMode, onSlideChange]);

    const CurrentSlideComponent = slides[currentSlide].component;

    // Show loading state while checking authentication
    if (isLoading) {
        return (
            <div className="h-screen w-screen bg-background flex items-center justify-center">
                <div className="text-muted-foreground">Loading...</div>
            </div>
        );
    }

    // Show login screen if not authenticated
    if (!isAuthenticated) {
        return <AuthCover />;
    }

    return (
        <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
            <SettingsDrawer
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                isAuthenticated={isAuthenticated}
                onLogout={() => signOut()}
                onNavigateToMeta={handleViewModeChange}
                currentView={viewMode}
            />

            <TableOfContentsDrawer
                isOpen={isTocOpen}
                onClose={() => setIsTocOpen(false)}
                slides={localizedSlidesConfig}
                currentSlide={
                    localizedSlidesConfig[currentSlide]?.id || 'title'
                }
                onNavigate={handleNavigation}
                expandedSlide={expandedSlide}
                onToggleSlide={(slideId: string) =>
                    setExpandedSlide(expandedSlide === slideId ? null : slideId)
                }
            />

            <div className="flex-1 overflow-auto">
                {viewMode === 'presentation' && (
                    <Suspense
                        fallback={
                            <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                                Loading...
                            </div>
                        }
                    >
                        <CurrentSlideComponent />
                    </Suspense>
                )}
                {viewMode === 'bibliography' && <BibliographyPage />}
                {viewMode === 'glossary' && <GlossaryPage />}
                {viewMode === 'contact' && <ContactPage />}
            </div>

            {viewMode === 'presentation' && (
                <SlideNavigationBar
                    slides={localizedSlides}
                    currentSlide={currentSlide}
                    onSlideChange={goToSlide}
                    onNext={nextSlide}
                    onPrev={prevSlide}
                    onHome={() => onSlideChange(0)}
                    onTocToggle={() => {
                        setIsTocOpen(!isTocOpen);
                        setIsSettingsOpen(false);
                    }}
                    onSettingsToggle={() => {
                        setIsSettingsOpen(!isSettingsOpen);
                        setIsTocOpen(false);
                    }}
                />
            )}

            {viewMode !== 'presentation' && (
                <div className="fixed bottom-8 right-8 z-50">
                    <button
                        onClick={() => handleViewModeChange('presentation')}
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                        ← Zurück zur Präsentation
                    </button>
                </div>
            )}
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider defaultTheme="light">
            <LanguageProvider>
                <MotionConfig reducedMotion="user">
                    <AppRoutes />
                </MotionConfig>
            </LanguageProvider>
        </ThemeProvider>
    );
}
