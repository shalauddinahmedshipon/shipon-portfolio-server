import { Router } from 'express';
import { profileController } from './profile.controller';
import validationRequest from '../../middlewares/validateRequest';
import { profileValidation } from './profile.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';


const router = Router();

router.post(
  '/create-profile',
  auth(USER_ROLE.admin),
  validationRequest(profileValidation),
  profileController.createProfile,
);

router.get('/', profileController.getProfile);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validationRequest(profileValidation.partial()),
  profileController.updateProfile,
);

export const profileRoutes = router;
