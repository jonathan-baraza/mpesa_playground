import { Request, Response, NextFunction } from "express";
import axios from "axios";

export const getAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    throw new Error("This is a made up error");
    res.status(200).json({ message: "Getting the access token" });
  } catch (error) {
    next(error);
  }
};
