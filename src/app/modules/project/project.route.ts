import { Router } from 'express';
import validationRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { projectController } from './project.controller';
import { USER_ROLE } from '../auth/auth.constant';
import { projectValidation } from './project.validation';

const router = Router();

router.post(
  '/create-project',
  auth(USER_ROLE.admin), 
  validationRequest(projectValidation.createProjectValidationSchema), 
  projectController.createProject
);


router.get('/', projectController.getAllProjects);


router.get('/:id', projectController.getProjectById);

router.patch(
  '/:id',
  auth(USER_ROLE.admin), 
  validationRequest(projectValidation.updateProjectValidationSchema),
  projectController.updateProject
);


router.delete('/:id', auth(USER_ROLE.admin), projectController.deleteProject);


export const projectRoutes = router;
