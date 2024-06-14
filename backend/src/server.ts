import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import router from './routes/routes'
import { connectToSocketServer } from './socket/socket';

// load the .env file
dotenv.config();

const app = express();

// setting cors
app.use(cors());

// setting routes
app.use('/API', router)

// TEST ROUTE
app.get('/test', (req: Request, res: Response) => {
    res.json('Hello World!');
});

// setting PORT number
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 4000;

// create HTTP server
const httpServer = createServer(app);

// connect sockets
connectToSocketServer(httpServer)

// start the http server
httpServer.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
}).on("error", (error: Error) => {
    throw new Error(error.message);
});
