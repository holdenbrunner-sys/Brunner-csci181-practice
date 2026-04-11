//Variables
let is_loading = false;
let error_message = "";
let weather_data = null;
const output_element = document.getElementById("weather-output");

//Render Weather
function renderWeather() {
  if (is_loading) {
    output_element.innerHTML = "Loading...";
  }
  if (error_message) {
    output_element.innerHTML = "ERROR";
  }
  if (weather_data) {
    const temp = forecastData.properties.periods.temperature[0];
    output_element.innerHTML = temp;
  } else {
    output_element.innerHTML = "Weather Data Not Avalible";
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
