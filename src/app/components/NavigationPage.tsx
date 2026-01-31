import { Link } from 'react-router-dom';
import { slides } from '@/config/slides-config';
import { useLanguage } from '@/app/context/LanguageContext';

export function NavigationPage() {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        DigiChildProtect
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Forschungsdesign-Präsentation – Inhaltsverzeichnis
                    </p>
                </header>

                <nav aria-label="Folienübersicht">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                        Präsentationsfolien
                    </h2>
                    <ol className="space-y-3">
                        {slides.map((slide, index) => {
                            const title = slide.titleKey
                                ? t(slide.titleKey)
                                : slide.title;
                            const subtitle = slide.subtitleKey
                                ? t(slide.subtitleKey)
                                : slide.subtitle;
                            return (
                                <li key={index}>
                                    <Link
                                        to={
                                            index === 0
                                                ? '/'
                                                : `/slides/${index}`
                                        }
                                        className="block p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                                                {index + 1}
                                            </span>
                                            <div>
                                                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                                    {title}
                                                </span>
                                                <p className="text-sm text-muted-foreground mt-0.5">
                                                    {subtitle}
                                                </p>
                                                {slide.sections && (
                                                    <ul className="mt-2 space-y-1">
                                                        {slide.sections.map(
                                                            (section) => (
                                                                <li
                                                                    key={
                                                                        section.id
                                                                    }
                                                                    className="text-xs text-muted-foreground pl-2 border-l border-border"
                                                                >
                                                                    {
                                                                        section.label
                                                                    }
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                <nav
                    className="mt-12"
                    aria-label="Zusätzliche Seiten"
                >
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                        Zusätzliche Seiten
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <li>
                            <Link
                                to="/bibliography"
                                className="block p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors text-center"
                            >
                                <span className="font-medium text-foreground">
                                    Literaturverzeichnis
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/glossary"
                                className="block p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors text-center"
                            >
                                <span className="font-medium text-foreground">
                                    Glossar
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors text-center"
                            >
                                <span className="font-medium text-foreground">
                                    Kontakt
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <footer className="mt-16 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                        © 2026 Philipp Boué – Hochschule Emden/Leer
                    </p>
                </footer>
            </div>
        </div>
    );
}
