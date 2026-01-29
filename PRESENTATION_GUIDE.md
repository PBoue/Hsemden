# DigiChildProtect Präsentation – Nutzungsanleitung

## Übersicht

Diese interaktive, barrierefreie Präsentation wurde für Ihr Bewerbungsgespräch am 30. Januar 2026 an der Hochschule Emden/Leer erstellt. Sie verwendet Aceternity UI-Komponenten und erfüllt WCAG AAA Accessibility-Standards.

## Features

### Dark/Light Mode
- **Theme-Toggle** im unteren rechten Bereich der Navigationsleiste
- Automatische System-Theme-Erkennung
- Alle Farben sind WCAG AAA-konform (Kontrastverhältnis ≥ 7:1 für normalen Text)
- Smooth Transitions zwischen Themes

### Barrierefreiheit (WCAG AAA)
- **Tastaturnavigation**: Vollständige Bedienbarkeit ohne Maus
- **Screen Reader Support**: Alle interaktiven Elemente mit aria-labels
- **Focus-Visible States**: Klare visuelle Fokus-Indikatoren
- **Reduced Motion**: Respektiert Nutzereinstellungen für reduzierte Animationen
- **Semantisches HTML**: Korrekte heading-Hierarchie, nav, role attributes
- **Kontrast**: Mindestens 7:1 für normalen Text, 4.5:1 für große Texte

### Animationen
- **Spotlight-Effekt** auf Titelfolie
- **Smooth Fade-In** Animationen für alle Inhalte
- **Hover-Effekte** auf interaktiven Karten
- **Gradient-Borders** für visuelles Interesse
- Alle Animationen respektieren `prefers-reduced-motion`

## Navigation

### Tastatur-Steuerung (empfohlen für Präsentation)
- **Pfeil rechts / Leertaste**: Nächste Folie
- **Pfeil links**: Vorherige Folie
- **Home**: Zur ersten Folie
- **End**: Zur letzten Folie
- **Tab**: Durch interaktive Elemente navigieren
- **Enter/Space**: Elemente aktivieren (z.B. Accordion)

### Maus-Steuerung
- **Navigationspfeile** unten rechts: Vor/Zurück
- **Home-Button** unten links: Zurück zur Titelfolie
- **Fortschrittsbalken** in der Mitte: Direkt zu einer Folie springen (klicken)
- **Theme-Toggle** unten rechts: Zwischen Hell/Dunkel wechseln

### Assistive Technologie
- **Screen Reader**: Alle Folieninhalte sind semantisch strukturiert
- **Live Regions**: Folienzähler wird als `aria-live="polite"` angekündigt
- **Landmarks**: Navigation mit role="navigation"
- **Progress Indicators**: Fortschrittsbalken mit role="tablist"

## Folienstruktur (10 Folien, ~10 Minuten)

1. **Titel** – Forschungsdesign DigiChildProtect mit Spotlight-Effekt
2. **Problemstellung** – Empirische Belastungsindikatoren mit animierten Balkendiagrammen
3. **Forschungsfragen** – 6 zentrale Fragen mit Hover-Effekten
4. **Methodik** – Mixed-Methods-Design mit Übersetzungskette
5. **Stakeholder** – Kern- und Sekundärstakeholder mit Icons
6. **Arbeitspakete** – 11 Arbeitspakete mit Accordion (klickbar)
7. **Datenschutz & Ethik** – 5-stufiges Schutzmodell mit Risiko-Badges
8. **Interdisziplinäre Umsetzung** – SAG, Technik, Wirtschaft
9. **Phasenmodell** – 42 Monate Timeline mit Details
10. **Zusammenfassung** – Kernpunkte und Abschluss

## Interaktive Elemente

### Folie 6 (Arbeitspakete)
- **Accordion-Komponente**: Klicken oder Enter-Taste zum Aufklappen
- Zeigt Details zu Aktivitäten und Outputs für jedes Arbeitspaket
- Hover-Effekt zeigt Interaktivität

### Alle Folien
- **Hover-Effekte**: Karten und Komponenten reagieren auf Mauszeiger
- **Gradient Borders**: Subtile animierte Rahmen um wichtige Elemente
- **Smooth Transitions**: Alle Zustandsänderungen sind animiert

## Design-Philosophie

### Aceternity UI Integration
- **Modern & Elegant**: Zeitgemäße UI mit subtilen Animationen
- **Professional**: Wissenschaftlicher Kontext bleibt im Vordergrund
- **Accessible**: Alle Effekte sind optional und barrierefrei
- **Performant**: Optimierte Animationen mit will-change

### Farbsystem (WCAG AAA)
**Light Mode:**
- Hintergrund: #ffffff (weiß)
- Text: #0a0a0a (fast schwarz) - 19.56:1 Kontrast
- Muted Text: #525252 - 7.58:1 Kontrast
- Primary: #1a1a1a - 18.24:1 Kontrast

**Dark Mode:**
- Hintergrund: #0a0a0a (fast schwarz)
- Text: #f5f5f5 (off-white) - 18.08:1 Kontrast
- Muted Text: #a3a3a3 - 7.23:1 Kontrast
- Primary: #f5f5f5 - 18.08:1 Kontrast

### Typografie
- **System Font Stack**: Optimale Lesbarkeit
- **Klare Hierarchie**: h1-h4 mit definierten Gewichten
- **Line Height**: Optimiert für Lesbarkeit (1.2-1.5)
- **Font Weights**: Medium (500) für Headlines, Normal (400) für Body

## Präsentationstipps

### Zeitmanagement (~10 Minuten)
- **Folie 1 (Titel)**: 30 Sek. – Kurze Begrüßung, Spotlight wirken lassen
- **Folie 2 (Problem)**: 1 Min. – Kontext setzen, Statistiken betonen
- **Folie 3 (Fragen)**: 1 Min. – Struktur aufzeigen, ggf. eine Karte antippen
- **Folie 4 (Methodik)**: 1,5 Min. – Phasen erläutern, Übersetzungskette zeigen
- **Folie 5 (Stakeholder)**: 1 Min. – Breite des Ansatzes verdeutlichen
- **Folie 6 (Arbeitspakete)**: 2 Min. – 2-3 Pakete aufklappen als Beispiele
- **Folie 7 (Datenschutz)**: 1,5 Min. – Stufenmodell durchgehen, Schutzkonzept betonen
- **Folie 8 (Interdisziplinär)**: 1 Min. – Drei Säulen zeigen
- **Folie 9 (Timeline)**: 1 Min. – Phasenlogik skizzieren
- **Folie 10 (Zusammenfassung)**: 30 Sek. – Kernpunkte, professioneller Abschluss

### Theme-Empfehlung
- **Videokonferenz tagsüber**: Light Mode (bessere Lesbarkeit bei Bildschirmteilung)
- **Präsenz abends/dunkel**: Dark Mode (angenehmer für die Augen)
- **System-Einstellung**: Automatische Anpassung an Tageszeit möglich
- Testen Sie vorab, welches Theme in Ihrer Umgebung besser wirkt

### Schwerpunkte
1. **Menschenzentrierter Prozess**: ISO 9241-210/220 als roter Faden
2. **Risikosensitivität**: 5-Stufen-Modell für vulnerable Gruppen
3. **Übersetzungskette**: Befund → Anforderung → Artefakt → Test → Übergabe
4. **Interdisziplinarität**: SAG, Technik, Wirtschaft als produktive Verbindung
5. **Qualitätssicherung**: Audit-Trail, WCAG AAA, GWP-konform

## Technische Hinweise

### Browser-Kompatibilität
- **Empfohlen**: Chrome, Edge (neueste Versionen)
- **Funktioniert**: Firefox, Safari (neueste Versionen)
- **Animationen**: Verwendet Motion (Framer Motion) für optimale Performance
- **Offline**: Funktioniert nach dem ersten Laden

### Performance
- **Optimierte Animationen**: `will-change` für GPU-Beschleunigung
- **Lazy Loading**: Nur aktive Folie wird vollständig gerendert
- **Reduced Motion**: Automatische Erkennung und Anpassung
- **Dark Mode**: CSS Custom Properties für schnellen Theme-Wechsel

### Vor dem Gespräch
1. **Laden Sie die Präsentation** im Browser vor dem Meeting
2. **Testen Sie die Navigation** (Pfeiltasten, Space)
3. **Wählen Sie Ihr Theme** (Hell/Dunkel)
4. **Prüfen Sie den Accordion** auf Folie 6
5. **Testen Sie Bildschirmteilung** in BigBlueButton
6. **Schließen Sie andere Tabs** für optimale Performance

## Vorbereitung auf Fragen

Bereiten Sie sich auf Vertiefungsfragen vor zu:

### Methodisch
- Spezifische Methoden (qualitative Inhaltsanalyse, ISO 9241-11 Metriken)
- Samplingstrategien und Quotensteuerung
- Intercoder-Reliabilität bei qualitativer Auswertung
- Validierung von Prototypen in Living-Labs

### Rechtlich/Ethisch
- DSGVO Art. 89 im Forschungskontext
- § 13 NDSG für Niedersachsen
- Stufenmodell: Gate-Kriterien im Detail
- Informierte Einwilligung bei vulnerablen Gruppen

### Referenzen
- JAdigital (DIJuF): Digitalisierung in Kinder-/Jugendhilfe
- KAIMo (bidt): KI-Ethik in Kindeswohlgefährdung
- AFST (Allegheny County): Algorithmic Fairness
- CP-IS (UK NHS): Informationsweitergabe im Kinderschutz

### Praktische Erfahrung
- UX-Lab Aufbau und Steuerung (Methodik, Budget, Team)
- A/B-Testing und multivariate Tests
- Stakeholder-Management über Hierarchien hinweg
- Cross-funktionale Führung (50+ Personen)

### Promotion
- Mögliche Forschungsfrage aus RQ1-RQ6 vertiefen
- Methodische Einordnung (explorativ, Mixed-Methods)
- Zeitplan und Betreuung
- Publikationsstrategie

## Barrierefreiheit-Checkliste

✅ Tastatur-Navigation vollständig implementiert  
✅ Screen Reader Support (aria-labels, semantic HTML)  
✅ WCAG AAA Kontraste (≥ 7:1) in beiden Themes  
✅ Focus-visible States für alle interaktiven Elemente  
✅ Prefers-reduced-motion respektiert  
✅ Live Regions für dynamische Inhalte  
✅ Landmarks (nav, main implizit durch divs)  
✅ Heading-Hierarchie (h1, h2, h3, h4)  
✅ Alt-Texte (Icons mit aria-hidden, Labels vorhanden)  
✅ Color nicht einzige Informationsquelle  

Viel Erfolg bei Ihrem Gespräch!
