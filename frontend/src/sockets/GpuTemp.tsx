import React from 'react'
import AreaChartGraph from '../graphs/AreaChartGraph'

import Spinner from '../shared/Spinner'
import { useSocket } from '../hooks/useSocket'
import { isTemperature } from '../types/types'

import classes from './shared.module.css'

const GpuTemp: React.FC = () => {

    const { data, isLoading } = useSocket<isTemperature>("gpuTemp")

    return (
        <div className={classes.parent}>
            <h1>GPU Temperature</h1>
            {isLoading && <Spinner />}
            {!isLoading && <AreaChartGraph data={data} dataLabel='GPU Temperature' dataX='temp' />}
        </div>
    )
}

export default GpuTemp