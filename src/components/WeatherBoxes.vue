<template>
  <div class="weathers-wrapper col-lg-2" v-for="weather in weathers" :key="weather.days">
    <h4 class="weathers-day">{{ weather.days }}</h4>
    <img :src="weather.weatherIcon" alt="weather icon" class="weathers-icon">
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
    opacity: .6;
    border-radius: 6px;
    box-shadow: 2px 2px 4px 2px rgba(24, 24, 24, .6);
    height: 23rem;
  }

  .weathers-wrapper {
    margin-right: 1rem;
  }

  .weathers-icon {
    width: 10rem;
    height: 10rem;
  }
</style>