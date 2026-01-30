import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Users, FileText } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: 'trend' | 'alert' | 'users' | 'files';
  color?: string;
  delay?: number;
  source?: string;
  context?: string;
  region?: string;
}

export function StatCard({
  value,
  label,
  change,
  trend = 'neutral',
  icon = 'trend',
  color = 'bg-primary',
  delay = 0,
  source,
  context,
  region,
}: StatCardProps) {
  const IconComponent = {
    trend: TrendingUp,
    alert: AlertCircle,
    users: Users,
    files: FileText,
  }[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative bg-card border border-border rounded-lg p-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-10 rounded-full blur-2xl`} />
      
      <div className="relative space-y-3">
        {/* Icon */}
        <div className={`inline-flex p-2 ${color} text-white rounded-lg`}>
          <IconComponent className="w-5 h-5" />
        </div>

        {/* Context/Region badge */}
        {(context || region) && (
          <div className="text-xs font-medium text-muted-foreground">
            {region && <span className="bg-muted px-2 py-1 rounded">{region}</span>}
            {context && !region && <span>{context}</span>}
          </div>
        )}

        {/* Value */}
        <div className="space-y-1">
          <motion.div 
            className="text-4xl font-bold text-foreground"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: 'spring', stiffness: 200 }}
          >
            {value}
          </motion.div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>

        {/* Change indicator */}
        {change && (
          <div className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded ${
            trend === 'up' ? 'bg-chart-1/10 text-chart-1' :
            trend === 'down' ? 'bg-destructive/10 text-destructive' :
            'bg-muted text-muted-foreground'
          }`}>
            {trend === 'up' && '↑'}
            {trend === 'down' && '↓'}
            {change}
          </div>
        )}

        {/* Source citation */}
        {source && (
          <div className="pt-3 mt-3 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Quelle:</strong> {source}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface BarChartCardProps {
  data: { label: string; value: number; color: string }[];
  title: string;
  delay?: number;
  height?: number;
}

export function BarChartCard({ data, title, delay = 0, height = 300 }: BarChartCardProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-card border border-border rounded-lg p-6"
    >
      <h3 className="text-lg font-bold text-foreground mb-6">{title}</h3>
      
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="var(--chart-1)" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

import { Line } from 'recharts';

interface TimelinePoint {
  label: string;
  value: number;
}

interface LineChartProps {
  data: TimelinePoint[];
  title: string;
  color?: string;
  delay?: number;
}

export function LineChart({ data, title, color = 'bg-chart-2', delay = 0 }: LineChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-card border border-border rounded-lg p-6"
    >
      <h3 className="text-lg font-bold text-foreground mb-6">{title}</h3>
      
      <div className="relative h-48">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-muted-foreground">
          <span>{maxValue.toLocaleString()}</span>
          <span>{((maxValue + minValue) / 2).toLocaleString()}</span>
          <span>{minValue.toLocaleString()}</span>
        </div>

        {/* Chart area */}
        <div className="ml-12 h-full flex items-end gap-2 pb-8 relative">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="absolute left-0 right-0 border-t border-border/30"
              style={{ bottom: `${(i / 4) * 100}%` }}
            />
          ))}

          {/* Line chart */}
          <svg className="absolute inset-0 w-full h-full" style={{ height: 'calc(100% - 2rem)' }}>
            <motion.path
              d={data.map((point, i) => {
                const x = (i / (data.length - 1)) * 100;
                const y = 100 - ((point.value - minValue) / range) * 100;
                return `${i === 0 ? 'M' : 'L'} ${x}% ${y}%`;
              }).join(' ')}
              fill="none"
              stroke={color.replace('bg-', 'hsl(var(--') + '))'}
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: delay + 0.3, duration: 1.5, ease: 'easeInOut' }}
            />
            
            {/* Data points */}
            {data.map((point, i) => {
              const x = (i / (data.length - 1)) * 100;
              const y = 100 - ((point.value - minValue) / range) * 100;
              return (
                <motion.circle
                  key={i}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="4"
                  fill={color.replace('bg-', 'hsl(var(--') + '))'}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: delay + 0.3 + i * 0.1, duration: 0.3 }}
                />
              );
            })}
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
            {data.map((point, i) => (
              <span key={i}>{point.label}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}