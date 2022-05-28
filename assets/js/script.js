var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}';
// var apiUrlForecast = 'https://api.openweathermap.org/data/2.5/onecall?';

    // search temp, windspeed, humidity, uv index
    fetch(apiUrlCity).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                return response.json().then(function(data) {
                    displayFacts(data);
                    save(data.daily[0].humidity, data.daily[0].temp, data.daily[0].wind_speed, data.daily[0].uvi,)
                });
            });
        };
    });

var displayFacts = function(data) {
    console.log(displayFacts);
    var weatherInfo = document.querySelector("#weather-info");

    // display weather text facts - CITY
    $("#city").text("");
    // display weather text facts - UL LIST
    $("weather-info").text("");
}



    // var getRepoIssues = function(repo) {
    //     var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    
    //     // make a get request to url
    //     fetch(apiUrl).then(function(response) {
    //     // request was successful
    //     if (response.ok) {
    //       response.json().then(function(data) {
    //         displayIssues(data);