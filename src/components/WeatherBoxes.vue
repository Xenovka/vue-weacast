<template>
  <div class="weather-wrapper">
    <h4 class="weather-day">{{  }}</h4>
    <img :src="weatherIcon" alt="weather icon" class="weather-icon">
    <h3 class="weather-status">{{ weatherStatus }}</h3>
    <h4 class="temperature">{{ temperature }}℃</h4>
  </div>
</template>

<script>
import { onMounted, onUpdated, ref } from 'vue';

export default {
  props: ['fetchedData'],
  setup(props) {
    const weatherData = ref(null)
    const weatherIcon = ref(null)
    const weatherStatus = ref(null)
    const temperature = ref(null)

    const mountData = () => {
      weatherData.value = props.fetchedData
      weatherIcon.value = `http://openweathermap.org/img/wn/${weatherData.value.current.weather[0].icon}@2x.png`;
      weatherStatus.value = weatherData.value.current.weather[0].main
      temperature.value = (weatherData.value.current.temp - 273.15).toFixed(0)
    }

    onMounted(() => { 
      mountData()
    })

    onUpdated(() => {
      mountData()
    })

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