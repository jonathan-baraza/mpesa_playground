import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
import testRoutes from "./routes/animals/index";
import mpesaRoutes from "./routes/mpesa/index";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use("/animals", testRoutes);
app.use("/mpesa", mpesaRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to my mpesa app" });
});

app.listen(4000, () => {
  console.log("Server is listening to port " + PORT);
});
