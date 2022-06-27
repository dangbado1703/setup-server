import { Request, Response } from "express";
import auth, { IFormInfo } from "../models/auth.model";

const getProfile = async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    if (username) {
      const info = await auth.findOne<IFormInfo | null>({ username });
      if (info) {
        return res.status(200).json({
          message: "Lấy thông tin thành công",
          success: true,
          data: info,
        });
      } else {
        return res.status(400).json({
          message: "Không tồn tại user này",
          success: false,
          data: info,
        });
      }
    } else {
      return res.status(400).json({
        message: "Không tồn tại user này",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server", success: false });
  }
};

export default getProfile;
