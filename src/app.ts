import express, { Express, NextFunction, Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import apiRoute from "./routes/index";
import connectDB from "./config/db.config";
import loginMiddleware from "./middleware/loggin.middleware";
dotenv.config();
connectDB();

const app: Express = express();
const port = process.env.PORT || 3333;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", apiRoute.authRouter);
app.use("*", loginMiddleware);
app.use("/api", apiRoute.profileRouter);

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
