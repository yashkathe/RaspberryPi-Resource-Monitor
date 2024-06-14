import { Server as socketServer } from 'socket.io';
import { calculateRamUtil, calculateCpuUtil, getGpuTemp, getCpuTemp } from '../helpers/helpers';

export const connectToSocketServer = (httpServer: any) => {

    // load the socket.io server
    const server = new socketServer(httpServer, {
        cors: {
            origin: '*'
        }
    });

    // start listening on socket.io
    server.on("connection", (socket) => {
        console.log("socket connected");

        // ______________MAIN FUNCTIONS______________

        // RAM
        const ramInterval = setInterval(() => {
            try {
                const ramUsage = calculateRamUtil();
                socket.emit('ramUsage', ramUsage);
            } catch (error) {
                console.error('Error calculating RAM usage:', error);
            }
        }, 2500);

        // CPU
        const cpuInterval = setInterval(async () => {
            try {
                const cpuUsage = await calculateCpuUtil()
                socket.emit("cpuUsage", cpuUsage)
            } catch (error) {
                console.error('Error calculating CPU usage:', error);
            }
        }, 2500)

        // GPU TEMP
        const gpuTemp = setInterval(async () => {
            try {
                const gpuTemp = await getGpuTemp()
                socket.emit("gpuTemp", gpuTemp)
            } catch (error) {
                console.log('Error getting GPU temperature', error)
            }
        }, 2500)

        // CPU TEMP
        const cpuTemp = setInterval(async () => {
            try {
                const cpuTemp = await getCpuTemp()
                socket.emit("cpuTemp", cpuTemp)
            } catch (error) {
                console.log('Error getting GPU temperature', error)
            }
        }, 2500)

        // ______________CLEAN UP______________

        // CLEAR INTERVALS ON DISCONNECTS
        socket.on("disconnect", () => {
            clearInterval(ramInterval);
            clearInterval(cpuInterval);
            clearInterval(gpuTemp)
            clearInterval(cpuTemp)
            console.log("socket disconnected");
        });

        // Handle errors
        socket.on('error', (error) => {
            console.error('Socket error:', error);
        });
    });

}
