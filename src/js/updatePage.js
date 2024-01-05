import { format } from 'date-fns';

function updatePage(data, isMetric) {
  const weatherItems = document.querySelectorAll('.content .wi');

  if (isMetric) {
    weatherItems[2].textContent = `${data.current.temp_c}°C`;
    weatherItems[4].textContent = `High: ${data.forecast.forecastday[0].day.maxtemp_c}°C`;
    weatherItems[5].textContent = `Low: ${data.forecast.forecastday[0].day.mintemp_c}°C`;
    weatherItems[6].textContent = `${data.current.feelslike_c}°C`;
    weatherItems[7].textContent = `${data.current.wind_dir} ${data.current.wind_kph} km/h`;
    weatherItems[10].textContent = `${data.current.vis_km} km`;
    weatherItems[16].textContent = `${data.forecast.forecastday[0].day.maxtemp_c}°C / ${data.forecast.forecastday[0].day.mintemp_c}°C`;
    weatherItems[20].textContent = `${data.forecast.forecastday[1].day.maxtemp_c}°C / ${data.forecast.forecastday[0].day.mintemp_c}°C`;
    weatherItems[24].textContent = `${data.forecast.forecastday[2].day.maxtemp_c}°C / ${data.forecast.forecastday[0].day.mintemp_c}°C`;
  } else {
    weatherItems[2].textContent = `${data.current.temp_f}°F`;
    weatherItems[4].textContent = `High: ${data.forecast.forecastday[0].day.maxtemp_f}°F`;
    weatherItems[5].textContent = `Low: ${data.forecast.forecastday[0].day.mintemp_f}°F`;
    weatherItems[6].textContent = `${data.current.feelslike_f}°F`;
    weatherItems[7].textContent = `${data.current.wind_dir} ${data.current.wind_mph} mph`;
    weatherItems[10].textContent = `${data.current.vis_miles} mi`;
    weatherItems[16].textContent = `${data.forecast.forecastday[0].day.maxtemp_f}°F / ${data.forecast.forecastday[0].day.mintemp_f}°F`;
    weatherItems[20].textContent = `${data.forecast.forecastday[1].day.maxtemp_f}°F / ${data.forecast.forecastday[0].day.mintemp_f}°F`;
    weatherItems[24].textContent = `${data.forecast.forecastday[2].day.maxtemp_f}°F / ${data.forecast.forecastday[0].day.mintemp_f}°F`;
  }
  console.log();


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
  weatherItems[17].textContent = data.forecast.forecastday[0].day.condition.text;
  weatherItems[18].textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
  weatherItems[19].textContent = 'Tomorrow'
    // format(new Date(data.forecast.forecastday[1].date), 'iiii');
  weatherItems[21].textContent = data.forecast.forecastday[1].day.condition.text;
  weatherItems[22].textContent = `${data.forecast.forecastday[1].day.daily_chance_of_rain}%`;
  weatherItems[23].textContent = 'Day After Tomorrow'
    // format(new Date(data.forecast.forecastday[2].date), 'iiii');;
  weatherItems[25].textContent = data.forecast.forecastday[2].day.condition.text;
  weatherItems[26].textContent = `${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;
}

export default updatePage;
