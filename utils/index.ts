export const encodedToBase64 = async (value: string): Promise<string> => {
  try {
    const encodedString = Buffer.from(value, "utf-8").toString("base64");
    return encodedString;
  } catch (error) {
    console.log(error);
    throw Error("Failed to encode string");
  }
};
export const decodeFromBase64 = (value: string) => {
  return atob(value);
};
