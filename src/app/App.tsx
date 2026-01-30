import { useEffect, useState } from 'react';
import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';
import { ThemeProvider } from '@/app/components/theme-provider';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { AuthProvider, useAuth } from '@/app/context/AuthContext';
import { AuthCover } from '@/app/components/AuthCover';
import { SlideNavigationBar } from '@/app/components/SlideNavigationBar';
import { SettingsDrawer } from '@/app/components/SettingsDrawer';
import { TableOfContentsDrawer } from '@/app/components/TableOfContentsDrawer';
import { slidesConfig } from '@/config/slides-config';
import { TitleSlide } from '@/app/components/TitleSlide';
import { ProblemContextSlide } from '@/app/components/ProblemContextSlide';
import { ResearchQuestionsSlide } from '@/app/components/ResearchQuestionsSlide';
import { MethodologySlide } from '@/app/components/MethodologySlide';
import { WorkPackagesSlide } from '@/app/components/WorkPackagesSlide';
import { StakeholdersSlide } from '@/app/components/StakeholdersSlide';
import { DataProtectionSlide } from '@/app/components/DataProtectionSlide';
import { InterdisciplinarySlide } from '@/app/components/InterdisciplinarySlide';
import { TimelineSlide } from '@/app/components/TimelineSlide';
import { ClosingSlide } from '@/app/components/ClosingSlide';
import { ThankYouSlide } from '@/app/components/ThankYouSlide';
import { BibliographyPage } from '@/app/components/BibliographyPage';
import { GlossaryPage } from '@/app/components/GlossaryPage';
import { ContactPage } from '@/app/components/ContactPage';

const slides = [
    {
        component: TitleSlide,
        title: 'Titel',
        subtitle: 'DigiChildProtect Forschungsdesign',
        color: 'bg-primary',
    },
    {
        component: ProblemContextSlide,
        title: 'Problemstellung',
        subtitle: 'Kindeswohlgefährdungen in Deutschland',
        color: 'bg-chart-1',
    },
    {
        component: ResearchQuestionsSlide,
        title: 'Forschungsfragen',
        subtitle: 'Sechs zentrale Fragen',
        color: 'bg-chart-2',
    },
    {
        component: MethodologySlide,
        title: 'Methodik',
        subtitle: 'Mixed-Methods-Design',
        color: 'bg-chart-3',
    },
    {
        component: StakeholdersSlide,
        title: 'Stakeholder',
        subtitle: 'Kern- und Systemkontext',
        color: 'bg-chart-4',
    },
    {
        component: WorkPackagesSlide,
        title: 'Arbeitspakete',
        subtitle: '11 Pakete zur Umsetzung',
        color: 'bg-chart-5',
    },
    {
        component: DataProtectionSlide,
        title: 'Datenschutz & Ethik',
        subtitle: '5-Stufenmodell',
        color: 'bg-destructive',
    },
    {
        component: InterdisciplinarySlide,
        title: 'Interdisziplinär',
        subtitle: 'Holocracy-Struktur',
        color: 'bg-chart-2',
    },
    {
        component: TimelineSlide,
        title: 'Phasenmodell',
        subtitle: '42 Monate Design-Thinking',
        color: 'bg-chart-3',
    },
    {
        component: ClosingSlide,
        title: 'Zusammenfassung',
        subtitle: 'Kernmerkmale & Beiträge',
        color: 'bg-primary',
    },
    {
        component: ThankYouSlide,
        title: 'Vielen Dank',
        subtitle: 'Für Ihre Aufmerksamkeit',
        color: 'bg-primary',
    },
];

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
    const { isAuthenticated, requireAuth, login, logout } = useAuth();

    const [currentSlide, setCurrentSlide] = useState(routeSlideIndex);
    const [isTocOpen, setIsTocOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [expandedSlide, setExpandedSlide] = useState<string | null>(null);

    const viewMode = routeViewMode;

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

    if (requireAuth && !isAuthenticated) {
        return <AuthCover onAuthenticate={login} />;
    }

    return (
        <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
            <SettingsDrawer
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                isAuthenticated={isAuthenticated}
                onLogout={logout}
                onNavigateToMeta={handleViewModeChange}
                currentView={viewMode}
            />

            <TableOfContentsDrawer
                isOpen={isTocOpen}
                onClose={() => setIsTocOpen(false)}
                slides={slidesConfig}
                currentSlide={slidesConfig[currentSlide]?.id || 'title'}
                onNavigate={handleNavigation}
                expandedSlide={expandedSlide}
                onToggleSlide={(slideId: string) =>
                    setExpandedSlide(expandedSlide === slideId ? null : slideId)
                }
            />

            <div className="flex-1 overflow-auto">
                {viewMode === 'presentation' && <CurrentSlideComponent />}
                {viewMode === 'bibliography' && <BibliographyPage />}
                {viewMode === 'glossary' && <GlossaryPage />}
                {viewMode === 'contact' && <ContactPage />}
            </div>

            {viewMode === 'presentation' && (
                <SlideNavigationBar
                    slides={slides}
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
                <AuthProvider>
                    <AppRoutes />
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
}
