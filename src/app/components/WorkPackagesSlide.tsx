import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { motion } from 'motion/react';
import { InPageNavigation, NavigationSection } from '@/app/components/InPageNavigation';

export function WorkPackagesSlide() {
  const navigationSections: NavigationSection[] = [
    { id: 'section-1', label: '1. Kernlogik und Methoden' },
    { id: 'section-2', label: '2. Arbeitspakete im Detail' },
  ];

  return (
    <div className="min-h-full p-8 md:p-16 bg-background relative overflow-hidden">
      {/* In-Page Navigation */}
      <InPageNavigation sections={navigationSections} />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto space-y-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="inline-block px-4 py-2 bg-muted rounded">
            <span className="text-sm font-medium tracking-wide text-muted-foreground">06  UMSETZUNG</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Arbeitspakete, Methoden und Outputs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Nachvollziehbare Artefakte als Übersetzungsleistung zwischen Feldrealität, Forschung und Implementierung
          </p>
        </motion.div>

        {/* Core Logic */}
        <motion.div
          id="section-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            1. Kernlogik und Methoden
          </h2>
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Die Arbeitspakete werden so formuliert, dass jeder Schritt in nachvollziehbare Artefakte überführt wird (<span className="font-semibold">Aufnahme → Befund → Designentscheidung</span>). Die Übersetzungsleistung zwischen Feldrealität, Forschung und Implementierung wird als Kernlogik operationalisiert.
            </p>
            <p className="text-foreground leading-relaxed">
              Erfahrungen in der Verbindung von Forschung und Umsetzung (z. B. Aufbau und Steuerung eines UX-Labs, Mixed-Methods-Erhebungen, A/B-Tests, Zusammenarbeit mit Marktforschung) werden als methodische Anschlussfähigkeit geführt.
            </p>
          </div>
        </motion.div>

        {/* Work Packages Detail */}
        <motion.div
          id="section-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold text-foreground">
            2. Arbeitspakete im Detail
          </h2>

          {/* AP1 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-1">
            <h3 className="text-xl font-bold text-foreground">
              2.1 AP1 — Stakeholder-Mapping und Kontextinventar
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Methoden:</span> Stakeholderanalyse, Dokumenten-/Artefaktanalyse (Formulare, Prozessdokumente, Systemmasken, Schulungsunterlagen).
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outputs:</span> Stakeholdergraph, Einfluss-Interesse-Matrix, Kontextinventar, Rekrutierungsplan, Annahmenprotokoll.
              </p>
            </div>
          </div>

          {/* AP2 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-2">
            <h3 className="text-xl font-bold text-foreground">
              2.2 AP2 — Qualitative Stakeholder-Interviews (zwei Module)
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Module:</span> (A) Prozesse, Systeme, Datenpraktiken; (B) Akzeptanz, Verantwortung, Risiken, Schutzanforderungen.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Sampling:</span> Purposive sampling entlang Kern-/Sekundärstakeholdern, Quotensteuerung über Stakeholder-Mapping.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Auswertung:</span> Qualitative Inhaltsanalyse mit dokumentiertem Kategoriensystem; Kodierprotokolle und Intercoder-Abgleich (falls realisierbar).
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outputs:</span> Problem-Backlog, Anforderungskandidaten (funktional/nicht-funktional/organisatorisch), Risikoregister.
              </p>
            </div>
          </div>

          {/* AP3 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-3">
            <h3 className="text-xl font-bold text-foreground">
              2.3 AP3 — Datenbasierte Personas und Segmente
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Datenquellen:</span> kommunale Statistik, anonymisierte Fallstatistiken, Destatis-/Mikrozensusdaten, interne Nutzungsdaten bestehender Systeme, wissenschaftliche Datenbanken.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Methoden:</span> Sekundärdatenanalyse und Triangulation; Evidenzanker je Persona; Dokumentation von Unsicherheit und Bias.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outputs:</span> Persona-Set, Segmentierungslogik für Tests/Kommunikation.
              </p>
            </div>
          </div>

          {/* AP4 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-4">
            <h3 className="text-xl font-bold text-foreground">
              2.4 AP4 — User Journeys als transponierbares Matrixmodell
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Modell:</span> Falltyp × Rolle × Touchpoint/Datenobjekt, ergänzt um „Moments of Risk" und Übergabepunkte.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outputs:</span> Ist-/Soll-Journeys, Touchpoint-Inventar, priorisierte Eingriffspunkte, Anforderungen an Datenflüsse und Entscheidungsunterstützung.
              </p>
            </div>
          </div>

          {/* AP5 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-5">
            <h3 className="text-xl font-bold text-foreground">
              2.5 AP5 — Hypothesenbildung und Use-Case-Konzeption
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Methoden:</span> Synthese aus AP1–AP4, Priorisierung nach Nutzen/Risiko/Umsetzbarkeit, dokumentierte Annahmen.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outputs:</span> Use-Case-Briefs, Hypothesenprotokolle, Bewertungsmatrix (inkl. Schutzbedarf).
              </p>
            </div>
          </div>

          {/* AP6 */}
          <div className="space-y-3 pl-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold text-foreground">
              2.6 AP6 — Prototyping-Zyklen und cross-funktionale Umsetzung
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Methoden:</span> Low- bis High-Fidelity Prototypen, kurze Iterationszyklen; jede Iteration als Hypothesentest (Annahme, Artefakt, Test, Entscheidung, Dokumentation).
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Studierendenintegration:</span> Cross-funktionale Teams aus SAG, Technik, Wirtschaft (Projektseminare, Abschlussarbeiten, Hiwi-Strukturen), mit strikt geregelten Zugriffsrechten und Datenminimierung.
              </p>
            </div>
          </div>

          {/* AP7 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-1">
            <h3 className="text-xl font-bold text-foreground">
              2.7 AP7 — Validierung (Living-Lab/Reallabor) und standardisierte Ergänzungen
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Qualitativ-kontextnah:</span> Realitätsnahe Tests mit Praxispartnern unter Schutzkonzept.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Quantitativ-standardisiert:</span> Aufgabenbasierte Usabilitymetriken nach ISO 9241-11 (Effektivität, Effizienz, Zufriedenstellung) und geeignete Kurzskalen.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outputs:</span> Validierungsbericht (Wirkungen, Nebenfolgen, Risiko- und Akzeptanzprofil), Stop/Go-Gates.
              </p>
            </div>
          </div>

          {/* AP8 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-2">
            <h3 className="text-xl font-bold text-foreground">
              2.8 AP8 — Designsystem mit Schutz- und Kinderfokus
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Methoden:</span> Komponentenbibliothek, Content- und Accessibility-Regeln, dokumentierte UI-Standards; kind- und schutzbezogene Anforderungen als Randbedingungen.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outputs:</span> Designsystem, Guidelines, Beispielimplementierungen, versionsgeführte Adoption Packages.
              </p>
            </div>
          </div>

          {/* AP9 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-3">
            <h3 className="text-xl font-bold text-foreground">
              2.9 AP9 — Architektur, DevOps, Sicherheit und Datenschutz-by-Design
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Artefakte:</span> Datenflussdiagramme, Rollen-/Rechtekonzept, Pseudonymisierung/Anonymisierungspfade, Logging/Monitoring, Umgebungssegregation (Dev/Test/Prod), Incident- und Zugriffskonzepte.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outputs:</span> Architektur-Blueprint, Sicherheitsanforderungskatalog, Betriebs-/Deploymentkonzept, Maßnahmenmatrix.
              </p>
            </div>
          </div>

          {/* AP10 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-4">
            <h3 className="text-xl font-bold text-foreground">
              2.10 AP10 — Kommunikation, Transfer und Vermarktung
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Ziel:</span> Adoption, regionale Netzwerkkommunikation und Dissemination werden geplant, durchgeführt und evaluiert.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Methoden/Outputs:</span> Kommunikations- und Transferkonzept, zielgruppenspezifische Ansprache entlang Personas/Segmenten, Stakeholder-Briefings, CSR-orientierte Netzwerkformate, evaluierte Schulungs- und Adoption Packages.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Referenzrahmen:</span> Best Practices zum Informationsaustausch im Kinderschutzkontext (z. B. CP-IS; Informationsweitergabe) werden als Anschlussstellen genutzt.
              </p>
            </div>
          </div>

          {/* AP11 */}
          <div className="space-y-3 pl-6 border-l-4 border-chart-5">
            <h3 className="text-xl font-bold text-foreground">
              2.11 AP11 — Implementierungsplanung und Feld-Governance
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Methoden:</span> Rollout-Roadmap, Schulungs-/Supportkonzept, Governance- und Monitoringstruktur, Beschwerde-/Korrekturmechanismen, Verantwortlichkeitsmatrix.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outputs:</span> Implementierungsplan, Betriebs- und Kommunikationstransfervereinbarungen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}