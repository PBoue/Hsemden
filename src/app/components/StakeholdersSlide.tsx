import { motion } from 'motion/react';
import { NetworkVisualization } from '@/app/components/NetworkVisualization';
import { InPageNavigation, NavigationSection } from '@/app/components/InPageNavigation';

export function StakeholdersSlide() {
  const navigationSections: NavigationSection[] = [
    { id: 'section-1', label: '1. Netzwerk-Visualisierung' },
    { id: 'section-2', label: '2. Stakeholder-Gruppen' },
    { id: 'section-3', label: '3. Methodisches Vorgehen' },
    { id: 'section-4', label: '4. Schutz vulnerabler Gruppen' },
  ];

  const coreStakeholders = [
    'Jugendämter (ASD-Fachkräfte)',
    'Kinderschutzzentren',
    'Beratungsstellen',
    'Sozialarbeitende',
    'IT-Teams',
    'Management der Einrichtungen',
  ];

  const secondaryStakeholders = [
    'Freie Träger',
    'Datenschutz & Informationssicherheit',
    'Familiengericht, Polizei',
    'Schulen, Kitas',
    'Betroffene/Familienvertretungen',
    'Regionale Unternehmen, Kammern, Verbände',
  ];

  const methods = [
    {
      title: 'Stakeholder-Analyse',
      description: 'Einfluss-Interesse-Matrix, Beziehungsgraph, Quotensteuerung',
    },
    {
      title: 'Purposive Sampling',
      description: 'Gezielte Auswahl entlang Stakeholder-Mapping',
    },
    {
      title: 'Rekrutierungsplan',
      description: 'Dokumentierte Ansprache, Einwilligung, Zugangsregelung',
    },
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">05 — AKTEURE</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Stakeholder
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Partizipatives Forschungsdesign mit Kern- und Systemkontext
          </p>
        </motion.div>

        {/* Interactive Network Visualization */}
        <motion.div
          id="section-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-foreground">
            1. Netzwerk-Visualisierung
          </h2>
          <p className="text-foreground leading-relaxed">
            Bewegen Sie die Maus über die Knoten, um Details zu sehen. Klicken Sie, um Verbindungen hervorzuheben.
          </p>
          <div className="h-[400px] lg:h-[500px]">
            <NetworkVisualization />
          </div>
        </motion.div>

        {/* Main Stakeholder Groups */}
        <motion.div
          id="section-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            2. Stakeholder-Gruppen
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Core Stakeholders */}
            <div className="h-full bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-chart-1 p-6 text-white">
                <div className="text-sm font-medium tracking-wide opacity-90">PRIMÄR</div>
                <h3 className="text-2xl font-bold">Kernstakeholder</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">Feldadressaten mit direktem Nutzungsbezug</p>
                <ul className="space-y-2" role="list">
                  {coreStakeholders.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-chart-1 mt-1 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Secondary Stakeholders */}
            <div className="h-full bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="bg-chart-2 p-6 text-white">
                <div className="text-sm font-medium tracking-wide opacity-90">SEKUNDÄR</div>
                <h3 className="text-2xl font-bold">Systemkontext</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">Netzwerkakteure und Kontextfaktoren</p>
                <ul className="space-y-2" role="list">
                  {secondaryStakeholders.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-chart-2 mt-1 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Methods */}
        <motion.div
          id="section-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            3. Methodisches Vorgehen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((method, index) => (
              <div key={index} className="bg-card border border-border p-6 rounded-lg hover:border-primary transition-colors">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{method.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Protection Notice */}
        <motion.div
          id="section-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            4. Schutz vulnerabler Gruppen
          </h2>
          <p className="text-foreground leading-relaxed">
            Stufenweise, risikoadaptierte Einbeziehung Betroffener und von Kindern erst nach dokumentierter Risikoreduktion und definierten Gate-Kriterien. Orientiert an den Empfehlungen des Deutschen Ethikrats (2023).
          </p>
        </motion.div>
      </div>
    </div>
  );
}
