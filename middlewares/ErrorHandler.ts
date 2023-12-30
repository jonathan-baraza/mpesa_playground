import { Request, Response, NextFunction } from "express";
interface customError extends Error{
    statusCode:number
}
const ErrorHandler = (
  err: customError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Middleware Error Hadnling");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
  });
};

export default ErrorHandler;
