import React from 'react'

import classes from './Spinner.module.css'

const Spinner: React.FC = () => {
    return (
        <div className={classes.parent}>
            <span className={classes.loader}></span>
        </div>
    )
}

export default Spinner