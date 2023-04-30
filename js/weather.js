const API_KEY = "a530d8266406fbb851d09882ddff8bd1";

function onSeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const Weather = document.getElementById("weather");
      const city = Weather.querySelector("span:first-child");
      const name = data.name;
      city.innerText = name;
      const cir = Weather.querySelector("span:nth-child(2)");
      cir.style.opacity = "1";
      const cityWeather = Weather.querySelector("span:last-child");
      const round = Math.round(data.main.temp);
      const weather = `${round}°C`;
      cityWeather.innerText = weather;

      // const img = Weather.querySelector("span:nth-child(2)");
      // const bgImage = document.createElement("img");
      // const cityweather = Weather.querySelector("span:last-child");

      // const weather = `${data.weather[0].main} , ${data.main.temp}`;
      // const weatherIcon = data.weather[0].icon;
      // const icon = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      // console.log(data.weather[0].icon);
      // city.innerText = name;
      // cityweather.innerText = weather;

      // bgImage.src = `${icon}`;
      // document.body.appendChild(bgImage);
      // weathericon.innerText = icon;
    });
}
function onGeoError(params) {
  alert("can't find no weather");
}

navigator.geolocation.getCurrentPosition(onSeoOk, onGeoError);
