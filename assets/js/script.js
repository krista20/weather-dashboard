
// var apiUrlForecast = 'https://api.openweathermap.org/data/2.5/onecall?';
var searchBtn = document.getElementById("get-weather");
var inputEl = document.getElementById("search-city");
var currentWeatherTitle = document.getElementById("title-name");
var timeInfo = document.getElementById("info-date");
var currentWeatherInfo = document.getElementById("info-current");
var tempInfo = document.getElementById("info-temp");
var windInfo = document.getElementById("info-wind");
var humidityInfo = document.getElementById("info-humidity");
var uvindexInfo = document.getElementById("info-uvindex");


let key = "8c12b3ad070f07451d051e392d62dab6";
let lang = 'en';
let units = 'imperial';
console.log("testing");
// fetching weather data from openweathermap
var getData = function(city) {

// getWeatherApi
var api = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=en&lat=lat&lon=lon&units=imperial&appid=" + key;
// console.log(getData);
console.log(api);

fetch(api).then(function(response){
    if(response.ok) {
        return response.json().then(function(data) {
            console.log(data);
            currentWeatherTitle.textContent = data.name;
            // timeInfo.textContent = data.timezone;
                //date
                var currentTime = new Date().toISOString(timeInfo.textContent = data.dt);
                var month = currentTime.getMonth() + 1
                var day = currentTime.getDate()
                var year = currentTime.getFullYear()
                var date = day + "/" + month + "/" + year
                timeInfo.textContent = date;
            tempInfo.textContent = data.main.temp;
            windInfo.textContent = data.wind.speed;
            humidityInfo.textContent = data.main.humidity;
            uvindexInfo.textContent = data.uv;

        });
    };
});
};


var showCurrentData = function(data) {
    var weatherData = data.list[0];
    console.log(weatherData);
};

// Activating the search button
searchBtn.addEventListener("click", function(){
    console.log("click");
    inputEl.value;
    console.log(inputEl.value);
    getData(inputEl.value)

})

// getData("Austin");