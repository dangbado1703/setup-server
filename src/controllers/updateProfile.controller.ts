import { Request, Response } from "express";
import auth from "../models/auth.model";

const updateProfile = async (req: Request, res: Response) => {
  const { username } = req.body;
  if (!username) {
    return res
      .status(400)
      .json({ message: "Không có thông tin", success: false });
  }
  const user = await auth.findOne({ username });
  if (!user) {
    return res
      .status(400)
      .json({ message: "Không tồn tại user này", success: false });
  }

  

};
