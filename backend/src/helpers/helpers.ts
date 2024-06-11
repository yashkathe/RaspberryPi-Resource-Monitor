import os from 'os'
import si from 'systeminformation'

import { isCpuUtil, isRamUtil, isSwapUtil, isError } from '../types/types'

let limit: number = 10

let idx: number = 0

let RAM: isRamUtil[] = []
let SWAP: isSwapUtil[] = []
let CPU: isCpuUtil[] = []

// CALCULATING RAM UTILISATION
export const calculateRamUtil = (): isRamUtil[] => {

    idx += 1

    const totalMemory: number = os.totalmem()
    const freeMemory: number = os.freemem()

    let ramUtil: number = totalMemory - freeMemory

    // convert to MB
    ramUtil = +(ramUtil / (1024 * 1024)).toFixed(2)

    if (RAM.length >= limit) {

        RAM.shift()
        RAM.push({ name: `${idx} sec`, x: ramUtil })

    } else {
        RAM.push({ name: `${idx} sec`, x: ramUtil })
    }

    return RAM
}

// CALCULATE SWAP UTILISATION
export const calculateSwapUtil = async () => {

    idx += 1

    try {

        const swapData = await si.mem();

        let freeSwap = swapData.swapfree;

        if (SWAP.length >= limit) {

            SWAP.shift()
            SWAP.push({ name: `${idx} sec`, x: freeSwap })

        } else {
            SWAP.push({ name: `${idx} sec`, x: freeSwap })
        }

        return SWAP

    } catch (error: any) {

        return { message: error }

    }

}

// CALCULATE CPU UTILISATION FOR EACH CORE
export const calculateCpuUtil = async (): Promise<isCpuUtil[] | isError> => {

    const cpuInfo = os.cpus()
    const numCores = cpuInfo.length

    try {

        const load = await si.currentLoad()
        const coresUsage = load.cpus.map((cpu, index) => ({
            core: index,
            load: cpu.load
        }));

        return coresUsage

    } catch (error: any) {
        return { message: error }
    }

}