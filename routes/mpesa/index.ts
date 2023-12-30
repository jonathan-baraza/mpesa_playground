import express, { Router } from "express";
import { getAccessToken, stkPush } from "../../controllers/mpesa";
const router: Router = express.Router();

router.get("/token", getAccessToken);
router.post("/stk", stkPush);


export default router;
