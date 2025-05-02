import { Schema, model } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/AppError';
import bcrypt from 'bcrypt';
import config from '../../config';
import { AuthModel, TAuth } from './auth.interface';


const authSchema = new Schema<TAuth,AuthModel>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ['admin'], default: 'admin' },
  }
);

authSchema.pre('save', async function (next) {
  const isUserExist = await Auth.findOne({ email: this.email });
  if (isUserExist) {
    throw new AppError(StatusCodes.CONFLICT, 'This User is already Exist!');
  }
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_solt));
  next();
});

authSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

authSchema.statics.isUserExistByEmail = async function (email: string) {
  return await Auth.findOne({ email }).select('+password');
};
authSchema.statics.isPasswordMatch = async function (
  plainTextPassword: string,
  hashPassword: string,
) {
  return await bcrypt.compare(plainTextPassword, hashPassword);
};


const Auth = model<TAuth,AuthModel>('Auth', authSchema);

export default Auth;
