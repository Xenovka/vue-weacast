<template>
  <div class="weathers-wrapper col-lg-2" v-for="weather in weathers" :key="weather.days">
    <h4 class="weathers-day">{{ weather.days }}</h4>
    <div class="image-wrapper">
      <img :src="weather.weatherIcon" alt="weather icon" class="weathers-icon">
    </div>
    <h3 class="weathers-status">{{ weather.weatherStatus }}</h3>
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
    })

    onUpdated(() => {
      weathers.value = props.weathers
    })


    return {weathers}
  }
}
</script>

<style scoped>
  .weathers-wrapper {
    border-radius: 6px;
    box-shadow: 2px 3px 4px 2px rgba(24, 24, 24, .6);
    height: 20rem;
  }

  .weathers-wrapper {
    margin-right: 1rem;
  }

  .weathers-icon {
    width: 10rem;
    height: 10rem;
  }

  .weathers-day,
  .weathers-status,
  .temperature,
  .image-wrapper {
    text-align: center;
  }

  .weathers-day {
    margin-top: 2rem;
  }
</style>