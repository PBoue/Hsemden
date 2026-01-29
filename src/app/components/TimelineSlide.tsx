import { Card } from '@/app/components/ui/card';
import { Calendar } from 'lucide-react';

export function TimelineSlide() {
  const phases = [
    {
      period: 'Monate 1-6',
      title: 'Exploration & Grundlagen',
      activities: [
        'Stakeholder-Mapping & Rekrutierung',
        'Qualitative Interviews (Kern- und Sekundärstakeholder)',
        'Dokumentenanalyse & Kontextmodellierung',
        'Literaturaufarbeitung',
        'Erste Persona-Entwürfe',
      ],
      deliverables: 'Problem-Backlog, Anforderungskatalog, Stakeholder-Graph',
    },
    {
      period: 'Monate 7-15',
      title: 'Konzeption & Prototyping',
      activities: [
        'User Journeys & Touchpoint-Mapping',
        'Use-Case-Hypothesen',
        'Prototyping-Zyklen (Low → Mid → High Fidelity)',
        'Erste Tests mit Professionellen',
        'Designsystem-Aufbau',
      ],
      deliverables: 'Testbare Prototypen, Designsystem, Architektur-Blueprint',
    },
    {
      period: 'Monate 16-30',
      title: 'Validierung & Felderprobung',
      activities: [
        'Living-Lab-Tests mit Praxispartnern',
        'Quantitative Validierung (Usability, Akzeptanz)',
        'Stufenweise Einbeziehung Betroffener',
        'Iterative Verfeinerung',
        'Risiko- und Wirksamkeitsanalyse',
      ],
      deliverables: 'Validierungsbericht, finalisierte Lösungen, Stop/Go-Entscheidung',
    },
    {
      period: 'Monate 31-42',
      title: 'Transfer & Implementierung',
      activities: [
        'Transfer- und Kommunikationsplanung',
        'Regionale Netzwerkarbeit (Unternehmen, Kammern)',
        'Schulungskonzepte & Adoption Packages',
        'Implementierungsbegleitung',
        'Publikationen & wissenschaftliche Dissemination',
      ],
      deliverables: 'Implementierungsplan, Adoption Packages, Publikationen',
    },
  ];

  return (
    <div className="min-h-full p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Phasenmodell & Timeline</h1>
          <p className="text-muted-foreground text-lg">
            Projektlaufzeit: 42 Monate (01.01.2026 – 30.06.2029)
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <Card key={idx} className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary font-medium flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{phase.period}</span>
                    </div>
                    <h3 className="font-medium text-lg">{phase.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">
                        Aktivitäten
                      </h4>
                      <ul className="text-sm space-y-1">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="text-muted-foreground">
                            • {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">
                        Deliverables
                      </h4>
                      <p className="text-sm text-muted-foreground">{phase.deliverables}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-muted/50">
          <div className="space-y-2">
            <h3 className="font-medium">Parallele Aktivitäten über gesamte Laufzeit</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                • Kontinuierliche Literaturrecherche und -aufarbeitung
                <br />• Publikationsvorbereitung und wissenschaftlicher Austausch
              </div>
              <div>
                • Kooperation mit Praxispartnern und Stakeholder-Kommunikation
                <br />• Möglichkeit zur Promotion wird aktiv unterstützt
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
