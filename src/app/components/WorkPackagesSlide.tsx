import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { motion } from 'motion/react';

export function WorkPackagesSlide() {
  const workPackages = [
    {
      id: 'AP1-2',
      title: 'Exploration & Interviews',
      color: 'bg-chart-1',
      items: [
        'AP1: Stakeholder-Mapping, Dokumentenanalyse',
        'AP2: Qualitative Interviews (Prozesse, Systeme, Akzeptanz)',
      ],
      output: 'Problem-Backlog, Anforderungskandidaten, Risikoregister',
    },
    {
      id: 'AP3-4',
      title: 'Personas & Journeys',
      color: 'bg-chart-2',
      items: [
        'AP3: Datenbasierte Personas aus Statistiken & Felddaten',
        'AP4: User Journeys als Matrixmodell (Rolle × Touchpoint)',
      ],
      output: 'Persona-Set, Ist/Soll-Journeys, priorisierte Eingriffspunkte',
    },
    {
      id: 'AP5-6',
      title: 'Hypothesen & Prototypen',
      color: 'bg-chart-3',
      items: [
        'AP5: Use-Case-Konzeption, Hypothesenbildung',
        'AP6: Prototyping-Zyklen (Low → High Fidelity)',
      ],
      output: 'Use-Case-Briefs, testbare Prototypen, Iterationsdokumentation',
    },
    {
      id: 'AP7',
      title: 'Validierung',
      color: 'bg-chart-4',
      items: [
        'Living-Lab/Reallabor mit Praxispartnern',
        'Usability-Metriken nach ISO 9241-11',
        'Akzeptanz- und Risikoprofil',
      ],
      output: 'Validierungsbericht, Stop/Go-Gates, Wirkungsanalyse',
    },
    {
      id: 'AP8-9',
      title: 'System & Architektur',
      color: 'bg-chart-5',
      items: [
        'AP8: Designsystem mit Schutz- und Kinderfokus',
        'AP9: Architektur, DevOps, Datenschutz-by-Design',
      ],
      output: 'Komponentenbibliothek, Architektur-Blueprint, Sicherheitskonzept',
    },
    {
      id: 'AP10-11',
      title: 'Transfer & Implementierung',
      color: 'bg-primary',
      items: [
        'AP10: Kommunikation, regionale Netzwerke, CSR-Formate',
        'AP11: Rollout-Roadmap, Governance, Schulungskonzept',
      ],
      output: 'Transferkonzept, Adoption Packages, Implementierungsplan',
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">05 — UMSETZUNG</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Arbeitspakete
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            11 Pakete überführen Befunde in übergabefähige Artefakte
          </p>
        </motion.div>

        {/* Work Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {workPackages.map((wp, index) => (
              <AccordionItem
                key={wp.id}
                value={wp.id}
                className="border-2 border-border rounded-lg overflow-hidden bg-card"
              >
                <AccordionTrigger className="hover:no-underline px-6 py-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className={`${wp.color} text-white px-4 py-2 rounded font-bold text-sm`}>
                      {wp.id}
                    </div>
                    <span className="font-bold text-lg text-foreground">{wp.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-4 space-y-4 border-t border-border">
                    <div className="space-y-2">
                      {wp.items.map((item, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </div>
                    <div className="bg-muted p-4 rounded">
                      <p className="text-sm">
                        <span className="font-bold text-foreground">Output: </span>
                        <span className="text-muted-foreground">{wp.output}</span>
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Student Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary text-primary-foreground p-8 rounded-lg"
        >
          <div className="space-y-3">
            <div className="text-sm font-medium tracking-wide opacity-90">INTERDISZIPLINÄR</div>
            <h2 className="text-2xl font-bold">Studierendenintegration</h2>
            <p className="text-sm opacity-90 leading-relaxed max-w-4xl">
              Cross-funktionale Teams aus Sozialer Arbeit & Gesundheit, Technik und
              Wirtschaft in Projektseminaren, Abschlussarbeiten und Hiwi-Strukturen —
              mit strikt geregelten Zugriffsrechten und Datenminimierung
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
