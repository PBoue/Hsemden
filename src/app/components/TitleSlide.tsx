import { motion } from "motion/react";

export function TitleSlide() {
  return (
    <div className="min-h-full w-full flex items-center justify-center p-8 md:p-16 bg-background">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Title Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded">
                <span className="text-sm font-medium tracking-wide">FORSCHUNGSDESIGN</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[0.95]">
                DigiChild<br />Protect
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Explorative Ausgangslage, menschzentrierte Entwicklung und
              stufenweise Feldvalidierung
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="bg-chart-1 p-6 rounded-lg">
              <div className="space-y-2 text-white">
                <div className="text-sm font-medium tracking-wide opacity-90">KANDIDAT</div>
                <div className="text-2xl font-bold">Philipp Boué</div>
              </div>
            </div>

            <div className="bg-card border-2 border-border p-6 rounded-lg">
              <div className="space-y-2">
                <div className="text-sm font-medium tracking-wide text-muted-foreground">TERMIN</div>
                <div className="text-lg font-medium text-foreground">30. Januar 2026</div>
                <div className="text-sm text-muted-foreground">Hochschule Emden/Leer</div>
              </div>
            </div>

            <div className="bg-card border-2 border-border p-6 rounded-lg">
              <div className="space-y-2">
                <div className="text-sm font-medium tracking-wide text-muted-foreground">PROJEKT</div>
                <div className="text-lg font-medium text-foreground">SAG 128</div>
                <div className="text-sm text-muted-foreground">DigiChildProtect</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
