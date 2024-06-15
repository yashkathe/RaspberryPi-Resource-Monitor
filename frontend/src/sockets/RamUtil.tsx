import React from 'react'
import AreaChartGraph from '../graphs/AreaChartGraph';

import Spinner from '../shared/Spinner';
import { useSocket } from '../hooks/useSocket';
import { isRamUtil } from '../types/types';

import classes from './shared.module.css'

// COMPONENT
const RamUtil: React.FC = () => {

    const { data, isLoading } = useSocket<isRamUtil>("ramUsage")

    return (
        <div className={classes.parent}>
            <h1>Ram Utilization</h1>
            {isLoading && <Spinner />}
            {!isLoading && <AreaChartGraph data={data} dataLabel='RAM utilisation' dataX='x'/>}
        </div>
    )
}

export default RamUtil