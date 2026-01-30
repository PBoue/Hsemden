import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { InPageNavigation, NavigationSection } from '@/app/components/InPageNavigation';

export function ResearchQuestionsSlide() {
  const navigationSections: NavigationSection[] = [
    { id: 'section-1', label: '1. Theoretische Fundierung' },
    { id: 'section-2', label: '2. Explorativer Forschungsrahmen' },
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">03 — STRUKTUR</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Forschungsfragen
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Systematische Aufnahme der Ausgangssituation zur empirischen Bestimmung von Problemstellungen, Rahmenbedingungen und Anforderungen
          </p>
        </motion.div>

        {/* Research Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-chart-1/10 border-l-4 border-chart-1 p-6 rounded-r-lg"
        >
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-chart-1 flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="font-bold text-foreground">Forschungslogische Klammer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Das als explorativ ausgewiesene Projektvorhaben greift das in der Ausschreibung benannte Spektrum aus <strong>Literaturarbeit</strong>, <strong>qualitativen und quantitativen Erhebungen</strong>, <strong>Auswertung</strong> sowie <strong>Darstellung gegenüber Dritten</strong> als forschungslogische Klammer auf. Für die Einordnung der gesellschaftlichen Relevanz wird auf amtliche Kinderschutzkennzahlen verwiesen (z. B. festgestellte Kindeswohlgefährdungen und Gefährdungsformen).
              </p>
            </div>
          </div>
        </motion.div>

        {/* Theoretical Foundation */}
        <motion.div
          id="section-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            1. Theoretische Fundierung
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <div className="space-y-3">
                <div className="text-sm font-medium tracking-wide opacity-90">METHODISCHE GRUNDLAGE</div>
                <h3 className="text-2xl font-bold">Design Science Research</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Iterative Entwicklung von Artefakten (digitale Tools) mit kontinuierlicher Evaluation
                </p>
                <p className="text-xs opacity-75 leading-relaxed">
                  Vgl. Hevner et al. (2004). Design Science in Information Systems Research. 
                  <span className="italic"> MIS Quarterly, 28(1), 75-105.</span>
                </p>
              </div>
            </div>

            <div className="bg-card border-2 border-border p-6 rounded-lg">
              <div className="space-y-3">
                <div className="text-sm font-medium tracking-wide text-muted-foreground">ENTWICKLUNGSANSATZ</div>
                <h3 className="text-2xl font-bold text-foreground">Partizipative Ansätze</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Co-Creation mit Fachkräften und Stakeholdern zur Sicherstellung der Praxisrelevanz
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Vgl. Greenhalgh et al. (2016). Beyond Adoption: A New Framework. 
                  <span className="italic"> Journal of Health Services Research & Policy, 21(1).</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Exploratory Research Framework */}
        <motion.div
          id="section-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            2. Explorativer Forschungsrahmen
          </h2>
          
          <p className="text-foreground leading-relaxed">
            Im Rahmen des als explorativ ausgewiesenen Projektvorhabens soll zunächst eine systematische Aufnahme der Ausgangssituation in beteiligten Organisationen erfolgen, um Problemstellungen, Rahmenbedingungen und Anforderungen an digitale bzw. KI-gestützte Unterstützung im Kinderschutz empirisch zu bestimmen. Dabei wird das in der Ausschreibung benannte Spektrum aus Literaturarbeit, qualitativen und quantitativen Erhebungen, Auswertung sowie Darstellung gegenüber Dritten als forschungslogische Klammer aufgegriffen. Für die Einordnung der gesellschaftlichen Relevanz wird auf amtliche Kinderschutzkennzahlen verwiesen (z. B. festgestellte Kindeswohlgefährdungen und Gefährdungsformen).
          </p>

          {/* RQ1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">
              2.1 Ausgangslage und Akteurslandschaft
            </h3>
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-chart-1 text-white text-xs font-bold rounded">
                RQ1
              </div>
              <p className="text-foreground leading-relaxed">
                Welche Infrastruktur, Netzwerke, Regularien, Institutionen und Akteursgruppen wirken im regionalen Kinderschutzkontext, und wie werden Rollen, Verantwortlichkeiten und Schnittstellen beschrieben?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Damit sollen Systemgrenzen und Kooperationslogiken im Sinne einer soziotechnischen Systemanalyse rekonstruiert werden, da die Einführung digitaler Werkzeuge als organisationsübergreifende Veränderung angelegt ist.
              </p>
            </div>
          </div>

          {/* RQ2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">
              2.2 Organisation und Prozesse
            </h3>
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-chart-2 text-white text-xs font-bold rounded">
                RQ2
              </div>
              <p className="text-foreground leading-relaxed">
                Welche Problemlagen, Engpässe und Qualitätsrisiken werden entlang typischer Arbeits- und Fallprozesse berichtet, und wie werden diese organisatorisch sowie digital begründet?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Auf dieser Grundlage soll beschrieben werden, an welchen Prozessstellen digitale Unterstützung als entlastend, risikobehaftet oder regulatorisch begrenzt bewertet wird, um Anforderungen für prototypische Interventionen zu gewinnen.
              </p>
            </div>
          </div>

          {/* RQ3 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">
              2.3 Daten- und Systemrealität
            </h3>
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-chart-3 text-white text-xs font-bold rounded">
                RQ3
              </div>
              <p className="text-foreground leading-relaxed">
                Welche Datenarten, Dokumentationspraktiken, Systemlandschaften und Schnittstellen prägen die Fallbearbeitung, und welche Anforderungen an Datenminimierung, Zugriff, Protokollierung sowie Trennung identifizierender Merkmale werden daraus abgeleitet?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dabei sollen die Forschungsgarantien für wissenschaftliche Zwecke (DSGVO Art. 89) und die niedersächsische Forschungsklausel mit Anonymisierung und Trennungsprinzip (NDSG § 13) als normative Leitplanken der Designanforderungen explizit operationalisiert werden.
              </p>
            </div>
          </div>

          {/* RQ4 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">
              2.4 Akzeptanz, Verantwortung, Schutz
            </h3>
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-chart-4 text-white text-xs font-bold rounded">
                RQ4
              </div>
              <p className="text-foreground leading-relaxed">
                Unter welchen Bedingungen wird digitale bzw. KI-gestützte Unterstützung akzeptiert, und welche Anforderungen werden an Transparenz, Verantwortung, Fehlertoleranz und Schutzvorkehrungen gestellt, insbesondere bei stufenweiser Einbeziehung vulnerabler Gruppen?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Die Frage wird vor dem Hintergrund bearbeitet, dass im Kinderschutz hohe Fallzahlen und definierte Gefährdungsformen berichtet werden und Entscheidungen typischerweise unter Unsicherheit erfolgen. Ergänzend sollen für KI-bezogene Verantwortungsfragen Anschlussstellen aus einschlägigen Forschungsprojekten zur ethischen Operationalisierung im Kontext Kindeswohlgefährdung berücksichtigt werden.
              </p>
            </div>
          </div>

          {/* RQ5 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">
              2.5 Hypothesenprüfung in Prototypen
            </h3>
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-chart-5 text-white text-xs font-bold rounded">
                RQ5
              </div>
              <p className="text-foreground leading-relaxed">
                Welche Use-Case-Hypothesen lassen sich aus der explorativen Datenlage ableiten, und welche prototypischen Lösungen zeigen in kontrollierten Erprobungen Verbesserungen in Effektivität, Effizienz und Zufriedenstellung?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Für die Operationalisierung der Evaluationskriterien sollen Usability-Begriffe und Messlogiken gemäß ISO 9241-11 herangezogen werden; so wird ermöglicht, Prototypen iterativ und nachvollziehbar zu prüfen. Für die Einordnung algorithmischer Unterstützung in der Praxis werden international dokumentierte Erfahrungen mit risikobasierten Entscheidungsunterstützungssystemen als Vergleichsfolie berücksichtigt.
              </p>
            </div>
          </div>

          {/* RQ6 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">
              2.6 Transfer, Implementierung und regionale Kommunikation
            </h3>
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                RQ6
              </div>
              <p className="text-foreground leading-relaxed">
                Welche Bedingungen, Ressourcen und Kommunikationsformen werden für eine nachhaltige Einführung im regionalen Netzwerk (einschließlich Unternehmen und Kammern) als erforderlich beschrieben, und wie werden Transferformate evaluiert?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dabei soll erfasst werden, wie Kooperationen zwischen Praxispartnern und Hochschule (interdisziplinär: Soziale Arbeit und Gesundheit, Wirtschaft, Technik) gestaltet werden können, um Implementierungsfähigkeit und Skalierbarkeit zu erhöhen. Als fachliche Referenz für Digitalisierungsfragen in Jugendämtern und angrenzenden Feldern werden einschlägige Handreichungen und Projektpublikationen zur Digitalisierung in der Kinder- und Jugendhilfe herangezogen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}