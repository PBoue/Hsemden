import { Users, Code, TrendingUp, Shield, ArrowRight, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import { InPageNavigation, NavigationSection } from '@/app/components/InPageNavigation';

export function InterdisciplinarySlide() {
  const navigationSections: NavigationSection[] = [
    { id: 'section-1', label: '1. Holocracy-Struktur' },
    { id: 'section-2', label: '2. Fakultäten der HS Emden/Leer' },
    { id: 'section-3', label: '3. Circles & Rollen' },
    { id: 'section-4', label: '4. Qualitätssicherung' },
  ];

  const disciplines = [
    {
      icon: Users,
      title: 'Soziale Arbeit & Gesundheit',
      abbr: 'SAG',
      faculty: 'Fakultät Soziale Arbeit und Gesundheit',
      color: 'bg-chart-1',
      borderColor: 'border-chart-1',
      textColor: 'text-chart-1',
      items: [
        'Kinderschutz-Expertise & Feldkompetenz',
        'Qualitative Forschung & Interviews',
        'Ethische Reflexion & Schutzkonzepte',
        'Akteurskoordination & Bedarfsanalyse',
      ],
    },
    {
      icon: Code,
      title: 'Technik',
      abbr: 'TECH',
      faculty: 'Fakultät Technik',
      color: 'bg-chart-2',
      borderColor: 'border-chart-2',
      textColor: 'text-chart-2',
      items: [
        'Prototyping & agile Entwicklung',
        'Systemarchitektur & KI-Integration',
        'Datenschutz-by-Design & Security',
        'DevOps & technische Infrastruktur',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Wirtschaft',
      abbr: 'WI',
      faculty: 'Fakultät Wirtschaft',
      color: 'bg-chart-3',
      borderColor: 'border-chart-3',
      textColor: 'text-chart-3',
      items: [
        'Organisationsanalyse & Prozessmodellierung',
        'Change Management & Adoption-Strategien',
        'Transfer & Kommunikationsplanung',
        'Regionale Netzwerke & CSR-Formate',
      ],
    },
  ];

  const circles = [
    {
      name: 'Research Circle',
      color: 'border-chart-1',
      bgColor: 'bg-chart-1/10',
      purpose: 'Exploration, Feldforschung & Wissensaufbau',
      accountabilities: [
        'Stakeholder-Interviews durchführen',
        'Literaturrecherche koordinieren',
        'Feldbefunde dokumentieren',
        'Ethische Standards sicherstellen',
      ],
    },
    {
      name: 'Design Circle',
      color: 'border-chart-2',
      bgColor: 'bg-chart-2/10',
      purpose: 'Prototyping, Testing & Iteration',
      accountabilities: [
        'Prototypen entwickeln und testen',
        'User Journeys modellieren',
        'Design-Sprints facilitieren',
        'Usability-Tests durchführen',
      ],
    },
    {
      name: 'Tech Circle',
      color: 'border-chart-3',
      bgColor: 'bg-chart-3/10',
      purpose: 'Architektur, Implementierung & Security',
      accountabilities: [
        'Technische Machbarkeit prüfen',
        'Systemarchitektur entwickeln',
        'KI-Integration konzipieren',
        'Datenschutz & Security garantieren',
      ],
    },
    {
      name: 'Transfer Circle',
      color: 'border-chart-4',
      bgColor: 'bg-chart-4/10',
      purpose: 'Adoption, Kommunikation & Netzwerkarbeit',
      accountabilities: [
        'Transferstrategie entwickeln',
        'Stakeholder-Kommunikation managen',
        'Schulungskonzepte erstellen',
        'Regionale Netzwerke aufbauen',
      ],
    },
  ];

  const holacracyPrinciples = [
    {
      principle: 'Distributed Authority',
      description: 'Entscheidungen werden dort getroffen, wo die Kompetenz liegt – nicht hierarchisch',
    },
    {
      principle: 'Tensions als Input',
      description: 'Spannungen/Probleme sind Ausgangspunkt für Governance- und Tactical-Meetings',
    },
    {
      principle: 'Role Fluidity',
      description: 'Personen können mehrere Rollen in verschiedenen Circles einnehmen',
    },
    {
      principle: 'Transparente Governance',
      description: 'Alle Circles, Rollen und Accountabilities sind dokumentiert und einsehbar',
    },
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">08 — ZUSAMMENARBEIT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Interfakultäre Zusammenarbeit
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Selbstorganisierte Circles nach Holocracy-Prinzipien
          </p>
        </motion.div>

        {/* Holocracy Structure Visualization */}
        <motion.div
          id="section-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            1. Holocracy-basierte Organisationsstruktur
          </h2>

          <div className="bg-card border border-border rounded-lg p-8">
            {/* Governance Layer */}
            <div className="mb-8">
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Anchor Circle (Governance)</h3>
                </div>
                <p className="text-sm text-muted-foreground max-w-3xl mx-auto mb-4">
                  Interfakultärer Steuerungskreis mit Governance-Meetings zur strategischen Ausrichtung, Budget-Allokation und Risikomanagement. Verteilt Autorität an Sub-Circles.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-foreground">Entscheidungskompetenz</span>
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-foreground">Double-Linking zu Circles</span>
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-foreground">Ethische Bewertung</span>
                </div>
              </div>
              <div className="flex justify-center my-4">
                <div className="w-px h-8 bg-border"></div>
              </div>
            </div>

            {/* Holocracy Principles */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {holacracyPrinciples.map((item, idx) => (
                <div key={idx} className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm font-bold text-foreground mb-2">
                    {item.principle}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Connection Visual */}
            <div className="text-center mb-6">
              <h4 className="text-lg font-bold text-foreground mb-2">
                Sub-Circles (Cross-funktional besetzt)
              </h4>
              <p className="text-sm text-muted-foreground">
                Fakultätsmitglieder füllen Rollen in mehreren Circles aus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {disciplines.map((disc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className={`border-2 ${disc.borderColor} rounded-lg p-4 bg-card`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${disc.color} p-2 rounded`}>
                      <disc.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`font-bold ${disc.textColor}`}>
                      {disc.abbr}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {disc.title}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connection Lines Visual */}
            <div className="flex items-center justify-center gap-2 py-4">
              <div className="flex-1 h-px bg-border"></div>
              <span className="text-xs text-muted-foreground px-4">Role Fluidity zwischen Circles</span>
              <div className="flex-1 h-px bg-border"></div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Tactical Meetings:</span> Wöchentliche Check-ins pro Circle • <span className="font-semibold">Governance Meetings:</span> Monatlich zur Rollenanpassung
              </p>
            </div>
          </div>
        </motion.div>

        {/* Faculties Detail */}
        <motion.div
          id="section-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            2. Fakultäten der Hochschule Emden/Leer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disciplines.map((discipline, index) => (
              <div key={index} className="h-full bg-card border border-border rounded-lg overflow-hidden">
                <div className={`${discipline.color} p-6 text-white`}>
                  <discipline.icon className="h-10 w-10 mb-4" aria-hidden="true" />
                  <div className="text-sm font-medium tracking-wide opacity-90 mb-2">{discipline.abbr}</div>
                  <h3 className="text-xl font-bold leading-tight mb-3">{discipline.title}</h3>
                  <div className="text-xs opacity-80 border-t border-white/20 pt-3 mt-3">
                    {discipline.faculty}
                  </div>
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
            ))}
          </div>
        </motion.div>

        {/* Circles & Roles */}
        <motion.div
          id="section-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            3. Sub-Circles mit Purpose & Accountabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {circles.map((circle, idx) => (
              <div key={idx} className={`bg-card border-2 ${circle.color} rounded-lg p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <Circle className="w-6 h-6 text-foreground" />
                  <h3 className="text-lg font-bold text-foreground">
                    {circle.name}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs font-medium text-muted-foreground mb-1">PURPOSE</div>
                  <p className="text-sm text-foreground italic">
                    {circle.purpose}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-2">ACCOUNTABILITIES</div>
                  <ul className="space-y-1" role="list">
                    {circle.accountabilities.map((acc, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-foreground mt-1">•</span>
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`mt-4 pt-4 border-t ${circle.color}`}>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Link-Rolle:</span> Verbindet Circle mit Anchor Circle (Double-Linking)
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 border border-border rounded-lg p-6">
            <h4 className="font-bold text-foreground mb-3">Rollen-Prinzip</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Personen füllen <strong className="text-foreground">Rollen</strong> aus, nicht Positionen. Eine Person kann mehrere Rollen in verschiedenen Circles innehaben. Rollen werden in Governance-Meetings angepasst, wenn "Tensions" (Spannungen) auftreten.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-muted rounded-full text-foreground">SAG-Mitglied → Rolle in Research & Design Circle</span>
              <span className="px-3 py-1 bg-muted rounded-full text-foreground">TECH-Mitglied → Rolle in Design & Tech Circle</span>
              <span className="px-3 py-1 bg-muted rounded-full text-foreground">WI-Mitglied → Rolle in Transfer & Research Circle</span>
            </div>
          </div>
        </motion.div>

        {/* Quality Assurance */}
        <motion.div
          id="section-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground">
            4. Qualitätssicherung und Übersetzungskette
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-4">Qualitätsmaßnahmen</h3>
              <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong className="text-foreground">Audit-Trail:</strong> Versionierung aller Artefakte, dokumentierte Entscheidungswege</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong className="text-foreground">Intercoder-Abgleich:</strong> Bei qualitativer Auswertung (falls realisierbar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong className="text-foreground">Cross-Circle-Reviews:</strong> Peer-Review über Circle-Grenzen hinweg</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong className="text-foreground">Tension-Processing:</strong> Systematische Bearbeitung von Spannungen in Governance-Meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong className="text-foreground">Stop/Go-Gates:</strong> Qualitätskriterien an definierten Meilensteinen (Anchor Circle)</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-4">Übersetzungskette</h3>
              <div className="space-y-3">
                <p className="text-sm text-foreground">
                  Circle-übergreifende Dokumentation:
                </p>
                <div className="bg-muted/50 rounded p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-chart-1"></div>
                    <span className="text-foreground font-medium">Feldbefund</span>
                    <span className="text-muted-foreground">(Research Circle)</span>
                  </div>
                  <div className="pl-4 border-l-2 border-border ml-1 space-y-2 py-1">
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground font-medium">Anforderung</span>
                      <span className="text-muted-foreground">(Research + Design Circle)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground font-medium">Artefakt/Prototyp</span>
                      <span className="text-muted-foreground">(Design + Tech Circle)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground font-medium">Test/Validierung</span>
                      <span className="text-muted-foreground">(Design + Research Circle)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground font-medium">Transfer/Übergabe</span>
                      <span className="text-muted-foreground">(Transfer Circle)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}