async function getLocation(placeName) {
  let loc_Url = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&limit=1&appid=71b7ad91a96968872851dec68a282946`
  );
  let data = await loc_Url.json();
  // console.log(data[0].name);
  let place = data[0].name
  let latitude = data[0].lat;
  let longitude = data[0].lon;
  // console.log([latitude, longitude]);

  let weather_URL = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3c9e5ec88032918d576eb15c92916ddb`
  );
  let response = await weather_URL.json();



  // PUTTING THE DATA INTO THE VARIABLES
  // wind speed section
  let wind_speed = response.wind["speed"];
  let wind_deg = response.wind["deg"];
  let feels_like = response.main["feels_like"];

  // TEMPERATURE SECTION
  let temp = response.main["temp"];
  let max_temp = response.main["temp_max"];
  let min_temp = response.main["temp_min"];
  // console.table([temp, max_temp, min_temp]);
  // HUMIDITY SECTION
  let country = response.sys["country"];
  let sunrise = response.sys["sunrise"];
  let sunset = response.sys["sunset"];
  let pressure = response.main["pressure"];
  humidity = response.main["humidity"];
  // console.table(["humidity",sunrise,pressure,humidity ]);


  // wind speed section

  document.querySelector(".blockWindSpeed").innerHTML = ` ${wind_speed} km/hr `;
  document.getElementById("wind_speed").innerHTML = ` ${wind_speed} km/hr`;
  document.getElementById("wind_degrees").innerHTML = ` ${wind_deg} deg`;
  document.getElementById("feels_like").innerHTML = ` ${feels_like} `;

  // TEMPERATURE SECTION
  document.querySelector(".blockTemp").innerHTML = ` ${temp} k `;
  document.getElementById("temp").innerHTML = ` ${temp} `;
  document.getElementById("max_temp").innerHTML = ` ${max_temp}`;
  document.getElementById("min_temp").innerHTML = ` ${min_temp}`;

  // HUMIDITY SECTION
  document.querySelector(".blockHumdity").innerHTML = ` ${humidity} % `;
  document.getElementById("pressure").innerHTML = ` ${pressure}`;
  document.getElementById("sunrise").innerHTML = ` ${sunrise}`;
  document.getElementById("humidity").innerHTML = ` ${humidity}`;

  //Location section
  document.getElementById("Country_code").innerHTML = ` ${country}`;
  document.getElementById("location").innerHTML = ` ${place}`;
  document.getElementById("latitude").innerHTML = ` ${latitude}`;
  document.getElementById("longitude").innerHTML = ` ${longitude}`;


}
getLocation("Bengaluru");

document.getElementById("searchBar").addEventListener("input", (e) => {
  // console.log("on search box",e.target.value)
  // e.target.preventDefault();
  let searchValue = e.target.value
  getLocation(searchValue)
})
let updateCityWeahter = async (city) => {
  let loc_Url = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=71b7ad91a96968872851dec68a282946`
  );
  data = await loc_Url.json();
  console.log(data[0].name);
  let place = data[0].name
  let latitude = data[0].lat;
  let longitude = data[0].lon;
  // console.log([latitude, longitude]);

  let weather_URL = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3c9e5ec88032918d576eb15c92916ddb`
  );
  let response = await weather_URL.json();

  let wind_speed = response.wind["speed"];
  let wind_deg = response.wind["deg"];
  let feels_like = response.main["feels_like"];

  // TEMPERATURE SECTION
  let temp = response.main["temp"];
  let max_temp = response.main["temp_max"];
  let min_temp = response.main["temp_min"];
  // console.table([temp, max_temp, min_temp]);
  // HUMIDITY SECTION
  let country = response.sys["country"];
  let sunrise = response.sys["sunrise"];
  let sunset = response.sys["sunset"];
  let pressure = response.main["pressure"];
  let humidity = response.main["humidity"];


  document.querySelector(`.${city}wind_speed`).innerHTML = `${wind_speed}`
  document.querySelector(`.${city}wind_degrees`).innerHTML = `${wind_deg}`
  document.querySelector(`.${city}temp`).innerHTML = `${temp}`
  document.querySelector(`.${city}humidity`).innerHTML = `${humidity}`
  document.querySelector(`.${city}sunset`).innerHTML = `${sunset}`
  document.querySelector(`.${city}min_temp`).innerHTML = `${min_temp}`
  document.querySelector(`.${city}cloud_pct`).innerHTML = `${pressure}`
  document.querySelector(`.${city}feels_like`).innerHTML = `${feels_like}`
  document.querySelector(`.${city}sunrise`).innerHTML = `${sunrise}`
  document.querySelector(`.${city}max_temp`).innerHTML = `${max_temp}`
  console.log(`${city}`,[wind_speed,wind_deg])
}
updateCityWeahter("Delhi")
updateCityWeahter("Chennai")
updateCityWeahter("Mumbai")

window.addEventListener("reload", (e) => {
  e.preventDefault();
})