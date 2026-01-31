import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import {
    X,
    LogOut,
    Type,
    Globe,
    Sun,
    Moon,
    BookOpen,
    BookMarked,
    Mail,
} from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { useTheme } from 'next-themes';

interface SettingsDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    isAuthenticated: boolean;
    onLogout: () => void;
    onNavigateToMeta?: (
        mode: 'presentation' | 'bibliography' | 'glossary' | 'contact',
    ) => void;
    currentView?: 'presentation' | 'bibliography' | 'glossary' | 'contact';
}

export function SettingsDrawer({
    isOpen,
    onClose,
    isAuthenticated,
    onLogout,
    onNavigateToMeta,
    currentView = 'presentation',
}: SettingsDrawerProps) {
    const { language, setLanguage, t } = useLanguage();
    const { theme, setTheme } = useTheme();

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
            const drawer = document.getElementById('settings-drawer');
            const focusableElements = drawer?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            );
            const firstElement = focusableElements?.[0] as HTMLElement;
            firstElement?.focus();
        }
    }, [isOpen]);

    const fontSizes = [
        { label: t('settings.fontSmall'), value: '14px' },
        { label: t('settings.fontNormal'), value: '16px' },
        { label: t('settings.fontLarge'), value: '18px' },
        { label: t('settings.fontXLarge'), value: '20px' },
    ];

    const [currentFontSize, setCurrentFontSize] = useState('16px');

    // Sync font size from localStorage on mount (client-side only)
    useEffect(() => {
        const stored = localStorage.getItem('fontSize') || '16px';
        document.documentElement.style.fontSize = stored;
        setCurrentFontSize(stored);
    }, []);

    const handleFontSizeChange = (size: string) => {
        document.documentElement.style.fontSize = size;
        localStorage.setItem('fontSize', size);
        setCurrentFontSize(size);
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
                        id="settings-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: 'spring',
                            damping: 30,
                            stiffness: 300,
                        }}
                        className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-card border-l border-border shadow-2xl z-50 flex flex-col"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="settings-title"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-border">
                            <h2
                                id="settings-title"
                                className="text-xl font-bold text-foreground"
                            >
                                {t('settings.title')}
                            </h2>
                            <button
                                onClick={onClose}
                                className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                                aria-label={t('settings.close')}
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Meta Pages Navigation */}
                            {onNavigateToMeta && (
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-foreground">
                                        {t('settings.additionalPages')}
                                    </label>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() =>
                                                onNavigateToMeta('bibliography')
                                            }
                                            className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-3 ${
                                                currentView === 'bibliography'
                                                    ? 'border-primary bg-primary/10 text-foreground font-semibold'
                                                    : 'border-border bg-card text-foreground hover:bg-muted'
                                            }`}
                                        >
                                            <BookOpen className="w-5 h-5" />
                                            <span>
                                                {t('settings.bibliography')}
                                            </span>
                                        </button>
                                        <button
                                            onClick={() =>
                                                onNavigateToMeta('glossary')
                                            }
                                            className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-3 ${
                                                currentView === 'glossary'
                                                    ? 'border-primary bg-primary/10 text-foreground font-semibold'
                                                    : 'border-border bg-card text-foreground hover:bg-muted'
                                            }`}
                                        >
                                            <BookMarked className="w-5 h-5" />
                                            <span>
                                                {t('settings.glossary')}
                                            </span>
                                        </button>
                                        <button
                                            onClick={() =>
                                                onNavigateToMeta('contact')
                                            }
                                            className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-3 ${
                                                currentView === 'contact'
                                                    ? 'border-primary bg-primary/10 text-foreground font-semibold'
                                                    : 'border-border bg-card text-foreground hover:bg-muted'
                                            }`}
                                        >
                                            <Mail className="w-5 h-5" />
                                            <span>{t('settings.contact')}</span>
                                        </button>
                                        {currentView !== 'presentation' && (
                                            <button
                                                onClick={() =>
                                                    onNavigateToMeta(
                                                        'presentation',
                                                    )
                                                }
                                                className="w-full px-4 py-3 rounded-lg border border-primary bg-primary text-primary-foreground hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
                                            >
                                                {t(
                                                    'settings.backToPresentation',
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Divider */}
                            {onNavigateToMeta && (
                                <div className="border-t border-border"></div>
                            )}

                            {/* Language */}
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    {t('settings.language')}
                                </label>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setLanguage('de')}
                                        className={`flex-1 px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-chart-1 ${
                                            language === 'de'
                                                ? 'border-chart-1 bg-chart-1 text-white font-semibold'
                                                : 'border-border bg-card text-foreground hover:bg-muted'
                                        }`}
                                    >
                                        Deutsch
                                    </button>
                                    <button
                                        onClick={() => setLanguage('en')}
                                        className={`flex-1 px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-chart-1 ${
                                            language === 'en'
                                                ? 'border-chart-1 bg-chart-1 text-white font-semibold'
                                                : 'border-border bg-card text-foreground hover:bg-muted'
                                        }`}
                                    >
                                        English
                                    </button>
                                </div>
                            </div>

                            {/* Font Size */}
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                                    <Type className="w-4 h-4" />
                                    {t('settings.fontSize')}
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {fontSizes.map((size) => (
                                        <button
                                            key={size.value}
                                            onClick={() =>
                                                handleFontSizeChange(size.value)
                                            }
                                            className={`px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-chart-1 ${
                                                currentFontSize === size.value
                                                    ? 'border-chart-1 bg-chart-1 text-white font-semibold'
                                                    : 'border-border bg-card text-foreground hover:bg-muted'
                                            }`}
                                        >
                                            {size.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Theme */}
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                                    <Sun className="w-4 h-4" />
                                    {t('settings.theme')}
                                </label>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setTheme('light')}
                                        className={`flex-1 px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-chart-1 flex items-center justify-center gap-2 ${
                                            theme === 'light'
                                                ? 'border-chart-1 bg-chart-1 text-white font-semibold'
                                                : 'border-border bg-card text-foreground hover:bg-muted'
                                        }`}
                                    >
                                        <Sun className="w-4 h-4" />
                                        {t('settings.themeLight')}
                                    </button>
                                    <button
                                        onClick={() => setTheme('dark')}
                                        className={`flex-1 px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-chart-1 flex items-center justify-center gap-2 ${
                                            theme === 'dark'
                                                ? 'border-chart-1 bg-chart-1 text-white font-semibold'
                                                : 'border-border bg-card text-foreground hover:bg-muted'
                                        }`}
                                    >
                                        <Moon className="w-4 h-4" />
                                        {t('settings.themeDark')}
                                    </button>
                                </div>
                            </div>

                            {/* Logout */}
                            {isAuthenticated && (
                                <div className="pt-4 border-t border-border">
                                    <button
                                        onClick={() => {
                                            onLogout();
                                            onClose();
                                        }}
                                        className="w-full px-4 py-3 rounded-lg border border-destructive text-destructive hover:bg-destructive hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-destructive flex items-center justify-center gap-2 font-medium"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        {t('settings.logout')}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-border bg-muted/30">
                            <div className="text-xs text-muted-foreground space-y-1">
                                <p>
                                    <strong>
                                        {t('settings.keyboardShortcuts')}
                                    </strong>
                                </p>
                                <div className="space-y-0.5 pl-2">
                                    <p>
                                        <kbd className="px-1.5 py-0.5 bg-background rounded text-xs font-mono">
                                            Esc
                                        </kbd>{' '}
                                        — {t('settings.shortcutClose')}
                                    </p>
                                    <p>
                                        <kbd className="px-1.5 py-0.5 bg-background rounded text-xs font-mono">
                                            ←/→
                                        </kbd>{' '}
                                        — {t('settings.shortcutNavigate')}
                                    </p>
                                    <p>
                                        <kbd className="px-1.5 py-0.5 bg-background rounded text-xs font-mono">
                                            Home/End
                                        </kbd>{' '}
                                        — {t('settings.shortcutFirstLast')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}
