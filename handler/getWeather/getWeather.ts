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

  // I assumed that if the weather if clear than it would be suitable for outdoor's activities
  
  let city: String;
  let weatherList: any;
  let date: Date;

  await getWeatherForcast(city)
    .then((resolve) => {
      weatherList = resolve;
      weatherList.forEach(element => {
        let weather = element.weather.main;
        if (weather == 'Clear') {
          date = element.dt_txt;
        }
      });
    }).catch((rejects) =>{
      process.stderr.write(`ERROR: ${rejects}\n`);
    });

  return {
    statusCode: 200,
    body: JSON.stringify({date}),
    headers: { "Content-Type": "application/json" },
  };
};