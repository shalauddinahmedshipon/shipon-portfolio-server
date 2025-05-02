import { Profile } from './profile.model';
import { IProfile } from './profile.interface';

const createProfile = async (payload: IProfile): Promise<IProfile> => {
  const profile = await Profile.create(payload);
  return profile;
};

const getProfile = async (): Promise<IProfile | null> => {
  const profile = await Profile.findOne();
  return profile;
};

const updateProfile = async (id: string, payload: Partial<IProfile>): Promise<IProfile | null> => {
  const updatedProfile = await Profile.findByIdAndUpdate(id, payload, { new: true });
  return updatedProfile;
};

export const profileService = {
  createProfile,
  getProfile,
  updateProfile,
};
