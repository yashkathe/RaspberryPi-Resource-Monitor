import os from 'os'
import si from 'systeminformation'
import { getGpuTemperature, getCpuTemperature } from 'raspberrypi-sys-info';

import { isCpuUtil, isRamUtil, isError, isTemp } from '../types/types'

let limit: number = 10

let idx: number = 0

let RAM: isRamUtil[] = []
let SWAP: isRamUtil[] = []
let GPU_TEMP: isTemp[] = []
let CPU_TEMP: isTemp[] = []

// CALCULATING RAM UTILISATION
export const calculateRamUtil = (): isRamUtil[] => {

    idx += 1

    const totalMemory: number = os.totalmem()
    const freeMemory: number = os.freemem()

    let ramUtil: number = totalMemory - freeMemory

    // convert to MB
    ramUtil = +(ramUtil / (1024 * 1024)).toFixed(2)

    if (RAM.length >= limit) RAM.shift()
    RAM.push({ name: `${idx} sec`, x: ramUtil })

    return RAM
}

// CALCULATE SWAP UTILISATION
export const calculateSwapUtil = async () => {

    idx += 1

    try {

        const swapData = await si.mem();

        let freeSwap = swapData.swapfree;

        if (SWAP.length >= limit) SWAP.shift()
        SWAP.push({ name: `${idx} sec`, x: freeSwap })

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
            load: +cpu.load
        }));

        return coresUsage

    } catch (error: any) {
        return { message: error }
    }

}

// CALCULATE GPU TEMPERATURE
export const getGpuTemp = async () => {

    idx += 1

    try {

        const gpuTemp = await getGpuTemperature();

        if (GPU_TEMP.length >= limit) GPU_TEMP.shift()
        GPU_TEMP.push({ name: `${idx} sec`, temp: +gpuTemp })

        return GPU_TEMP

    } catch (error: any) {

        return { message: error }

    }

}

// CALCULATE CPU TEMPERATURE
export const getCpuTemp = async () => {

    idx += 1

    try {

        const cpuTemp = await getCpuTemperature();

        if (CPU_TEMP.length >= limit) CPU_TEMP.shift()
        CPU_TEMP.push({ name: `${idx} sec`, temp: +cpuTemp })

        return CPU_TEMP

    } catch (error: any) {

        return { message: error }

    }

}
