console.log('Client side js file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const firstMessage = document.querySelector('#first-message');
const secondMessage = document.querySelector('#second-message');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;

  firstMessage.textContent = 'Loading...';
  secondMessage.textContent = '';

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          firstMessage.textContent = data.error;
        } else {
          firstMessage.textContent = data.location;
          secondMessage.textContent = data.forecast;
        }
      });
    }
  );
});
