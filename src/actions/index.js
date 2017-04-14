import axios from "axios";
const API_KEY = "1fc5defee41c2f14f7b26ec1d181f823" ;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city,country){
	if(!country){
		country = "us";
		console.log("country not found, setting default");
	}
	const url = `${ROOT_URL}&q=${city},${country}`;
	const request = axios.get(url);
	

	return{
		type:FETCH_WEATHER,
		payload:request
	};
}