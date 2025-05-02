import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/AppError';
import { IProject } from './project.interface';
import { Project } from './project.model';

// Create Project
const createProjectInDB = async (payload: IProject) => {
  const existingProject = await Project.findOne({
    title: payload.title,
  });
  if (existingProject) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'Project with this title already exists'
    );
  }
  const project = await Project.create(payload);
  return project;
};

// Get All Projects
const getAllProjectsFromDB = async () => {
  const projects = await Project.find();
  return projects;
};

// Get Single Project
const getSingleProjectFromDB = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Project not found');
  }
  return project;
};

// Update Project
const updateProjectInDB = async (id: string, payload: Partial<IProject>) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Project not found');
  }

  const updatedProject = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return updatedProject;
};

// Delete Project
const deleteProjectFromDB = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Project not found');
  }

  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const projectService = {
  createProjectInDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectInDB,
  deleteProjectFromDB,
};
