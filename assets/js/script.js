
// var apiUrlForecast = 'https://api.openweathermap.org/data/2.5/onecall?';
var searchBtn = document.getElementById("get-weather");
var inputEl = document.getElementById("search-city");


let key = "8c12b3ad070f07451d051e392d62dab6";
let lang = 'en';
let units = 'metric';
console.log("testing");
// fetching weather data from openweathermap
var getData = function(city) {

// getWeatherApi
var api = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + key;
// console.log(getData);
console.log(api);

fetch(api).then(function(response){
    if(response.ok) {
        return response.json().then(function(data) {
            console.log(data);
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

getData("Austin");
// fetch(api) 
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });








    // search temp, windspeed, humidity, uv index
    // fetch(api).then(function(response) {
    //     if (response.ok) {
    //         return response.json().then(function(data) {
                
    //         //     return response.json().then(function(data) {
    //         //         displayFacts(data);
    //         //         save(data.daily.humidity, data.daily[0].temp, data.daily.wind_speed, data.daily.uvi,)
    //         //   console.log(data)  });
    //         });
    //     };
    // });

// var displayFacts = function(data) {
//     console.log(displayFacts);
//     var weatherInfo = document.querySelector("#weather-info");
//     var humidityInfo = data.daily.humidity;
//     var tempInfo = data.daily.temp;
//     var windspeedInfo = data.daily.wind_speed;
//     var uvInfo = data.daily.uvi;

//     // display weather text facts - CITY
//     $("#city").text(data);
//     // display weather text facts - UL LIST
//     $("weather-info").text(humidityInfo, tempInfo, windspeedInfo, uvInfo);
// }



    // var getRepoIssues = function(repo) {
    //     var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    
    //     // make a get request to url
    //     fetch(apiUrl).then(function(response) {
    //     // request was successful
    //     if (response.ok) {
    //       response.json().then(function(data) {
    //         displayIssues(data);