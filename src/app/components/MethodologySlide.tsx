import { motion } from 'motion/react';
import {
    FileText,
    Users,
    Lightbulb,
    Target,
    Layers,
    TestTube,
    BookOpen,
    Eye,
} from 'lucide-react';
import {
    InPageNavigation,
    NavigationSection,
} from '@/app/components/InPageNavigation';

export function MethodologySlide() {
    const designThinkingPhases = [
        {
            number: '4.1',
            title: 'Understand',
            subtitle: 'Problemraum abstecken',
            icon: BookOpen,
            description:
                'In dieser Phase werden die Rahmenbedingungen (rechtlich, organisatorisch, technisch) und der Forschungsstand systematisch aufgenommen.',
            methods: [
                'Literaturarbeit',
                'Dokumenten- und Artefaktanalyse',
                'Richtlinien, Prozessdokumente, Systemmasken',
                'Stakeholder- und Systemgrenzen',
            ],
            output: 'Kontextinventar und initiales Annahmenprotokoll',
        },
        {
            number: '4.2',
            title: 'Observe',
            subtitle: 'Empathie und Feldrealität erschließen',
            icon: Eye,
            description:
                'Qualitative Erhebungen zur Erfassung von Arbeitspraktiken, Pains/Gains, Verantwortungslogiken sowie Schutz- und Akzeptanzanforderungen.',
            methods: [
                'Leitfadengestützte Interviews',
                'Beobachtungsanteile im Rahmen des Feldzugangs',
                'Dokumentierte Inhaltsanalyse',
                'Problem-Backlog und Anforderungskandidaten',
            ],
            output: 'Qualitative Befunde mit Problem-Backlog',
        },
        {
            number: '4.3',
            title: 'Define point of view',
            subtitle: 'Befunde verdichten, Problemdefinition präzisieren',
            icon: Target,
            description:
                'Qualitative Befunde werden mit Sekundärdaten trianguliert, um priorisierte Problemstellungen, Nutzersegmente und risikorelevante Prozesspunkte zu bestimmen.',
            methods: [
                'Triangulation mit Sekundärdaten',
                'Amtliche Statistik, aggregierte Fall- und Nutzungsdaten',
                'Datenbasierte Personas',
                'Journey-Matrizen (Falltyp × Rolle × Touchpoint)',
            ],
            output: 'Priorisiertes Anforderungsset und Use-Case-Briefs',
        },
        {
            number: '4.4',
            title: 'Find ideas',
            subtitle: 'Lösungsoptionen generieren und fokussieren',
            icon: Lightbulb,
            description:
                'Ideen werden systematisch aus definierten Anforderungen abgeleitet, gebündelt und entlang Nutzen-Risiko- und Umsetzbarkeitskriterien fokussiert.',
            methods: [
                'Systematische Ideengenerierung',
                'Nutzen-Risiko-Bewertung',
                'Umsetzbarkeitskriterien',
                'Hypothesen- und Use-Case-Katalog',
            ],
            output: 'Hypothesen mit Evidenzankern ("Datenquelle → Befund → Hypothese")',
        },
        {
            number: '4.5',
            title: 'Develop prototypes',
            subtitle: 'Artefakte entwickeln',
            icon: Layers,
            description:
                'Prototypen (Low- bis High-Fidelity) sowie begleitende Artefakte werden erstellt. Jede Iteration wird dokumentiert (Annahme, Artefakt, Test, Entscheidung).',
            methods: [
                'Prototypen (Low- bis High-Fidelity)',
                'Designsystem',
                'Architektur-/Sicherheitskonzept',
                'Dokumentierte Iterations-Zyklen',
            ],
            output: 'Versionierte Prototypen mit Dokumentation',
        },
        {
            number: '4.6',
            title: 'Testing',
            subtitle: 'Evaluation und Iterationsentscheidungen',
            icon: TestTube,
            description:
                'Qualitative Tests im kontrollierten Setting (Living-Lab/Reallabor) werden mit standardisierten Ergänzungen kombiniert.',
            methods: [
                'ISO 9241-11: Effektivität, Effizienz, Zufriedenstellung',
                'Akzeptanz- und Risikokriterien',
                'Stop/Go-Gates',
                'Living-Lab/Reallabor-Tests',
            ],
            output: 'Validierungsbericht mit Entscheidungen und Nebenfolgenprofil',
        },
    ];

    const navigationSections: NavigationSection[] = [
        { id: 'section-1', label: '1. Methodischer Rahmen' },
        { id: 'section-2', label: '2. Kernprinzipien und Standards' },
        { id: 'section-3', label: '3. Iterativer Prozess' },
        { id: 'section-4', label: '4. Detaillierte Phasen' },
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
                            04 — METHODIK
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                        Design Thinking als Mixed-Methods-Prozess
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-4xl">
                        Sequenziell-exploratives Design nach HPI
                        d.school-Phasenlogik mit iterativer Rückkopplung
                    </p>
                </motion.div>

                {/* Framework Description */}
                <motion.div
                    id="section-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        1. Methodischer Rahmen
                    </h2>
                    <p className="text-foreground leading-relaxed">
                        Design Thinking wird als strukturierte Vorgehensweise
                        verstanden, in der Problemräume menschenzentriert
                        erschlossen, Lösungsoptionen generiert, prototypisch
                        umgesetzt und iterativ geprüft werden. Als prozessualer
                        Rahmen wird die Phasenlogik der HPI d.school
                        (Understand, Observe, Define point of view, Find ideas,
                        Develop prototypes, Testing) genutzt, die iterativ
                        angelegt ist und eine wiederholte Rückkopplung zwischen
                        Erkenntnisgewinn und Artefaktentwicklung vorsieht.
                    </p>
                </motion.div>

                {/* Core Principles & Standards */}
                <motion.div
                    id="section-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        2. Kernprinzipien und Standards
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                            <div className="space-y-3">
                                <div className="text-sm font-medium tracking-wide opacity-90">
                                    KERNPRINZIP
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Divergenz & Konvergenz
                                </h3>
                                <p className="text-sm opacity-90 leading-relaxed">
                                    <strong>Understand/Observe:</strong>{' '}
                                    Divergenz (Breite)
                                    <br />
                                    <strong>Define:</strong> Konvergenz (Fokus)
                                    <br />
                                    <strong>Find ideas/Develop:</strong>{' '}
                                    Divergenz → Konvergenz
                                    <br />
                                    <strong>Testing:</strong> Rückkopplung zu
                                    Define oder Develop
                                </p>
                            </div>
                        </div>

                        <div className="bg-card border-2 border-border p-6 rounded-lg">
                            <div className="space-y-3">
                                <div className="text-sm font-medium tracking-wide text-muted-foreground">
                                    VERBINDLICHE STANDARDS
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">
                                    Menschenzentriert & Wissenschaftlich
                                </h3>
                                <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
                                    <p>
                                        <strong>
                                            DIN EN ISO 9241-210/220:
                                        </strong>{' '}
                                        Nutzungskontext, Anforderungen,
                                        Lösungen, iterative Evaluation
                                    </p>
                                    <p>
                                        <strong>
                                            DFG-Kodex, HS Emden/Leer
                                            GWP-Ordnung, DSGVO Art. 89, § 13
                                            NDSG
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Process Visualization Section */}
                <motion.div
                    id="section-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        3. Iterativer Design-Thinking-Prozess
                    </h2>

                    {/* Design Thinking Process Image from TU Dortmund */}
                    <div className="relative w-full">
                        <div
                            className="relative mx-auto"
                            style={{ maxWidth: '1000px' }}
                        >
                            <img
                                src="https://cet.tu-dortmund.de/storages/cet/_processed_/d/b/csm_Der_Design_Thinking_Prozess_89353704dd.jpg"
                                alt="Der Design Thinking Prozess - 6 Phasen: Verstehen, Beobachten, Sichtweise definieren, Ideen finden, Prototypen entwickeln, Testen"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    {/* Source Attribution */}
                    <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                        <p>
                            <strong>Abbildung:</strong> TU Dortmund, Center for
                            Entrepreneurship & Transfer (
                            <a
                                href="https://cet.tu-dortmund.de/storages/cet/_processed_/d/b/csm_Der_Design_Thinking_Prozess_89353704dd.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-chart-1 hover:underline"
                            >
                                cet.tu-dortmund.de
                            </a>
                            ) • <strong>Prozessmodell:</strong> HPI d.school
                        </p>
                    </div>
                </motion.div>

                {/* Design Thinking Phases Details */}
                <motion.div
                    id="section-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        4. Detaillierte Phasen-Beschreibung
                    </h2>

                    <div className="space-y-10">
                        {designThinkingPhases.map((phase, index) => {
                            const IconComponent = phase.icon;
                            return (
                                <div
                                    key={index}
                                    className="space-y-4"
                                >
                                    {/* Phase Heading - No Icon in heading, simpler style like Slide 2 */}
                                    <h3 className="text-xl font-bold text-foreground">
                                        {phase.number} {phase.title} —{' '}
                                        {phase.subtitle}
                                    </h3>

                                    <p className="text-foreground leading-relaxed">
                                        {phase.description}
                                    </p>

                                    {/* Methods & Output Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Methods */}
                                        <div className="bg-muted/30 border border-border p-4 rounded-lg">
                                            <div className="text-xs font-medium tracking-wide text-muted-foreground mb-2 uppercase">
                                                Methoden
                                            </div>
                                            <ul
                                                className="space-y-1.5"
                                                role="list"
                                            >
                                                {phase.methods.map(
                                                    (method, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-sm text-foreground flex items-start gap-2"
                                                        >
                                                            <span className="text-chart-1 mt-0.5">
                                                                •
                                                            </span>
                                                            <span>
                                                                {method}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>

                                        {/* Output */}
                                        <div className="bg-chart-1/10 border border-chart-1/30 p-4 rounded-lg">
                                            <div className="text-xs font-medium tracking-wide text-chart-1 mb-2 uppercase">
                                                Output
                                            </div>
                                            <p className="text-sm text-foreground font-medium leading-relaxed">
                                                {phase.output}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
