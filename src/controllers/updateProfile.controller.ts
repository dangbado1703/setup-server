import { Request, Response } from "express";
import about from "../models/about.model";
import auth from "../models/auth.model";

const updateProfile = async (req: Request, res: Response) => {
  const { username } = req.body;
  if (!username) {
    return res
      .status(400)
      .json({ message: "Không có thông tin", success: false });
  }
  try {
    const user = await auth.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Không tồn tại user này", success: false });
    } else {
      res.status(200).json({
        message: "Thành công",
      });
    }
    console.log(user._id);
    const aboutUser = await about.findOne();
  } catch (error) {}
};

export default updateProfile;
