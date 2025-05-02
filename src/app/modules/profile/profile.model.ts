import { Schema, model } from 'mongoose';
import { IProfile } from './profile.interface';

const profileSchema = new Schema<IProfile>(
  {
    name: String,
    designation: String,
    introduction: String,
    resumeUrl: String,
    profileImage: String,
    education: [
      {
        degree: String,
        institution: String,
        year: String,
      },
    ],
    experience: [
      {
        position: String,
        company: String,
        duration: String,
        description: String,
        projects: [
          {
            title: String,
            technologies: [String],
            liveLink: String,
          },
        ],
      },
    ],
    techSkills: [
      {
        name: String,
        logoUrl: String,
      },
    ],
    softSkills: [String],
    languages: [String],
    contactInfo: {
      address: String,
      phone: String,
      email: String,
      linkedIn: String,
      github: String,
    },
  },
  { timestamps: true }
);

export const Profile = model<IProfile>('Profile', profileSchema);
