import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { ThemeProvider } from '@/app/components/theme-provider';
import { ThemeToggle } from '@/app/components/theme-toggle';
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
import { cn } from '@/lib/utils';

const slides = [
  { component: TitleSlide, title: 'Titel' },
  { component: ProblemContextSlide, title: 'Problemstellung' },
  { component: ResearchQuestionsSlide, title: 'Forschungsfragen' },
  { component: MethodologySlide, title: 'Methodik' },
  { component: StakeholdersSlide, title: 'Stakeholder' },
  { component: WorkPackagesSlide, title: 'Arbeitspakete' },
  { component: DataProtectionSlide, title: 'Datenschutz & Ethik' },
  { component: InterdisciplinarySlide, title: 'Interdisziplinäre Umsetzung' },
  { component: TimelineSlide, title: 'Phasenmodell' },
  { component: ClosingSlide, title: 'Zusammenfassung' },
];

function PresentationContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
      {/* Slide Content */}
      <div className="flex-1 overflow-auto">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Bar */}
      <nav
        className="border-t border-border bg-card"
        role="navigation"
        aria-label="Presentation navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlide(0)}
              disabled={currentSlide === 0}
              className={cn(
                "inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-border bg-card transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
              )}
              aria-label="Go to first slide"
            >
              <Home className="h-4 w-4" />
            </button>
            <span className="text-sm text-muted-foreground" aria-live="polite" aria-atomic="true">
              Folie {currentSlide + 1} von {slides.length}
            </span>
          </div>

          <div className="flex-1 mx-8 max-w-2xl">
            <div className="flex gap-1" role="tablist" aria-label="Slide progress">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  role="tab"
                  aria-selected={index === currentSlide}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  className={cn(
                    "flex-1 h-1.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    index === currentSlide
                      ? "bg-primary"
                      : index < currentSlide
                      ? "bg-muted-foreground/30"
                      : "bg-muted"
                  )}
                  title={slide.title}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={cn(
                "inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-card transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={cn(
                "inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-card transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50"
              )}
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PresentationContent />
    </ThemeProvider>
  );
}
