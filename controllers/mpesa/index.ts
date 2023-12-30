import { Request, Response, NextFunction } from "express";

export const getAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "Getting the access token" });
};
