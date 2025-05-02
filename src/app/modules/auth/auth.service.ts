import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/AppError';
import config from '../../config';
import { TAuth } from './auth.interface';
import Auth from './auth.model';
import { createToken } from './auth.utils';



const loginUser = async (payload: TAuth) => {
  const user = await Auth.isUserExistByEmail(payload.email);
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User is not Exist');
  }
  if (!(await Auth.isPasswordMatch(payload?.password, user?.password))) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Wrong Password!');
  }
  const jwtPayload = {
    email: user.email,
    role: user.role!,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.access_token_expiresIn as string,
  );

  return {
    accessToken,
    
  };
};



export const authServices = {
  loginUser,
};
