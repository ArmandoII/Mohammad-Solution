import { rejects } from "assert";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  Context
} from "aws-lambda";
import { getWeatherForcast } from "../../services/weatherService";

/** 
 * - Product Owner Notes -
 * 
 * Here's some example data containing `ActivityDate`s you can use for your implementation:
 * Workout Data: https://s3.eu-west-1.amazonaws.com/dev-challenges.myclubs.com/frontend/frontend_challenge_activities.json
 * 
 * You can use a package like https://www.npmjs.com/package/node-fetch#json to fetch the data.
 * For the forecast to work, it is fine to mock/replace the `start` date of an `ActivityDate` with a random date in the future so you can get an actual forecast.
 */
export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  // TODO: Implementation :)

  // To get weather forcast we only need the location or the city of the activity 
  // there is no need to pass a whole activity object.
  
  let city = event.pathParameters.city;
  let weatherList: any;
  let forcast: [{
      weather:any,
      activityDate:any
    }];

  await getWeatherForcast(city)
    .then((resolve) => {
      weatherList = resolve;
      weatherList.forEach(element => {
        let currentWeather = element.weather.main;
        let date = element.dt_txt;
        forcast.push({weather:currentWeather ,activityDate: date});
      });
    }).catch((rejects) =>{
      process.stderr.write(`ERROR: ${rejects}\n`);
    });

  return {
    statusCode: 200,
    body: JSON.stringify({forcast}),
    headers: { "Content-Type": "application/json" },
  };
};