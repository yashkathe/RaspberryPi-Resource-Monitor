export interface AreaChartProps {
    data: { name: string, x: number | string }[];
    dataLabel : string
    dataX: string
}

export interface BarChartProps {
    data: {core: number, load: number}[];
    dataLabel: string,
    yTicks: number,
    yLimit: [number, number]
}

export interface isRamUtil {
    name: string;
    x: number;
}

export interface isCpuUtil {
    core: number;
    load: number;
}

export interface isTemperature {
    name: string;
    x: number;
}