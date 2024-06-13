import express from "express";
import cors from "cors";
import router from "./Routers/RoomRouter.js";


const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// app.use('/api', roomRouter);
app.use('/api',router)
app.get("/", (req, res) => {
    res.status(200).send("Welcome to home page");
});

app.listen(PORT, () => {
    console.log("App is running on port", PORT);
});
