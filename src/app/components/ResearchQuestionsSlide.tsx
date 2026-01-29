import { Card } from '@/app/components/ui/card';

export function ResearchQuestionsSlide() {
  const questions = [
    {
      id: 'RQ1',
      title: 'Ausgangslage und Akteurslandschaft',
      description:
        'Welche Infrastruktur, Netzwerke, Regularien, Institutionen und Akteursgruppen wirken im regionalen Kinderschutzkontext?',
    },
    {
      id: 'RQ2',
      title: 'Organisation und Prozesse',
      description:
        'Welche Problemlagen, Engpässe und Qualitätsrisiken werden entlang typischer Arbeits- und Fallprozesse berichtet?',
    },
    {
      id: 'RQ3',
      title: 'Daten- und Systemrealität',
      description:
        'Welche Datenarten, Dokumentationspraktiken und Systemlandschaften prägen die Fallbearbeitung?',
    },
    {
      id: 'RQ4',
      title: 'Akzeptanz, Verantwortung, Schutz',
      description:
        'Unter welchen Bedingungen wird digitale bzw. KI-gestützte Unterstützung akzeptiert?',
    },
    {
      id: 'RQ5',
      title: 'Hypothesenprüfung in Prototypen',
      description:
        'Welche Use-Case-Hypothesen lassen sich ableiten und in kontrollierten Erprobungen validieren?',
    },
    {
      id: 'RQ6',
      title: 'Transfer und Implementierung',
      description:
        'Welche Bedingungen werden für nachhaltige Einführung im regionalen Netzwerk als erforderlich beschrieben?',
    },
  ];

  return (
    <div className="min-h-full p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Forschungsfragen</h1>
          <p className="text-muted-foreground text-lg">
            Sechs zentrale Fragen strukturieren das explorative Vorgehen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((q) => (
            <Card key={q.id} className="p-6 space-y-3 hover:border-primary/50 transition-colors">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-medium text-primary">{q.id}</span>
                <h3 className="font-medium flex-1">{q.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{q.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-muted/50">
          <p className="text-sm text-muted-foreground">
            <strong>Logik:</strong> Von der Kontextaufnahme über Anforderungsspezifikation
            und prototypische Validierung bis zur Transfer- und Implementierungsplanung
          </p>
        </Card>
      </div>
    </div>
  );
}
