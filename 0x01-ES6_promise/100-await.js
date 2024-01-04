import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const uploaded = uploadPhoto();
  const created = createUser();
  const [val1, val2] = await Promise.all([uploaded, created]);
  return {
    photo: val1,
    user: val2,
  };
}
