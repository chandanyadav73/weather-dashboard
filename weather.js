const apiKey = 'YOUR_API_KEY';

function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) return alert('Please enter a city name');

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => alert('City not found'));
}

function displayWeather(data) {
  const cityName = document.getElementById('cityName');
  const temp = document.getElementById('temp');
  const desc = document.getElementById('desc');
  const humidity = document.getElementById('humidity');
  const wind = document.getElementById('wind');

  cityName.textContent = data.name;
  temp.textContent = `Temperature: ${data.main.temp}°C`;
  desc.textContent = `Description: ${data.weather[0].description}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
