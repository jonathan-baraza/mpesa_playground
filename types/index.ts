import { Request } from "express";

export interface STKBodyType {
  BusinessShortCode: number;
  Password: string;
  Timestamp: string;
  TransactionType: string;
  Amount: number;
  PartyA: number;
  PartyB: number;
  PhoneNumber: number;
  CallBackURL: string;
  AccountReference: string;
  TransactionDesc: string;
}

export interface getSTKPasswordTypes {
  shortCode: string;
  passKey: string;
  timeStamp: string;
}

export interface CustomRequest extends Request {
  body: {
    phone: number;
    amount: number;
  };
}
