import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { exPiresTime } from "../config/constans";
import auth from "../models/auth.model";

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Vui lòng nhập tài khoản và mật khẩu" });
  }
  try {
    const user = await auth.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Sai tài khoản hoặc mật khẩu" });
    }
    // const passwordValid = await argon2.verify(user.password, password);
    if (user.password !== password) {
      return res
        .status(400)
        .json({ status: false, message: "Sai tài khoản hoặc mật khẩu" });
    }
    const token = jwt.sign({ userId: user._id }, "SECRET_KEY", {expiresIn: exPiresTime});
    return res.status(200).json({
      success: true,
      message: "Đăng nhập thành công",
      data: {
        username,
        password,
        token,
        first_name: user.first_name,
        last_name: user.last_name,
        gen: user.gen,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "500 Internal Server" });
  }
};

export default login;
