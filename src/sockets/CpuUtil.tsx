import React from 'react'
import BarChartGraph from '../graphs/BarChartGraph';

import Spinner from '../shared/Spinner';
import { useSocket } from '../hooks/useSocket';
import { isCpuUtil } from '../types/types';

import classes from './shared.module.css'

const CpuUtil: React.FC = () => {

    const {data, isLoading} = useSocket<isCpuUtil>("cpuUsage")

    return (
        <div className={classes.parent}>
            <h1>CPU Utilization</h1>
            {isLoading && <Spinner />}
            {!isLoading && <BarChartGraph
                data={data}
                dataLabel="Processor Usage"
                yLimit={[0, 100]}
                yTicks={5}
            />}
        </div>
    )
}

export default CpuUtil