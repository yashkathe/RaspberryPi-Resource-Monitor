import os from 'os';
import si from 'systeminformation';

import { Request, Response } from 'express';
import { isRamStat, isSwapStat } from '../types/types';

export const getRAMStats = async (req: Request, res: Response): Promise<Response<isRamStat & isSwapStat>> => {

    // Get RAM stats
    let totalRam: number = os.totalmem();
    let minRam: number = 0;
    let freeRam: number = os.freemem();

    totalRam = +(totalRam / (1024 * 1024)).toFixed(2);
    freeRam = +(freeRam / (1024 * 1024)).toFixed(2);

    // Get SWAP memory stats
    const swapData = await si.mem();
    let totalSwap = swapData.swaptotal;
    let minSwap = 0;
    let freeSwap = swapData.swapfree;

    totalSwap = +(totalSwap / (1024 * 1024)).toFixed(2);
    freeSwap = +(freeSwap / (1024 * 1024)).toFixed(2);

    // all the data is in MegaBytes MB
    return res.json({
        totalRam,
        minRam,
        freeRam,
        totalSwap,
        minSwap,
        freeSwap
    });
};
