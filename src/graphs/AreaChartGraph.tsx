import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, LineChart, Legend, Line, ResponsiveContainer } from 'recharts'

import Wrapper from '../shared/Wrapper';

// INTERFACE
interface AreaChartProps {
    data: { name: string, x: number }[];
    dataLabel : string
}

// COMPONENT
const AreaChartGraph: React.FC<AreaChartProps> = ({ data, dataLabel}) => {
    return (
        <Wrapper>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} style={{ backgroundColor: '#2b2b3d' }} margin={{ top: 25, right: 25, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgba(76, 175, 80, 1)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="rgba(76, 175, 80, 1)" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <XAxis stroke="#ccc" />
                    <YAxis stroke="#ccc"/>
                    <Legend />
                    <CartesianGrid strokeDasharray="2 2" stroke="rgba(204, 204, 204, 0.5)" />
                    <Tooltip />
                    <Area name={dataLabel} type="monotone" dataKey="x" stroke="#4CAF50" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>

        </Wrapper>
    )
}

export default AreaChartGraph