import React from 'react'
import AreaChartGraph from '../graphs/AreaChartGraph'

import Spinner from '../shared/Spinner'
import { useSocket } from '../hooks/useSocket'
import { isTemperature } from '../types/types'

import classes from './shared.module.css'

const CpuTemp: React.FC = () => {

    const { data, isLoading } = useSocket<isTemperature>("cpuTemp")

    return (
        <div className={classes.parent}>
            <h1>CPU Temperature</h1>
            {isLoading && <Spinner />}
            {!isLoading && <AreaChartGraph data={data} dataLabel='CPU Temperature' dataX='temp' />}
        </div>
    )
}

export default CpuTemp