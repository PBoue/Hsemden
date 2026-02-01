import { motion } from 'motion/react';
import {
    InPageNavigation,
    NavigationSection,
} from '@/app/components/InPageNavigation';

export function TimelineSlide() {
    const navigationSections: NavigationSection[] = [
        { id: 'section-1', label: '1. Projektplan (Gantt)' },
        { id: 'section-2', label: '2. Phasen im Detail' },
    ];

    // Gantt Chart Data - showing parallel activities
    const ganttPhases = [
        {
            name: 'Exploration & Grundlagen',
            start: 1,
            duration: 6,
            color: 'bg-chart-1',
            textColor: 'text-chart-1',
        },
        {
            name: 'Konzeption, Prototyping & Validierung (Design-Zyklen)',
            start: 4,
            duration: 27,
            color: 'bg-chart-2',
            textColor: 'text-chart-2',
        },
        {
            name: 'Transfer & Implementierung',
            start: 31,
            duration: 12,
            color: 'bg-chart-4',
            textColor: 'text-chart-4',
        },
    ];

    const totalMonths = 42;

    const phases = [
        {
            id: '2.1',
            period: 'M 1-6',
            title: 'Exploration & Grundlagen',
            color: 'border-chart-1',
            activities: [
                'Stakeholder-Mapping & Rekrutierung',
                'Qualitative Interviews (AP2)',
                'Dokumenten-/Artefaktanalyse (Formulare, Prozessdokumente, Systemmasken)',
                'Wissenschaftliche Desk-Research: systematische Literatursuche in Datenbanken (Web of Science, Scopus, PubMed, EBSCO), graue Literatur, Policy-Analysen',
                'Sekundärdatenanalyse (Destatis, Mikrozensus, kommunale Statistiken)',
                'Kontextmodellierung und Annahmenprotokolle',
            ],
            deliverables:
                'Problem-Backlog, Anforderungskatalog, Kontextinventar, Literatur-Review',
        },
        {
            id: '2.2',
            period: 'M 4-30',
            title: 'Konzeption, Prototyping, Validierung & Felderprobung',
            subtitle:
                'Parallel verlaufende Design-Thinking-Zyklen (Design Sprints)',
            color: 'border-chart-2',
            activities: [
                'Personas & Segmentierung (AP3): datenbasierte Nutzerprofile',
                'User Journeys als Matrixmodell (AP4): Falltyp × Rolle × Touchpoint',
                'Use-Case-Hypothesen und Priorisierung (AP5)',
                'Iterative Prototyping-Zyklen (AP6): Low → High Fidelity',
                'Living-Lab/Reallabor-Tests (AP7): kontextnahe Felderprobung',
                'Quantitative Validierung (ISO 9241-11): Effektivität, Effizienz, Zufriedenstellung',
                'Designsystem-Aufbau (AP8) & Architektur (AP9)',
                'Risiko- und Wirksamkeitsanalyse, Stop/Go-Gates',
            ],
            deliverables:
                'Prototypen, Designsystem, Validierungsbericht, Architektur-Blueprint',
            note: 'Diese Phase folgt dem iterativen Design-Thinking-Prozess: Verstehen → Beobachten → Synthese → Ideen → Prototypen → Testen (in mehreren Zyklen)',
        },
        {
            id: '2.3',
            period: 'M 31-42',
            title: 'Transfer & Implementierung',
            color: 'border-chart-4',
            activities: [
                'Kommunikations- und Transferkonzept (AP10)',
                'Regionale Netzwerkarbeit und CSR-orientierte Formate',
                'Rollout-Roadmap und Feld-Governance (AP11)',
                'Schulungs- und Supportkonzepte',
                'Adoption Packages und Evaluierung',
                'Publikationen und wissenschaftliche Dissemination',
            ],
            deliverables:
                'Implementierungsplan, Transfer-Packages, Publikationen',
        },
    ];

    return (
        <div className="min-h-full p-8 md:p-16 bg-background relative overflow-hidden">
            {/* In-Page Navigation */}
            <InPageNavigation sections={navigationSections} />

            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-7xl mx-auto space-y-12 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-3"
                >
                    <div className="inline-block px-4 py-2 bg-muted rounded">
                        <span className="text-sm font-medium tracking-wide text-muted-foreground">
                            09 — TIMELINE
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                        42 Monate im Design-Thinking-Prozess
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        01.01.2026 – 30.06.2029 • Parallele, iterative Phasen
                    </p>
                </motion.div>

                {/* Gantt Chart Section */}
                <motion.div
                    id="section-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        1. Projektplan
                    </h2>

                    <div className="bg-card border border-border rounded-lg p-6">
                        {/* Mobile summary */}
                        <div className="space-y-4 md:hidden">
                            {ganttPhases.map((phase, idx) => (
                                <div
                                    key={idx}
                                    className="space-y-1"
                                >
                                    <div
                                        className={`text-sm font-semibold ${phase.textColor}`}
                                    >
                                        {phase.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        M {phase.start}–
                                        {phase.start + phase.duration - 1} •{' '}
                                        {phase.duration} Monate
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop gantt */}
                        <div className="hidden md:block">
                            {/* Month Headers */}
                            <div className="flex mb-4 text-xs text-muted-foreground font-medium">
                                <div className="w-64 flex-shrink-0"></div>
                                <div className="flex-1 flex">
                                    {[0, 6, 12, 18, 24, 30, 36, 42].map(
                                        (month) => (
                                            <div
                                                key={month}
                                                className="flex-1 text-center"
                                            >
                                                M{month}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>

                            {/* Gantt Bars */}
                            <div className="space-y-4">
                                {ganttPhases.map((phase, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-64 flex-shrink-0">
                                            <div
                                                className={`text-sm font-semibold ${phase.textColor}`}
                                            >
                                                {phase.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                M {phase.start}–
                                                {phase.start +
                                                    phase.duration -
                                                    1}
                                            </div>
                                        </div>
                                        <div className="flex-1 relative h-10">
                                            {/* Background grid */}
                                            <div className="absolute inset-0 flex">
                                                {Array.from({ length: 7 }).map(
                                                    (_, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex-1 border-r border-border/30"
                                                        />
                                                    ),
                                                )}
                                            </div>
                                            {/* Phase bar */}
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.2 + idx * 0.1,
                                                }}
                                                className={`absolute h-8 ${phase.color} rounded shadow-sm flex items-center justify-center text-white text-xs font-medium px-2 origin-left`}
                                                style={{
                                                    left: `${((phase.start - 1) / totalMonths) * 100}%`,
                                                    width: `${(phase.duration / totalMonths) * 100}%`,
                                                }}
                                            >
                                                {phase.duration} Monate
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Design Thinking Note */}
                        <div className="mt-6 pt-6 border-t border-border">
                            <p className="text-sm text-muted-foreground italic">
                                <span className="font-semibold text-foreground">
                                    Design-Thinking-Parallelität:
                                </span>{' '}
                                Die mittlere Phase (M 4-30) umfasst iterative
                                Design-Zyklen, in denen Konzeption, Prototyping
                                und Validierung nicht sequentiell, sondern in
                                parallelen Sprints ablaufen.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Detailed Phases Section */}
                <motion.div
                    id="section-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        2. Phasen im Detail
                    </h2>

                    {phases.map((phase, idx) => (
                        <div
                            key={phase.id}
                            className={`space-y-4 pl-6 border-l-4 ${phase.color}`}
                        >
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-foreground">
                                    {phase.id} {phase.title}
                                </h3>
                                <div className="text-sm font-medium text-muted-foreground">
                                    {phase.period}
                                </div>
                                {phase.subtitle && (
                                    <div className="text-sm italic text-muted-foreground">
                                        {phase.subtitle}
                                    </div>
                                )}
                            </div>

                            <div className="bg-card border border-border rounded-lg p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <div className="text-sm font-medium tracking-wide text-muted-foreground">
                                            AKTIVITÄTEN
                                        </div>
                                        <ul
                                            className="space-y-2"
                                            role="list"
                                        >
                                            {phase.activities.map(
                                                (activity, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-sm text-foreground flex items-start gap-2"
                                                    >
                                                        <span className="text-muted-foreground mt-1">
                                                            •
                                                        </span>
                                                        <span>{activity}</span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="text-sm font-medium tracking-wide text-muted-foreground">
                                            DELIVERABLES
                                        </div>
                                        <p className="text-sm text-foreground leading-relaxed">
                                            {phase.deliverables}
                                        </p>
                                    </div>
                                </div>

                                {phase.note && (
                                    <div className="mt-6 pt-6 border-t border-border">
                                        <p className="text-sm text-muted-foreground italic">
                                            <span className="font-semibold text-foreground">
                                                →
                                            </span>{' '}
                                            {phase.note}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Continuous Activities Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-muted/30 border border-border rounded-lg p-6"
                >
                    <h3 className="text-lg font-bold text-foreground mb-4">
                        Parallele Aktivitäten über gesamte Laufzeit
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground">
                        <div className="space-y-2">
                            <p>
                                • Kontinuierliche Literaturrecherche und
                                -aufarbeitung
                            </p>
                            <p>
                                • Publikationsvorbereitung und
                                wissenschaftlicher Austausch
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p>
                                • Kooperation mit Praxispartnern und
                                Stakeholder-Kommunikation
                            </p>
                            <p>
                                • Möglichkeit zur Promotion wird aktiv
                                unterstützt
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
