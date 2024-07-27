export default function handleResponseFromAPI(promise) {
  promise
    .then((response) => ({ status: 200, body: 'success' })) // eslint-disable-line no-unused-vars
    .catch((error) => ({})) // eslint-disable-line no-unused-vars
    .finally(() => {
      console.log('Got a response from the API');
    });
}
