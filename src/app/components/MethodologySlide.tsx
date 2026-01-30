import { motion } from 'motion/react';
import { FileText, Users, Lightbulb, Target, Layers, TestTube, BookOpen, Eye } from 'lucide-react';
import { InPageNavigation, NavigationSection } from '@/app/components/InPageNavigation';

export function MethodologySlide() {
  const designThinkingPhases = [
    {
      number: '4.1',
      title: 'Understand',
      subtitle: 'Problemraum abstecken',
      icon: BookOpen,
      description: 'In dieser Phase werden die Rahmenbedingungen (rechtlich, organisatorisch, technisch) und der Forschungsstand systematisch aufgenommen.',
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
      description: 'Qualitative Erhebungen zur Erfassung von Arbeitspraktiken, Pains/Gains, Verantwortungslogiken sowie Schutz- und Akzeptanzanforderungen.',
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
      description: 'Qualitative Befunde werden mit Sekundärdaten trianguliert, um priorisierte Problemstellungen, Nutzersegmente und risikorelevante Prozesspunkte zu bestimmen.',
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
      description: 'Ideen werden systematisch aus definierten Anforderungen abgeleitet, gebündelt und entlang Nutzen-Risiko- und Umsetzbarkeitskriterien fokussiert.',
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
      description: 'Prototypen (Low- bis High-Fidelity) sowie begleitende Artefakte werden erstellt. Jede Iteration wird dokumentiert (Annahme, Artefakt, Test, Entscheidung).',
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
      description: 'Qualitative Tests im kontrollierten Setting (Living-Lab/Reallabor) werden mit standardisierten Ergänzungen kombiniert.',
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
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto space-y-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="inline-block px-4 py-2 bg-muted rounded">
            <span className="text-sm font-medium tracking-wide text-muted-foreground">04 — METHODIK</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Design Thinking als Mixed-Methods-Prozess
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Sequenziell-exploratives Design nach HPI d.school-Phasenlogik mit iterativer Rückkopplung
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
            Design Thinking wird als strukturierte Vorgehensweise verstanden, in der Problemräume menschenzentriert erschlossen, 
            Lösungsoptionen generiert, prototypisch umgesetzt und iterativ geprüft werden. Als prozessualer Rahmen wird die 
            Phasenlogik der HPI d.school (Understand, Observe, Define point of view, Find ideas, Develop prototypes, Testing) genutzt, 
            die iterativ angelegt ist und eine wiederholte Rückkopplung zwischen Erkenntnisgewinn und Artefaktentwicklung vorsieht.
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
                <div className="text-sm font-medium tracking-wide opacity-90">KERNPRINZIP</div>
                <h3 className="text-2xl font-bold">Divergenz & Konvergenz</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  <strong>Understand/Observe:</strong> Divergenz (Breite)<br />
                  <strong>Define:</strong> Konvergenz (Fokus)<br />
                  <strong>Find ideas/Develop:</strong> Divergenz → Konvergenz<br />
                  <strong>Testing:</strong> Rückkopplung zu Define oder Develop
                </p>
              </div>
            </div>

            <div className="bg-card border-2 border-border p-6 rounded-lg">
              <div className="space-y-3">
                <div className="text-sm font-medium tracking-wide text-muted-foreground">VERBINDLICHE STANDARDS</div>
                <h3 className="text-2xl font-bold text-foreground">Menschenzentriert & Wissenschaftlich</h3>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
                  <p><strong>DIN EN ISO 9241-210/220:</strong> Nutzungskontext, Anforderungen, Lösungen, iterative Evaluation</p>
                  <p><strong>DFG-Kodex, HS Emden/Leer GWP-Ordnung, DSGVO Art. 89, § 13 NDSG</strong></p>
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

          {/* Linear Process Visualization inspired by NN/g - COMPLETELY REBUILT */}
          <div className="relative w-full">
            {/* Main container with fixed aspect ratio */}
            <div className="relative mx-auto" style={{ maxWidth: '1200px' }}>
              
              {/* Feedback Arrows Container - positioned above circles */}
              <div className="relative w-full mb-4" style={{ height: '100px' }}>
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <marker
                      id="arrow-feedback"
                      markerWidth="6"
                      markerHeight="6"
                      refX="5"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 6 3, 0 6" fill="hsl(var(--muted-foreground))" />
                    </marker>
                  </defs>

                  {/* Short arcs - between adjacent phases */}
                  {/* Observe → Understand */}
                  <motion.path
                    d="M 25 85 Q 16.67 40, 8.33 85"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.5"
                    markerEnd="url(#arrow-feedback)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />

                  {/* Define → Observe */}
                  <motion.path
                    d="M 41.67 85 Q 33.33 40, 25 85"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.5"
                    markerEnd="url(#arrow-feedback)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1.4 }}
                  />

                  {/* Find Ideas → Define */}
                  <motion.path
                    d="M 58.33 85 Q 50 40, 41.67 85"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.5"
                    markerEnd="url(#arrow-feedback)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1.6 }}
                  />

                  {/* Develop → Find Ideas */}
                  <motion.path
                    d="M 75 85 Q 66.67 40, 58.33 85"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.5"
                    markerEnd="url(#arrow-feedback)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1.8 }}
                  />

                  {/* Testing → Develop */}
                  <motion.path
                    d="M 91.67 85 Q 83.33 40, 75 85"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.5"
                    markerEnd="url(#arrow-feedback)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 2 }}
                  />

                  {/* Medium arcs - 2 phases back */}
                  {/* Define → Understand */}
                  <motion.path
                    d="M 41.67 75 Q 25 20, 8.33 75"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.4"
                    markerEnd="url(#arrow-feedback)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1.2, delay: 2.2 }}
                  />

                  {/* Find Ideas → Observe */}
                  <motion.path
                    d="M 58.33 75 Q 41.67 20, 25 75"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.4"
                    markerEnd="url(#arrow-feedback)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1.2, delay: 2.4 }}
                  />

                  {/* Large arc - Testing → Define (fundamental rework) */}
                  <motion.path
                    d="M 91.67 65 Q 66.67 5, 41.67 65"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.35"
                    markerEnd="url(#arrow-feedback)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.45 }}
                    transition={{ duration: 1.5, delay: 2.6 }}
                  />
                </svg>
              </div>

              {/* Phase Circles Row */}
              <div className="flex items-center justify-between px-2 mb-6">
                {designThinkingPhases.map((phase, index) => {
                  const IconComponent = phase.icon;
                  const colors = [
                    'hsl(var(--chart-1))',
                    'hsl(var(--chart-2))',
                    'hsl(var(--chart-3))',
                    'hsl(var(--chart-4))',
                    'hsl(var(--chart-5))',
                    'hsl(var(--destructive))',
                  ];
                  const color = colors[index];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex flex-col items-center gap-2 flex-1"
                    >
                      {/* Phase Title Above Circle */}
                      <div
                        className="text-xs font-bold uppercase tracking-wide text-center mb-1"
                        style={{ color }}
                      >
                        {phase.title}
                      </div>

                      {/* Circle with Icon */}
                      <div className="relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background border-2 flex items-center justify-center"
                          style={{ borderColor: color }}
                        >
                          <IconComponent className="w-8 h-8 md:w-10 md:h-10" style={{ color }} strokeWidth={1.5} />
                        </motion.div>
                      </div>

                      {/* Phase Number Below Circle */}
                      <div className="text-xs font-mono font-medium text-muted-foreground mt-1">
                        {phase.number}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Process Stage Labels (Problemraum, Lösungsraum, Validierung) */}
              <div className="flex items-stretch mb-6">
                {/* Problemraum - spans 2 phases (Understand + Observe) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.8 }}
                  className="flex-1"
                  style={{ flexBasis: '33.33%' }}
                >
                  <div className="bg-muted/50 rounded px-3 py-2 text-center mx-1">
                    <div className="text-xs md:text-sm font-bold uppercase tracking-wide text-foreground">
                      Problemraum
                    </div>
                  </div>
                </motion.div>

                {/* Lösungsraum - spans 3 phases (Define + Find Ideas + Develop) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3 }}
                  className="flex-1"
                  style={{ flexBasis: '50%' }}
                >
                  <div className="bg-muted/50 rounded px-3 py-2 text-center mx-1">
                    <div className="text-xs md:text-sm font-bold uppercase tracking-wide text-foreground">
                      Lösungsraum
                    </div>
                  </div>
                </motion.div>

                {/* Validierung - spans 1 phase (Testing) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.2 }}
                  className="flex-1"
                  style={{ flexBasis: '16.67%' }}
                >
                  <div className="bg-muted/50 rounded px-3 py-2 text-center mx-1">
                    <div className="text-xs md:text-sm font-bold uppercase tracking-wide text-foreground">
                      Validierung
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <svg width="32" height="16" className="flex-shrink-0">
                <path d="M 28 14 Q 16 4, 4 14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.5" />
                <polygon points="4 14, 6 12, 6 16" fill="hsl(var(--muted-foreground))" opacity="0.5" />
              </svg>
              <span>Kurze Iteration (benachbarte Phasen)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="48" height="16" className="flex-shrink-0">
                <path d="M 44 14 Q 24 3, 4 14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.4" />
                <polygon points="4 14, 6 12, 6 16" fill="hsl(var(--muted-foreground))" opacity="0.4" />
              </svg>
              <span>Mittlere Iteration (2-3 Phasen zurück)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="56" height="16" className="flex-shrink-0">
                <path d="M 52 14 Q 28 2, 4 14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" opacity="0.35" />
                <polygon points="4 14, 6 12, 6 16" fill="hsl(var(--muted-foreground))" opacity="0.35" />
              </svg>
              <span>Große Iteration (fundamentale Überarbeitung)</span>
            </div>
          </div>

          {/* Source Attribution */}
          <div className="text-xs text-muted-foreground pt-2 border-t border-border">
            <p>
              <strong>Prozessmodell:</strong> HPI d.school (Understand, Observe, Define point of view, Find ideas, Develop prototypes, Testing) 
              • <strong>Visualisierung inspiriert von:</strong> Nielsen Norman Group – Design Thinking 101 
              (<a 
                href="https://www.nngroup.com/articles/design-thinking/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-chart-1 hover:underline"
              >
                nngroup.com/articles/design-thinking
              </a>)
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
                    {phase.number} {phase.title} — {phase.subtitle}
                  </h3>
                  
                  <p className="text-foreground leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Methods & Output Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Methods */}
                    <div className="bg-muted/30 border border-border p-4 rounded-lg">
                      <div className="text-xs font-medium tracking-wide text-muted-foreground mb-2 uppercase">Methoden</div>
                      <ul className="space-y-1.5" role="list">
                        {phase.methods.map((method, idx) => (
                          <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-chart-1 mt-0.5">•</span>
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Output */}
                    <div className="bg-chart-1/10 border border-chart-1/30 p-4 rounded-lg">
                      <div className="text-xs font-medium tracking-wide text-chart-1 mb-2 uppercase">Output</div>
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