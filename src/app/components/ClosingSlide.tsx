import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { InPageNavigation, NavigationSection } from '@/app/components/InPageNavigation';

export function ClosingSlide() {
  const navigationSections: NavigationSection[] = [
    { id: 'section-1', label: '1. Kernmerkmale' },
    { id: 'section-2', label: '2. Methodische Stärken' },
    { id: 'section-3', label: '3. Erwartete Beiträge' },
  ];

  const coreFeatures = [
    {
      title: 'Holocracy-basierte Zusammenarbeit',
      description: 'Selbstorganisierte Sub-Circles mit verteilter Autorität über drei Fakultäten',
    },
    {
      title: 'Design-Thinking-Prozess',
      description: 'Iterative, parallele Zyklen (M 4-30) statt sequenzieller Wasserfall-Planung',
    },
    {
      title: 'Explorative Grundlagen',
      description: 'Systematische Desk-Research (Datenbanken, graue Literatur) + qualitative Feldforschung',
    },
    {
      title: 'Menschenzentriert nach ISO',
      description: 'Iterativer Zyklus nach ISO 9241-210/220 mit quantitativer Validierung',
    },
    {
      title: 'Risikosensitive Einbeziehung',
      description: 'Stufenweise Integration Betroffener mit ethischen Stop/Go-Gates',
    },
    {
      title: 'Transferorientiert',
      description: 'Übergabefähige Lösungen mit regionalen Netzwerken und Schulungskonzepten',
    },
  ];

  const methodologicalStrengths = [
    {
      title: 'Living-Lab-Ansatz',
      description: 'Reallabor-Tests mit Praxispartnern für kontextnahe Validierung',
    },
    {
      title: '11 Arbeitspakete',
      description: 'Von Stakeholder-Mapping bis Feld-Governance, methodisch durchstrukturiert',
    },
    {
      title: 'Cross-Circle-Qualitätssicherung',
      description: 'Audit-Trail, Intercoder-Abgleich, Tension-Processing, Peer-Reviews',
    },
    {
      title: 'Transparente Übersetzungskette',
      description: 'Dokumentierte Entscheidungswege von Feldbefund bis Transfer',
    },
  ];

  const expectedContributions = [
    'Wissenschaftlicher Beitrag zur Digitalisierung im Kinderschutz',
    'Praxisrelevante Prototypen und Designsystem für regionale Organisationen',
    'Methodische Innovation durch Holocracy im interfakultären Forschungskontext',
    'Transferfähige Konzepte für KI-gestützte soziale Dienstleistungen',
    'Publikationen und Dissemination in Fachcommunity',
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">10 — ZUSAMMENFASSUNG</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Zusammenfassung
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Methodisch fundiert, ethisch reflektiert, umsetzungsorientiert
          </p>
        </motion.div>

        {/* Core Features */}
        <motion.div
          id="section-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            1. Kernmerkmale des Forschungsdesigns
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((point, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-chart-1 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground leading-tight">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Methodological Strengths */}
        <motion.div
          id="section-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            2. Methodische Stärken
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodologicalStrengths.map((strength, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-chart-2 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground leading-tight">{strength.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expected Contributions */}
        <motion.div
          id="section-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            3. Erwartete Beiträge
          </h2>
          
          <div className="bg-card border border-border rounded-lg p-8">
            <ul className="space-y-3" role="list">
              {expectedContributions.map((contribution, idx) => (
                <li key={idx} className="text-foreground flex items-start gap-3">
                  <span className="text-chart-3 mt-1 text-xl">•</span>
                  <span className="text-base leading-relaxed">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary text-primary-foreground p-12 rounded-lg text-center"
        >
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Praxis, Forschung und gesellschaftliche Verantwortung
            </h2>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">
              Dieses Forschungsdesign überführt mehr als zwanzig Jahre Erfahrung an der
              Schnittstelle von Digitalisierung, Organisation und Mensch in einen
              wissenschaftlich fundierten, praxisnahen und ethisch verantworteten Beitrag
              im Bereich Kinderschutz.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}