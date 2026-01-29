import { Users, Code, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function InterdisciplinarySlide() {
  const disciplines = [
    {
      icon: Users,
      title: 'Soziale Arbeit & Gesundheit',
      abbr: 'SAG',
      color: 'bg-chart-1',
      items: [
        'Kinderschutz-Expertise',
        'Feldzugang & Prozessverständnis',
        'Ethische Reflexion',
        'Akteurskoordination',
      ],
    },
    {
      icon: Code,
      title: 'Technik',
      abbr: 'TECH',
      color: 'bg-chart-2',
      items: [
        'Prototyping & Entwicklung',
        'Systemarchitektur',
        'Datenschutz-by-Design',
        'DevOps & Sicherheit',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Wirtschaft',
      abbr: 'WI',
      color: 'bg-chart-3',
      items: [
        'Organisationsanalyse',
        'Prozessoptimierung',
        'Transfer & Adoption',
        'Regionale Netzwerke',
      ],
    },
  ];

  const translationChain = [
    'Feldbefund',
    'Anforderung',
    'Artefakt',
    'Test',
    'Übergabe',
  ];

  return (
    <div className="min-h-full p-8 md:p-16 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="inline-block px-4 py-2 bg-muted rounded">
            <span className="text-sm font-medium tracking-wide text-muted-foreground">07 — ZUSAMMENARBEIT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Interdisziplinär
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Fachbereichsübergreifende Zusammenarbeit als Übersetzungskette
          </p>
        </motion.div>

        {/* Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="h-full bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className={`${discipline.color} p-6 text-white`}>
                  <discipline.icon className="h-10 w-10 mb-4" aria-hidden="true" />
                  <div className="text-sm font-medium tracking-wide opacity-90 mb-2">{discipline.abbr}</div>
                  <h2 className="text-xl font-bold leading-tight">{discipline.title}</h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-2" role="list">
                    {discipline.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-foreground mt-1 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Translation Chain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-primary text-primary-foreground p-8 rounded-lg"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-sm font-medium tracking-wide opacity-90">OPERATIONALISIERUNG</div>
              <h2 className="text-3xl font-bold">Übersetzungskette</h2>
            </div>
            <div className="flex items-center gap-3 flex-wrap" role="list">
              {translationChain.map((step, index) => (
                <div key={index} className="flex items-center gap-3" role="listitem">
                  <div className="px-4 py-2 bg-white/10 rounded font-medium">
                    {step}
                  </div>
                  {index < translationChain.length - 1 && (
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Jeder Schritt wird dokumentiert: Datenquelle → Befund → Designentscheidung → Implementierung
            </p>
          </div>
        </motion.div>

        {/* Quality & Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-card border-2 border-border p-6 rounded-lg"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Qualitätssicherung</h3>
              <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Audit-Trail (Versionierung aller Artefakte)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Intercoder-Abgleich bei qualitativer Auswertung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Peer-Review in interdisziplinären Reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Dokumentierte Annahmen und Unsicherheiten</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-card border-2 border-border p-6 rounded-lg"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Rollenzuordnung</h3>
              <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong className="text-foreground">Literaturarbeit:</strong> alle Fachbereiche</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong className="text-foreground">Empirische Erhebungen:</strong> SAG Lead, alle beteiligt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong className="text-foreground">Prototyping:</strong> Technik Lead, cross-funktional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong className="text-foreground">Transfer:</strong> Wirtschaft Lead, SAG, Technik</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
