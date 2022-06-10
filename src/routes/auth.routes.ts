import express from "express";
import controllers from "../controllers";
const authRouter = express.Router();
authRouter.post("/login", controllers.login);
authRouter.post("/register", controllers.register);
export default authRouter;
