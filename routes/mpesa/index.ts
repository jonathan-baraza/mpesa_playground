import express, { Router } from "express";
import {
  getAccessToken,
  mpesaCallback,
  stkPush,
} from "../../controllers/mpesa";
const router: Router = express.Router();

router.get("/token", getAccessToken);
router.post("/stk", stkPush);
router.post("/stk-callback", mpesaCallback);

export default router;
