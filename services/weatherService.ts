// I have seprated the service that get the weather condition form the logic of the app
// Here are the function that get the weather condition
// I used Open Weather map api, the free plan offers only 5 days a head
// I used axios packege to handle the get requests

import { rejects } from "assert";
import axios from "axios";
import { resolve } from "path";
import { baseURL, openWeatherApiKey } from "../environment /environment variables";

export async function getWeatherForcast(city: String) {

    let apiKey = openWeatherApiKey;

    try {
        const {data , status} = await axios.get(baseURL, {
            params: {
                q: city,
                units: 'metric',
                cnt: 56,
                appid: openWeatherApiKey
            }
        });
        
            let weather = JSON.parse(data);
            let list = weather.list;
            // Here we have the 
            resolve(list);

    } catch (exception) {
        process.stderr.write(`ERROR received from ${baseURL}: ${exception}\n`);
        rejects(exception);
    }
}

