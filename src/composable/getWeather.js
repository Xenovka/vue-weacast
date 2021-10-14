const getWeather = async () => {
  const APIKey = "3d1825841ff6894bee46fcdf49d532db";
  const getData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${APIKey}`);
  const result = await getData.json();
  return result;
};

export { getWeather };
