import React from 'react'
import RamUtil from './sockets/RamUtil'
import CpuUtil from './sockets/CpuUtil'

import classes from './App.module.css'

const App: React.FC = () => {
    return (
        <div className={classes.parent}>
                <RamUtil />
                <CpuUtil />
        </div>
    )
}

export default App