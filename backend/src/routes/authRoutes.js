import express from "express";
import { signupUser } from "../controllers/authController.js";

const router = express.Router();

// Signup route
router.post("/signup", signupUser);

export default router;
