import { Request, Response, NextFunction } from "express";

export const getAnimals = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Getting all animals!" });
};
export const addAnimal = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Adding an animal!" });
};
