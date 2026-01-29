import { Users, Building2, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function StakeholdersSlide() {
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
    <div className="min-h-full p-8 md:p-16 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="inline-block px-4 py-2 bg-muted rounded">
            <span className="text-sm font-medium tracking-wide text-muted-foreground">04 — AKTEURE</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Stakeholder
          </h1>
        </motion.div>

        {/* Main Stakeholder Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="bg-chart-1 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-medium tracking-wide opacity-90">PRIMÄR</div>
                    <h2 className="text-2xl font-bold">Kernstakeholder</h2>
                  </div>
                </div>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-full bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="bg-chart-2 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Building2 className="h-8 w-8" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-medium tracking-wide opacity-90">SEKUNDÄR</div>
                    <h2 className="text-2xl font-bold">Systemkontext</h2>
                  </div>
                </div>
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
          </motion.div>
        </div>

        {/* Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Methodisches Vorgehen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((method, index) => (
              <div key={index} className="bg-card border-2 border-border p-6 rounded-lg">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-destructive/10 border-2 border-destructive/20 p-8 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">
                Besonderer Schutz vulnerabler Gruppen
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
                Stufenweise, risikoadaptierte Einbeziehung Betroffener und von Kindern
                erst nach dokumentierter Risikoreduktion und definierten Gate-Kriterien
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
