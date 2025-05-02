import { Model } from "mongoose";
import { USER_ROLE } from "./auth.constant";

export type TAuth = {
  email: string;
  password: string;
  role:'admin'
};

export interface AuthModel extends Model<TAuth> {
  isUserExistByEmail(email: string): Promise<TAuth>;
  isPasswordMatch(
    plainTextPassword: string,
    hashPassword: string,
  ): Promise<boolean>;
}


export type TUserRole = keyof typeof USER_ROLE;
