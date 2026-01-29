import { Card } from '@/app/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function MethodologySlide() {
  return (
    <div className="min-h-full p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Forschungsstrategie & Methodik</h1>
          <p className="text-muted-foreground text-lg">
            Sequenziell-exploratives Mixed-Methods-Design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">Phase 1</div>
              <h3 className="font-medium">Qualitative Exploration</h3>
            </div>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Leitfadengestützte Interviews</li>
              <li>• Stakeholder-Mapping</li>
              <li>• Dokumentenanalyse</li>
              <li>• Kontextmodellierung</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">Phase 2</div>
              <h3 className="font-medium">Artefaktbasierte Iterationen</h3>
            </div>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Prototypen (Low → High Fidelity)</li>
              <li>• User Journeys</li>
              <li>• Designsystem</li>
              <li>• Architekturbausteine</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">Phase 3</div>
              <h3 className="font-medium">Quantitative Validierung</h3>
            </div>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Usability-Metriken (ISO 9241-11)</li>
              <li>• Akzeptanzskalen</li>
              <li>• Aufgabenbasierte Tests</li>
              <li>• Wirksamkeitsanalyse</li>
            </ul>
          </Card>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="font-medium">Normativer Referenzrahmen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-5 space-y-2">
              <h4 className="text-sm font-medium">Menschenzentrierter Prozess</h4>
              <p className="text-sm text-muted-foreground">
                DIN EN ISO 9241-210/220 als Gestaltungslogik: Nutzungskontext verstehen,
                Anforderungen spezifizieren, Lösungen entwerfen, iterativ evaluieren
              </p>
            </Card>

            <Card className="p-5 space-y-2">
              <h4 className="text-sm font-medium">Wissenschaftliche Praxis & Datenschutz</h4>
              <p className="text-sm text-muted-foreground">
                DFG-Kodex, HS Emden/Leer GWP-Ordnung, DSGVO Art. 89, § 13 NDSG als
                verbindliche Standards
              </p>
            </Card>
          </div>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="font-medium">Kernprinzip: Übersetzungskette</h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                <span>Feldbefund</span>
                <ArrowRight className="h-4 w-4" />
                <span>Anforderung</span>
                <ArrowRight className="h-4 w-4" />
                <span>Artefakt</span>
                <ArrowRight className="h-4 w-4" />
                <span>Test</span>
                <ArrowRight className="h-4 w-4" />
                <span>Übergabe</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
