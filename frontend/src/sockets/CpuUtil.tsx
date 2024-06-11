import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

import BarChartGraph from '../graphs/BarChartGraph';
import Spinner from '../shared/Spinner';
import { isCpuUtil } from '../types/types';

import classes from './shared.module.css'

const CpuUtil: React.FC = () => {

    const [data, setData] = useState<isCpuUtil[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // connect the socket
    useEffect(() => {

        const socket = socketIOClient("http://192.167.0.119:4001/");

        socket.on("cpuUsage", (data: isCpuUtil[]) => {
            setData(data);
            setIsLoading(false)
        });

        socket.on("disconnect", () => {
            setIsLoading(true)
        })

        // Clean up the socket connection when the component unmounts
        return () => {
            setIsLoading(true)
            socket.disconnect();
        };

    }, [])

    return (
        <div className={classes.parent}>
            <h1>CPU Utilization</h1>
            {isLoading && <Spinner />}
            {!isLoading && <BarChartGraph data={data} dataLabel="CPU Core Utilization"/>}
        </div>
    )
}

export default CpuUtil