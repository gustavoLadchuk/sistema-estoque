configDotenv()
import { configDotenv } from "dotenv";
import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = process.env.port || 5000

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Server Running.")
})

app.listen(port, () => {
    console.log(`Server running in port ${port}.`)
})

