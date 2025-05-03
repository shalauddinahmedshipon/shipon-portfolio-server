import { Router } from 'express';
import { contactValidation } from './contact.validation';
import { contactController } from './contact.controller';
import validationRequest from '../../middlewares/validateRequest';

const router = Router();

router.post(
  '/submit',
  validationRequest(contactValidation.createContactValidationSchema),
  contactController.submitContactForm
);

router.get('/', contactController.getAllContactMessages);

router.get('/:id', contactController.getSingleContactMessage);

export const contactRoutes = router;
