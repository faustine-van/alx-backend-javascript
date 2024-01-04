import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];

  const userPromise = signUpUser(firstName, lastName);
  promises.push(userPromise);

  const photoPromise = uploadPhoto(fileName);
  promises.push(photoPromise);

  return Promise.allSettled(promises).then((results) => results.map((res) => {
    if (res.status === 'fulfilled') {
      return {
        status: 'fulfilled',
        value: res.value,
      };
    }
    return {
      status: 'rejected',
      value: res.reason.message,
    };
  }));
}
