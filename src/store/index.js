import { createStore } from 'vuex'

const apiKey = 'd1e9fd17cae2ddd2245ae383e22ab6c6'; 

const fetchWeather = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(error);
  }
};

export default createStore({
  state: {
    weatherData: null
  },
  mutations: {
    setWeatherData(state, weatherData) {
      state.weatherData = weatherData;
    }
  },
  actions: {
    async getWeatherData({ commit }, cityName) {
      const weatherData = await fetchWeather(cityName);
      commit('setWeatherData', weatherData);
    }
  },
  getters: {
    getWeatherData(state) {
      return state.weatherData;
    }
  }
});
