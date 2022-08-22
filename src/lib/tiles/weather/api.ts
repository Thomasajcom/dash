import axios from "axios";

import type {  WeatherCompact } from "./models";


export async function getWeather(): Promise<WeatherCompact> {
  const res = await axios.get<WeatherCompact>(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.2105259&lon=10.9364508`
  );

  return res.data
}