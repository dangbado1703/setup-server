import express from "express";
import authRouter from "./auth.routes";
import profileRouter from "./profile.routes";

const apiRoute = {
  authRouter,
  profileRouter,
};

export default apiRoute;
