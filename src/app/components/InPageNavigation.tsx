import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export interface NavigationSection {
  id: string;
  label: string;
}

interface InPageNavigationProps {
  sections: NavigationSection[];
}

export function InPageNavigation({ sections }: InPageNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    // Intersection Observer for auto-highlighting
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  if (sections.length === 0) return null;

  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block"
      aria-label="In-page navigation"
    >
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;
          
          return (
            <div
              key={section.id}
              className="relative flex items-center justify-end"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.2 }}
                className="absolute right-12 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded whitespace-nowrap pointer-events-none"
              >
                {section.label}
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-foreground" />
              </motion.div>

              {/* Dot Button */}
              <button
                onClick={() => scrollToSection(section.id)}
                onKeyDown={(e) => handleKeyDown(e, section.id)}
                aria-label={`Navigate to ${section.label}`}
                aria-current={isActive ? 'location' : undefined}
                className="group relative w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-chart-1 focus:ring-offset-2 focus:ring-offset-background"
              >
                {/* Outer ring for active state */}
                <motion.div
                  animate={{
                    scale: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 -m-1.5 rounded-full border-2 border-chart-1"
                />
                
                {/* Main dot */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-chart-1 scale-110'
                      : isHovered
                      ? 'bg-muted-foreground scale-100'
                      : 'bg-border scale-100'
                  }`}
                />
              </button>

              {/* Position indicator line */}
              {index < sections.length - 1 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-4 bg-border" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}