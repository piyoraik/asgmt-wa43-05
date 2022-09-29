import type { CityList, CityWeather } from "@/interface";
import axios from "axios";

export const fetchWeatherList = async () => {
  const API_URL = "https://hal.architshin.com/wa/getCityList.php";

  const weatherList = axios.get<CityList>(API_URL).then((res) => {
    return res.data;
  });
  return weatherList;
};

export const fetchCityWeather = async (id: number) => {
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const appid = import.meta.env.VITE_API_KEY;

  const params = {
    lang: "ja",
    id,
    appid,
  };

  const cityWeather = axios
    .get<CityWeather>(API_URL, {
      params,
    })
    .then((res) => {
      return res.data;
    });
  return cityWeather;
};
