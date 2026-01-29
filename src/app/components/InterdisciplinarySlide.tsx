import { Card } from '@/app/components/ui/card';
import { ArrowRight, Users, Code, TrendingUp } from 'lucide-react';

export function InterdisciplinarySlide() {
  return (
    <div className="min-h-full p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Interdisziplinäre Umsetzung</h1>
          <p className="text-muted-foreground text-lg">
            Zusammenarbeit der Fachbereiche als Übersetzungskette
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-1/10 rounded-lg">
                <Users className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="font-medium">Soziale Arbeit & Gesundheit</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Kinderschutz-Expertise</li>
              <li>• Feldzugang & Prozessverständnis</li>
              <li>• Ethische Reflexion</li>
              <li>• Akteurskoordination</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-2/10 rounded-lg">
                <Code className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="font-medium">Technik</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Prototyping & Entwicklung</li>
              <li>• Systemarchitektur</li>
              <li>• Datenschutz-by-Design</li>
              <li>• DevOps & Sicherheit</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-3/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-chart-3" />
              </div>
              <h3 className="font-medium">Wirtschaft</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Organisationsanalyse</li>
              <li>• Prozessoptimierung</li>
              <li>• Transfer & Adoption</li>
              <li>• Regionale Netzwerke</li>
            </ul>
          </Card>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="font-medium">Operationalisierung als Übersetzungskette</h3>
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="text-sm font-medium">Feldbefund</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="text-sm font-medium">Anforderung</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="text-sm font-medium">Artefakt</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="text-sm font-medium">Test</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="text-sm font-medium">Übergabe</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Jeder Schritt wird dokumentiert mit Zuordnung: Datenquelle → Befund →
              Designentscheidung → Implementierung
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-3">
            <h3 className="font-medium">Qualitätssicherung</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Audit-Trail (Versionierung aller Artefakte)</li>
              <li>• Intercoder-Abgleich bei qualitativer Auswertung</li>
              <li>• Peer-Review in interdisziplinären Reviews</li>
              <li>• Dokumentierte Annahmen und Unsicherheiten</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-3">
            <h3 className="font-medium">Rollenzuordnung</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>
                • <strong>Literaturarbeit:</strong> alle Fachbereiche
              </li>
              <li>
                • <strong>Empirische Erhebungen:</strong> SAG Lead, alle beteiligt
              </li>
              <li>
                • <strong>Prototyping:</strong> Technik Lead, cross-funktional
              </li>
              <li>
                • <strong>Transfer:</strong> Wirtschaft Lead, SAG, Technik
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
