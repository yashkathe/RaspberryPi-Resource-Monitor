import React, {ReactNode} from 'react'

import classes from './Wrapper.module.css'

interface WrapperProps {
    children: ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
  return (
    <div className={classes.parent}>
        {children}
    </div>
  )
}

export default Wrapper