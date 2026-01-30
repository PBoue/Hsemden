import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

interface AuthCoverProps {
    onAuthenticate: () => void;
}

export function AuthCover({ onAuthenticate }: AuthCoverProps) {
    const { t } = useLanguage();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const expectedUsername = useMemo(
        () => import.meta.env.VITE_AUTH_USERNAME ?? 'interview',
        [],
    );
    const expectedPassword = useMemo(
        () => import.meta.env.VITE_AUTH_PASSWORD ?? 'interview',
        [],
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const ok =
            username === expectedUsername && password === expectedPassword;
        if (!ok) {
            setError(t('auth.error'));
            return;
        }

        setError(null);
        onAuthenticate();
    };

    return (
        <div className="min-h-screen w-full bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Branding */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <div className="space-y-4">
                        <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded">
                            <span className="text-sm font-medium tracking-wide">
                                {t('authCover.badge')}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[0.95]">
                            {t('authCover.title1')}
                            <br />
                            {t('authCover.title2')}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-lg">
                            {t('authCover.subtitle')}
                            <br />
                            {t('authCover.date')}
                        </p>
                    </div>

                    <div className="space-y-3 pt-8">
                        <div className="flex items-start gap-3 bg-card border border-border p-4 rounded-lg">
                            <div className="bg-chart-1 p-2 rounded text-white">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-foreground">
                                    {t('authCover.feature1Title')}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {t('authCover.feature1Desc')}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 bg-card border border-border p-4 rounded-lg">
                            <div className="bg-chart-2 p-2 rounded text-white">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-foreground">
                                    {t('authCover.feature2Title')}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {t('authCover.feature2Desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right side - Auth Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md mx-auto"
                >
                    <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-bold text-foreground">
                                {t('auth.title')}
                            </h2>
                            <p className="text-sm text-muted-foreground mt-2">
                                {t('auth.subtitle')}
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <div className="space-y-2">
                                <label
                                    htmlFor="username"
                                    className="text-sm font-medium text-foreground"
                                >
                                    {t('auth.username')}
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        id="username"
                                        type="text"
                                        autoComplete="username"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                            setError(null);
                                        }}
                                        className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="interview"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-foreground"
                                >
                                    {t('auth.password')}
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        id="password"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setError(null);
                                        }}
                                        className="w-full pl-11 pr-11 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label={
                                            showPassword
                                                ? t('auth.hidePassword')
                                                : t('auth.showPassword')
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                            >
                                {t('auth.submit')}
                            </button>
                        </form>

                        <div className="mt-6 text-xs text-muted-foreground text-center">
                            {t('auth.hint')}
                        </div>
                    </div>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                        {t('auth.protected')}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
