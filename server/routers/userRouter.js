import express from "express";

import {loginUser, registerUser} from "../controllers/userController.js"

const router = express.Router();

router.post("/user/authorisation/login", loginUser);
router.post("/user/authorisation/register", registerUser);

export default router;
