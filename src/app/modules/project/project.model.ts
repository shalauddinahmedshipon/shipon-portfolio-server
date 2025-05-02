import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  detailedDescription: { type: String, required: true },
  technologies: [String],
  projectUrl: { type: String },
  githubFrontendUrl: { type: String },
  githubBackendUrl: { type: String },
  imageUrls: [{ type: String }],
}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);
