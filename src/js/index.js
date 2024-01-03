import '../style.css';
import updatePage from './updatePage';

const form = document.querySelector('form');
const input = document.querySelector('input');

async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=ebcf2e50162447c9b21182536233012&days=3&aqi=no&alerts=no&q=${location}`,
    { mode: 'cors' },
  );

  const weatherData = await response.json();
  return weatherData;
}

function callApi(e) {
  e.preventDefault();
  getWeather(input.value)
    .then(updatePage)
    .catch((error) => {
      console.error(error);
    });
  getWeather(input.value).then(console.log);
  e.target.reset();
}

form.addEventListener('submit', callApi);
