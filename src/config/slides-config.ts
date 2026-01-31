import { lazy, type ComponentType } from 'react';
import type { TranslationKey } from '@/i18n';

const TitleSlide = lazy(() =>
    import('@/app/components/TitleSlide').then((module) => ({
        default: module.TitleSlide,
    })),
);
const ProblemContextSlide = lazy(() =>
    import('@/app/components/ProblemContextSlide').then((module) => ({
        default: module.ProblemContextSlide,
    })),
);
const ResearchQuestionsSlide = lazy(() =>
    import('@/app/components/ResearchQuestionsSlide').then((module) => ({
        default: module.ResearchQuestionsSlide,
    })),
);
const MethodologySlide = lazy(() =>
    import('@/app/components/MethodologySlide').then((module) => ({
        default: module.MethodologySlide,
    })),
);
const StakeholdersSlide = lazy(() =>
    import('@/app/components/StakeholdersSlide').then((module) => ({
        default: module.StakeholdersSlide,
    })),
);
const WorkPackagesSlide = lazy(() =>
    import('@/app/components/WorkPackagesSlide').then((module) => ({
        default: module.WorkPackagesSlide,
    })),
);
const DataProtectionSlide = lazy(() =>
    import('@/app/components/DataProtectionSlide').then((module) => ({
        default: module.DataProtectionSlide,
    })),
);
const InterdisciplinarySlide = lazy(() =>
    import('@/app/components/InterdisciplinarySlide').then((module) => ({
        default: module.InterdisciplinarySlide,
    })),
);
const TimelineSlide = lazy(() =>
    import('@/app/components/TimelineSlide').then((module) => ({
        default: module.TimelineSlide,
    })),
);
const ClosingSlide = lazy(() =>
    import('@/app/components/ClosingSlide').then((module) => ({
        default: module.ClosingSlide,
    })),
);
const ThankYouSlide = lazy(() =>
    import('@/app/components/ThankYouSlide').then((module) => ({
        default: module.ThankYouSlide,
    })),
);

export interface SlideSection {
    id: string;
    label: string;
}

export interface SlideConfig {
    id: string;
    title: string;
    titleKey?: TranslationKey;
    sections?: SlideSection[];
}

export interface SlideDefinition extends SlideConfig {
    subtitle: string;
    subtitleKey?: TranslationKey;
    color: string;
    component: ComponentType;
}

export const slides: SlideDefinition[] = [
    {
        id: 'title',
        title: 'Titel',
        titleKey: 'slide.title',
        subtitle: 'DigiChildProtect Forschungsdesign',
        subtitleKey: 'slideSubtitle.title',
        color: 'bg-primary',
        component: TitleSlide,
    },
    {
        id: 'context',
        title: 'Problemstellung',
        titleKey: 'slide.problem',
        subtitle: 'Kindeswohlgefährdungen in Deutschland',
        subtitleKey: 'slideSubtitle.problem',
        color: 'bg-chart-1',
        component: ProblemContextSlide,
        sections: [
            {
                id: 'section-1',
                label: '1. Problemstellung und Forschungskontext',
            },
            { id: 'section-2', label: '2. Einordnung der Relevanz' },
            { id: 'section-3', label: '3. Referenzprojekte und Forschung' },
            { id: 'section-4', label: '4. Zielsetzung' },
        ],
    },
    {
        id: 'research-questions',
        title: 'Forschungsfragen',
        titleKey: 'slide.questions',
        subtitle: 'Sechs zentrale Fragen',
        subtitleKey: 'slideSubtitle.questions',
        color: 'bg-chart-2',
        component: ResearchQuestionsSlide,
        sections: [
            { id: 'section-1', label: '1. Theoretische Fundierung' },
            { id: 'section-2', label: '2. Explorativer Forschungsrahmen' },
        ],
    },
    {
        id: 'methodology',
        title: 'Methodik',
        titleKey: 'slide.methodology',
        subtitle: 'Mixed-Methods-Design',
        subtitleKey: 'slideSubtitle.methodology',
        color: 'bg-chart-3',
        component: MethodologySlide,
        sections: [
            { id: 'section-1', label: '1. Methodischer Rahmen' },
            { id: 'section-2', label: '2. Kernprinzipien und Standards' },
            { id: 'section-3', label: '3. Iterativer Prozess' },
            { id: 'section-4', label: '4. Detaillierte Phasen' },
        ],
    },
    {
        id: 'stakeholders',
        title: 'Stakeholder',
        titleKey: 'slide.stakeholders',
        subtitle: 'Kern- und Systemkontext',
        subtitleKey: 'slideSubtitle.stakeholders',
        color: 'bg-chart-4',
        component: StakeholdersSlide,
        sections: [
            { id: 'section-1', label: '1. Netzwerk-Visualisierung' },
            { id: 'section-2', label: '2. Stakeholder-Gruppen' },
            { id: 'section-3', label: '3. Methodisches Vorgehen' },
            { id: 'section-4', label: '4. Schutz vulnerabler Gruppen' },
        ],
    },
    {
        id: 'work-packages',
        title: 'Arbeitspakete',
        titleKey: 'slide.workpackages',
        subtitle: '11 Pakete zur Umsetzung',
        subtitleKey: 'slideSubtitle.workpackages',
        color: 'bg-chart-5',
        component: WorkPackagesSlide,
        sections: [
            { id: 'section-1', label: '1. Übersicht der Arbeitspakete' },
            { id: 'section-2', label: '2. Studierendenintegration' },
        ],
    },
    {
        id: 'data-protection',
        title: 'Datenschutz & Ethik',
        titleKey: 'slide.dataprotection',
        subtitle: '5-Stufenmodell',
        subtitleKey: 'slideSubtitle.dataprotection',
        color: 'bg-destructive',
        component: DataProtectionSlide,
        sections: [
            { id: 'section-1', label: '1. Rechtliche Grundlagen' },
            { id: 'section-2', label: '2. Technische Maßnahmen' },
            { id: 'section-3', label: '3. 5-Stufenmodell' },
            { id: 'section-4', label: '4. Gate-Kriterien' },
        ],
    },
    {
        id: 'interdisciplinary',
        title: 'Interdisziplinär',
        titleKey: 'slide.interdisciplinary',
        subtitle: 'Agile Projektorganisation',
        subtitleKey: 'slideSubtitle.interdisciplinary',
        color: 'bg-chart-2',
        component: InterdisciplinarySlide,
        sections: [
            { id: 'section-1', label: '1. Agile Projektorganisation' },
            { id: 'section-2', label: '2. Fakultäten der HS Emden/Leer' },
            { id: 'section-3', label: '3. Arbeitsgruppen & Rollen' },
            { id: 'section-4', label: '4. Qualitätssicherung' },
        ],
    },
    {
        id: 'timeline',
        title: 'Phasenmodell',
        titleKey: 'slide.timeline',
        subtitle: '42 Monate Design-Thinking',
        subtitleKey: 'slideSubtitle.timeline',
        color: 'bg-chart-3',
        component: TimelineSlide,
        sections: [
            { id: 'section-1', label: '1. Projektplan (Gantt)' },
            { id: 'section-2', label: '2. Phasen im Detail' },
        ],
    },
    {
        id: 'closing',
        title: 'Zusammenfassung',
        titleKey: 'slide.closing',
        subtitle: 'Kernmerkmale & Beiträge',
        subtitleKey: 'slideSubtitle.closing',
        color: 'bg-primary',
        component: ClosingSlide,
        sections: [
            { id: 'section-1', label: '1. Kernmerkmale' },
            { id: 'section-2', label: '2. Methodische Stärken' },
            { id: 'section-3', label: '3. Erwartete Beiträge' },
        ],
    },
    {
        id: 'thank-you',
        title: 'Vielen Dank',
        titleKey: 'slide.thankyou',
        subtitle: 'Für Ihre Aufmerksamkeit',
        subtitleKey: 'slideSubtitle.thankyou',
        color: 'bg-primary',
        component: ThankYouSlide,
    },
];

export const slidesConfig: SlideConfig[] = slides.map(
    ({ id, title, sections }) => ({
        id,
        title,
        sections,
    }),
);
