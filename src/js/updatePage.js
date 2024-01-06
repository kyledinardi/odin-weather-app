import { format } from 'date-fns';

function createSvgNode(pathD) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svg.setAttribute('viewBox', '0 0 24 24');
  path.setAttribute('d', pathD);
  svg.appendChild(path);
  return svg;
}

function getMoonPhaseSvg(phase) {
  let svg;

  switch (phase) {
    case 'New Moon':
      svg = createSvgNode(
        'M12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z',
      );
      break;
    case 'Waxing Crescent':
      svg = createSvgNode(
        'M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z',
      );
      break;
    case 'First Quarter':
      svg = createSvgNode('M12 2V22A10 10 0 0 0 12 2Z');
      break;
    case 'Waxing Gibbous':
      svg = createSvgNode(
        'M6 12C6 7.5 7.93 3.26 12 2A10 10 0 0 1 12 22C7.93 20.74 6 16.5 6 12Z',
      );
      break;
    case 'Full Moon':
      svg = createSvgNode('M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z');
      break;
    case 'Waning Gibbous':
      svg = createSvgNode(
        'M18 12C18 7.5 16.08 3.26 12 2A10 10 0 0 0 12 22C16.08 20.74 18 16.5 18 12Z',
      );
      break;
    case 'Last Quarter':
      svg = createSvgNode('M12 2A10 10 0 0 0 12 22Z');
      break;
    case 'Waning Crescent':
      svg = createSvgNode(
        'M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z',
      );
      break;

    default:
  }

  return svg;
}

function updatePage(data, isMetric) {
  const weatherItems = document.querySelectorAll('.content .wi');
  const currentMain = document.querySelector('.current-main');
  const condition = document.querySelector('.condition');
  const moon = document.querySelector('.moon');
  const moonSpan = document.querySelector('.moon span');
  const date = new Date();

  moon.insertBefore(
    getMoonPhaseSvg(data.forecast.forecastday[0].astro.moon_phase),
    moonSpan,
  );
    
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  
  console.log(data);

  const currentConditionImg = document.createElement('img');
  currentConditionImg.src = data.current.condition.icon;
  currentMain.insertBefore(currentConditionImg, condition);

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

  weatherItems[0].textContent = `${data.location.name}, ${data.location.country}`;
  weatherItems[1].textContent = format(date, 'PPPPp');
  weatherItems[3].textContent = data.current.condition.text;
  weatherItems[8].textContent = `${data.current.humidity}%`;
  weatherItems[9].textContent = `${data.current.uv} of 11`;
  weatherItems[11].textContent = `${data.current.cloud}%`;
  weatherItems[12].textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
  weatherItems[13].textContent = data.forecast.forecastday[0].astro.moon_phase;
  weatherItems[14].textContent = data.forecast.forecastday[0].astro.sunrise;
  weatherItems[15].textContent = data.forecast.forecastday[0].astro.sunset;
  weatherItems[17].textContent =
    data.forecast.forecastday[0].day.condition.text;
  weatherItems[18].textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
  weatherItems[19].textContent = daysOfWeek[(date.getDay() + 1) % 7];
  weatherItems[21].textContent =
    data.forecast.forecastday[1].day.condition.text;
  weatherItems[22].textContent = `${data.forecast.forecastday[1].day.daily_chance_of_rain}%`;
  weatherItems[23].textContent = daysOfWeek[(date.getDay() + 2) % 7];
  weatherItems[25].textContent =
    data.forecast.forecastday[2].day.condition.text;
  weatherItems[26].textContent = `${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;
}

export default updatePage;
