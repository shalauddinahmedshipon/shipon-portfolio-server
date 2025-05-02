import { Schema, model } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String] },
    coverImage: { type: String },
    author: { type: String },
  },
  { timestamps: true }
);

export const Blog = model<IBlog>('Blog', blogSchema);
