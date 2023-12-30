import express, { Router } from "express";
import { getAnimals, addAnimal } from "../../controllers/animals/index";

const router: Router = express.Router();

router.get("/", getAnimals);
router.post("/", addAnimal);

export default router;
