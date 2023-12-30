import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { encodedToBase64, getSTKPassword, getTimeStamp } from "../../utils";
import dotenv from "dotenv";
import { STKBodyType } from "../../types";

dotenv.config();

const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
const AUTHORIZATION_ENDPOINT = process.env.AUTHORIZATION_ENDPOINT || " ";
const STK_ENDPOINT = process.env.STK_ENDPOINT;
const PASS_KEY = process.env.PASS_KEY;
const BUSINESS_SHORTCODE = process.env.BUSINESS_SHORTCODE;

export const getAccessToken = async (next: NextFunction) => {
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

    return response.data.access_token;
  } catch (error) {
    next(error);
  }
};

export const stkPush = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = await getAccessToken(next);
  const timeStamp = await getTimeStamp();
  const STKPassword = await getSTKPassword({
    shortCode: BUSINESS_SHORTCODE!,
    passKey: PASS_KEY!,
    timeStamp: timeStamp,
  });
  try {
    const requestBody: STKBodyType = {
      BusinessShortCode: Number(BUSINESS_SHORTCODE),
      Password: STKPassword,
      Timestamp: timeStamp,
      TransactionType: process.env.TRANSACTION_TYPE!,
      Amount: 1,
      PartyA: 254704783187,
      PartyB: Number(BUSINESS_SHORTCODE),
      PhoneNumber: 254704783187,
      CallBackURL: process.env.CALLBACK_URL!,
      AccountReference: "PwC Diamonds",
      TransactionDesc: "Diamonds Cash PwC",
    };
    const response: any = await axios({
      method: "POST",
      url: STK_ENDPOINT,
      data: requestBody,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(response?.data);

    const MerchantRequestID = response?.data?.MerchantRequestID;
    const CheckoutRequestID = response?.data?.CheckoutRequestID;
    const ResponseDescription = response?.data?.ResponseDescription;
    const ResponseCode = response?.data?.ResponseCode;
    const CustomerMessage = response?.data?.CustomerMessage;

    if (!ResponseCode || ResponseCode !== "0") return next(Error("Not successful."))
      res.status(200).json({ Success: true, ...response.data });
  } catch (error) {
    next(error);
  }
};
