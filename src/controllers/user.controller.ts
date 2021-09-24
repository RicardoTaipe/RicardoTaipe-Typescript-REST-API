import { Handler } from "express";
import User, { IUser } from "../models/user";
import jwt from "jsonwebtoken";
import config from "../config/config";

function createToken(user: IUser) {
  return jwt.sign({ id: user.id, email: user.email }, config.JWT_SECRET, {
    expiresIn: 86400,
  });
}

export const signUp: Handler = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ msg: "Please. Send your email and password" });
  }
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ msg: "User already exits" });
  }
  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
};

export const signIn: Handler = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ msg: "Please. Send your email and password" });
  }
  const registeredUser = await User.findOne({ email: req.body.email });
  if (!registeredUser) {
    return res.status(400).json({ msg: "User does not exist" });
  }
  const isMatch = await registeredUser.comparePassword(req.body.password);
  if (isMatch) {
    return res.status(200).json({ token: createToken(registeredUser) });
  }

  return res.status(400).json({
    msg: "The email or password are incorrect",
  });
};
