import { NextFunction, Request, Response } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const token = authorization?.split("Bearer ")[1];
  try {
    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "Unauthorization" });
    }
    const decoded = jwt.verify(token, "SECRET_KEY");
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(401).json({ status: false, message: "Token expired" });
    }
  }
};

export default loginMiddleware;
