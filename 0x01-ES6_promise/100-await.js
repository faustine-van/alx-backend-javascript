import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const uploaded = uploadPhoto();
  const created = createUser();
  return Promise.all([uploaded, created])
    .then((values) => {
      const [val1, val2] = values;
      return {
        photo: val1,
        user: val2,
      };
    });
}
