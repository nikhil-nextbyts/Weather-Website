let baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "&units=metric&appid=75e6434cb45ef6acfeaee7f49dbcfc03";

let city = "agra";

const city_name = document.querySelector("#city").value;

const btn = document.querySelector("#checkWeather");
const tmp = document.querySelector("#tmp");
const feels = document.querySelector("#feel");
const w_speed = document.querySelector("#w_speed");
const hmd = document.querySelector("#hmd");
const wdc = document.querySelector("#wdc");

const fetch_weather = async () => {
     let URL = `${baseURL}${city_name}${apiKey}`; 
    let response = await fetch(URL);
    let data = await response.json();
    if(response.ok) {
        let tempreture = data.main.temp;
        let feels_like = data.main.feels_like;
        let Humidity = data.main.humidity;
        let weather_condition = data.weather[0].description;
        let wind_speed = data.wind.speed;

        tmp.innerText = tempreture;
        feels.innerText = feels_like;
        w_speed.innerText = wind_speed;
        hmd.innerText = Humidity;
        wdc.innerText = weather_condition;
    }
}

btn.addEventListener("click", () => {
    fetch_weather();
});
