// English translations
import type { TranslationKey } from './de';

export const en: Record<TranslationKey, string> = {
    // Common
    'common.back': 'Back',
    'common.next': 'Next',
    'common.close': 'Close',
    'common.submit': 'Submit',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',

    // Navigation
    'nav.home': 'Home',
    'nav.slide': 'Slide',
    'nav.of': 'of',
    'nav.previous': 'Previous slide',
    'nav.next': 'Next slide',
    'nav.first': 'Go to first slide',
    'nav.toc': 'Table of contents',
    'nav.settings': 'Settings',
    'nav.backToPresentation': '← Back to presentation',

    // Auth
    'auth.title': 'Login',
    'auth.subtitle': 'Please enter your credentials',
    'auth.username': 'Username',
    'auth.password': 'Password',
    'auth.submit': 'Unlock',
    'auth.error': 'Invalid username or password.',
    'auth.hint': 'Use your Clerk username and password to continue.',
    'auth.protected': 'Protected content • Interview access only',
    'auth.showPassword': 'Show password',
    'auth.hidePassword': 'Hide password',

    // Settings
    'settings.title': 'Settings',
    'settings.close': 'Close settings',
    'settings.additionalPages': 'Additional pages',
    'settings.pages': 'Additional pages',
    'settings.bibliography': 'Bibliography',
    'settings.glossary': 'Glossary',
    'settings.contact': 'Contact',
    'settings.backToPresentation': '← Back to presentation',
    'settings.language': 'Language',
    'settings.theme': 'Theme',
    'settings.themeLight': 'Light',
    'settings.themeDark': 'Dark',
    'settings.themeSystem': 'System',
    'settings.fontSize': 'Font size',
    'settings.fontSmall': 'Small',
    'settings.fontNormal': 'Normal',
    'settings.fontLarge': 'Large',
    'settings.fontXLarge': 'Very large',
    'settings.logout': 'Log out',
    'settings.keyboardShortcuts': 'Keyboard shortcuts:',
    'settings.shortcutClose': 'Close menu',
    'settings.shortcutNavigate': 'Navigate slides',
    'settings.shortcutFirstLast': 'First/Last slide',

    // Slide titles
    'slide.title': 'Title',
    'slide.problem': 'Problem Statement',
    'slide.questions': 'Research Questions',
    'slide.methodology': 'Methodology',
    'slide.stakeholders': 'Stakeholders',
    'slide.workpackages': 'Work Packages',
    'slide.dataprotection': 'Data Protection & Ethics',
    'slide.interdisciplinary': 'Interdisciplinary Implementation',
    'slide.timeline': 'Timeline',
    'slide.closing': 'Summary',
    'slide.thankyou': 'Thank You',

    // Slide subtitles
    'slideSubtitle.title': 'DigiChildProtect research design',
    'slideSubtitle.problem': 'Child endangerment in Germany',
    'slideSubtitle.questions': 'Six central questions',
    'slideSubtitle.methodology': 'Mixed-methods design',
    'slideSubtitle.stakeholders': 'Core and system context',
    'slideSubtitle.workpackages': '11 packages for implementation',
    'slideSubtitle.dataprotection': '5-step model',
    'slideSubtitle.interdisciplinary': 'Agile project organization',
    'slideSubtitle.timeline': '42 months design thinking',
    'slideSubtitle.closing': 'Core features & contributions',
    'slideSubtitle.thankyou': 'For your attention',

    // Contact page
    'contact.title': 'Contact',
    'contact.subtitle':
        'Do you have questions about the research design? I look forward to your message.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What is it about?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Your message...',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you! Your message has been sent.',
    'contact.error': 'An error occurred while sending. Please try again later.',
    'contact.candidate': 'Candidate',
    'contact.project': 'Project',
    'contact.position': 'Position',
    'contact.positionValue': 'Research Position DigiChildProtect',
    'contact.institution': 'Institution',
    'contact.projectName': 'Project name',
    'contact.jobTitle': 'Job title',
    'contact.duration': 'Duration',
    'contact.durationValue': '42 months (01/01/2026 – 06/30/2029)',
    'contact.privacyNotice': 'Privacy Notice',
    'contact.privacyTitle': 'Privacy Notice',
    'contact.privacyText':
        'Your contact details will only be used to respond to your inquiry and will not be shared with third parties. Processing is in accordance with GDPR.',
    'contact.moreInfo': 'More information',
    'contact.viewPresentation': 'View presentation',
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.email': 'your.email@example.com',
    'contact.placeholder.subject': 'What is it about?',
    'contact.placeholder.message': 'Your message...',

    // Bibliography
    'bibliography.title': 'Bibliography',
    'bibliography.subtitle':
        'Scientific sources and references of the research design',

    // Glossary
    'glossary.title': 'Glossary',
    'glossary.subtitle': 'Key terms and definitions',
    'glossary.search': 'Search term...',

    // Title slide
    'titleSlide.badge': 'RESEARCH DESIGN',
    'titleSlide.subtitle':
        'Exploratory baseline, human-centered development, and staged field validation',
    'titleSlide.candidate': 'CANDIDATE',
    'titleSlide.date': 'DATE',
    'titleSlide.project': 'PROJECT',
    'titleSlide.institution': 'Emden/Leer University of Applied Sciences',

    // Auth cover branding
    'authCover.badge': 'DigiChildProtect',
    'authCover.title1': 'Research',
    'authCover.title2': 'Presentation',
    'authCover.subtitle': 'Emden/Leer University • SAG 128',
    'authCover.date': 'Interview: January 30, 2026',
    'authCover.feature1Title': '10 Slides',
    'authCover.feature1Desc': 'Complete research design presentation',
    'authCover.feature2Title': 'Protected',
    'authCover.feature2Desc': 'For interview participants only',
};
