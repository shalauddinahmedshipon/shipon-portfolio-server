import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().url().optional(),
    author: z.string().optional(),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().url().optional(),
    author: z.string().optional(),
  }),
});

export const blogValidation = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
