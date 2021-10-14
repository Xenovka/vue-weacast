<template>
  <div class="card-container">
    <div class="input-wrapper">
      <form @submit.prevent="getLocation">
        <input ref="inputLocation" type="text" name="location" id="location" placeholder="City Name...">
        <input type="submit" value="Search">
      </form>
    </div>
    <weather-boxes v-if="isFetched"></weather-boxes>
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import WeatherBoxes from './components/WeatherBoxes.vue';
import {getWeather} from './composable/getWeather'

export default {
  components: {
    WeatherBoxes
  },
  setup() {
    const weathers = ref(null);
    const isFetched = ref(false)

    const getLocation = async () => {
      weathers.value = await getWeather()
      isFetched.value = !isFetched.value
      console.log(weathers.value)
    }

    provide('weathers', weathers.value)

    return {getLocation, weathers, isFetched}
  }
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Merriweather', serif;
  }

  .card-container {
    margin: 3rem auto;
    width: 90%;
    display: block;
    position: relative;
  }
</style>
