<template>
  <div class="container mt-4">
    <div class="row">
      <div class="input-wrapper col-lg-12">
        <form @submit.prevent="getLocation">
          <input class="form-control" ref="inputLocation" type="text" name="location" id="location" placeholder="City Name...">
          <input class="btn btn-primary" type="submit" value="Search">
        </form>
        </div>
        <div v-if="weatherData">
          <weather-boxes :weathers="weatherData"></weather-boxes>
        </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, onUpdated, ref  } from 'vue';
  import Moment from 'moment'
  import {extendMoment} from 'moment-range'
  import { getWeather } from '../composable/getWeather'
  import { getGeo } from '../composable/getGeolocation';
  import WeatherBoxes from '../components/WeatherBoxes.vue';

  export default {
  components: {
      WeatherBoxes
    },
    setup() {
      const weathers = ref(null);
      const weatherData = ref(null)
      const inputLocation = ref(null);
      // const curDay = ref(null)
      // const fiveDays = ref(null)

      // const moment = extendMoment(Moment)

      const getLocation = async () => {
        const location = await getGeo(inputLocation.value.value)
        const latitude = location[0].lat;
        const longitude = location[0].lon
        weathers.value = await getWeather(latitude, longitude)
      }

      
      // curDay.value = Array.from(moment.range(Moment(), Moment().add(5, 'days')).by('days'))
      const dailyWeathers = weathers.value.daily.map(w => {
        return {
          weatherIcon: w.weather.icon,
          weatherStatus: w.weather.main,
          temperature: (w.temp.day - 273.15).toFixed(0)
        }
      })
      weatherData.value = [
        {
          weatherIcon: weathers.value.current.weather[0].icon,
          weatherStatus: weathers.value.current.weather[0].main,
          temperature: (weathers.value.current.temp - 273.15).toFixed(0)
        },
        ...dailyWeathers
      ]
      // fiveDays.value = curDay.value.map(day => day.format('dddd'));
    


      return {getLocation, inputLocation, weatherData}
    }
  }
</script>

<style>

</style>