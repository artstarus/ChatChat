import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json()); //to parse the incoming request with JSON payload (from req.body)
app.use("/api/auth", authRoutes);

// pp.get("/", (req, res) => {
     //root route http://localhost:3000/
//    res.send("Hello World.");
// });


app.listen(PORT, () => {
    connectToMongoDB();
    console.log('Server Running on port $(PORT)')
});