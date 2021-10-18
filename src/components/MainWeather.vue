<template>
  <div class="weather-wrapper">
    <h4 class="weather-location">{{ weatherLocation.name }}, {{ weatherLocation.country }}</h4>
    <h4 class="weather-day">{{ weather.days }}</h4>
    <img :src="weather.weatherIcon" alt="weather icon" class="weather-icon">
    <h3 class="weather-status">{{ weather.weatherStatus }}</h3>
    <h4 class="temperature">{{ weather.temperature }}℃</h4>
  </div>
</template>

<script>
import { onUpdated, ref } from 'vue'
export default {
  props: ['weather', 'location'],
  setup(props) {
    const weather = ref(null)
    const weatherLocation = ref(null)

    weather.value = props.weather
    weatherLocation.value = props.location[0]

    onUpdated(() => {
      weather.value = props.weather
      weatherLocation.value = props.location[0]
    })

    return {weather, weatherLocation}
  }
}
</script>

<style scoped>
  .weather-day,
  .weather-status,
  .weather-location,
  .temperature {
    text-align: center;
  }
</style>