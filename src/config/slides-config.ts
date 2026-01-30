import { SlideConfig } from '@/app/components/SettingsDrawer';

export const slidesConfig: SlideConfig[] = [
    {
        id: 'title',
        title: 'Titel',
    },
    {
        id: 'context',
        title: 'Kontext',
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
        sections: [
            { id: 'section-1', label: '1. Theoretische Fundierung' },
            { id: 'section-2', label: '2. Explorativer Forschungsrahmen' },
        ],
    },
    {
        id: 'methodology',
        title: 'Methodik',
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
        sections: [
            { id: 'section-1', label: '1. Übersicht der Arbeitspakete' },
            { id: 'section-2', label: '2. Studierendenintegration' },
        ],
    },
    {
        id: 'data-protection',
        title: 'Datenschutz & Ethik',
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
        sections: [
            { id: 'section-1', label: '1. Projektplan (Gantt)' },
            { id: 'section-2', label: '2. Phasen im Detail' },
        ],
    },
    {
        id: 'closing',
        title: 'Zusammenfassung',
        sections: [
            { id: 'section-1', label: '1. Kernmerkmale' },
            { id: 'section-2', label: '2. Methodische Stärken' },
            { id: 'section-3', label: '3. Erwartete Beiträge' },
        ],
    },
    {
        id: 'thank-you',
        title: 'Vielen Dank',
    },
];
