// controllers/contact.controller.ts
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { contactService } from './contact.service';

// Handle submitting the contact form (POST /api/contact)
export const submitContactForm = catchAsync(async (req: Request, res: Response) => {
  const contactMessage = await contactService.saveMessageInDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Message sent successfully!',
    data: contactMessage,
  });
});

// Handle retrieving all contact messages (GET /api/contact)
export const getAllContactMessages = catchAsync(async (_req: Request, res: Response) => {
  const messages = await contactService.getAllMessages();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Contact messages retrieved successfully',
    data: messages,
  });
});

// Handle retrieving a single contact message by ID (GET /api/contact/:id)
export const getSingleContactMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await contactService.getMessageById(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Contact message retrieved successfully',
    data: message,
  });
});

export const contactController = {
  submitContactForm,
  getAllContactMessages,
  getSingleContactMessage,
};
