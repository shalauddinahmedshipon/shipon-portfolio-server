import { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { projectRoutes } from '../modules/project/project.route';
import { blogRoutes } from '../modules/blog/blog.route';
import { profileRoutes } from '../modules/profile/profile.route';
import { contactRoutes } from '../modules/contact/contact.route';


const router = Router();

const moduleRoutes = [
 {
  path:"/auth",
  route:authRoutes
 },
 {
  path:"/projects",
  route:projectRoutes
 },
 {
  path:"/blogs",
  route:blogRoutes
 },
 {
  path:"/profile",
  route:profileRoutes
 },
 {
  path:"/contacts",
  route:contactRoutes
 },
];



moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
