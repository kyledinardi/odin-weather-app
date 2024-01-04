import '../style.css';
import updatePage from './updatePage';

const form = document.querySelector('form');
const input = document.querySelector('input');
const measurementToggle = document.querySelector('.measurement-toggle');
let weatherData;
let isMetric = false;

async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=ebcf2e50162447c9b21182536233012&days=3&aqi=no&alerts=no&q=${location}`,
    { mode: 'cors' },
  );

  weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

function callApi(e) {
  // e.preventDefault();
  getWeather(input.value)
    .then((data) => {
      updatePage(data, isMetric);
    })
    .catch((error) => {
      throw new Error(error);
    });
  // e.target.reset();
}

function toggleMeasurement() {
  if (isMetric) {
    isMetric = false;
    measurementToggle.textContent = 'use °F';
  } else {
    isMetric = true;
    measurementToggle.textContent = 'use °C';
  }

  updatePage(weatherData, isMetric);
}

form.addEventListener('submit', callApi);
measurementToggle.addEventListener('click', toggleMeasurement);

callApi();