export interface IEducation {
  degree: string;
  institution: string;
  year: string; 
}

export interface IProjectExperience {
  title: string;
  technologies: string[];
  liveLink?: string;
}

export interface IExperience {
  position: string;
  company: string;
  duration: string; 
  description?: string;
  projects?: IProjectExperience[];
}

export interface ITechSkill {
  name: string;
  logoUrl: string;
}

export interface IContactInfo {
  address:string

  phone: string;
  email: string;
  linkedIn?: string;
  github?: string;
}

export interface IProfile {
  name: string;
  designation: string;
  introduction: string;
  resumeUrl?: string;
  profileImage?: string;
  education: IEducation[];
  experience: IExperience[];
  techSkills: ITechSkill[];
  softSkills: string[];
  languages: string[];
  contactInfo: IContactInfo;
}