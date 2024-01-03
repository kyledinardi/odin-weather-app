import '../style.css';

async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=ebcf2e50162447c9b21182536233012&days=3&aqi=yes&alerts=yes&q=${location}`,
    { mode: 'cors' },
  );

  const weatherData = await response.json();
  return weatherData;
}

getWeather('Washington, D.C.').then(console.log);
