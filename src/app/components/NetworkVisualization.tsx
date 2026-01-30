import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    User,
    Users,
    Scale,
    GraduationCap,
    Building,
    Heart,
    Shield,
    Stethoscope,
    BookOpen,
    FlaskConical,
    Home,
    Baby,
    ExternalLink,
} from 'lucide-react';

type IconType =
    | 'user'
    | 'users'
    | 'scale'
    | 'graduation'
    | 'building'
    | 'heart'
    | 'shield'
    | 'stethoscope'
    | 'book'
    | 'flask'
    | 'home'
    | 'baby';
type RelationshipType =
    | 'direkt'
    | 'beratend'
    | 'rechtlich'
    | 'fördernd'
    | 'betreuend';

interface Node {
    id: string;
    label: string;
    type: 'core' | 'system' | 'external';
    x: number;
    y: number;
    description: string;
    icon: IconType;
    details: string;
    source?: string;
    sourceUrl?: string;
}

interface Connection {
    from: string;
    to: string;
    relationshipType: RelationshipType;
    strength: 'strong' | 'medium' | 'weak';
}

// Helper function to calculate positions in a circle around the center
const getCirclePosition = (
    index: number,
    total: number,
    radius: number,
    centerX = 50,
    centerY = 50,
) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
    };
};

// Das Kind in der Mitte
const centerNode: Node = {
    id: 'kind',
    label: 'Das Kind',
    type: 'core',
    x: 50,
    y: 50,
    description: 'Im Zentrum aller Kinderschutzmaßnahmen steht das Kindeswohl',
    icon: 'baby',
    details:
        'Das Kindeswohl ist das zentrale Schutzgut im Kinderschutz. Alle Akteure und Maßnahmen dienen dem Ziel, Kinder vor Gefährdungen zu schützen und ihre gesunde Entwicklung zu fördern.',
    source: 'UN-Kinderrechtskonvention Art. 3',
    sourceUrl:
        'https://www.kinderrechtskonvention.info/uebereinkommen-ueber-die-rechte-des-kindes-370/',
};

// Inner circle - Kernkontext (direkter Kontakt zum Kind)
const coreNodes: Node[] = [
    {
        id: 'jugendamt',
        label: 'Jugendämter',
        type: 'core',
        ...getCirclePosition(0, 4, 20),
        description: 'Primäre Zielgruppe für digitale Tools',
        icon: 'building',
        details:
            'Jugendämter sind die zentralen Akteure im Kinderschutz mit gesetzlichem Schutzauftrag nach § 8a SGB VIII. Sie koordinieren Hilfen und bewerten Gefährdungslagen.',
        source: 'Destatis (2023): Statistiken der Kinder- und Jugendhilfe',
        sourceUrl:
            'https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderschutz/_inhalt.html',
    },
    {
        id: 'eltern',
        label: 'Eltern & Familien',
        type: 'core',
        ...getCirclePosition(1, 4, 20),
        description: 'Primäre Bezugspersonen',
        icon: 'users',
        details:
            'Eltern und Familien sind die wichtigsten Bezugspersonen. Partizipation und Einbeziehung der Eltern sind zentral für erfolgreiche Schutzmaßnahmen.',
        source: 'BMFSFJ (2022): Familienreport',
        sourceUrl:
            'https://www.bmfsfj.de/bmfsfj/service/publikationen/familienreport-2022',
    },
    {
        id: 'kita',
        label: 'Kitas & Schulen',
        type: 'core',
        ...getCirclePosition(2, 4, 20),
        description: 'Früherkennung und Bildung',
        icon: 'graduation',
        details:
            'Bildungseinrichtungen spielen eine Schlüsselrolle bei der Früherkennung von Kindeswohlgefährdungen und haben einen gesetzlichen Schutzauftrag nach § 8a SGB VIII.',
        source: 'KMK (2021): Kinderschutz an Schulen',
        sourceUrl: 'https://www.kmk.org/',
    },
    {
        id: 'gesundheit',
        label: 'Gesundheitswesen',
        type: 'core',
        ...getCirclePosition(3, 4, 20),
        description: 'Medizinische Versorgung',
        icon: 'stethoscope',
        details:
            'Ärzt*innen, Kliniken und Therapeut*innen dokumentieren gesundheitliche Aspekte und erkennen Anzeichen von Misshandlung oder Vernachlässigung.',
        source: 'DGKiM (2019): Kinderschutzleitlinie',
        sourceUrl: 'https://www.awmf.org/leitlinien/detail/ll/027-069.html',
    },
];

// Outer circle - Systemkontext
const systemNodes: Node[] = [
    {
        id: 'familiengericht',
        label: 'Familiengerichte',
        type: 'system',
        ...getCirclePosition(0, 6, 35),
        description: 'Juristische Entscheidungen',
        icon: 'scale',
        details:
            'Familiengerichte treffen rechtliche Entscheidungen zu Sorgerecht, Umgangsrecht und familiengerichtlichen Maßnahmen nach § 1666 BGB bei Kindeswohlgefährdung.',
        source: 'FamFG § 151 ff.',
        sourceUrl: 'https://www.gesetze-im-internet.de/famfg/',
    },
    {
        id: 'polizei',
        label: 'Polizei',
        type: 'system',
        ...getCirclePosition(1, 6, 35),
        description: 'Akute Gefährdungen',
        icon: 'shield',
        details:
            'Polizei und Ordnungsbehörden greifen bei akuter Kindeswohlgefährdung ein und arbeiten eng mit Jugendämtern zusammen.',
        source: 'BKA (2022): Kriminalstatistik',
        sourceUrl:
            'https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/pks_node.html',
    },
    {
        id: 'beratung',
        label: 'Beratungsstellen',
        type: 'system',
        ...getCirclePosition(2, 6, 35),
        description: 'Psychosoziale Unterstützung',
        icon: 'heart',
        details:
            'Erziehungsberatungsstellen, Familienberatung und spezialisierte Fachberatungsstellen bieten Unterstützung für Familien in Krisensituationen.',
        source: 'bke (2023): Bundeskonferenz für Erziehungsberatung',
        sourceUrl: 'https://www.bke.de/',
    },
    {
        id: 'freie-traeger',
        label: 'Freie Träger',
        type: 'system',
        ...getCirclePosition(3, 6, 35),
        description: 'Hilfen zur Erziehung',
        icon: 'home',
        details:
            'Freie Träger der Jugendhilfe führen Hilfen zur Erziehung durch und sind wichtige Partner der Jugendämter im Kinderschutz.',
        source: 'AGJ (2022): Kinder- und Jugendhilfestatistik',
        sourceUrl: 'https://www.agj.de/',
    },
    {
        id: 'kinderschutz-zentren',
        label: 'Kinderschutz-Zentren',
        type: 'system',
        ...getCirclePosition(4, 6, 35),
        description: 'Spezialisierte Beratung',
        icon: 'users',
        details:
            'Spezialisierte Kinderschutz-Zentren bieten Diagnostik, Beratung und Therapie bei Verdacht auf Kindeswohlgefährdung.',
        source: 'BAG Kinderschutz-Zentren e.V.',
        sourceUrl: 'https://www.kinderschutz-zentren.org/',
    },
    {
        id: 'bildung',
        label: 'Bildungsträger',
        type: 'system',
        ...getCirclePosition(5, 6, 35),
        description: 'Fortbildung & Qualifizierung',
        icon: 'book',
        details:
            'Bildungsträger bieten Fortbildungen und Qualifizierungen für Fachkräfte im Kinderschutz an.',
        source: 'DJI (2021): Weiterbildungsinitiative Frühpädagogische Fachkräfte',
        sourceUrl: 'https://www.dji.de/',
    },
];

// External circle
const externalNodes: Node[] = [
    {
        id: 'forschung',
        label: 'Forschung',
        type: 'external',
        ...getCirclePosition(0, 3, 45),
        description: 'Wissenschaftliche Begleitung',
        icon: 'flask',
        details:
            'Forschungseinrichtungen evaluieren Kinderschutzmaßnahmen und entwickeln evidenzbasierte Methoden.',
        source: 'DJI, IzKK, Universitäten',
        sourceUrl:
            'https://www.dji.de/themen/kinderbetreuung-und-bildung/kinderschutz.html',
    },
    {
        id: 'datenschutz',
        label: 'Datenschutz',
        type: 'external',
        ...getCirclePosition(1, 3, 45),
        description: 'Rechtliche Compliance',
        icon: 'shield',
        details:
            'Datenschutzbeauftragte und -behörden stellen sicher, dass sensible Kinderschutzdaten DSGVO-konform verarbeitet werden.',
        source: 'DSGVO Art. 6, 9',
        sourceUrl: 'https://dsgvo-gesetz.de/',
    },
    {
        id: 'ministerien',
        label: 'Ministerien',
        type: 'external',
        ...getCirclePosition(2, 3, 45),
        description: 'Politische Steuerung',
        icon: 'building',
        details:
            'Bundes- und Landesministerien setzen rechtliche Rahmenbedingungen und finanzieren Kinderschutzprogramme.',
        source: 'BMFSFJ',
        sourceUrl:
            'https://www.bmfsfj.de/bmfsfj/themen/kinder-und-jugend/kinder-und-jugendschutz',
    },
];

const nodes: Node[] = [
    centerNode,
    ...coreNodes,
    ...systemNodes,
    ...externalNodes,
];

// Alle Verbindungen gehen vom Kind aus
const connections: Connection[] = [
    // Direkte Beziehungen zum Kind (Kernkontext)
    {
        from: 'kind',
        to: 'jugendamt',
        relationshipType: 'betreuend',
        strength: 'strong',
    },
    {
        from: 'kind',
        to: 'eltern',
        relationshipType: 'direkt',
        strength: 'strong',
    },
    {
        from: 'kind',
        to: 'kita',
        relationshipType: 'betreuend',
        strength: 'strong',
    },
    {
        from: 'kind',
        to: 'gesundheit',
        relationshipType: 'betreuend',
        strength: 'strong',
    },

    // Systemkontext zum Kind
    {
        from: 'kind',
        to: 'familiengericht',
        relationshipType: 'rechtlich',
        strength: 'medium',
    },
    {
        from: 'kind',
        to: 'polizei',
        relationshipType: 'rechtlich',
        strength: 'medium',
    },
    {
        from: 'kind',
        to: 'beratung',
        relationshipType: 'beratend',
        strength: 'medium',
    },
    {
        from: 'kind',
        to: 'freie-traeger',
        relationshipType: 'fördernd',
        strength: 'medium',
    },
    {
        from: 'kind',
        to: 'kinderschutz-zentren',
        relationshipType: 'beratend',
        strength: 'medium',
    },
    {
        from: 'kind',
        to: 'bildung',
        relationshipType: 'fördernd',
        strength: 'weak',
    },

    // Externe zum Kind
    {
        from: 'kind',
        to: 'forschung',
        relationshipType: 'fördernd',
        strength: 'weak',
    },
    {
        from: 'kind',
        to: 'datenschutz',
        relationshipType: 'rechtlich',
        strength: 'weak',
    },
    {
        from: 'kind',
        to: 'ministerien',
        relationshipType: 'fördernd',
        strength: 'weak',
    },

    // Wichtige Querverbindungen zwischen Akteuren
    {
        from: 'jugendamt',
        to: 'familiengericht',
        relationshipType: 'rechtlich',
        strength: 'strong',
    },
    {
        from: 'jugendamt',
        to: 'polizei',
        relationshipType: 'rechtlich',
        strength: 'strong',
    },
    {
        from: 'kita',
        to: 'jugendamt',
        relationshipType: 'beratend',
        strength: 'strong',
    },
    {
        from: 'gesundheit',
        to: 'jugendamt',
        relationshipType: 'beratend',
        strength: 'strong',
    },
];

const IconComponent = ({
    icon,
    className,
}: {
    icon: IconType;
    className?: string;
}) => {
    const iconProps = { className, strokeWidth: 2 };
    switch (icon) {
        case 'user':
            return <User {...iconProps} />;
        case 'users':
            return <Users {...iconProps} />;
        case 'scale':
            return <Scale {...iconProps} />;
        case 'graduation':
            return <GraduationCap {...iconProps} />;
        case 'building':
            return <Building {...iconProps} />;
        case 'heart':
            return <Heart {...iconProps} />;
        case 'shield':
            return <Shield {...iconProps} />;
        case 'stethoscope':
            return <Stethoscope {...iconProps} />;
        case 'book':
            return <BookOpen {...iconProps} />;
        case 'flask':
            return <FlaskConical {...iconProps} />;
        case 'home':
            return <Home {...iconProps} />;
        case 'baby':
            return <Baby {...iconProps} />;
        default:
            return <User {...iconProps} />;
    }
};

export function NetworkVisualization() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    const getNodeColor = (
        node: Node,
        isHovered: boolean,
        isSelected: boolean,
    ) => {
        if (isSelected) return 'hsl(var(--primary))';
        if (isHovered) return 'hsl(var(--chart-2))';
        if (node.id === 'kind') return 'hsl(var(--chart-5))'; // Special color for child
        switch (node.type) {
            case 'core':
                return 'hsl(var(--chart-1))';
            case 'system':
                return 'hsl(var(--chart-3))';
            case 'external':
                return 'hsl(var(--chart-4))';
            default:
                return 'hsl(var(--muted))';
        }
    };

    const getConnectionOpacity = (connection: Connection) => {
        if (!hoveredNode && !selectedNode) {
            // Default visibility based on strength
            return connection.strength === 'strong'
                ? 0.5
                : connection.strength === 'medium'
                  ? 0.35
                  : 0.25;
        }
        const activeNode = selectedNode || hoveredNode;
        if (connection.from === activeNode || connection.to === activeNode) {
            return connection.strength === 'strong'
                ? 0.9
                : connection.strength === 'medium'
                  ? 0.7
                  : 0.5;
        }
        return 0.1;
    };

    const getConnectionStyle = (
        relationshipType: RelationshipType,
        strength: string,
    ) => {
        const width =
            strength === 'strong' ? 0.5 : strength === 'medium' ? 0.35 : 0.2;

        switch (relationshipType) {
            case 'direkt':
                return { strokeDasharray: '0', strokeWidth: width };
            case 'beratend':
                return { strokeDasharray: '2,2', strokeWidth: width };
            case 'rechtlich':
                return { strokeDasharray: '4,2', strokeWidth: width };
            case 'fördernd':
                return { strokeDasharray: '1,3', strokeWidth: width };
            case 'betreuend':
                return { strokeDasharray: '0', strokeWidth: width };
            default:
                return { strokeDasharray: '0', strokeWidth: width };
        }
    };

    const getNodeRadius = (node: Node) => {
        if (node.id === 'kind') return 5; // Larger center node
        return node.type === 'core' ? 3.5 : node.type === 'system' ? 2.8 : 2.2;
    };

    const activeNode = nodes.find(
        (n) => n.id === (selectedNode || hoveredNode),
    );

    return (
        <div className="relative w-full h-full bg-card/30 rounded-lg border border-border overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                style={{ minHeight: '300px' }}
            >
                <defs>
                    {/* Glow filters for different node types */}
                    <filter
                        id="glow-child"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                    >
                        <feGaussianBlur
                            stdDeviation="0.5"
                            result="coloredBlur"
                        />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Connection lines - rendered before nodes so they appear behind */}
                <g className="connections">
                    {connections.map((conn, idx) => {
                        const fromNode = nodes.find((n) => n.id === conn.from);
                        const toNode = nodes.find((n) => n.id === conn.to);
                        if (!fromNode || !toNode) return null;

                        const style = getConnectionStyle(
                            conn.relationshipType,
                            conn.strength,
                        );
                        const opacity = getConnectionOpacity(conn);

                        return (
                            <line
                                key={`line-${conn.from}-${conn.to}-${idx}`}
                                x1={fromNode.x}
                                y1={fromNode.y}
                                x2={toNode.x}
                                y2={toNode.y}
                                stroke="rgba(128, 128, 128, 0.8)"
                                strokeDasharray={style.strokeDasharray}
                                strokeWidth={style.strokeWidth}
                                style={{ opacity }}
                            />
                        );
                    })}
                </g>

                {/* Nodes */}
                {nodes.map((node, idx) => {
                    const isHovered = hoveredNode === node.id;
                    const isSelected = selectedNode === node.id;
                    const isHighlighted =
                        (!hoveredNode && !selectedNode) ||
                        isHovered ||
                        isSelected;
                    const radius = getNodeRadius(node);
                    const isCenter = node.id === 'kind';

                    return (
                        <g key={node.id}>
                            {/* Glow effect for hovered/selected */}
                            {(isHovered || isSelected) && (
                                <motion.circle
                                    cx={node.x}
                                    cy={node.y}
                                    r={radius * 1.5}
                                    fill={getNodeColor(
                                        node,
                                        isHovered,
                                        isSelected,
                                    )}
                                    opacity={0.2}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1.5 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}

                            {/* Main circle */}
                            <motion.circle
                                cx={node.x}
                                cy={node.y}
                                r={radius}
                                fill={getNodeColor(node, isHovered, isSelected)}
                                opacity={
                                    isHighlighted ? (isCenter ? 1 : 0.95) : 0.3
                                }
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                                onClick={() =>
                                    setSelectedNode(
                                        selectedNode === node.id
                                            ? null
                                            : node.id,
                                    )
                                }
                                style={{ cursor: 'pointer' }}
                                filter={
                                    isCenter ? 'url(#glow-child)' : undefined
                                }
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    delay: idx * 0.04,
                                    duration: 0.5,
                                    type: 'spring',
                                }}
                                whileHover={{ scale: 1.2 }}
                            />

                            {/* Icon in circle - using foreignObject for HTML rendering */}
                            <foreignObject
                                x={node.x - radius * 0.6}
                                y={node.y - radius * 0.6}
                                width={radius * 1.2}
                                height={radius * 1.2}
                                style={{ pointerEvents: 'none' }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        height: '100%',
                                        color: 'white',
                                        opacity: isHighlighted ? 1 : 0.3,
                                    }}
                                >
                                    <IconComponent
                                        icon={node.icon}
                                        className="w-full h-full"
                                    />
                                </div>
                            </foreignObject>

                            {/* Label */}
                            <motion.text
                                x={node.x}
                                y={node.y + radius + 3.5}
                                textAnchor="middle"
                                fontSize={isCenter ? '3' : '2.2'}
                                fontWeight={isCenter ? 'bold' : 'normal'}
                                fill="hsl(var(--foreground))"
                                opacity={isHighlighted ? 0.95 : 0.4}
                                style={{
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                }}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: isHighlighted ? 0.95 : 0.4,
                                }}
                                transition={{ delay: idx * 0.04 + 0.3 }}
                            >
                                {node.label}
                            </motion.text>
                        </g>
                    );
                })}
            </svg>

            {/* Info panel with detailed information */}
            <AnimatePresence>
                {activeNode && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-4 left-4 right-4 bg-popover border border-border rounded-lg p-5 shadow-2xl max-w-2xl mx-auto"
                    >
                        <div className="space-y-3">
                            {/* Header */}
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: getNodeColor(
                                            activeNode,
                                            false,
                                            false,
                                        ),
                                    }}
                                >
                                    <IconComponent
                                        icon={activeNode.icon}
                                        className="w-5 h-5 text-white"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-lg text-foreground">
                                            {activeNode.label}
                                        </h4>
                                        <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground whitespace-nowrap">
                                            {activeNode.id === 'kind'
                                                ? 'Zentrum'
                                                : activeNode.type === 'core'
                                                  ? 'Kernkontext'
                                                  : activeNode.type === 'system'
                                                    ? 'Systemkontext'
                                                    : 'Extern'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground italic">
                                        {activeNode.description}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <p className="text-sm text-foreground leading-relaxed">
                                {activeNode.details}
                            </p>

                            {/* Source */}
                            {activeNode.source && (
                                <div className="pt-3 border-t border-border">
                                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                                        <span className="font-medium">
                                            Quelle:
                                        </span>
                                        {activeNode.sourceUrl ? (
                                            <a
                                                href={activeNode.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-chart-1 hover:text-chart-2 underline inline-flex items-center gap-1 transition-colors"
                                            >
                                                {activeNode.source}
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        ) : (
                                            <span>{activeNode.source}</span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Enhanced Legend */}
            <div className="absolute top-4 right-4 bg-popover/95 backdrop-blur border border-border rounded-lg p-4 text-xs space-y-3 max-w-[200px]">
                {/* Stakeholder Types */}
                <div>
                    <div className="font-semibold text-foreground mb-2">
                        Stakeholder-Ebenen
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                            <div
                                className="w-4 h-4 rounded-full flex items-center justify-center"
                                style={{
                                    backgroundColor: 'hsl(var(--chart-5))',
                                }}
                            >
                                <Baby className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span className="text-muted-foreground">
                                Zentrum
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="w-3.5 h-3.5 rounded-full"
                                style={{
                                    backgroundColor: 'hsl(var(--chart-1))',
                                }}
                            />
                            <span className="text-muted-foreground">
                                Kernkontext
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                    backgroundColor: 'hsl(var(--chart-3))',
                                }}
                            />
                            <span className="text-muted-foreground">
                                Systemkontext
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="w-2.5 h-2.5 rounded-full"
                                style={{
                                    backgroundColor: 'hsl(var(--chart-4))',
                                }}
                            />
                            <span className="text-muted-foreground">
                                Extern
                            </span>
                        </div>
                    </div>
                </div>

                {/* Relationship Types */}
                <div className="pt-3 border-t border-border">
                    <div className="font-semibold text-foreground mb-2">
                        Beziehungstypen
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                            <svg
                                width="20"
                                height="2"
                                className="flex-shrink-0"
                            >
                                <line
                                    x1="0"
                                    y1="1"
                                    x2="20"
                                    y2="1"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span className="text-muted-foreground">
                                Direkt
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                width="20"
                                height="2"
                                className="flex-shrink-0"
                            >
                                <line
                                    x1="0"
                                    y1="1"
                                    x2="20"
                                    y2="1"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="2,2"
                                />
                            </svg>
                            <span className="text-muted-foreground">
                                Beratend
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                width="20"
                                height="2"
                                className="flex-shrink-0"
                            >
                                <line
                                    x1="0"
                                    y1="1"
                                    x2="20"
                                    y2="1"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="4,2"
                                />
                            </svg>
                            <span className="text-muted-foreground">
                                Rechtlich
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                width="20"
                                height="2"
                                className="flex-shrink-0"
                            >
                                <line
                                    x1="0"
                                    y1="1"
                                    x2="20"
                                    y2="1"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="1,3"
                                />
                            </svg>
                            <span className="text-muted-foreground">
                                Fördernd
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
