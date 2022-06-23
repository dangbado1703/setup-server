import express from "express";
import controllers from "../controllers";
const profileRouter = express.Router();
profileRouter.post("/profile", controllers.getProfile);
export default profileRouter;
