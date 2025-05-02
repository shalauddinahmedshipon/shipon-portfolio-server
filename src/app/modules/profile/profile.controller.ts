import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { profileService } from './profile.service';

export const createProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await profileService.createProfile(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Profile created successfully',
    data: result,
  });
});

export const getProfile = catchAsync(async (_req: Request, res: Response) => {
  const result = await profileService.getProfile();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Profile retrieved successfully',
    data: result,
  });
});

export const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await profileService.updateProfile(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Profile updated successfully',
    data: result,
  });
});

export const profileController = {
  createProfile,
  getProfile,
  updateProfile,
};
