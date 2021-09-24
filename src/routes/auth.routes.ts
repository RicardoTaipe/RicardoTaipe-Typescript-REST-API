import { Router } from "express";
import { signIn, signUp } from "../controllers/user.controller";

const router = Router();

router.post("/sigin", signIn);
router.post("/sigup", signUp);

export default router;
