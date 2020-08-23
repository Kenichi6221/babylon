import jwt from "jsonwebtoken";
import { SING_TOKEN } from "../configurations/configuration";
import { TOKEN_EXPIRATION_TIME } from "../configurations/configuration";
import { IUser } from "../models/user";

export const generateToken = (data: IUser): string => {
  const { id, name, email, role } = data;
  try {
    console.log("user to token", data);
    const token = jwt.sign({ id, name, email, role }, SING_TOKEN, {
      expiresIn: TOKEN_EXPIRATION_TIME,
    });
    return token;
  } catch (error) {
    console.log("error in token generation");
    console.log(error);
    return "";
  }
};

export const getUserFromToken = (token: string): IUser => {
  const userToken = jwt.verify(token, SING_TOKEN);
  return userToken as IUser;
};