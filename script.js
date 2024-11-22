const APIKey = "f379b56e1608b7b8922a207de4c7f765";
const weatherURL = "https://api.openweathermap.org/data/2.5/forecast";

// Fetch weather data for a given city
const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${weatherURL}?q=${city}&units=metric&appid=${APIKey}` // Backticks ашиглав
    );
    if (!response.ok) {
      throw new Error(`City not found: ${city}`); // Template literal ашиглав
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
};

// Event listener for the search input
const searchCityInput = document.querySelector("#search");
searchCityInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    // Trigger only when Enter is pressed
    const city = e.target.value.trim();
    if (city) {
      const weatherData = await getWeatherData(city);
      if (weatherData) {
        updateForecast(weatherData);
      }
    }
  }
});

// Update the UI with the weather data
const updateForecast = (data) => {
  const temperatureElement = document.querySelector("#temperature");
  const temperatureElementFirst = document.querySelector("#temperature1");
  const temperatureElementSecond = document.querySelector("#temprature2");

  const currentDayTemp = data.list[0].main.temp;
  const firstDayTemp = data.list[1].main.temp;
  const secondDayTemp = data.list[2].main.temp;

  temperatureElement.innerHTML = `${currentDayTemp}°C`; // Backticks ашиглав
  temperatureElementFirst.innerHTML = `${firstDayTemp}°C`; // Backticks ашиглав
  temperatureElementSecond.innerHTML = `${secondDayTemp}°C`; // Backticks ашиглав
  console.log(data);
};
