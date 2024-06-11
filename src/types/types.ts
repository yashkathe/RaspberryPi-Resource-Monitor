export interface AreaChartProps {
    data: { name: string, x: number }[];
    dataLabel : string
}

export interface BarChartProps {
    data: {core: number, load: number}[];
    dataLabel: string
}

export interface isRamUtil {
    name: string;
    x: number;
}

export interface isCpuUtil {
    core: number;
    load: number;
}