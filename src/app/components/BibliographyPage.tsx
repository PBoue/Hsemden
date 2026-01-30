import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export function BibliographyPage() {
  const references = [
    {
      category: 'Kinderschutz & Soziale Arbeit',
      items: [
        {
          authors: 'Bundesministerium für Familie, Senioren, Frauen und Jugend (BMFSFJ)',
          year: '2023',
          title: 'Kinder- und Jugendhilfestatistik 2022',
          publisher: 'Statistisches Bundesamt',
          location: 'Wiesbaden',
        },
        {
          authors: 'Kindler, H., Lillig, S., Blüml, H., Meysen, T., Werner, A.',
          year: '2006',
          title: 'Handbuch Kindeswohlgefährdung nach § 1666 BGB und Allgemeiner Sozialer Dienst (ASD)',
          publisher: 'Deutsches Jugendinstitut',
          location: 'München',
        },
        {
          authors: 'Wolff, R., Flick, U., Ackermann, T., Biesel, K., Brandhorst, F., Heinitz, S., Patschke, M.',
          year: '2013',
          title: 'Aus Fehlern lernen – Qualitätsmanagement im Kinderschutz',
          publisher: 'Verlag Barbara Budrich',
          location: 'Opladen',
        },
      ],
    },
    {
      category: 'Human-Centered Design & Usability',
      items: [
        {
          authors: 'DIN EN ISO',
          year: '2019',
          title: 'ISO 9241-210:2019 Ergonomie der Mensch-System-Interaktion – Teil 210: Menschzentrierte Gestaltung interaktiver Systeme',
          publisher: 'Beuth Verlag',
          location: 'Berlin',
        },
        {
          authors: 'DIN EN ISO',
          year: '2020',
          title: 'ISO 9241-220:2019 Ergonomie der Mensch-System-Interaktion – Teil 220: Prozesse für die Ermöglichung, Ausführung und Bewertung menschzentrierter Gestaltung in Organisationen',
          publisher: 'Beuth Verlag',
          location: 'Berlin',
        },
        {
          authors: 'Norman, D.',
          year: '2013',
          title: 'The Design of Everyday Things',
          edition: 'Revised and Expanded Edition',
          publisher: 'Basic Books',
          location: 'New York',
        },
      ],
    },
    {
      category: 'Design Thinking & Innovation',
      items: [
        {
          authors: 'Brown, T.',
          year: '2008',
          title: 'Design Thinking',
          journal: 'Harvard Business Review',
          volume: '86',
          issue: '6',
          pages: '84-92',
        },
        {
          authors: 'Plattner, H., Meinel, C., Leifer, L.',
          year: '2011',
          title: 'Design Thinking: Understand – Improve – Apply',
          publisher: 'Springer',
          location: 'Berlin/Heidelberg',
        },
        {
          authors: 'Lewrick, M., Link, P., Leifer, L.',
          year: '2018',
          title: 'Das Design Thinking Playbook: Mit traditionellen, aktuellen und zukünftigen Erfolgsfaktoren',
          publisher: 'Vahlen',
          location: 'München',
        },
      ],
    },
    {
      category: 'Organisationale Selbstorganisation',
      items: [
        {
          authors: 'Robertson, B. J.',
          year: '2015',
          title: 'Holacracy: The New Management System for a Rapidly Changing World',
          publisher: 'Henry Holt and Company',
          location: 'New York',
        },
        {
          authors: 'Laloux, F.',
          year: '2014',
          title: 'Reinventing Organizations: A Guide to Creating Organizations Inspired by the Next Stage of Human Consciousness',
          publisher: 'Nelson Parker',
          location: 'Brussels',
        },
      ],
    },
    {
      category: 'Künstliche Intelligenz & Ethik',
      items: [
        {
          authors: 'Europäische Kommission',
          year: '2024',
          title: 'EU AI Act (Artificial Intelligence Act)',
          publisher: 'Europäische Union',
          location: 'Brüssel',
          note: 'Verordnung (EU) 2024/1689',
        },
        {
          authors: 'Datenethikkommission der Bundesregierung',
          year: '2019',
          title: 'Gutachten der Datenethikkommission',
          publisher: 'Bundesministerium des Innern, für Bau und Heimat',
          location: 'Berlin',
        },
        {
          authors: 'Zweig, K. A.',
          year: '2019',
          title: 'Ein Algorithmus hat kein Taktgefühl: Wo künstliche Intelligenz sich irrt, warum uns das betrifft und was wir dagegen tun können',
          publisher: 'Heyne Verlag',
          location: 'München',
        },
      ],
    },
    {
      category: 'Datenschutz & Rechtliche Grundlagen',
      items: [
        {
          authors: 'Europäisches Parlament und Rat der Europäischen Union',
          year: '2016',
          title: 'Datenschutz-Grundverordnung (DSGVO)',
          note: 'Verordnung (EU) 2016/679',
          publisher: 'Amtsblatt der Europäischen Union',
        },
        {
          authors: 'Bundesrepublik Deutschland',
          year: '2021',
          title: 'Sozialgesetzbuch (SGB) – Achtes Buch (VIII) – Kinder- und Jugendhilfe',
          publisher: 'Bundesgesetzblatt',
        },
        {
          authors: 'Roßnagel, A.',
          year: '2018',
          title: 'Datenschutzaufsicht nach der EU-Datenschutz-Grundverordnung',
          publisher: 'Springer Vieweg',
          location: 'Wiesbaden',
        },
      ],
    },
    {
      category: 'Qualitative & Quantitative Forschungsmethoden',
      items: [
        {
          authors: 'Mayring, P.',
          year: '2015',
          title: 'Qualitative Inhaltsanalyse: Grundlagen und Techniken',
          edition: '12., überarbeitete Auflage',
          publisher: 'Beltz',
          location: 'Weinheim/Basel',
        },
        {
          authors: 'Kuckartz, U.',
          year: '2018',
          title: 'Qualitative Inhaltsanalyse: Methoden, Praxis, Computerunterstützung',
          edition: '4. Auflage',
          publisher: 'Beltz Juventa',
          location: 'Weinheim/Basel',
        },
        {
          authors: 'Flick, U.',
          year: '2021',
          title: 'Qualitative Sozialforschung: Eine Einführung',
          edition: '10. Auflage',
          publisher: 'Rowohlt',
          location: 'Hamburg',
        },
      ],
    },
  ];

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
            <BookOpen className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Literaturverzeichnis
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Ausgewählte Referenzen für das DigiChildProtect-Forschungsdesign
          </p>
          <div className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4 py-2 bg-muted/30">
            Zitierweise nach APA 7th Edition (American Psychological Association)
          </div>
        </motion.div>

        {/* Categories */}
        {references.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-border pb-2">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.items.map((ref, refIdx) => (
                <div key={refIdx} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="space-y-2">
                    <p className="text-foreground leading-relaxed">
                      <span className="font-semibold">{ref.authors}</span>
                      {' '}({ref.year}).{' '}
                      <span className="italic">{ref.title}</span>
                      {ref.edition && <span> ({ref.edition})</span>}
                      {ref.journal && (
                        <>
                          . <span className="italic">{ref.journal}</span>
                          {ref.volume && <span>, {ref.volume}</span>}
                          {ref.issue && <span>({ref.issue})</span>}
                          {ref.pages && <span>, {ref.pages}</span>}
                        </>
                      )}
                      {ref.publisher && (
                        <>. {ref.publisher}</>
                      )}
                      {ref.location && (
                        <>: {ref.location}</>
                      )}
                      {ref.note && (
                        <span className="block mt-2 text-sm text-muted-foreground">
                          {ref.note}
                        </span>
                      )}
                      .
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-muted/30 border border-border rounded-lg p-6"
        >
          <h3 className="font-bold text-foreground mb-2">Hinweis</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Diese Liste stellt eine Auswahl relevanter Literatur dar. Während der Projektlaufzeit wird kontinuierlich weitere wissenschaftliche Literatur durch systematische Datenbankrecherchen (Web of Science, Scopus, PubMed, EBSCO) erschlossen und in das Literaturverzeichnis aufgenommen.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
