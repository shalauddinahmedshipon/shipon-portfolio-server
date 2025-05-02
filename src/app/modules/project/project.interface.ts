export interface IProject {
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  projectUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  imageUrls: string[];
}
