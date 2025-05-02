// profile.validation.ts
import { z } from 'zod';

export const profileValidation = z.object({
 body:z.object({
  name: z.string(),
  designation: z.string(),
  introduction: z.string(),
  resumeUrl: z.string().optional(),
  profileImage: z.string().optional(),

  education: z.array(
    z.object({
      degree: z.string(),
      institution: z.string(),
      year: z.string(),
    }),
  ),

  experience: z.array(
    z.object({
      position: z.string(),
      company: z.string(),
      duration: z.string(),
      description: z.string().optional(),
      projects: z
        .array(
          z.object({
            title: z.string(),
            technologies: z.array(z.string()),
            liveLink: z.string().url().optional(),
          }),
        )
        .optional(),
    }),
  ),

  techSkills: z.array(
    z.object({
      name: z.string(),
      logoUrl: z.string(),
    }),
  ),

  softSkills: z.array(z.string()),
  languages: z.array(z.string()),

  contactInfo: z.object({
    address: z.string(),
    phone: z.string(),
    email: z.string().email(),
    linkedIn: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
 })
});
