import { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

const backendServer: string = import.meta.env.VITE_BACKEND_SERVER as string

export const useSocket = <T>(eventName: string, logData: boolean = false, socketUrl: string = backendServer) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const socket = socketIOClient(socketUrl);

        // connect to a socket 
        socket.on(eventName, (data: T[]) => {
            setData(data);
            if (logData) console.log(data)
            setIsLoading(false);
        });

        // handle socket disconnects
        socket.on("disconnect", () => {
            setIsLoading(true);
        });

        // prevent memory leaks
        return () => {
            setIsLoading(true);
            socket.disconnect();
        };
    }, [socketUrl, eventName]);

    return { data, isLoading };
};