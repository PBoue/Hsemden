import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function ClosingSlide() {
  const keyPoints = [
    {
      title: 'Explorative Ausgangslage',
      description: 'Systematische Aufnahme durch qualitative & quantitative Methoden',
    },
    {
      title: 'Menschenzentriert',
      description: 'Iterativer Zyklus nach ISO 9241-210/220',
    },
    {
      title: 'Risikosensitiv',
      description: 'Stufenweise Einbeziehung mit Gate-Kriterien',
    },
    {
      title: 'Interdisziplinär',
      description: 'SAG, Technik, Wirtschaft als Übersetzungskette',
    },
    {
      title: 'Transferorientiert',
      description: 'Übergabefähige, implementierbare Lösungen',
    },
    {
      title: 'Wissenschaftlich fundiert',
      description: 'GWP-konform, datenschutzrechtlich abgesichert',
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
          className="space-y-3 text-center"
        >
          <div className="inline-block px-4 py-2 bg-muted rounded">
            <span className="text-sm font-medium tracking-wide text-muted-foreground">09 — ABSCHLUSS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Zusammenfassung
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Methodisch fundiert, ethisch reflektiert, umsetzungsorientiert
          </p>
        </motion.div>

        {/* Key Points Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {keyPoints.map((point, idx) => (
            <div key={idx} className="bg-card border-2 border-border p-6 rounded-lg">
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

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="space-y-1">
              <div className="text-sm font-medium tracking-wide text-muted-foreground">KANDIDAT</div>
              <div className="text-lg font-bold text-foreground">Philipp Boué</div>
            </div>
          </div>

          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="space-y-1">
              <div className="text-sm font-medium tracking-wide text-muted-foreground">INSTITUTION</div>
              <div className="text-lg font-bold text-foreground">Hochschule Emden/Leer</div>
            </div>
          </div>

          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="space-y-1">
              <div className="text-sm font-medium tracking-wide text-muted-foreground">PROJEKT</div>
              <div className="text-lg font-bold text-foreground">DigiChildProtect</div>
              <div className="text-sm text-muted-foreground">SAG 128 • Januar 2026</div>
            </div>
          </div>
        </motion.div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center pt-8"
        >
          <p className="text-2xl font-bold text-foreground">
            Vielen Dank für Ihre Aufmerksamkeit
          </p>
        </motion.div>
      </div>
    </div>
  );
}
