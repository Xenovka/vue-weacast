<template>
  <div class="weather-wrapper">
    <h4 class="weather-day">{{ weather.days }}</h4>
    <img :src="weather.weatherIcon" alt="weather icon" class="weather-icon">
    <h3 class="weather-status">{{ weather.weatherStatus }}</h3>
    <h4 class="temperature">{{ weather.temperature }}℃</h4>
  </div>
</template>

<script>
import { onUpdated, ref } from 'vue'
export default {
  props: ['weather'],
  setup(props) {
    const weather = ref(null)

    weather.value = props.weather

    onUpdated(() => {
      weather.value = props.weather
    })

    console.log(weather.value)

    return {weather}
  }
}
</script>

<style scoped>

</style>