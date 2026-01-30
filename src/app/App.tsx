import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/app/components/theme-provider';
import { LanguageProvider } from '@/app/context/LanguageContext';
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
import { cn } from '@/lib/utils';

const slides = [
  { 
    component: TitleSlide, 
    title: 'Titel', 
    subtitle: 'DigiChildProtect Forschungsdesign',
    color: 'bg-primary'
  },
  { 
    component: ProblemContextSlide, 
    title: 'Problemstellung', 
    subtitle: 'Kindeswohlgefährdungen in Deutschland',
    color: 'bg-chart-1'
  },
  { 
    component: ResearchQuestionsSlide, 
    title: 'Forschungsfragen',
    subtitle: 'Sechs zentrale Fragen',
    color: 'bg-chart-2'
  },
  { 
    component: MethodologySlide, 
    title: 'Methodik',
    subtitle: 'Mixed-Methods-Design',
    color: 'bg-chart-3'
  },
  { 
    component: StakeholdersSlide, 
    title: 'Stakeholder',
    subtitle: 'Kern- und Systemkontext',
    color: 'bg-chart-4'
  },
  { 
    component: WorkPackagesSlide, 
    title: 'Arbeitspakete',
    subtitle: '11 Pakete zur Umsetzung',
    color: 'bg-chart-5'
  },
  { 
    component: DataProtectionSlide, 
    title: 'Datenschutz & Ethik',
    subtitle: '5-Stufenmodell',
    color: 'bg-destructive'
  },
  { 
    component: InterdisciplinarySlide, 
    title: 'Interdisziplinär',
    subtitle: 'Holocracy-Struktur',
    color: 'bg-chart-2'
  },
  { 
    component: TimelineSlide, 
    title: 'Phasenmodell',
    subtitle: '42 Monate Design-Thinking',
    color: 'bg-chart-3'
  },
  { 
    component: ClosingSlide, 
    title: 'Zusammenfassung',
    subtitle: 'Kernmerkmale & Beiträge',
    color: 'bg-primary'
  },
  { 
    component: ThankYouSlide, 
    title: 'Vielen Dank',
    subtitle: 'Für Ihre Aufmerksamkeit',
    color: 'bg-primary'
  },
];

type ViewMode = 'presentation' | 'bibliography' | 'glossary' | 'contact';

function PresentationContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [expandedSlide, setExpandedSlide] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('presentation');

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleNavigation = (slideId: string, sectionId?: string) => {
    // Find the slide index from slidesConfig
    const slideIndex = slidesConfig.findIndex(s => s.id === slideId);
    if (slideIndex !== -1) {
      setCurrentSlide(slideIndex);
      
      // If a section is specified, scroll to it after a brief delay
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            element.scrollIntoView({
              behavior: reducedMotion ? 'auto' : 'smooth',
              block: 'start',
            });
          }
        }, 100);
      }
    }
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    setIsSettingsOpen(false);
    setIsTocOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard navigation in presentation mode
      if (viewMode !== 'presentation') return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, viewMode]);

  const CurrentSlideComponent = slides[currentSlide].component;

  if (!isAuthenticated) {
    return <AuthCover onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
      {/* Settings Drawer */}
      <SettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        isAuthenticated={isAuthenticated}
        onLogout={() => setIsAuthenticated(false)}
        onNavigateToMeta={handleViewModeChange}
        currentView={viewMode}
      />
      
      {/* Table of Contents Drawer */}
      <TableOfContentsDrawer
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        slides={slidesConfig}
        currentSlide={slidesConfig[currentSlide]?.id || 'title'}
        onNavigate={handleNavigation}
        expandedSlide={expandedSlide}
        onToggleSlide={(slideId) => setExpandedSlide(expandedSlide === slideId ? null : slideId)}
      />
      
      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        {viewMode === 'presentation' && <CurrentSlideComponent />}
        {viewMode === 'bibliography' && <BibliographyPage />}
        {viewMode === 'glossary' && <GlossaryPage />}
        {viewMode === 'contact' && <ContactPage />}
      </div>

      {/* Navigation Bar - only show in presentation mode */}
      {viewMode === 'presentation' && (
        <SlideNavigationBar
          slides={slides}
          currentSlide={currentSlide}
          onSlideChange={goToSlide}
          onNext={nextSlide}
          onPrev={prevSlide}
          onHome={() => setCurrentSlide(0)}
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

      {/* Back to Presentation Button for Meta Pages */}
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
        <PresentationContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}