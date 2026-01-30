import { motion } from 'motion/react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

export function ContactPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Netlify Forms submission via fetch
            const formBody = new URLSearchParams();
            formBody.append('form-name', 'contact');
            formBody.append('name', formData.name);
            formBody.append('email', formData.email);
            formBody.append('subject', formData.subject);
            formBody.append('message', formData.message);

            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody.toString(),
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch {
            setError(t('contact.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen p-8 md:p-16 bg-background">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <div className="flex items-center gap-4">
                        <Mail className="w-10 h-10 text-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            {t('contact.title')}
                        </h1>
                    </div>
                    <p className="text-lg text-muted-foreground">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            {/* Hidden input for Netlify Forms */}
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />

                            {/* Name */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-foreground"
                                >
                                    {t('contact.name')} *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder={t(
                                            'contact.namePlaceholder',
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-foreground"
                                >
                                    {t('contact.email')} *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder={t(
                                            'contact.emailPlaceholder',
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-foreground"
                                >
                                    {t('contact.subject')} *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder={t(
                                        'contact.subjectPlaceholder',
                                    )}
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-foreground"
                                >
                                    {t('contact.message')} *
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                        placeholder={t(
                                            'contact.messagePlaceholder',
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-5 h-5" />
                                {isSubmitting
                                    ? t('contact.sending')
                                    : t('contact.send')}
                            </button>

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-destructive/10 border border-destructive rounded-lg p-4 text-center"
                                >
                                    <p className="text-destructive font-medium">
                                        {error}
                                    </p>
                                </motion.div>
                            )}

                            {/* Success Message */}
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-chart-1/10 border border-chart-1 rounded-lg p-4 text-center"
                                >
                                    <p className="text-chart-1 font-medium">
                                        {t('contact.success')}
                                    </p>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Candidate Info */}
                        <div className="bg-card border border-border rounded-lg p-6">
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {t('contact.candidate')}
                            </h3>
                            <div className="space-y-3 text-foreground">
                                <div>
                                    <div className="text-sm text-muted-foreground">
                                        {t('contact.name')}
                                    </div>
                                    <div className="font-medium">
                                        Philipp Boué
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">
                                        {t('contact.position')}
                                    </div>
                                    <div className="font-medium">
                                        {t('contact.positionValue')}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">
                                        {t('contact.institution')}
                                    </div>
                                    <div className="font-medium">
                                        Hochschule Emden/Leer
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="bg-card border border-border rounded-lg p-6">
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {t('contact.project')}
                            </h3>
                            <div className="space-y-3 text-foreground">
                                <div>
                                    <div className="text-sm text-muted-foreground">
                                        {t('contact.projectName')}
                                    </div>
                                    <div className="font-medium">
                                        DigiChildProtect
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">
                                        {t('contact.jobTitle')}
                                    </div>
                                    <div className="font-medium">SAG 128</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">
                                        {t('contact.duration')}
                                    </div>
                                    <div className="font-medium">
                                        {t('contact.durationValue')}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-muted/30 border border-border rounded-lg p-6">
                            <h3 className="font-bold text-foreground mb-3">
                                {t('contact.privacyNotice')}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {t('contact.privacyText')}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-card border border-border rounded-lg p-6">
                            <h3 className="font-bold text-foreground mb-3">
                                {t('contact.moreInfo')}
                            </h3>
                            <ul
                                className="space-y-2 text-sm"
                                role="list"
                            >
                                <li>
                                    <a
                                        href="/bibliography"
                                        className="text-primary hover:underline"
                                    >
                                        → {t('settings.bibliography')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/glossary"
                                        className="text-primary hover:underline"
                                    >
                                        → {t('settings.glossary')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="text-primary hover:underline"
                                    >
                                        → {t('contact.viewPresentation')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
