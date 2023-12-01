interface FormData {
    name: string;
    email: string;
    message: string;
}
export function sendContact({name, email, message}: FormData) {
  const apiEndpoint = '/api/contact';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify({name, email, message}),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}