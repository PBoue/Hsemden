import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
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

export default function App() {
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
      <div className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentSlide(0)}
              disabled={currentSlide === 0}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>

          <div className="flex-1 mx-8 max-w-2xl">
            <div className="flex gap-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${
                    index === currentSlide
                      ? 'bg-primary'
                      : index < currentSlide
                      ? 'bg-muted-foreground/30'
                      : 'bg-muted'
                  }`}
                  title={slides[index].title}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
