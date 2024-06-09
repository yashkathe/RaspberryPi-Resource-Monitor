import os from 'os'

import { isRamUtil } from '../types/types'

let idx: number = 0

let RAM: isRamUtil[] = []

// CALCULATING RAM UTILISATION
export const calculateRamUtil = (): isRamUtil[] => {

    idx += 1

    const totalMemory: number = os.totalmem()
    const freeMemory: number = os.freemem()

    let ramUtil: number = totalMemory - freeMemory

    // convert to MB
    ramUtil = +(ramUtil / (1024 * 1024)).toFixed(2)

    if (RAM.length >= 20) {

        RAM.shift()
        RAM.push({ name: `${idx} sec`, x: ramUtil })

    } else {
        RAM.push({ name: `${idx} sec`, x: ramUtil })
    }

    return RAM
}

