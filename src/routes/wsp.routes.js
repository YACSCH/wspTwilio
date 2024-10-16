import express from "express";
const router = express.Router();

import  sendWspTwilio from "../controllers/wsp.controller.js";

router.post('/twilio', sendWspTwilio)

export default router;