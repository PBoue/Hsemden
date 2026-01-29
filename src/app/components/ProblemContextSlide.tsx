import { motion } from 'motion/react';

export function ProblemContextSlide() {
  const stats = [
    {
      value: '72.800',
      label: 'Festgestellte Kindeswohlgefährdungen',
      sublabel: 'Deutschland 2024',
      color: 'bg-destructive',
    },
    {
      value: '239.400',
      label: 'Geprüfte Verdachtsmeldungen',
      sublabel: 'von Jugendämtern',
      color: 'bg-chart-2',
    },
    {
      value: '69.500',
      label: 'Inobhutnahmen',
      sublabel: 'zum Schutz von Kindern',
      color: 'bg-chart-4',
    },
  ];

  const endangermentTypes = [
    { label: 'Vernachlässigung', percentage: 58, color: 'bg-destructive' },
    { label: 'Psychische Misshandlung', percentage: 37, color: 'bg-chart-2' },
    { label: 'Körperliche Misshandlung', percentage: 28, color: 'bg-chart-3' },
    { label: 'Sexuelle Gewalt', percentage: 6, color: 'bg-chart-4' },
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
            <span className="text-sm font-medium tracking-wide text-muted-foreground">01 — KONTEXT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Problemstellung
          </h1>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} p-8 rounded-lg text-white`}>
              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-bold tracking-tight">{stat.value}</div>
                <div className="space-y-1">
                  <div className="text-lg font-medium">{stat.label}</div>
                  <div className="text-sm opacity-90">{stat.sublabel}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Endangerment Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border-2 border-border p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Gefährdungsformen
          </h2>
          <div className="space-y-6">
            {endangermentTypes.map((type, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-medium text-foreground">{type.label}</span>
                  <span className="text-3xl font-bold text-foreground">{type.percentage}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${type.percentage}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    className={`h-full ${type.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Mehrfachnennungen möglich • Quelle: Statistisches Bundesamt 2024
          </p>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-chart-1 p-8 rounded-lg text-white">
            <div className="space-y-3">
              <div className="text-sm font-medium tracking-wide opacity-90">FOKUS</div>
              <div className="text-2xl font-bold">Ländlicher Raum Niedersachsen</div>
              <p className="text-sm opacity-90 leading-relaxed">
                Jugendämter, Kinderschutzzentren, Beratungsstellen
              </p>
            </div>
          </div>

          <div className="bg-card border-2 border-border p-8 rounded-lg">
            <div className="space-y-3">
              <div className="text-sm font-medium tracking-wide text-muted-foreground">PROJEKTZIEL</div>
              <div className="text-2xl font-bold text-foreground">Digitale Transformation</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empirisch fundierte Unterstützung durch digitale Werkzeuge und KI
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
