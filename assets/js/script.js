var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
// var apiUrlForecast = 'https://api.openweathermap.org/data/2.5/onecall?';

    // search temp, wind, humidity, uv index
    fetch(apiUrlCity).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                return response.json().then(function(data) {
                    
                })
            })
        }
    })






    // var getRepoIssues = function(repo) {
    //     var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    
    //     // make a get request to url
    //     fetch(apiUrl).then(function(response) {
    //     // request was successful
    //     if (response.ok) {
    //       response.json().then(function(data) {
    //         displayIssues(data);