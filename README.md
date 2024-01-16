# getWeather(zip)
getWeather(zip) is a simple node.js command-line app that retrieves current weather information based on a given ZIP code. Uses the WeatherAPI to fetch data, returned as a string. 

## Features
- Fetches current weather data by ZIP code.
- Displays weather condition, temperature (F), % precipitation chance, and a 'feels-like' temp.
- Accessed via command line.

## How to install & use getWeather
- Initialize a Node.js project w/ `npm init`
- Clone the repo  `git clone https://github.com/mxleach/getWeather.git`
- Navigate to the project directory `cd getWeather`
- Create an account at WeatherAPI.com and retrieve your API Key
- `npm install dotenv` and add your API key to a '.env' file. 
- `npm install node-fetch`
- `node index.js`
- enter getWeather(zip) to retrieve current weather data.

## Future Features:
- Add the ability to retrieve extended weather data (snow, rain, wind speed) by passing additional parameters in CLI.
- Provide functionality for retrieving the same weather data in metric units.
- Add functionality to provide a 5-day forecast for the zip code, with the forecasted highs and lows for each day. (JSON)
