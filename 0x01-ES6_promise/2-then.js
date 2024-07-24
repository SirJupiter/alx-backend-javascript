/* eslint-disable */

function handleResponseFromAPI(promise) {
  promise
    .then((resolution) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      {
      }
    });
}

export default handleResponseFromAPI;
