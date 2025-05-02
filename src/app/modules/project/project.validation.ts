import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body:z.object({
  title: z.string().min(3),
  shortDescription: z.string().min(10),
  detailedDescription: z.string().min(20),
  technologies: z.array(z.string()),
  projectUrl: z.string().url().optional(),
  githubFrontendUrl: z.string().url().optional(),
  githubBackendUrl: z.string().url().optional(),
  imageUrls: z.array(z.string().url()).min(1),
  })
});

const updateProjectValidationSchema = z.object({
 body:z.object({
  title: z.string().min(3).optional(),
  shortDescription: z.string().min(10).optional(),
  detailedDescription: z.string().min(20).optional(),
  technologies: z.array(z.string()).optional(),
  projectUrl: z.string().url().optional(),
  githubFrontendUrl: z.string().url().optional(),
  githubBackendUrl: z.string().url().optional(),
  imageUrls: z.array(z.string().url()).min(1).optional(),
 })
});

export const projectValidation={
  createProjectValidationSchema,
  updateProjectValidationSchema
}
