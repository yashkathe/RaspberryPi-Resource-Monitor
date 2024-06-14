import React from 'react'
import { BarChartProps } from '../types/types'
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

import Wrapper from '../shared/Wrapper';

const BarChartGraph: React.FC<BarChartProps> = ({ data, dataLabel, yLimit, yTicks }) => {
    return (
        <Wrapper>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} style={{ backgroundColor: '#2b2b3d' }} margin={{ top: 25, right: 25, left: 0, bottom: 0 }}> 
                    <CartesianGrid strokeDasharray="2 2" stroke="rgba(204, 204, 204, 0.5)"/>
                    <XAxis dataKey="core" stroke="#ccc"/>
                    <YAxis stroke="#ccc" domain={yLimit} tickCount={yTicks}/>
                    <Tooltip />
                    <Legend />
                    <Bar name={dataLabel} dataKey="load" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}

export default BarChartGraph