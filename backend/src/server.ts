import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { Server as socketServer } from 'socket.io'
import { createServer } from 'http'

// load the .env file
dotenv.config()

const app = express()

// setting cors
app.use(cors())

// setting PORT number
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 4000;

// create HTTP server
const httpServer = createServer(app)

// load the socket.io server
const server = new socketServer(httpServer, {
    cors: {
        origin: '*'
    }
})

// start listening on socket.io
server.on("connection", (socket) => {
    console.log("socket connected")

    socket.on("disconnect", () => {
        console.log("socket disconnected")
    })
})

// start the http server
httpServer.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
}).on("error", (error: Error) => {
    throw new Error(error.message)
})