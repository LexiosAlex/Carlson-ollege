import express from "express";
import { fetchRooms } from "../controllers/roomsController.js";

const router = express.Router();
router.get("/api/rooms", fetchRooms);

export default router;
