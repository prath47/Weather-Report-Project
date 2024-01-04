const ApiKey = "bd5e378503939ddaee76f12ad7a97608";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".search input")
const SearchBtn = document.querySelector(".search button")
const weather_icon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather")

document.onkeydown = function(e){
    // console.log(e.keyCode);
    if(e.keyCode == 13) checkWeather(SearchBox.value);
}
async function checkWeather(city){
    const responce = await fetch(ApiUrl + city+ `&appid=${ApiKey}`);
    var data = await responce.json();

    console.log(data);

    document.querySelector(".City").innerHTML = data.name
    document.querySelector(".temperature").innerHTML = `${Math.round(data.main.temp)}°c`
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`

    if(data.weather[0].main == "Clouds"){
        weather_icon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weather_icon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weather_icon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weather_icon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weather_icon.src = "images/mist.png"
    }

    // weather.style.display = "block";
    weather.classList.remove('hide');

    SearchBox.value = ""
}

SearchBtn.addEventListener('click' , ()=>{
    checkWeather(SearchBox.value);
});