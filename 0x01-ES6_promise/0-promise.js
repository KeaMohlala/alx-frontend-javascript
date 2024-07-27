const success = true;

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('Success!');
    } else {
      reject(new Error('failure fetching response'));
    }
  });
}
