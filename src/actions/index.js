import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const API_KEY = "1fc5defee41c2f14f7b26ec1d181f823" ;
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	
	console.log("Request:", request);

	return{
		type:FETCH_WEATHER,
		payload:request
	};
}