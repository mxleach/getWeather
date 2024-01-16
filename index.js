require('dotenv').config();
const fetch = require('node-fetch');
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 function getWeather(zip) {
    const apiKey= process.env.WEATHER_API_KEY;
    const url =   `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${zip}`;

    return fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
        .then(data => {
            const weatherCondition = data.current.condition.text;
            const temperature = data.current.temp_f;
            const feelsLike = data.current.feelslike_f;
            const rainChance = data.current.precip_in > 0 ? `${data.current.precip_in * 100}%` : "0%";
            return `The current weather in ${zip} is: ${weatherCondition} and ${temperature}°F, with a ${rainChance} chance of rain and a feels like temperature of ${feelsLike}°F`;
         })
         .catch(error => {
            console.error(`Error fetching weather data:`, error);
            return `Unable to retrieve weather data.`;
                 });

}
r1.on('line', (input) => {
    const match = input.match(/^getWeather\((\d+)\)$/);
    if (match) {
        const zip = match[1];
        getWeather(zip).then(console.log).catch(console.error);
    } else {
        console.log(`Invalid command. Please use the format 'getWeather(ZIP_CODE)'.`);
    }
});

console.log(`Enter 'getWeather(ZIP_CODE)' to fetch weather data.`);