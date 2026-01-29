import { AlertTriangle, Users, MapPin } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function ProblemContextSlide() {
  return (
    <div className="min-h-full p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Problemstellung und Kontext</h1>
          <p className="text-muted-foreground text-lg">
            Empirische Ausgangslage im Kinderschutz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3 text-destructive">
              <AlertTriangle className="h-6 w-6" />
              <h3 className="font-medium">72.800</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Festgestellte Kindeswohlgefährdungen in Deutschland (2024)
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3 text-chart-2">
              <Users className="h-6 w-6" />
              <h3 className="font-medium">239.400</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Verdachtsmeldungen von Jugendämtern geprüft
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3 text-chart-4">
              <AlertTriangle className="h-6 w-6" />
              <h3 className="font-medium">69.500</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Inobhutnahmen zum Schutz von Kindern und Jugendlichen
            </p>
          </Card>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="font-medium">Gefährdungsformen (Mehrfachnennungen möglich)</h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Vernachlässigung</span>
                <span className="text-muted-foreground">58%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-destructive" style={{ width: '58%' }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Psychische Misshandlung</span>
                <span className="text-muted-foreground">37%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-chart-2" style={{ width: '37%' }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Körperliche Misshandlung</span>
                <span className="text-muted-foreground">28%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-chart-3" style={{ width: '28%' }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Sexuelle Gewalt</span>
                <span className="text-muted-foreground">6%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-chart-4" style={{ width: '6%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-4">
          <Card className="p-6 space-y-3">
            <h3 className="font-medium flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              Fokus: Ländlicher Raum Niedersachsen
            </h3>
            <p className="text-sm text-muted-foreground">
              Digitale Transformation in regionalen Einrichtungen: Jugendämter,
              Kinderschutzzentren, Beratungsstellen
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <h3 className="font-medium">Projektziel</h3>
            <p className="text-sm text-muted-foreground">
              Empirisch fundierte Unterstützung durch digitale Werkzeuge und KI –
              interdisziplinär entwickelt und stufenweise validiert
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
