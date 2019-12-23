import express from "express";

import {loginUser, registerUser, UpdateUserOrders} from "../controllers/userController.js"

const router = express.Router();

router.post("/user/authorisation/login", loginUser);
router.post("/user/authorisation/register", registerUser);
router.post("/api/user/updateOrders", UpdateUserOrders);

export default router;
