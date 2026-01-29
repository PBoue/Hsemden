import { Card } from '@/app/components/ui/card';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export function DataProtectionSlide() {
  const stages = [
    {
      stage: 0,
      label: 'Exploration',
      description: 'Ohne Betroffene/Kinder, ohne Realfalldaten',
      risk: 'minimal',
    },
    {
      stage: 1,
      label: 'Geschlossene Tests',
      description: 'Mit Professionellen, synthetische/abstrahierte Fälle',
      risk: 'niedrig',
    },
    {
      stage: 2,
      label: 'Betroffeneneinbezug',
      description: 'Familienvertretungen in kontrollierten Formaten',
      risk: 'mittel',
    },
    {
      stage: 3,
      label: 'Kindereinbezug',
      description: 'Nur nach dokumentierter Risikoreduktion',
      risk: 'erhöht',
    },
    {
      stage: 4,
      label: 'Erweiterte Nutzung',
      description: 'Nach definierten Gate-Kriterien',
      risk: 'kontrolliert',
    },
  ];

  return (
    <div className="min-h-full p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Datenschutz & Ethik</h1>
          <p className="text-muted-foreground text-lg">
            Risikosensitive Erhebungs- und Erprobungsformen mit besonderem Schutzkonzept
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium">Rechtliche Grundlagen</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <strong>DSGVO Art. 89:</strong> Garantien für Forschung (Datenminimierung,
                technische/organisatorische Maßnahmen)
              </li>
              <li>
                <strong>§ 13 NDSG:</strong> Zusätzlicher Rahmen für Niedersachsen
              </li>
              <li>
                <strong>DFG-Kodex & HS-GWP:</strong> Gute wissenschaftliche Praxis
              </li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-2/10 rounded-lg">
                <Lock className="h-5 w-5 text-chart-2" />
              </div>
              <h3 className="font-medium">Technische Maßnahmen</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Datenminimierung ab erstem Kontakt</li>
              <li>• Trennung identifizierender Merkmale</li>
              <li>• Frühestmögliche Anonymisierung</li>
              <li>• Restriktive Zugriffs- und Rollenkonzepte</li>
              <li>• Logging, Monitoring, Incident-Management</li>
            </ul>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <h3 className="font-medium">
              Stufenmodell: Beteiligung Betroffener und von Kindern
            </h3>
          </div>

          <div className="space-y-3">
            {stages.map((s) => (
              <Card
                key={s.stage}
                className={`p-4 ${
                  s.risk === 'minimal' || s.risk === 'niedrig'
                    ? 'bg-muted/30'
                    : s.risk === 'erhöht'
                    ? 'border-destructive/30'
                    : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-medium">
                    {s.stage}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium">{s.label}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          s.risk === 'minimal'
                            ? 'bg-green-100 text-green-700'
                            : s.risk === 'niedrig'
                            ? 'bg-blue-100 text-blue-700'
                            : s.risk === 'mittel'
                            ? 'bg-yellow-100 text-yellow-700'
                            : s.risk === 'erhöht'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        Risiko: {s.risk}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
          <div className="flex items-start gap-3">
            <Eye className="h-5 w-5 text-primary mt-0.5" />
            <div className="space-y-1 flex-1">
              <h4 className="text-sm font-medium">Gate-Kriterien für Stufenübergänge</h4>
              <p className="text-sm text-muted-foreground">
                Datenschutz-Compliance, Sicherheitsbewertung, Akzeptanznachweise,
                dokumentiertes Fehlermanagement – nur nach Erfüllung erfolgt Freigabe
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
