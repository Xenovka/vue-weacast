<template>
  <div class="weather-wrapper">
    <h4 class="weather-day">{{  }}</h4>
    <img :src="weatherIcon" alt="weather icon" class="weather-icon">
    <h3 class="weather-status">{{ weatherStatus }}</h3>
    <h4 class="temperature">{{ temperature }}℃</h4>
  </div>
</template>

<script>

export default {
  props: ['fetchedData'],
  setup(props) {
    const weatherData = props.fetchedData
    const weatherIcon = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
    const weatherStatus = weatherData.current.weather[0].main
    const temperature = (weatherData.current.temp - 273.15).toFixed(0)

    return {weatherIcon, weatherStatus, temperature}
  }
}
</script>

<style scoped>
  .weather-wrapper {
    background-color: #fff;
    opacity: .6;
    border-radius: 6px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, .6);
    width: 27rem;
    height: 23rem;
  }

  .weather-icon {
    width: 5.4rem;
    height: 5.4rem;
  }
</style>