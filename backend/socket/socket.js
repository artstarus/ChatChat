import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:8000"],
        methods: ["GET", "POST"]
    }
});


export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};


const userSocketMap = {}; // {userId: socketId}

io.on('connection', (socket) => {
    console.log("A user has connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }

    // used to send events to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // used to listen to events. can be used on client and server side.
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export {app, io, server};