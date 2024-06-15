import React from 'react';
import { AreaChartProps } from '../types/types';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend, ResponsiveContainer } from 'recharts'

import Wrapper from '../shared/Wrapper';

// COMPONENT
const AreaChartGraph: React.FC<AreaChartProps> = ({ data, dataLabel, dataX }) => {
    return (
        <Wrapper>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} style={{ backgroundColor: '#2b2b3d' }} margin={{ top: 25, right: 25, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgba(76, 175, 80, 1)" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="rgba(76, 175, 80, 1)" stopOpacity={0.7} />
                        </linearGradient>
                    </defs>
                    <XAxis stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Legend />
                    <CartesianGrid strokeDasharray="2 2" stroke="rgba(204, 204, 204, 0.5)" />
                    <Tooltip />
                    <Area name={dataLabel} type="monotone" dataKey={dataX} stroke="#4CAF50" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}

export default AreaChartGraph