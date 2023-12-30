import moment from "moment";
import { getSTKPasswordTypes } from "../types";

export const encodedToBase64 = async (value: string): Promise<string> => {
  try {
    const encodedString = Buffer.from(value, "utf-8").toString("base64");
    return encodedString;
  } catch (error) {
    console.log(error);
    throw Error("Failed to encode string");
  }
};
export const getSTKPassword = async ({
  shortCode,
  passKey,
  timeStamp,
}: getSTKPasswordTypes): Promise<string> => {
  const password = await encodedToBase64(shortCode + passKey + timeStamp);
  return password;
};
export const getTimeStamp = async (): Promise<string> => {
  try {
    const timestamp = moment().format("YYYYMMDDHHmmss");
    return String(timestamp);
  } catch (error) {
    throw new Error("Could not get timestamp.");
  }
};
