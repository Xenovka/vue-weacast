export const getGeo = async (location) => {
  const APIKey = "3d1825841ff6894bee46fcdf49d532db";
  const getGeo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIKey}`);
  const geolocation = await getGeo.json();

  return geolocation;
};
