import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function ThankYouSlide() {
  return (
    <div className="min-h-full p-8 md:p-16 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden flex items-center justify-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-5xl mx-auto text-center space-y-12 relative">
        {/* Main Thank You */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heart className="w-16 h-16 mx-auto text-primary mb-6" aria-hidden="true" />
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Vielen Dank
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            für Ihre Aufmerksamkeit und die Gelegenheit, mein Forschungsdesign zu präsentieren
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="space-y-1">
              <div className="text-sm font-medium tracking-wide text-muted-foreground">KANDIDAT</div>
              <div className="text-lg font-bold text-foreground">Philipp Boué</div>
            </div>
          </div>

          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="space-y-1">
              <div className="text-sm font-medium tracking-wide text-muted-foreground">INSTITUTION</div>
              <div className="text-lg font-bold text-foreground">Hochschule Emden/Leer</div>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg">
            <div className="space-y-1">
              <div className="text-sm font-medium tracking-wide text-muted-foreground">PROJEKT</div>
              <div className="text-lg font-bold text-foreground">DigiChildProtect</div>
              <div className="text-sm text-muted-foreground">SAG 128 • Januar 2026</div>
            </div>
          </div>
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8"
        >
          <p className="text-sm text-muted-foreground italic">
            Ich freue mich auf Ihre Fragen und den weiteren Austausch
          </p>
        </motion.div>
      </div>
    </div>
  );
}
