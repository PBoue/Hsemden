import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { InPageNavigation, NavigationSection } from '@/app/components/InPageNavigation';

export function DataProtectionSlide() {
  const navigationSections: NavigationSection[] = [
    { id: 'section-1', label: '1. Rechtliche Grundlagen' },
    { id: 'section-2', label: '2. Technische Maßnahmen' },
    { id: 'section-3', label: '3. 5-Stufenmodell' },
    { id: 'section-4', label: '4. Gate-Kriterien' },
  ];

  const stages = [
    {
      stage: 0,
      label: 'Exploration',
      description: 'Ohne Betroffene/Kinder, ohne Realfalldaten',
      risk: 'minimal',
      riskColor: 'bg-green-600',
    },
    {
      stage: 1,
      label: 'Geschlossene Tests',
      description: 'Mit Professionellen, synthetische Fälle',
      risk: 'niedrig',
      riskColor: 'bg-blue-600',
    },
    {
      stage: 2,
      label: 'Betroffeneneinbezug',
      description: 'Familienvertretungen, kontrolliert',
      risk: 'mittel',
      riskColor: 'bg-yellow-600',
    },
    {
      stage: 3,
      label: 'Kindereinbezug',
      description: 'Nach dokumentierter Risikoreduktion',
      risk: 'erhöht',
      riskColor: 'bg-red-600',
    },
    {
      stage: 4,
      label: 'Erweiterte Nutzung',
      description: 'Nach definierten Gate-Kriterien',
      risk: 'kontrolliert',
      riskColor: 'bg-muted-foreground',
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">07 — SCHUTZ</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Datenschutz & Ethik
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Risikoadaptiertes Stufenmodell für verantwortungsvolle Forschung
          </p>
        </motion.div>

        {/* Legal Foundations */}
        <motion.div
          id="section-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            1. Rechtliche Grundlagen
          </h2>
          <div className="bg-chart-1 text-white p-8 rounded-lg">
            <ul className="space-y-3 text-sm" role="list">
              <li className="leading-relaxed">
                <strong>DSGVO Art. 89:</strong> Garantien für Forschung (Datenminimierung, technische/organisatorische Maßnahmen)
              </li>
              <li className="leading-relaxed">
                <strong>§ 13 NDSG:</strong> Zusätzlicher Rahmen für Niedersachsen
              </li>
              <li className="leading-relaxed">
                <strong>DFG-Kodex & HS-GWP:</strong> Gute wissenschaftliche Praxis
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Technical Measures */}
        <motion.div
          id="section-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            2. Technische Maßnahmen
          </h2>
          <div className="bg-card border border-border p-8 rounded-lg">
            <ul className="space-y-2 text-sm text-muted-foreground" role="list">
              <li className="flex items-start gap-2">
                <span className="text-chart-2 mt-1 font-bold">•</span>
                <span>Datenminimierung ab erstem Kontakt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-2 mt-1 font-bold">•</span>
                <span>Trennung identifizierender Merkmale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-2 mt-1 font-bold">•</span>
                <span>Frühestmögliche Anonymisierung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-2 mt-1 font-bold">•</span>
                <span>Restriktive Zugriffs- und Rollenkonzepte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-2 mt-1 font-bold">•</span>
                <span>Logging, Monitoring, Incident-Management</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Stage Model */}
        <motion.div
          id="section-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            3. 5-Stufenmodell: Beteiligung Betroffener und Kinder
          </h2>

          <div className="space-y-3" role="list">
            {stages.map((s, index) => (
              <div
                key={s.stage}
                className="bg-card border-2 border-border rounded-lg overflow-hidden"
              >
                <div className="flex items-stretch">
                  <div className={cn("w-24 flex items-center justify-center", s.riskColor)}>
                    <span className="text-4xl font-bold text-white">{s.stage}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{s.label}</h3>
                        <p className="text-sm text-muted-foreground">{s.description}</p>
                      </div>
                      <div className={cn(
                        "px-3 py-1.5 rounded font-bold text-xs text-white flex-shrink-0",
                        s.riskColor
                      )}>
                        {s.risk.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gate Criteria */}
        <motion.div
          id="section-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            4. Gate-Kriterien für Stufenübergänge
          </h2>
          <p className="text-foreground leading-relaxed">
            Datenschutz-Compliance • Sicherheitsbewertung • Akzeptanznachweise • Dokumentiertes Fehlermanagement — Nur nach Erfüllung erfolgt Freigabe
          </p>
        </motion.div>
      </div>
    </div>
  );
}
