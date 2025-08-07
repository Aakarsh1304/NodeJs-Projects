import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Apikey = 'Make your own api key';
const base_url = 'https://api.openweathermap.org/data/2.5/weather';
const getWeather = async (city) => {
  const url = `${base_url}?q=${city}&appid=${Apikey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Please enter a valid city name');
    }
        const data = await response.json();
    console.log(data);
    console.log(`Weather in ${data.name}:`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Weather: ${data.weather[0].description}`);
    console.log(`Humidity: ${data.main.humidity}%`);
    console.log(`Wind Speed: ${data.wind.speed} m/s`);
    console.log(`Visibility: ${data.visibility / 1000} km`);
    console.log(`Cloudiness: ${data.clouds.all}%`);
}
   catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const city = await rl.question('Enter the city name: ');
await getWeather(city);
rl.close();
