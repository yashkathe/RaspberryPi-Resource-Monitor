import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Server as socketServer } from 'socket.io';
import { createServer } from 'http';
import { calculateRamUtil } from './helpers/helpers';

// load the .env file
dotenv.config();

const app = express();

// setting cors
app.use(cors());

// setting PORT number
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 4000;

// create HTTP server
const httpServer = createServer(app);

// load the socket.io server
const server = new socketServer(httpServer, {
    cors: {
        origin: '*'
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// start listening on socket.io
server.on("connection", (socket) => {
    console.log("socket connected");

    // RAM
    const ramInterval = setInterval(() => {
        try {
            const ramUsage = calculateRamUtil();
            socket.emit('ramUsage', ramUsage);
        } catch (error) {
            console.error('Error calculating RAM usage:', error);
        }
    }, 1000);

    // CLEAR INTERVALS ON DISCONNECTS
    socket.on("disconnect", () => {
        clearInterval(ramInterval);
        console.log("socket disconnected");
    });

    // Handle errors
    socket.on('error', (error) => {
        console.error('Socket error:', error);
    });
});

// start the http server
httpServer.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
}).on("error", (error: Error) => {
    throw new Error(error.message);
});
