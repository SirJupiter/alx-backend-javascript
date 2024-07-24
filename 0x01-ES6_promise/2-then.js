/* eslint-disable */

function handleResponseFromAPI(promise) {
  promise
    .then((resolution) => {
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
