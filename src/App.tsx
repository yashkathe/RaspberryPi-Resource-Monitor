import React from 'react'
import RamUtil from './sockets/RamUtil'
import CpuUtil from './sockets/CpuUtil'
import CpuTemp from './sockets/CpuTemp'
import GpuTemp from './sockets/GpuTemp'

import classes from './App.module.css'

const App: React.FC = () => {
    return (
        <div className={classes.parent}>
                <RamUtil />
                <CpuUtil />
                <GpuTemp/>
                <CpuTemp/>
        </div>
    )
}

export default App