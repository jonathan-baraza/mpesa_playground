import express, { Router } from "express";

const router: Router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Mpesa server is working okay" });
});

export default router;
