import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { X, ChevronRight, ChevronDown } from 'lucide-react';

export interface SlideSection {
  id: string;
  label: string;
}

export interface SlideConfig {
  id: string;
  title: string;
  sections?: SlideSection[];
}

interface TableOfContentsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideConfig[];
  currentSlide: string;
  onNavigate: (slideId: string, sectionId?: string) => void;
  expandedSlide: string | null;
  onToggleSlide: (slideId: string) => void;
}

export function TableOfContentsDrawer({
  isOpen,
  onClose,
  slides,
  currentSlide,
  onNavigate,
  expandedSlide,
  onToggleSlide,
}: TableOfContentsDrawerProps) {
  // Keyboard shortcut: Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen) {
      const drawer = document.getElementById('toc-drawer');
      const focusableElements = drawer?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      firstElement?.focus();
    }
  }, [isOpen]);

  const handleNavigation = (slideId: string, sectionId?: string) => {
    onNavigate(slideId, sectionId);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            id="toc-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-card border-l border-border shadow-2xl z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="toc-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 id="toc-title" className="text-xl font-bold text-foreground">
                Inhaltsverzeichnis
              </h2>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Menü schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto p-6">
              <nav aria-label="Foliennavigation">
                <div className="space-y-2">
                  {slides.map((slide, slideIndex) => {
                    const isCurrentSlide = slide.id === currentSlide;
                    const hasSections = slide.sections && slide.sections.length > 0;
                    const isExpanded = expandedSlide === slide.id;

                    return (
                      <div key={slide.id} className="space-y-1">
                        <div className="flex items-center gap-2">
                          {hasSections && (
                            <button
                              onClick={() => onToggleSlide(slide.id)}
                              className="inline-flex items-center justify-center h-8 w-8 rounded hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                              aria-label={isExpanded ? 'Abschnitte einklappen' : 'Abschnitte ausklappen'}
                              aria-expanded={isExpanded}
                            >
                              {isExpanded ? (
                                <ChevronDown className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                              )}
                            </button>
                          )}

                          <button
                            onClick={() => handleNavigation(slide.id)}
                            className={`flex-1 text-left px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-chart-1 ${
                              !hasSections ? 'ml-8' : ''
                            } ${
                              isCurrentSlide
                                ? 'bg-chart-1 text-white font-semibold'
                                : 'hover:bg-muted text-foreground'
                            }`}
                            aria-current={isCurrentSlide ? 'page' : undefined}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`text-sm font-mono ${
                                  isCurrentSlide ? 'text-white/70' : 'text-muted-foreground'
                                }`}
                              >
                                {String(slideIndex + 1).padStart(2, '0')}
                              </span>
                              <span>{slide.title}</span>
                            </div>
                          </button>
                        </div>

                        {/* Sections */}
                        <AnimatePresence initial={false}>
                          {hasSections && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-8"
                            >
                              <div className="space-y-1 py-2 pl-4 border-l-2 border-muted">
                                {slide.sections!.map((section) => (
                                  <button
                                    key={section.id}
                                    onClick={() => handleNavigation(slide.id, section.id)}
                                    className="w-full text-left px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1"
                                  >
                                    {section.label}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
