import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { encodedToBase64 } from "../../utils";
import dotenv from "dotenv";
dotenv.config();

const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
const AUTHORIZATION_ENDPOINT = process.env.AUTHORIZATION_ENDPOINT || " ";

export const getAccessToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const stringToEncode = `${CONSUMER_KEY}:${CONSUMER_SECRET}`;
    const encodedString = await encodedToBase64(stringToEncode);

    const response = await axios({
      method: "GET",
      url: AUTHORIZATION_ENDPOINT,
      headers: {
        Authorization: `Basic ${encodedString}`,
      },
    });

    res.status(200).json({ message: "Success true", ...response.data });
  } catch (error) {
    next(error);
  }
};

export const stkPush = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios({
      method: "GET",
      url: AUTHORIZATION_ENDPOINT,
      headers: {
        //  Authorization: `Basic ${encodedString}`,
      },
    });

    res.status(200).json({ message: "Sending cash..." });
  } catch (error) {
    next(error);
  }
};
