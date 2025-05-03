import { Contact } from './contact.model';
import AppError from '../../error/AppError';
import { IContact } from './contact.interface';

// Save a contact message to the database
const saveMessageInDB = async (payload: IContact) => {
  const contactMessage = await Contact.create(payload);
  return contactMessage;
};

// Get all contact messages from the database
const getAllMessages = async () => {
  return await Contact.find().sort({ createdAt: -1 });
};

// Get a single contact message by ID from the database
const getMessageById = async (id: string) => {
  const message = await Contact.findById(id);
  if (!message) throw new AppError(404, 'Contact message not found');
  return message;
};

export const contactService = {
  saveMessageInDB,
  getAllMessages,
  getMessageById,
};
