import '../style.css';
import updatePage from './updatePage';

const form = document.querySelector('form');
const input = document.querySelector('input');
const errorHandler = document.querySelector('.error-handler');
const measurementToggle = document.querySelector('.measurement-toggle');
let isMetric = false;
let weatherData;

async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=ebcf2e50162447c9b21182536233012&days=3&aqi=no&alerts=no&q=${location}`,
    { mode: 'cors' },
  );

  weatherData = await response.json();
  return weatherData;
}

function callApi(location) {
  document.body.classList.add('loading');

  getWeather(location)
    .then((data) => {
      document.body.classList.remove('loading');
      errorHandler.style.display = 'none';
      updatePage(data, isMetric);
    })
    .catch(() => {
      document.body.classList.remove('loading');
      errorHandler.style.display = 'block';
    });
}

function toggleMeasurement() {
  if (isMetric) {
    isMetric = false;
    measurementToggle.textContent = 'Use °C';
  } else {
    isMetric = true;
    measurementToggle.textContent = 'Use °F';
  }

  updatePage(weatherData, isMetric);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  callApi(input.value);
  e.target.reset();
});

input.addEventListener('input', () => {
  input.setCustomValidity('');
});

measurementToggle.addEventListener('click', toggleMeasurement);

callApi('Washington, DC');
