import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json()); //to parse the incoming request with JSON payload (from req.body)
app.use(cookieParser()); //to parse the incoming cookies from req.cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// pp.get("/", (req, res) => {
     //root route http://localhost:3000/
//    res.send("Hello World.");
// });


app.listen(PORT, () => {
    connectToMongoDB();
    console.log('Server Running on port $(PORT)')
});