import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectService } from './project.service';

// Create Project
export const createProject = catchAsync(
  async (req: Request, res: Response) => {
    const project = await projectService.createProjectInDB(req.body);
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'Project created successfully',
      data: project,
    });
  }
);

// Get All Projects
export const getAllProjects = catchAsync(
  async (_req: Request, res: Response) => {
    const projects = await projectService.getAllProjectsFromDB();
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Projects retrieved successfully',
      data: projects,
    });
  }
);

// Get Single Project
export const getProjectById = catchAsync(
  async (req: Request, res: Response) => {
    const project = await projectService.getSingleProjectFromDB(req.params.id);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Project retrieved successfully',
      data: project,
    });
  }
);

// Update Project
export const updateProject = catchAsync(
  async (req: Request, res: Response) => {
    const project = await projectService.updateProjectInDB(
      req.params.id,
      req.body
    );
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Project updated successfully',
      data: project,
    });
  }
);

// Delete Project
export const deleteProject = catchAsync(
  async (req: Request, res: Response) => {
    const result = await projectService.deleteProjectFromDB(req.params.id);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Project deleted successfully',
      data: result,
    });
  }
);

export const projectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
