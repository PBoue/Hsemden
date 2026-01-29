import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function MethodologySlide() {
  const phases = [
    {
      number: '01',
      title: 'Qualitative Exploration',
      color: 'bg-chart-1',
      items: [
        'Leitfadengestützte Interviews',
        'Stakeholder-Mapping',
        'Dokumentenanalyse',
        'Kontextmodellierung',
      ],
    },
    {
      number: '02',
      title: 'Artefaktbasierte Iterationen',
      color: 'bg-chart-2',
      items: [
        'Prototypen (Low → High Fidelity)',
        'User Journeys',
        'Designsystem',
        'Architekturbausteine',
      ],
    },
    {
      number: '03',
      title: 'Quantitative Validierung',
      color: 'bg-chart-3',
      items: [
        'Usability-Metriken (ISO 9241-11)',
        'Akzeptanzskalen',
        'Aufgabenbasierte Tests',
        'Wirksamkeitsanalyse',
      ],
    },
  ];

  const translationChain = [
    'Feldbefund',
    'Anforderung',
    'Artefakt',
    'Test',
    'Übergabe',
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">03 — METHODIK</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Mixed-Methods-Design
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Sequenziell-exploratives Vorgehen in drei Phasen
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="h-full bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className={`${phase.color} p-6 text-white`}>
                  <div className="text-sm font-medium tracking-wide opacity-90 mb-2">PHASE</div>
                  <div className="text-5xl font-bold mb-4">{phase.number}</div>
                  <div className="text-xl font-bold">{phase.title}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2" role="list">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-foreground mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Translation Chain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-primary text-primary-foreground p-8 rounded-lg"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-sm font-medium tracking-wide opacity-90">KERNPRINZIP</div>
              <h2 className="text-3xl font-bold">Übersetzungskette</h2>
            </div>
            <div className="flex items-center gap-3 flex-wrap" role="list">
              {translationChain.map((step, index) => (
                <div key={index} className="flex items-center gap-3" role="listitem">
                  <div className="px-4 py-2 bg-white/10 rounded font-medium">
                    {step}
                  </div>
                  {index < translationChain.length - 1 && (
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="space-y-3">
              <div className="text-sm font-medium tracking-wide text-muted-foreground">GESTALTUNGSLOGIK</div>
              <h3 className="text-xl font-bold text-foreground">Menschenzentriert</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                DIN EN ISO 9241-210/220 • Nutzungskontext verstehen, Anforderungen spezifizieren, Lösungen entwerfen, iterativ evaluieren
              </p>
            </div>
          </div>

          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="space-y-3">
              <div className="text-sm font-medium tracking-wide text-muted-foreground">VERBINDLICHE STANDARDS</div>
              <h3 className="text-xl font-bold text-foreground">Wissenschaftspraxis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                DFG-Kodex • HS Emden/Leer GWP-Ordnung • DSGVO Art. 89 • § 13 NDSG
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
