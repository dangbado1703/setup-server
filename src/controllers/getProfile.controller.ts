import { Request, Response } from "express";
import auth, { IFormInfo } from "../models/auth.model";

const getProfile = async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    if (username) {
      const info = await auth.findOne<IFormInfo | null>({ username });
      return res.status(200).json({
        message: "Lấy thông tin thành công",
        success: true,
        data: {
          username: info?.username,
          firstName: info?.first_name,
          lastName: info?.last_name,
          gen: info?.gen,
          avatar: info?.avatar,
          coverImage: info?.coverImage,
          birthDay: info?.birthday,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server", success: false });
  }
};

export default getProfile;
