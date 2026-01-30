import { useLanguage } from '@/app/context/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1 bg-card border border-border rounded-lg p-1", className)}>
      <button
        onClick={() => setLanguage('de')}
        className={cn(
          "px-3 py-1.5 text-sm font-medium rounded transition-colors",
          language === 'de'
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Switch to German"
        aria-pressed={language === 'de'}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          "px-3 py-1.5 text-sm font-medium rounded transition-colors",
          language === 'en'
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
