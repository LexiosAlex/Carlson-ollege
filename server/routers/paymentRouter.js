import express from "express";

import {chargeCard} from "../controllers/paymentController.js";
const router = express.Router();

router.post("/api/checkout", chargeCard);

export default router;
