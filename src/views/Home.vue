<template>
  <div class="card-container">
    <div class="input-wrapper">
      <form @submit.prevent="getLocation">
        <input ref="inputLocation" type="text" name="location" id="location" placeholder="City Name...">
        <input type="submit" value="Search">
      </form>
    </div>
    <div v-if="weathers">
      <weather-boxes :fetchedData="weathers"></weather-boxes>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import WeatherBoxes from '../components/WeatherBoxes.vue';
  import {getWeather} from '../composable/getWeather'
  import { getGeo } from '../composable/getGeolocation';

  export default {
  components: {
      WeatherBoxes
    },
    setup() {
      const weathers = ref(null);
      const inputLocation = ref(null);

      const getLocation = async () => {
        const location = await getGeo(inputLocation.value.value)
        const latitude = location[0].lat;
        const longitude = location[0].lon
        weathers.value = await getWeather(latitude, longitude)
      }

      return {getLocation, weathers, inputLocation}
    }
  }
</script>

<style>
  .card-container {
    margin: 3rem auto;
    width: 90%;
    display: block;
    position: relative;
  }
</style>