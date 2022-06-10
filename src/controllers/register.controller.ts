import { Request, Response } from "express";
import auth from "../models/auth.model";
import argon2 from "argon2";

const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: true, message: "Vui lòng nhập đủ các trường" });
  }
  try {
    const user = await auth.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Tài khoản đã tồn tại" });
    }
    // const hashPassword = await argon2.hash(password);
    const newUser = new auth({
      username,
      password,
    });
    await newUser.save();
    return res.status(200).json({
      success: true,
      message: "Tạo tài khoản thành công",
      data: {
        username,
        password,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "500 Internal Server" });
  }
};

export default register;
