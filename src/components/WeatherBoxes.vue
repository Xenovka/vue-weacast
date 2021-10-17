<template>
  <div class="weather-wrapper" v-for="weather in weathers" :key="weather.days">
    <h4 class="weather-day">{{ weather.days }}</h4>
    <img :src="weather.weatherIcon" alt="weather icon" class="weather-icon">
    <h3 class="weather-status">{{ weather.weatherStatus }}</h3>
    <h4 class="temperature">{{ weather.temperature }}℃</h4>
  </div>
</template>

<script>
import { onMounted, onUpdated, ref } from 'vue'

export default {
  props: ['weathers', 'location'],
  setup(props) {
    const weathers = ref(null)

    onMounted(() => {
      weathers.value = props.weathers
      console.log(props.location[0])
    })

    onUpdated(() => {
      weathers.value = props.weathers
      console.log(props.location[0])
    })


    return {weathers}
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