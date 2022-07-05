import express from "express";
import controllers from "../controllers";
const profileRouter = express.Router();
profileRouter.post("/profile", controllers.getProfile);
profileRouter.post("/profile/update", controllers.updateProfile);
export default profileRouter;
