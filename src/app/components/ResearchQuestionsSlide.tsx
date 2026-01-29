import { motion } from 'motion/react';

export function ResearchQuestionsSlide() {
  const questions = [
    {
      id: 'RQ1',
      title: 'Ausgangslage & Akteurslandschaft',
      description: 'Infrastruktur, Netzwerke, Regularien, Institutionen',
      color: 'bg-chart-1',
    },
    {
      id: 'RQ2',
      title: 'Organisation & Prozesse',
      description: 'Problemlagen, Engpässe, Qualitätsrisiken',
      color: 'bg-chart-2',
    },
    {
      id: 'RQ3',
      title: 'Daten & Systemrealität',
      description: 'Dokumentationspraktiken, Systemlandschaften',
      color: 'bg-chart-3',
    },
    {
      id: 'RQ4',
      title: 'Akzeptanz & Verantwortung',
      description: 'Bedingungen für digitale/KI-gestützte Unterstützung',
      color: 'bg-chart-4',
    },
    {
      id: 'RQ5',
      title: 'Hypothesenprüfung',
      description: 'Use-Case-Validierung in Prototypen',
      color: 'bg-chart-5',
    },
    {
      id: 'RQ6',
      title: 'Transfer & Implementierung',
      description: 'Nachhaltige Einführung im regionalen Netzwerk',
      color: 'bg-primary',
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">02 — STRUKTUR</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Forschungsfragen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Sechs zentrale Fragen strukturieren das explorative Vorgehen
          </p>
        </motion.div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q, index) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border-2 border-border rounded-lg overflow-hidden hover:border-foreground transition-colors">
                <div className={`${q.color} p-6 text-white`}>
                  <div className="text-4xl font-bold">{q.id}</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    {q.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {q.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-muted p-6 rounded-lg"
        >
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Logik:</strong> Von der Kontextaufnahme über Anforderungsspezifikation
            und prototypische Validierung bis zur Transfer- und Implementierungsplanung
          </p>
        </motion.div>
      </div>
    </div>
  );
}
