<template>
  <div class="container mt-4">
    <div class="row">
      <div class="input-wrapper col-lg-12">
        <form @submit.prevent="getData">
          <input class="form-control" ref="inputLocation" type="text" name="location" id="location" placeholder="City Name...">
          <input class="btn btn-primary" type="submit" value="Search">
        </form>
        <div v-if="weatherData">
          <main-weather :weather="weatherData" :location="location"></main-weather>
        </div>
      </div>
      <div v-if="weathersData">
        <weather-boxes :weathers="weathersData"></weather-boxes>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref  } from 'vue';
  import Moment from 'moment'
  import {extendMoment} from 'moment-range'
  import { getWeather } from '../composable/getWeather'
  import { getGeo } from '../composable/getGeolocation';

  import WeatherBoxes from '../components/WeatherBoxes.vue';
  import MainWeather from '../components/MainWeather.vue'

  export default {
  components: {
      WeatherBoxes,
      MainWeather
    },
    setup() {
      const weathers = ref(null);
      const weatherData = ref(null)
      const weathersData = ref(null)
      const inputLocation = ref(null);
      const location = ref(null)
      const curDay = ref(null)
      const fiveDays = ref(null)

      const moment = extendMoment(Moment)

      const getData = async () => {
        location.value = await getGeo(inputLocation.value.value)
        const latitude = location.value[0].lat;
        const longitude = location.value[0].lon
        
        weathers.value = await getWeather(latitude, longitude)
        curDay.value = Array.from(moment.range(Moment(), Moment().add(5, 'days')).by('days'))
        fiveDays.value = curDay.value.map(day => day.format('dddd'));

        const dailyWeathers = weathers.value.daily.map((w, idx) => {
          return {
            days: fiveDays.value[idx+1],
            weatherIcon: `http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`,
            weatherStatus: w.weather[0].main,
            temperature: (w.temp.day - 273.15).toFixed(0)
          }
        })

        dailyWeathers.length = 5;
        weatherData.value = {
          days: fiveDays.value[0],
          weatherIcon: `http://openweathermap.org/img/wn/${weathers.value.current.weather[0].icon}@2x.png`,
          weatherStatus: weathers.value.current.weather[0].main,
          temperature: (weathers.value.current.temp - 273.15).toFixed(0)
        }
        weathersData.value = [...dailyWeathers]
      }

      return {getData, inputLocation, weatherData, weathersData, location}
    }
  }
</script>

<style>

</style>