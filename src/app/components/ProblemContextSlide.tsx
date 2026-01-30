import { motion } from 'motion/react';
import { StatCard } from '@/app/components/StatisticsCard';
import { Quote } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import {
    InPageNavigation,
    NavigationSection,
} from '@/app/components/InPageNavigation';

export function ProblemContextSlide() {
    const stats = [
        {
            value: '62.300',
            label: 'Festgestellte Kindeswohlgefährdungen',
            sublabel: 'Deutschland 2022',
            color: 'bg-destructive',
        },
        {
            value: '213.500',
            label: 'Geprüfte Verdachtsmeldungen',
            sublabel: 'von Jugendämtern',
            color: 'bg-chart-2',
        },
        {
            value: '61.400',
            label: 'Inobhutnahmen',
            sublabel: 'zum Schutz von Kindern',
            color: 'bg-chart-4',
        },
    ];

    const endangermentTypes = [
        { label: 'Vernachlässigung', percentage: 59, color: 'bg-destructive' },
        {
            label: 'Psychische Misshandlung',
            percentage: 35,
            color: 'bg-chart-2',
        },
        {
            label: 'Körperliche Misshandlung',
            percentage: 27,
            color: 'bg-chart-3',
        },
        { label: 'Sexuelle Gewalt', percentage: 5, color: 'bg-chart-4' },
    ];

    const navigationSections: NavigationSection[] = [
        { id: 'section-1', label: '1. Problemstellung' },
        { id: 'section-2', label: '2. Einordnung der Relevanz' },
        { id: 'section-3', label: '3. Referenzprojekte' },
        { id: 'section-4', label: '4. Zielsetzung' },
    ];

    return (
        <div className="min-h-full p-8 md:p-16 bg-background relative overflow-hidden">
            {/* In-Page Navigation */}
            <InPageNavigation sections={navigationSections} />

            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-7xl mx-auto space-y-12 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-3"
                >
                    <div className="inline-block px-4 py-2 bg-muted rounded">
                        <span className="text-sm font-medium tracking-wide text-muted-foreground">
                            01 — KONTEXT
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                        Kindeswohlgefährdungen in Deutschland
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Aktuelle Herausforderungen und digitale Lösungsansätze
                    </p>
                </motion.div>

                {/* Quote from research */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-chart-1/10 border-l-4 border-chart-1 p-6 rounded-r-lg"
                >
                    <div className="flex gap-4">
                        <Quote className="w-8 h-8 text-chart-1 flex-shrink-0 mt-1" />
                        <div className="space-y-2">
                            <p className="text-lg italic text-foreground leading-relaxed">
                                „Die Digitalisierung der Kinder- und Jugendhilfe
                                muss die besonderen Anforderungen des
                                Arbeitsfeldes berücksichtigen und darf nicht
                                dazu führen, dass der persönliche Kontakt zu
                                Kindern, Jugendlichen und Familien an den Rand
                                gedrängt wird."
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Deutsches Institut für Jugendhilfe und
                                Familienrecht (2023).
                                <span className="italic">
                                    {' '}
                                    JAdigital – Orientierungsrahmen für die
                                    Digitalisierung in der Kinder- und
                                    Jugendhilfe.
                                </span>{' '}
                                Heidelberg: DIJuF.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Project Context Description */}
                <motion.div
                    id="section-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        1. Problemstellung und Forschungskontext
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                        <p>
                            Im Projekt DigiChildProtect wird die Einführung
                            digitaler Werkzeuge und potenziell KI-gestützter
                            Funktionen in Organisationen des Kinderschutzes in
                            Niedersachsen (Schwerpunkt ländlicher Raum) als
                            interdisziplinäres Vorhaben verortet. Als
                            Zielgruppen werden u. a. Jugendämter,
                            Kinderschutz-Zentren und Beratungsstellen benannt;
                            als Vorgehen wird empirische Forschung in
                            Zusammenarbeit mehrerer Fachbereiche (Soziale Arbeit
                            und Gesundheit, Wirtschaft, Technik) ausgewiesen.
                        </p>
                        <p>
                            Für die Aufgabe im Auswahlverfahren wird eine
                            explorative Erstphase gefordert, in der die
                            Ausgangssituation in beteiligten Organisationen
                            systematisch aufgenommen wird, um Problemlagen und
                            Bedingungen digitaler bzw. KI-gestützter
                            Unterstützung zu verstehen; auf dieser Basis wird
                            ein methodisch begründetes Vorgehen beschrieben.
                        </p>
                        <p>
                            Die Ausgestaltung des Forschungsvorhabens wird an
                            verbindliche Standards gebunden: (a)
                            hochschulinterne Regelungen guter wissenschaftlicher
                            Praxis (HS Emden/Leer) sowie der DFG-Kodex, (b)
                            Datenschutzrahmen für Forschung (DSGVO Art. 89; § 13
                            NDSG) und (c) ein menschenzentrierter
                            Gestaltungsprozess als normativer Referenzrahmen
                            (DIN EN ISO 9241-210/220; ISO 9241-11 für
                            Usabilitybegriffe).
                        </p>
                    </div>
                </motion.div>

                {/* Focus Areas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div className="bg-chart-1 p-8 rounded-lg text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                        <div className="space-y-3 relative">
                            <div className="text-sm font-medium tracking-wide opacity-90">
                                FOKUS
                            </div>
                            <div className="text-2xl font-bold">
                                Ländlicher Raum Niedersachsen
                            </div>
                            <p className="text-sm opacity-90 leading-relaxed">
                                Jugendämter, Kinderschutzzentren,
                                Beratungsstellen – mit besonderem Augenmerk auf
                                ressourcenschwache Regionen
                            </p>
                        </div>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-lg">
                        <div className="space-y-3">
                            <div className="text-sm font-medium tracking-wide text-muted-foreground">
                                PROJEKTZIEL
                            </div>
                            <div className="text-2xl font-bold text-foreground">
                                Digitale Transformation
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Empirisch fundierte Unterstützung durch digitale
                                Werkzeuge und KI – entwickelt mit und für
                                Fachkräfte im Kinderschutz
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Section Header for Statistics */}
                <motion.div
                    id="section-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        2. Einordnung der Relevanz mittels amtlicher Kennzahlen
                    </h2>
                </motion.div>

                {/* Endangerment Types Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.38 }}
                    className="space-y-4"
                >
                    <h3 className="text-xl font-bold text-foreground">
                        2.1 Validierte Typologie von Kindeswohlgefährdung und
                        Schutzbedarf
                    </h3>
                    <p className="text-foreground leading-relaxed">
                        In der amtlichen Statistik zum Schutzauftrag bei
                        Kindeswohlgefährdung werden Gefährdungslagen als akut
                        oder latent erfasst; als Gefährdungsformen werden
                        Vernachlässigung, psychische Misshandlung, körperliche
                        Misshandlung und sexuelle Gewalt ausgewiesen.
                    </p>
                </motion.div>

                {/* Endangerment Types Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-card border border-border p-8 rounded-lg"
                >
                    <h3 className="text-xl font-bold text-foreground mb-6">
                        Gefährdungsformen (Mehrfachnennungen möglich)
                    </h3>
                    <div className="space-y-6">
                        {endangermentTypes.map((type, index) => (
                            <div
                                key={index}
                                className="space-y-2"
                            >
                                <div className="flex justify-between items-baseline">
                                    <span className="text-lg font-medium text-foreground">
                                        {type.label}
                                    </span>
                                    <span className="text-3xl font-bold text-foreground">
                                        {type.percentage}%
                                    </span>
                                </div>
                                <div className="h-3 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: `${type.percentage}%`,
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.4 + index * 0.1,
                                            ease: 'easeOut',
                                        }}
                                        className={`h-full ${type.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>Quelle:</strong> Statistisches Bundesamt
                            (2023).{' '}
                            <span className="italic">
                                Statistiken der Kinder- und Jugendhilfe –
                                Gefährdungseinschätzungen nach § 8a Absatz 1 SGB
                                VIII 2022.
                            </span>{' '}
                            Fachserie 13 Reihe 6.4. Wiesbaden: Destatis.
                            Statistisches Bundesamt (2023).{' '}
                            <span className="italic">
                                Statistiken der Kinder- und Jugendhilfe –
                                Vorläufige Schutzmaßnahmen 2022.
                            </span>{' '}
                            Fachserie 13 Reihe 6.2. Wiesbaden: Destatis.
                        </p>
                    </div>
                </motion.div>

                {/* Stats Grid - Niedersachsen */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-6"
                >
                    <h3 className="text-xl font-bold text-foreground">
                        2.2 Geografische Differenzierungen
                    </h3>

                    <p className="text-foreground leading-relaxed">
                        Geografische Differenzierungen („wo" im Sinne regionaler
                        Verteilungen) werden in Destatis-Tabellen und
                        Themenübersichten zum Kinderschutz bereitgestellt und
                        können für Schwerpunktsetzungen in Niedersachsen
                        herangezogen werden.
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-chart-3 rounded" />
                        <h4 className="text-lg font-bold text-foreground">
                            Niedersachsen (2022)
                        </h4>
                        <span className="text-sm text-muted-foreground">
                            — Projektregion
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard
                            value="5.928"
                            label="Kindeswohlgefährdungen festgestellt"
                            change="davon 1.979 akut, 3.949 latent"
                            trend="neutral"
                            icon="alert"
                            color="bg-destructive"
                            region="Niedersachsen"
                            source="Landesamt für Statistik Niedersachsen (2023). Statistischer Bericht K I 7 – j/2022: Gefährdungseinschätzungen nach § 8a Absatz 1 SGB VIII 2022. Hannover: LSN."
                            delay={0.5}
                        />
                        <StatCard
                            value="17.448"
                            label="Verfahren durchgeführt"
                            change="Gefährdungseinschätzungen gesamt"
                            trend="neutral"
                            icon="files"
                            color="bg-chart-2"
                            region="Niedersachsen"
                            source="Landesamt für Statistik Niedersachsen (2023). Statistischer Bericht K I 7 – j/2022: Gefährdungseinschätzungen nach § 8a Absatz 1 SGB VIII 2022. Hannover: LSN."
                            delay={0.6}
                        />
                        <StatCard
                            value="6.450"
                            label="Inobhutnahmen durchgeführt"
                            change="10,5% des Bundeswerts"
                            trend="neutral"
                            icon="users"
                            color="bg-chart-4"
                            region="Niedersachsen"
                            source="Statistisches Bundesamt (2023). Statistiken der Kinder- und Jugendhilfe – Vorläufige Schutzmaßnahmen 2022. Fachserie 13 Reihe 6.2. Wiesbaden: Destatis."
                            delay={0.7}
                        />
                    </div>
                </motion.div>

                {/* Stats Grid with StatCards - Deutschland */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-chart-1 rounded" />
                        <h4 className="text-lg font-bold text-foreground">
                            Deutschland gesamt (2022)
                        </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard
                            value="62.300"
                            label="Kindeswohlgefährdungen festgestellt"
                            change="+4,0% seit 2021"
                            trend="up"
                            icon="alert"
                            color="bg-destructive"
                            region="Deutschland"
                            source="Statistisches Bundesamt (2023). Statistiken der Kinder- und Jugendhilfe – Gefährdungseinschätzungen nach § 8a Absatz 1 SGB VIII 2022. Fachserie 13 Reihe 6.4. Wiesbaden: Destatis."
                            delay={0.6}
                        />
                        <StatCard
                            value="213.500"
                            label="Verdachtsmeldungen geprüft"
                            change="von Jugendämtern"
                            trend="neutral"
                            icon="files"
                            color="bg-chart-2"
                            region="Deutschland"
                            source="Statistisches Bundesamt (2023). Statistiken der Kinder- und Jugendhilfe – Gefährdungseinschätzungen nach § 8a Absatz 1 SGB VIII 2022. Fachserie 13 Reihe 6.4. Wiesbaden: Destatis."
                            delay={0.7}
                        />
                        <StatCard
                            value="61.400"
                            label="Inobhutnahmen durchgeführt"
                            change="zum Schutz von Kindern"
                            trend="neutral"
                            icon="users"
                            color="bg-chart-4"
                            region="Deutschland"
                            source="Statistisches Bundesamt (2023). Statistiken der Kinder- und Jugendhilfe – Vorläufige Schutzmaßnahmen 2022. Fachserie 13 Reihe 6.2. Wiesbaden: Destatis."
                            delay={0.8}
                        />
                    </div>
                </motion.div>

                {/* Reference Projects Section */}
                <motion.div
                    id="section-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        3. Referenzprojekte und veröffentlichte Forschung
                    </h2>

                    <div className="space-y-6">
                        {/* Intro */}
                        <p className="text-foreground leading-relaxed">
                            Zur Verortung des Vorhabens im Feld werden belastbar
                            dokumentierte Referenzprojekte herangezogen:
                        </p>

                        {/* German Projects Header */}
                        <div className="flex items-center gap-3">
                            <div className="h-1 w-12 bg-chart-1 rounded" />
                            <h2 className="text-2xl font-bold text-foreground">
                                Deutschland
                            </h2>
                            <span className="text-sm text-muted-foreground">
                                — Nationale Referenzprojekte
                            </span>
                        </div>

                        {/* German Projects - Individual Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* JAdigital */}
                            <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-chart-1 transition-colors">
                                <div className="bg-chart-1/10 px-6 py-4 border-b border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-foreground text-lg">
                                                JAdigital
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                DIJuF | Deutschland
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-chart-1 flex items-center justify-center text-white font-bold text-sm">
                                            DE
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-sm text-foreground leading-relaxed">
                                        Verbundprojekt zur Digitalisierung der
                                        Kinder- und Jugendhilfe mit Fokus auf
                                        Dokumentation, Kommunikation und
                                        Datenaustausch zwischen Jugendämtern.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Träger:</strong> Deutsches
                                            Institut für Jugendhilfe und
                                            Familienrecht (DIJuF)
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Laufzeit:</strong> 2020–2023
                                        </div>
                                    </div>
                                    <a
                                        href="https://jadigital.de"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-chart-1 hover:underline font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        jadigital.de
                                    </a>
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            <strong>Quelle:</strong> DIJuF
                                            (2023). JAdigital – Digitalisierung
                                            der Kinder- und Jugendhilfe.
                                            Abgerufen von https://jadigital.de
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* KAIMo */}
                            <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-chart-1 transition-colors">
                                <div className="bg-chart-1/10 px-6 py-4 border-b border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-foreground text-lg">
                                                KAIMo
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                bidt | Deutschland
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-chart-1 flex items-center justify-center text-white font-bold text-sm">
                                            DE
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-sm text-foreground leading-relaxed">
                                        Forschungsprojekt zu
                                        KI-Assistenzsystemen für ethisch
                                        begründete Entscheidungsfindung im
                                        Kinderschutz unter besonderer
                                        Berücksichtigung von Verantwortung und
                                        Transparenz.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Träger:</strong> Bayerisches
                                            Forschungsinstitut für Digitale
                                            Transformation (bidt)
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Laufzeit:</strong> 2021–2024
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.bidt.digital/forschungsprojekt-kaimo/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-chart-1 hover:underline font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        bidt.digital/kaimo
                                    </a>
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            <strong>Quelle:</strong> bidt
                                            (2024). KAIMo – KI-Assistenzsysteme
                                            für moralische Entscheidungen im
                                            Kinderschutz. Abgerufen von
                                            https://www.bidt.digital/forschungsprojekt-kaimo/
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* International Projects Header */}
                        <div className="flex items-center gap-3">
                            <div className="h-1 w-12 bg-chart-2 rounded" />
                            <h2 className="text-2xl font-bold text-foreground">
                                International
                            </h2>
                            <span className="text-sm text-muted-foreground">
                                — Internationale Anschlussstellen
                            </span>
                        </div>

                        {/* International Projects - Individual Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* CP-IS England */}
                            <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-chart-2 transition-colors">
                                <div className="bg-chart-2/10 px-6 py-4 border-b border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-foreground text-lg">
                                                CP-IS
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                NHS Digital | England
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-chart-2 flex items-center justify-center text-white font-bold text-sm">
                                            UK
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-sm text-foreground leading-relaxed">
                                        Child Protection Information Sharing
                                        System: Nationales System zum sicheren
                                        Informationsaustausch zwischen NHS,
                                        Schulen und Sozialdiensten bei
                                        Kinderschutzfällen.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Betreiber:</strong> NHS
                                            Digital (seit 2023 NHS England)
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            <strong>In Betrieb seit:</strong>{' '}
                                            2013
                                        </div>
                                    </div>
                                    <a
                                        href="https://digital.nhs.uk/services/child-protection-information-sharing-project"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-chart-2 hover:underline font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        digital.nhs.uk/cp-is
                                    </a>
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            <strong>Quelle:</strong> NHS Digital
                                            (2023). Child Protection –
                                            Information Sharing (CP-IS).
                                            Abgerufen von
                                            https://digital.nhs.uk/services/child-protection-information-sharing-project
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* AFST USA */}
                            <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-chart-2 transition-colors">
                                <div className="bg-chart-2/10 px-6 py-4 border-b border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-foreground text-lg">
                                                AFST
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                Allegheny County DHS | USA
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-chart-2 flex items-center justify-center text-white font-bold text-sm">
                                            US
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-sm text-foreground leading-relaxed">
                                        Allegheny Family Screening Tool:
                                        Algorithmisches Risiko-Assessment zur
                                        Unterstützung von Fachkräften beim
                                        Screening von Kinderschutzmeldungen
                                        mittels prädiktiver Analytik.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Betreiber:</strong>{' '}
                                            Allegheny County Department of Human
                                            Services
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            <strong>In Betrieb seit:</strong>{' '}
                                            2016
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.alleghenycountyanalytics.us/index.php/2019/05/02/the-allegheny-family-screening-tool/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-chart-2 hover:underline font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        alleghenycountyanalytics.us
                                    </a>
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            <strong>Quelle:</strong>{' '}
                                            Vaithianathan, R., Putnam-Hornstein,
                                            E., Jiang, N., Nand, P., & Maloney,
                                            T. (2017). Allegheny Family
                                            Screening Tool: Methodology, Version
                                            2. Auckland: Centre for Social Data
                                            Analytics.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Neuseeland MSD */}
                            <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-chart-2 transition-colors">
                                <div className="bg-chart-2/10 px-6 py-4 border-b border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-foreground text-lg">
                                                Predictive Risk Modelling
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                MSD | Neuseeland
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-chart-2 flex items-center justify-center text-white font-bold text-sm">
                                            NZ
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-sm text-foreground leading-relaxed">
                                        Predictive Modelling zur Identifikation
                                        vulnerabler Kinder in staatlicher Obhut.
                                        Umfassende ethische Bewertung und
                                        öffentliche Diskussion der Datennutzung.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Betreiber:</strong> Ministry
                                            of Social Development (MSD)
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Zeitraum:</strong> 2012–2015
                                            (später eingestellt)
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.msd.govt.nz/about-msd-and-our-work/work-programmes/better-public-services/vulnerable-children.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-chart-2 hover:underline font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        msd.govt.nz
                                    </a>
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            <strong>Quelle:</strong> Office of
                                            the Privacy Commissioner New Zealand
                                            (2013). Applying privacy by design:
                                            Using predictive risk modelling.
                                            Wellington: Privacy Commissioner.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* WeProtect Global Alliance */}
                            <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-chart-2 transition-colors">
                                <div className="bg-chart-2/10 px-6 py-4 border-b border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-foreground text-lg">
                                                WeProtect Global Alliance
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                International
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-chart-2 flex items-center justify-center text-white font-bold text-sm">
                                            🌐
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-sm text-foreground leading-relaxed">
                                        Globales Netzwerk von 98 Regierungen,
                                        Privatsektor und Zivilgesellschaft zur
                                        Bekämpfung sexueller Ausbeutung von
                                        Kindern online (OCSEA). Model National
                                        Response Framework.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Gegründet:</strong> 2014 (UK
                                            WePROTECT Summit)
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            <strong>Mitglieder:</strong> 98
                                            Länder, 28 Unternehmen, 60+ NGOs
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.weprotect.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-chart-2 hover:underline font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        weprotect.org
                                    </a>
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            <strong>Quelle:</strong> WeProtect
                                            Global Alliance (2023). Model
                                            National Response Framework 2.0.
                                            Abgerufen von
                                            https://www.weprotect.org/model-national-response/
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 4: Zielsetzung */}
                <motion.div
                    id="section-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        4. Zielsetzung
                    </h2>

                    <div className="space-y-4 text-foreground leading-relaxed">
                        <p>
                            Ziel ist die empirisch fundierte Beschreibung der
                            Ausgangslage (Prozess-, Daten- und Systemrealität,
                            Akteurskonstellationen, Anforderungen, Risiken)
                            sowie die Überführung der Ergebnisse in getestete
                            und dokumentierte Artefakte
                            (Anforderungsspezifikationen, Prototypen,
                            Designsystem- und Architekturbausteine) und in eine
                            implementierbare Transfer- und
                            Kommunikationsplanung.
                        </p>
                        <p>
                            Die Umsetzung wird als iterativer Zyklus aus
                            Diagnose, Hypothese, Entwurf, Test und
                            nachvollziehbarer Übergabe angelegt; die in der
                            Stellenausschreibung betonte Kombination aus
                            Literaturarbeit, qualitativen (leitfadengestützten)
                            und quantitativen Erhebungen sowie Auswertung und
                            Transferkommunikation wird abgebildet.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
