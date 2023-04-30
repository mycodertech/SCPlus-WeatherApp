// Date

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDate = document.querySelector(".date");

currentDate.innerHTML = `${day} ${hour}:${minutes}`;

// Search City

function currentTemp(response) {
  let temperature = document.querySelector("#searched-city-temp");
  let temp = Math.round(response.data.main.temp);
  temperature.innerHTML = `${temp}°F`;
}

function searching(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-input");
  let cityHeader = document.querySelector("#title");
  let citySearch = searchInput.value;
  cityHeader.innerHTML = `${citySearch}`;
  let units = "imperial";
  let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(currentTemp);
}

let search = document.querySelector("#searchCity");
search.addEventListener("submit", searching);

// Week 5 - Current Location button

function currentLocationTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let locationCityName = response.data.name;
  let tempTwo = document.querySelector("#searched-city-temp");
  tempTwo.innerHTML = `${temperature}°F`;
  let headerCityName = document.querySelector("#title");
  headerCityName.innerHTML = `${locationCityName}`;
}

function locationTemp(location) {
  console.log(location);
  let lat = location.coords.latitude;
  let lon = location.coords.longitude;
  let metric = "imperial";
  let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${metric}&appid=${apiKey}`;
  axios.get(apiUrl).then(currentLocationTemp);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(locationTemp);
}

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getLocation);

//Bonus week 4

function celUpdate() {
  let low = document.querySelector(".low");
  let high = document.querySelector(".high");
  low.innerHTML = "25°";
  high.innerHTML = "40°";
}

function farUpdate() {
  let low = document.querySelector(".low");
  let high = document.querySelector(".high");
  low.innerHTML = "43°";
  high.innerHTML = "65°";
}

let cel = document.querySelector("#cel");
let far = document.querySelector("#far");

cel.addEventListener("click", celUpdate);
far.addEventListener("click", farUpdate);
