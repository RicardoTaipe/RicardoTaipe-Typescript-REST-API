import { Handler } from "express";

export const special: Handler = (req, res) => {
  return res.json({ msg: `Hey ${req.body.email}!` });
};
