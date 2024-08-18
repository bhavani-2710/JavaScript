const apiKey = "c6e662868fc0fa7387b4a9072c0e0235";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const iconLabel = document.querySelector(".icon-label");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error"),style.display = "block";
        document.querySelector(".weather"),style.display = "none";                
    } else {
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        iconLabel.innerHTML = "Cloudy";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        iconLabel.innerHTML = "Clear";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
        iconLabel.innerHTML = "Rainy";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        iconLabel.innerHTML = "Drizzle";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
        iconLabel.innerHTML = "Misty";
    }
    else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
        iconLabel.innerHTML = "Snow";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error"),style.display = "none";
    }            
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})