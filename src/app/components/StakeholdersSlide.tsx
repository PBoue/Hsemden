import { Card } from '@/app/components/ui/card';
import { Users, Building2, Shield } from 'lucide-react';

export function StakeholdersSlide() {
  return (
    <div className="min-h-full p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Stakeholder-Konzept</h1>
          <p className="text-muted-foreground text-lg">
            Systematische Erfassung und Einbeziehung aller relevanten Akteure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium">Kernstakeholder</h3>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Primäre Feldadressaten mit direktem Nutzungsbezug:</p>
              <ul className="space-y-1.5 ml-4">
                <li>• Jugendämter (ASD-Fachkräfte)</li>
                <li>• Kinderschutzzentren</li>
                <li>• Beratungsstellen</li>
                <li>• Sozialarbeitende</li>
                <li>• IT-Teams</li>
                <li>• Management der Einrichtungen</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-2/10 rounded-lg">
                <Building2 className="h-5 w-5 text-chart-2" />
              </div>
              <h3 className="font-medium">Sekundärstakeholder</h3>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Systemkontext und Netzwerkakteure:</p>
              <ul className="space-y-1.5 ml-4">
                <li>• Freie Träger</li>
                <li>• Datenschutz & Informationssicherheit</li>
                <li>• Familiengericht, Polizei</li>
                <li>• Schulen, Kitas</li>
                <li>• Betroffene/Familienvertretungen</li>
                <li>• Regionale Unternehmen, Kammern, Verbände</li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Methodisches Vorgehen</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-5 space-y-2">
              <h4 className="text-sm font-medium">Stakeholder-Analyse</h4>
              <p className="text-sm text-muted-foreground">
                Einfluss-Interesse-Matrix, Beziehungsgraph, Quotensteuerung für Sampling
              </p>
            </Card>

            <Card className="p-5 space-y-2">
              <h4 className="text-sm font-medium">Purposive Sampling</h4>
              <p className="text-sm text-muted-foreground">
                Gezielte Auswahl entlang Stakeholder-Mapping und Rollenprofilen
              </p>
            </Card>

            <Card className="p-5 space-y-2">
              <h4 className="text-sm font-medium">Rekrutierungsplan</h4>
              <p className="text-sm text-muted-foreground">
                Dokumentierte Ansprache, Einwilligung, rollenbasierte Zugangsregelung
              </p>
            </Card>
          </div>
        </div>

        <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div className="space-y-1 flex-1">
              <h4 className="text-sm font-medium">
                Besonderer Schutz vulnerabler Gruppen
              </h4>
              <p className="text-sm text-muted-foreground">
                Stufenweise, risikoadaptierte Einbeziehung Betroffener und von Kindern
                erst nach dokumentierter Risikoreduktion (siehe Stufenmodell)
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
