import { Router } from 'express';
import validationRequest from '../../middlewares/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';


const router = Router();

router.post(
  '/create-blog',
  auth(USER_ROLE.admin),
  validationRequest(blogValidation.createBlogValidationSchema),
  blogController.createBlog
);

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validationRequest(blogValidation.updateBlogValidationSchema),
  blogController.updateBlog
);

router.delete('/:id', auth(USER_ROLE.admin), blogController.deleteBlog);

export const blogRoutes = router;
