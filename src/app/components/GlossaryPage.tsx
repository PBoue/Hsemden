import { motion } from 'motion/react';
import { BookMarked, Search } from 'lucide-react';
import { useState } from 'react';

export function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryTerms = [
    {
      term: 'Accountability',
      definition: 'In Holocracy: Klare Verantwortungsbereiche, die einer Rolle zugeordnet sind. Accountabilities beschreiben, wofür eine Rolle zuständig ist.',
      category: 'Holocracy',
    },
    {
      term: 'Anchor Circle',
      definition: 'Der übergeordnete Governance-Kreis in einer Holocracy-Struktur, der strategische Entscheidungen trifft und Autorität an Sub-Circles verteilt.',
      category: 'Holocracy',
    },
    {
      term: 'ASD',
      definition: 'Allgemeiner Sozialer Dienst – kommunale Einrichtung der Kinder- und Jugendhilfe, die bei Verdacht auf Kindeswohlgefährdung eingeschaltet wird.',
      category: 'Kinderschutz',
    },
    {
      term: 'Audit-Trail',
      definition: 'Nachvollziehbare Dokumentation aller Änderungen und Entscheidungen in einem Projekt, einschließlich Versionierung von Artefakten.',
      category: 'Qualitätssicherung',
    },
    {
      term: 'Design Sprint',
      definition: 'Zeitlich begrenzter, intensiver Prozess (meist 1-2 Wochen), in dem ein cross-funktionales Team von der Problemdefinition bis zum getesteten Prototyp arbeitet.',
      category: 'Design Thinking',
    },
    {
      term: 'Design Thinking',
      definition: 'Iterativer, menschzentrierter Innovationsprozess mit den Phasen: Verstehen, Beobachten, Synthese, Ideen, Prototypen, Testen.',
      category: 'Design Thinking',
    },
    {
      term: 'DSGVO',
      definition: 'Datenschutz-Grundverordnung (EU 2016/679) – rechtlicher Rahmen für Datenschutz und Privatsphäre in der Europäischen Union.',
      category: 'Datenschutz',
    },
    {
      term: 'Double-Linking',
      definition: 'In Holocracy: Bidirektionale Verbindung zwischen Circles durch Lead Link und Rep Link, um Informationsfluss zu sichern.',
      category: 'Holocracy',
    },
    {
      term: 'Governance Meeting',
      definition: 'In Holocracy: Regelmäßiges Meeting zur Anpassung von Rollen, Accountabilities und Policies basierend auf Tensions.',
      category: 'Holocracy',
    },
    {
      term: 'Intercoder-Abgleich',
      definition: 'Qualitätssicherungsverfahren in der qualitativen Forschung: Mehrere Forschende kodieren unabhängig dasselbe Material, um Reliabilität zu erhöhen.',
      category: 'Forschungsmethoden',
    },
    {
      term: 'ISO 9241-210',
      definition: 'Internationale Norm für menschzentrierte Gestaltung interaktiver Systeme. Definiert Prinzipien und Aktivitäten für Human-Centered Design.',
      category: 'Standards',
    },
    {
      term: 'ISO 9241-220',
      definition: 'Internationale Norm zu Prozessen für die Ermöglichung, Ausführung und Bewertung menschzentrierter Gestaltung in Organisationen.',
      category: 'Standards',
    },
    {
      term: 'KI-Verordnung (EU AI Act)',
      definition: 'EU-Verordnung 2024/1689 zur Regulierung von künstlicher Intelligenz. Klassifiziert KI-Systeme nach Risikostufen.',
      category: 'KI & Ethik',
    },
    {
      term: 'Living Lab',
      definition: 'Reallabor-Ansatz, bei dem Innovationen in realen Nutzungskontexten mit echten Stakeholdern entwickelt und getestet werden.',
      category: 'Forschungsmethoden',
    },
    {
      term: 'Persona',
      definition: 'Fiktive, aber datenbasierte Nutzerprofile, die typische Verhaltensweisen, Bedürfnisse und Ziele einer Zielgruppe repräsentieren.',
      category: 'Design Thinking',
    },
    {
      term: 'Privacy by Design',
      definition: 'Datenschutzprinzip, bei dem Datenschutz von Anfang an in die Systemarchitektur integriert wird (nicht nachträglich).',
      category: 'Datenschutz',
    },
    {
      term: 'Purpose',
      definition: 'In Holocracy: Der übergeordnete Zweck oder das "Warum" eines Circles oder einer Rolle. Leitet Entscheidungen und Prioritäten.',
      category: 'Holocracy',
    },
    {
      term: 'Role Fluidity',
      definition: 'In Holocracy: Prinzip, dass Personen mehrere Rollen in verschiedenen Circles einnehmen können und Rollen flexibel angepasst werden.',
      category: 'Holocracy',
    },
    {
      term: 'SGB VIII',
      definition: 'Sozialgesetzbuch Achtes Buch – Kinder- und Jugendhilfe. Rechtliche Grundlage für Kinderschutz in Deutschland (insbesondere § 8a).',
      category: 'Kinderschutz',
    },
    {
      term: 'Stop/Go-Gate',
      definition: 'Entscheidungspunkt in einem Projekt, an dem basierend auf definierten Kriterien über Fortführung oder Abbruch entschieden wird.',
      category: 'Projektmanagement',
    },
    {
      term: 'Sub-Circle',
      definition: 'In Holocracy: Ein untergeordneter Kreis, der von einem Anchor Circle Autorität für einen spezifischen Purpose erhält.',
      category: 'Holocracy',
    },
    {
      term: 'Tactical Meeting',
      definition: 'In Holocracy: Regelmäßiges operatives Meeting zur Bearbeitung aktueller Aufgaben, Projekte und Tensions.',
      category: 'Holocracy',
    },
    {
      term: 'Tension',
      definition: 'In Holocracy: Wahrgenommene Spannung oder Lücke zwischen aktueller und gewünschter Situation. Ausgangspunkt für Verbesserungen.',
      category: 'Holocracy',
    },
    {
      term: 'Touchpoint',
      definition: 'Berührungspunkt zwischen Nutzer und System/Organisation. Kann physisch, digital oder interpersonell sein.',
      category: 'Design Thinking',
    },
    {
      term: 'User Journey',
      definition: 'Visualisierung der Erfahrungen und Interaktionen eines Nutzers mit einem System über Zeit und verschiedene Touchpoints hinweg.',
      category: 'Design Thinking',
    },
    {
      term: 'Übersetzungskette',
      definition: 'Dokumentierter Prozess, wie Feldbefunde in Anforderungen, dann in Artefakte und schließlich in validierte Lösungen überführt werden.',
      category: 'Qualitätssicherung',
    },
  ];

  const filteredTerms = glossaryTerms
    .filter(item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.term.localeCompare(b.term));

  const categories = Array.from(new Set(glossaryTerms.map(t => t.category))).sort();

  return (
    <div className="min-h-screen p-8 md:p-16 bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <BookMarked className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Glossar
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Fachbegriffe und Definitionen zum DigiChildProtect-Forschungsdesign
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Begriffe durchsuchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Glossar durchsuchen"
          />
        </motion.div>

        {/* Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-muted/30 border border-border rounded-lg p-6"
        >
          <h3 className="font-bold text-foreground mb-3">Kategorien</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground"
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="text-sm text-muted-foreground">
            {filteredTerms.length} {filteredTerms.length === 1 ? 'Begriff' : 'Begriffe'} gefunden
          </div>
          
          {filteredTerms.map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <h3 className="text-xl font-bold text-foreground">
                  {item.term}
                </h3>
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground self-start">
                  {item.category}
                </span>
              </div>
              <p className="text-foreground leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Keine Begriffe gefunden für "{searchTerm}"
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
