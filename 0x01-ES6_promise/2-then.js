/* eslint-disable */

function handleResponseFromAPI(promise) {
  promise.then(
    (resolution) => {
      console.log('Got a response from the API');
    },
    (error) => {
      throw new Error();
    }
  );
}

export default handleResponseFromAPI;
