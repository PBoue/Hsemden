import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { useSignIn } from '@clerk/clerk-react';
import { useLanguage } from '@/app/context/LanguageContext';

export function AuthCover() {
    const { t } = useLanguage();
    const { isLoaded, signIn, setActive } = useSignIn();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isLoaded || !signIn) return;
        setIsSubmitting(true);
        setError(null);

        try {
            const result = await signIn.create({
                identifier: username,
                password,
            });

            if (result.status === 'complete') {
                await setActive({ session: result.createdSessionId });
            } else {
                setError(t('common.error'));
            }
        } catch {
            setError(t('auth.error'));
        } finally {
            setIsSubmitting(false);
        }
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

                {/* Right side - Login Button */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md mx-auto"
                >
                    <div className="bg-card border border-border rounded-lg p-8 shadow-lg text-center">
                        <div className="mb-8">
                            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <Lock className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">
                                {t('auth.title')}
                            </h2>
                            <p className="text-sm text-muted-foreground mt-2">
                                {t('auth.subtitle')}
                            </p>
                        </div>

                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-medium text-foreground">
                                    {t('auth.username')}
                                </label>
                                <input
                                    type="text"
                                    autoComplete="username"
                                    value={username}
                                    onChange={(event) =>
                                        setUsername(event.target.value)
                                    }
                                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    required
                                />
                            </div>
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-medium text-foreground">
                                    {t('auth.password')}
                                </label>
                                <input
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    required
                                />
                            </div>

                            {error && (
                                <div className="text-sm text-destructive">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={!isLoaded || isSubmitting}
                                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
                            >
                                {isSubmitting
                                    ? t('common.loading')
                                    : t('auth.submit')}
                            </button>
                        </form>

                        <div className="mt-6 text-xs text-muted-foreground">
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
