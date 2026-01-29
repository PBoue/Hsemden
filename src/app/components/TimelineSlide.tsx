import { motion } from 'motion/react';

export function TimelineSlide() {
  const phases = [
    {
      period: 'M 1-6',
      title: 'Exploration & Grundlagen',
      color: 'bg-chart-1',
      activities: [
        'Stakeholder-Mapping & Rekrutierung',
        'Qualitative Interviews',
        'Dokumentenanalyse & Kontextmodellierung',
        'Literaturaufarbeitung',
      ],
      deliverables: 'Problem-Backlog, Anforderungskatalog',
    },
    {
      period: 'M 7-15',
      title: 'Konzeption & Prototyping',
      color: 'bg-chart-2',
      activities: [
        'User Journeys & Touchpoint-Mapping',
        'Use-Case-Hypothesen',
        'Prototyping-Zyklen',
        'Designsystem-Aufbau',
      ],
      deliverables: 'Prototypen, Designsystem, Architektur',
    },
    {
      period: 'M 16-30',
      title: 'Validierung & Felderprobung',
      color: 'bg-chart-3',
      activities: [
        'Living-Lab-Tests mit Partnern',
        'Quantitative Validierung',
        'Stufenweise Einbeziehung Betroffener',
        'Risiko- und Wirksamkeitsanalyse',
      ],
      deliverables: 'Validierungsbericht, Stop/Go-Entscheidung',
    },
    {
      period: 'M 31-42',
      title: 'Transfer & Implementierung',
      color: 'bg-chart-4',
      activities: [
        'Transfer- und Kommunikationsplanung',
        'Regionale Netzwerkarbeit',
        'Schulungskonzepte & Adoption',
        'Publikationen & Dissemination',
      ],
      deliverables: 'Implementierungsplan, Publikationen',
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">08 — TIMELINE</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            42 Monate
          </h1>
          <p className="text-xl text-muted-foreground">
            01.01.2026 – 30.06.2029 • Vier Hauptphasen
          </p>
        </motion.div>

        {/* Phases */}
        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            >
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="flex items-stretch flex-col md:flex-row">
                  {/* Phase Number & Period */}
                  <div className={`${phase.color} p-6 text-white md:w-48 flex-shrink-0`}>
                    <div className="space-y-2">
                      <div className="text-5xl font-bold">{idx + 1}</div>
                      <div className="text-sm font-medium tracking-wide opacity-90">{phase.period}</div>
                      <div className="text-lg font-bold leading-tight pt-2">{phase.title}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="text-sm font-medium tracking-wide text-muted-foreground">AKTIVITÄTEN</div>
                        <ul className="space-y-2" role="list">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="text-sm text-foreground flex items-start gap-2">
                              <span className="text-muted-foreground mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="text-sm font-medium tracking-wide text-muted-foreground">DELIVERABLES</div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {phase.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-muted p-8 rounded-lg"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              Parallele Aktivitäten über gesamte Laufzeit
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="space-y-2">
                <p>• Kontinuierliche Literaturrecherche und -aufarbeitung</p>
                <p>• Publikationsvorbereitung und wissenschaftlicher Austausch</p>
              </div>
              <div className="space-y-2">
                <p>• Kooperation mit Praxispartnern und Stakeholder-Kommunikation</p>
                <p>• Möglichkeit zur Promotion wird aktiv unterstützt</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
