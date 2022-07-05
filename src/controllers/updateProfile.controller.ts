import { Request, Response } from "express";
import auth from "../models/auth.model";
import { IFormInfo } from "../typemodel/typeabout";

const updateProfile = async (req: Request, res: Response) => {
  const {
    username,
    birthday,
    gen,
    password,
    avatar,
    coverImage,
    company,
    position,
    description,
    schoolName,
    graduated,
    descriptionSchool,
    degree,
    degreeInput,
    province,
    from,
    married,
    phone,
  }: IFormInfo = req.body;
  if (!username) {
    return res
      .status(400)
      .json({ message: "Không tồn tại user này", success: false });
  }
  try {
    const user = await auth.findOne<IFormInfo | null>({ username });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Không có thông tin người này", success: false });
    }
    const updateOne = new auth({
      birthday,
      gen,
      password,
      avatar,
      coverImage,
      company,
      position,
      description,
      schoolName,
      graduated,
      descriptionSchool,
      degree,
      degreeInput,
      province,
      from,
      married,
      phone,
    });
    await auth.updateOne({ username }, updateOne);
    return res.status(200).json({ message: "Update thành công" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export default updateProfile;
