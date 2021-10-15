export const getWeather = async (lat, lon) => {
  try {
    const APIKey = "3d1825841ff6894bee46fcdf49d532db";
    const getData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKey}`);

    if (!getData.ok) {
      throw new Error("Something went wrong when trying to fetch weather data!");
    }

    const weatherData = await getData.json();
    return weatherData;
  } catch (error) {
    console.log(error.message);
  }
};
