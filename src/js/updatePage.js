import { format } from 'date-fns';

function updatePage(data, isMetric) {
  const weatherItems = document.querySelectorAll('.content .wi');
  console.log(weatherItems);

  if (isMetric) {
    weatherItems[2].textContent = `${data.current.temp_c} °C`;
    weatherItems[4].textContent = `High: ${data.forecast.forecastday[0].day.maxtemp_c} °C`;
    weatherItems[5].textContent = `Low: ${data.forecast.forecastday[0].day.mintemp_c} °C`;
    weatherItems[6].textContent = `${data.current.feelslike_c} °C`;
    weatherItems[7].textContent = `${data.current.wind_dir} ${data.current.wind_kph} km/h`;
    weatherItems[10].textContent = `${data.current.vis_km} km`;
  } else {
    weatherItems[2].textContent = `${data.current.temp_f} °F`;
    weatherItems[4].textContent = `High: ${data.forecast.forecastday[0].day.maxtemp_f} °F`;
    weatherItems[5].textContent = `Low: ${data.forecast.forecastday[0].day.mintemp_f} °F`;
    weatherItems[6].textContent = `${data.current.feelslike_f} °F`;
    weatherItems[7].textContent = `${data.current.wind_dir} ${data.current.wind_mph} mph`;
    weatherItems[10].textContent = `${data.current.vis_miles} mi`;
  }

  weatherItems[0].textContent = `${data.location.name}, ${data.location.country}`;
  weatherItems[1].textContent = format(new Date(), 'PPPPp');
  weatherItems[3].textContent = data.current.condition.text;
  weatherItems[8].textContent = `${data.current.humidity}%`;
  weatherItems[9].textContent = `${data.current.uv} of 11`;
  weatherItems[11].textContent = `${data.current.cloud}%`;
  weatherItems[12].textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
  weatherItems[13].textContent = data.forecast.forecastday[0].astro.moon_phase;
  weatherItems[14].textContent = data.forecast.forecastday[0].astro.sunrise;
  weatherItems[15].textContent = data.forecast.forecastday[0].astro.sunset;
}

export default updatePage;
