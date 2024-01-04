import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploaded = await uploadPhoto();
    const created = await createUser();
    return {
      photo: uploaded,
      user: created,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
