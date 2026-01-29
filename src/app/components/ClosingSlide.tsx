import { Card } from '@/app/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function ClosingSlide() {
  const keyPoints = [
    {
      title: 'Explorative Ausgangslage',
      description:
        'Systematische Aufnahme der Ist-Situation durch qualitative & quantitative Methoden',
    },
    {
      title: 'Menschenzentrierter Prozess',
      description:
        'Iterativer Zyklus von Diagnose, Hypothese, Entwurf, Test und Übergabe nach ISO 9241-210/220',
    },
    {
      title: 'Risikosensitiver Schutz',
      description:
        'Stufenweise Einbeziehung vulnerabler Gruppen mit dokumentierten Gate-Kriterien',
    },
    {
      title: 'Interdisziplinäre Umsetzung',
      description:
        'SAG, Technik und Wirtschaft als Übersetzungskette: Befund → Anforderung → Artefakt',
    },
    {
      title: 'Transferorientierung',
      description:
        'Von Anfang an auf implementierbare, übergabefähige Lösungen ausgerichtet',
    },
    {
      title: 'Wissenschaftliche Fundierung',
      description:
        'GWP-konform, datenschutzrechtlich abgesichert, mit klarem Audit-Trail',
    },
  ];

  return (
    <div className="min-h-full p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-medium">Zusammenfassung</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ein methodisch fundiertes, ethisch reflektiertes und
            umsetzungsorientiertes Forschungsdesign für digitale Transformation im
            Kinderschutz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyPoints.map((point, idx) => (
            <Card key={idx} className="p-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1 flex-1">
                  <h3 className="font-medium">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-primary/5 border-primary/20 text-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">
              Verbindung von Praxis, Forschung und gesellschaftlicher Verantwortung
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Dieses Forschungsdesign überführt mehr als zwanzig Jahre Erfahrung an der
              Schnittstelle von Digitalisierung, Organisation und Mensch in einen
              wissenschaftlich fundierten, praxisnahen und ethisch verantworteten Beitrag
              im Bereich Kinderschutz.
            </p>
          </div>
        </Card>

        <div className="text-center space-y-4 pt-8">
          <p className="text-muted-foreground">Philipp Boué</p>
          <p className="text-sm text-muted-foreground">
            Hochschule Emden/Leer • Projekt DigiChildProtect • Januar 2026
          </p>
          <div className="pt-4">
            <p className="text-lg font-medium">Vielen Dank für Ihre Aufmerksamkeit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
