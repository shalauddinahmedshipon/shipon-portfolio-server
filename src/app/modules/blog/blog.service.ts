import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/AppError';
import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogInDB = async (payload: IBlog) => {
  const blog = await Blog.create(payload);
  return blog;
};

const getAllBlogsFromDB = async () => {
  return await Blog.find().sort({ createdAt: -1 });
};

const getSingleBlogFromDB = async (id: string) => {
  const blog = await Blog.findById(id);
  if (!blog) throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  return blog;
};

const updateBlogInDB = async (id: string, payload: Partial<IBlog>) => {
  const blog = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!blog) throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  return blog;
};

const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  if (!result) throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  return result;
};

export const blogService = {
  createBlogInDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  updateBlogInDB,
  deleteBlogFromDB,
};
