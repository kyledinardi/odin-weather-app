function updatePage(data) {
  const weatherItems = document.querySelectorAll('.current-weather p');
  console.log(weatherItems);
  weatherItems[0].textContent = `${data.location.name}, ${data.location.country}`;
  weatherItems[1].textContent = data.location.localtime;
  weatherItems[2].textContent = data.current.temp_f;
  weatherItems[3].textContent = data.current.condition.text;
  weatherItems[4].textContent = data.forecast.forecastday[0].day.maxtemp_f;
  weatherItems[5].textContent = data.forecast.forecastday[0].day.mintemp_f;
  weatherItems[6].textContent = data.current.feelslike_f;
  weatherItems[7].textContent = `${data.current.wind_dir} ${data.current.wind_mph}`;
  weatherItems[8].textContent = data.current.humidity;
  weatherItems[9].textContent = data.current.uv;
  weatherItems[10].textContent = data.current.vis_miles;
  weatherItems[11].textContent = data.current.cloud;
  weatherItems[12].textContent =
    data.forecast.forecastday[0].day.daily_chance_of_rain;
  weatherItems[13].textContent = data.forecast.forecastday[0].astro.sunrise;
  weatherItems[14].textContent = data.forecast.forecastday[0].astro.sunset;
  weatherItems[15].textContent = data.forecast.forecastday[0].astro.moon_phase;
}

export default updatePage;
