<template>
  <div class="weather-wrapper">
    <h4 class="weather-day">{{ }}</h4>
    <img :src="weatherIcon" alt="weather icon" class="weather-icon">
    <h3 class="weather-status">{{ }}</h3>
    <h4 class="temperature">{{ }}</h4>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue';

export default {
  setup() {
    const weatherIcon = require('../assets/lighting.png');
    const weatherData = inject('weathers')

    onMounted(() => {
      console.log(weatherData)
    })

    return {weatherIcon}
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