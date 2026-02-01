import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, List, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface Slide {
    title: string;
    subtitle?: string;
    color: string;
}

interface SlideNavigationBarProps {
    slides: Slide[];
    currentSlide: number;
    onSlideChange: (index: number) => void;
    onNext: () => void;
    onPrev: () => void;
    onTocToggle: () => void;
    onSettingsToggle: () => void;
}

export function SlideNavigationBar({
    slides,
    currentSlide,
    onSlideChange,
    onNext,
    onPrev,
    onTocToggle,
    onSettingsToggle,
}: SlideNavigationBarProps) {
    const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);

    useEffect(() => {
        const currentRef = document.querySelector(
            `[data-slide-index="${currentSlide}"]`,
        );
        if (currentRef) {
            currentRef.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    }, [currentSlide]);

    return (
        <nav
            className="border-t border-border bg-card"
            role="navigation"
            aria-label="Presentation navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
                {/* Prev / Counter / Next */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={onPrev}
                        disabled={currentSlide === 0}
                        className={cn(
                            'inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-card transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50',
                        )}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <span
                        className="text-sm text-muted-foreground whitespace-nowrap"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        Folie {currentSlide + 1} / {slides.length}
                    </span>
                    <button
                        onClick={onNext}
                        disabled={currentSlide === slides.length - 1}
                        className={cn(
                            'inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-card transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50',
                        )}
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Center - Slide progress bars with hover previews (desktop only) */}
                <div className="hidden md:flex flex-1 mx-6 max-w-3xl relative">
                    <div
                        className="flex gap-2"
                        role="tablist"
                        aria-label="Slide progress"
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex-1 relative group"
                            >
                                <button
                                    data-slide-index={index}
                                    onClick={() => onSlideChange(index)}
                                    onMouseEnter={() => setHoveredSlide(index)}
                                    onMouseLeave={() => setHoveredSlide(null)}
                                    role="tab"
                                    aria-selected={index === currentSlide}
                                    aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                                    className={cn(
                                        'w-full h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                                        index === currentSlide
                                            ? `${slide.color} ring-2 ring-offset-2 ring-offset-card ring-primary/50`
                                            : index < currentSlide
                                              ? `${slide.color} opacity-50`
                                              : 'bg-muted hover:bg-muted-foreground/20',
                                    )}
                                />

                                {/* Hover preview - Desktop only */}
                                <AnimatePresence>
                                    {hoveredSlide === index && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 10,
                                                scale: 0.95,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 10,
                                                scale: 0.95,
                                            }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none hidden md:block"
                                        >
                                            <div className="bg-popover border border-border rounded-lg shadow-lg overflow-hidden min-w-[240px]">
                                                {/* Color bar */}
                                                <div
                                                    className={`h-1.5 ${slide.color}`}
                                                />

                                                {/* Content */}
                                                <div className="p-4 space-y-2">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <span className="text-xs font-medium text-muted-foreground">
                                                            Folie {index + 1}
                                                        </span>
                                                        {index ===
                                                            currentSlide && (
                                                            <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded">
                                                                Aktuell
                                                            </span>
                                                        )}
                                                    </div>

                                                    <h3 className="text-base font-bold text-foreground leading-tight">
                                                        {slide.title}
                                                    </h3>

                                                    {slide.subtitle && (
                                                        <p className="text-sm text-muted-foreground leading-snug">
                                                            {slide.subtitle}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Arrow */}
                                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                                                    <div className="w-4 h-4 bg-popover border-r-2 border-b-2 border-border transform rotate-45" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Menu controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={onTocToggle}
                        className={cn(
                            'inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-card transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                        )}
                        aria-label="Toggle table of contents"
                    >
                        <List className="h-4 w-4" />
                    </button>
                    <button
                        onClick={onSettingsToggle}
                        className={cn(
                            'inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-card transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                        )}
                        aria-label="Toggle settings"
                    >
                        <Settings className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
