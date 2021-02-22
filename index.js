
function weatherGenerator(city){
    var APIKEY = "1b3cfcbab3962e57d2f22e946221f380"
    var queryURLOne = "http://api.openweathermap.org/data/2.5/forecast?q=Chicago&units=imperial&cnt=5&appid=" + APIKEY;
    var queryURLTwo = ""
    console.log(queryURLOne)
    $.ajax({
        url: queryURLOne,
        method: "GET",
      }).then(function(response) {
        console.log(response.list[0].main)
        console.log(response.list[0].main.temp)
        console.log(response.list[0].main.humidity)

        var time = moment().format("MMM Do YY");
        var timeOne = $("<p>").text(time)
        var temp = $("<p>").text("Temp:" + response.list[0].main.temp)
        var humidity =  $("<p>").text("Humidity:" + response.list[0].main.humidity)   
        console.log(time)
        $(".temp-results").append(timeOne, temp);
});

}
weatherGenerator();
