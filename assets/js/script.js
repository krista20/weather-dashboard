
// var apiUrlForecast = 'https://api.openweathermap.org/data/2.5/onecall?';




var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?&JSONP=test';

    // search temp, windspeed, humidity, uv index
    fetch(apiUrlCity).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                
                return response.json().then(function(data) {
                    displayFacts(data);
                    save(data.daily.humidity, data.daily[0].temp, data.daily.wind_speed, data.daily.uvi,)
              console.log(data)  });
            });
        };
    });

var displayFacts = function(data) {
    console.log(displayFacts);
    var weatherInfo = document.querySelector("#weather-info");
    var humidityInfo = data.daily.humidity;
    var tempInfo = data.daily.temp;
    var windspeedInfo = data.daily.wind_speed;
    var uvInfo = data.daily.uvi;

    // display weather text facts - CITY
    $("#city").text(data);
    // display weather text facts - UL LIST
    $("weather-info").text(humidityInfo, tempInfo, windspeedInfo, uvInfo);
}



    // var getRepoIssues = function(repo) {
    //     var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    
    //     // make a get request to url
    //     fetch(apiUrl).then(function(response) {
    //     // request was successful
    //     if (response.ok) {
    //       response.json().then(function(data) {
    //         displayIssues(data);