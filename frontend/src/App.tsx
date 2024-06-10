import React from 'react'
import RamUtil from './sockets/RamUtil'

import classes from './App.module.css'

const App: React.FC = () => {
    return (
        <div className={classes.parent}>
                <RamUtil />
        </div>
    )
}

export default App