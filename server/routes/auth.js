import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

// routes to ./auth/login, not just login
router.post("/login", login);

export default router;