/* eslint-disable */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((data) =>
    data.map((eachPromise) => ({
      status: eachPromise.status,
      value: eachPromise.value
        ? eachPromise.status === 'fulfilled'
        : eachPromise.reason,
    }))
  );
}

export default handleProfileSignup;
