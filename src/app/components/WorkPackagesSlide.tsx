import { Card } from '@/app/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function WorkPackagesSlide() {
  const workPackages = [
    {
      id: 'AP1-2',
      title: 'Exploration & Interviews',
      items: [
        'AP1: Stakeholder-Mapping, Dokumentenanalyse',
        'AP2: Qualitative Interviews (Prozesse, Systeme, Akzeptanz)',
      ],
      output: 'Problem-Backlog, Anforderungskandidaten, Risikoregister',
    },
    {
      id: 'AP3-4',
      title: 'Personas & Journeys',
      items: [
        'AP3: Datenbasierte Personas aus Statistiken & Felddaten',
        'AP4: User Journeys als Matrixmodell (Rolle × Touchpoint)',
      ],
      output: 'Persona-Set, Ist/Soll-Journeys, priorisierte Eingriffspunkte',
    },
    {
      id: 'AP5-6',
      title: 'Hypothesen & Prototypen',
      items: [
        'AP5: Use-Case-Konzeption, Hypothesenbildung',
        'AP6: Prototyping-Zyklen (Low → High Fidelity)',
      ],
      output: 'Use-Case-Briefs, testbare Prototypen, Iterationsdokumentation',
    },
    {
      id: 'AP7',
      title: 'Validierung',
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
      items: [
        'AP8: Designsystem mit Schutz- und Kinderfokus',
        'AP9: Architektur, DevOps, Datenschutz-by-Design',
      ],
      output: 'Komponentenbibliothek, Architektur-Blueprint, Sicherheitskonzept',
    },
    {
      id: 'AP10-11',
      title: 'Transfer & Implementierung',
      items: [
        'AP10: Kommunikation, regionale Netzwerke, CSR-Formate',
        'AP11: Rollout-Roadmap, Governance, Schulungskonzept',
      ],
      output: 'Transferkonzept, Adoption Packages, Implementierungsplan',
    },
  ];

  return (
    <div className="min-h-full p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Arbeitspakete</h1>
          <p className="text-muted-foreground text-lg">
            11 Arbeitspakete überführen Befunde systematisch in übergabefähige Artefakte
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {workPackages.map((wp) => (
            <AccordionItem key={wp.id} value={wp.id} className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-4 text-left">
                  <span className="text-sm font-medium text-primary min-w-[4rem]">
                    {wp.id}
                  </span>
                  <span className="font-medium">{wp.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="space-y-3 pl-20">
                  <div className="space-y-1.5">
                    {wp.items.map((item, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="pt-2">
                    <p className="text-sm">
                      <span className="font-medium">Output:</span>{' '}
                      <span className="text-muted-foreground">{wp.output}</span>
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="space-y-2">
            <h3 className="font-medium">Interdisziplinäre Studierendenintegration</h3>
            <p className="text-sm text-muted-foreground">
              Cross-funktionale Teams aus Sozialer Arbeit & Gesundheit, Technik und
              Wirtschaft werden in Projektseminaren, Abschlussarbeiten und Hiwi-Strukturen
              eingebunden – mit strikt geregelten Zugriffsrechten und Datenminimierung.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
