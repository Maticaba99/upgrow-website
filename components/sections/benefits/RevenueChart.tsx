"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { colors } from '@/lib/colors';

const chartData = [
  { month: 'Jan', value: 2000 },
  { month: 'Feb', value: 3500 },
  { month: 'Mar', value: 4500 },
  { month: 'Apr', value: 6000 },
  { month: 'May', value: 7500 },
  { month: 'Jun', value: 10000 },
];

const defaultAxisProps = {
  stroke: colors.text.secondary,
  tick: { fill: colors.text.secondary },
  tickLine: { stroke: colors.text.secondary },
};

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke={colors.accent.muted} 
          vertical={false}
        />
        <XAxis 
          dataKey="month"
          axisLine={false}
          {...defaultAxisProps}
        />
        <YAxis
          axisLine={false}
          {...defaultAxisProps}
          tickFormatter={(value) => `$${value/1000}k`}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke={colors.accent.primary}
          strokeWidth={2}
          dot={{ 
            fill: colors.accent.primary,
            r: 4,
            strokeWidth: 2,
            stroke: colors.accent.secondary
          }}
          activeDot={{
            r: 6,
            stroke: colors.accent.secondary,
            strokeWidth: 2
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}