import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { blogService } from './blog.service';

export const createBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = await blogService.createBlogInDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: blog,
  });
});

export const getAllBlogs = catchAsync(async (_req: Request, res: Response) => {
  const blogs = await blogService.getAllBlogsFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blogs retrieved successfully',
    data: blogs,
  });
});

export const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const blog = await blogService.getSingleBlogFromDB(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog retrieved successfully',
    data: blog,
  });
});

export const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = await blogService.updateBlogInDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog updated successfully',
    data: blog,
  });
});

export const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = await blogService.deleteBlogFromDB(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog deleted successfully',
    data: blog,
  });
});

export const blogController = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
