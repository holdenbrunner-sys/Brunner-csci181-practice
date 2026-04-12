//Variables
let is_loading = false;
let error_message = "";
let weather_data = null;
const output_element = document.getElementById("weather-output");

//Render Weather
function renderWeather() {
  if (is_loading) {
    output_element.innerHTML = `<div style="font-size: 6rem;">Loading...</div>`;
  } else if (error_message) {
    output_element.innerHTML = `<div style="font-size: 6rem;">ERROR</div>`;
  } else if (weather_data) {
    const temp = weather_data.properties.periods[0].temperature;
    const forecast = weather_data.properties.periods[0].shortForecast;
    output_element.innerHTML = `<div style="font-size: 6rem;">${temp}\u00B0F</div>
    <div style="font-size: 1.5rem;">${forecast}</div>`;
  } else {
    output_element.innerHTML = `<div style="font-size: 6rem">Weather Data Not Availible</div>`;
  }
}

//Fetch Weather
async function getWeatherData() {
  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${respons.status}`);
    }
    weather_data = await response.json();
    console.log("Success:", weather_data);
  } catch (error) {
    error_message = error.message;
  } finally {
    is_loading = false;
    renderWeather();
  }
}

getWeatherData();
console.log(weather_data);
