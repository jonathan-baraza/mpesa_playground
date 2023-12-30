import express, { Router } from "express";
import { getAccessToken } from "../../controllers/mpesa";
const router: Router = express.Router();

router.get("/", getAccessToken);

export default router;
