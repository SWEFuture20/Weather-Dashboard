// var APIKEY = config.MY_KEY;
function weatherGenerator(city){
    var APIKEY = '1b3cfcbab3962e57d2f22e946221f380';
    var queryURLOne = "http://api.openweathermap.org/data/2.5/forecast?q=Chicago&units=imperial&cnt=50&appid=" + APIKEY;
    var queryURLTwo = ""
    console.log(queryURLOne)
    $.ajax({
        url: queryURLOne,
        method: "GET",
      }).then(function(response) {
        console.log(response.list[34])
        console.log(response.list[2].main.temp)
        console.log(response.list[2].main.humidity)

        var newcity = $("#button-addon2").val().trim()
        console.log(newcity)
        var citysearch = $(".Temp").text(response.list[0].main.temp)
        var humiditysearch = $(".Humidity").text(response.list[0].main.humidity + '%')
        var windspeed = $(".Wind-Speed").text(response.list[0].wind.speed)
        var time = moment().add(1, 'day').format('MMM Do YY');
        var timeOne = $("<p>").text(time)
        var temp = $("<p>").text("Temp:" + response.list[2].main.temp)
        var humidity =  $("<p>").text("Humidity:" + response.list[2].main.humidity + '%')
        var iconcode = response.list[2].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        var IMGicon = $("<img>").attr("src", iconurl)
        console.log(time)
        $(".temp-results-one").append(timeOne, IMGicon, temp, humidity);

        var timeTwo = moment().add(2, 'day').format('MMM Do YY');
        var timeThree = $("<p>").text(timeTwo)
        var tempTwo = $("<p>").text("Temp:" + response.list[10].main.temp)
        // console.log(response.list[0].main.temp)
        var humidityTwo =  $("<p>").text("Humidity:" + response.list[10].main.humidity + '%')
        var iconcodeTwo = response.list[10].weather[0].icon;
        var iconurlTwo = "http://openweathermap.org/img/w/" + iconcodeTwo + ".png";
        var IMGiconTwo = $("<img>").attr("src", iconurlTwo)
        // console.log(time)
        $(".temp-results-two").append(timeThree, IMGiconTwo, tempTwo, humidityTwo);

        var timeFour = moment().add(3, 'day').format('MMM Do YY');
        var timeFive = $("<p>").text(timeFour)
        var tempThree = $("<p>").text("Temp:" + response.list[18].main.temp)
        // console.log(response.list[0].main.temp)
        var humidityThree =  $("<p>").text("Humidity:" + response.list[18].main.humidity + '%')
        var iconcodeThree = response.list[18].weather[0].icon;
        var iconurlThree = "http://openweathermap.org/img/w/" + iconcodeThree + ".png";
        var IMGiconThree = $("<img>").attr("src", iconurlThree)
        // console.log(time)
        $(".temp-results-three").append(timeFive, IMGiconThree, tempThree, humidityThree);

        var timeSix = moment().add(4, 'day').format('MMM Do YY');
        var timeSeven = $("<p>").text(timeSix)
        var tempFour = $("<p>").text("Temp:" + response.list[26].main.temp)
        // console.log(response.list[0].main.temp)
        var humidityFour =  $("<p>").text("Humidity:" + response.list[26].main.humidity + '%')
        var iconcodeFour = response.list[26].weather[0].icon;
        var iconurlFour = "http://openweathermap.org/img/w/" + iconcodeFour + ".png";
        var IMGiconFour = $("<img>").attr("src", iconurlFour)
        // console.log(time)
        $(".temp-results-four").append(timeSeven, IMGiconFour, tempFour, humidityFour);

        var timeEight = moment().add(5, 'day').format('MMM Do YY');
        var timeNine = $("<p>").text(timeEight)
        var tempFive = $("<p>").text("Temp:" + response.list[34].main.temp)
        // console.log(response.list[0].main.temp)
        var humidityFive =  $("<p>").text("Humidity:" + response.list[34].main.humidity + '%')
        var iconcodeFive = response.list[34].weather[0].icon;
        var iconurlFive = "http://openweathermap.org/img/w/" + iconcodeFive + ".png";
        var IMGiconFive = $("<img>").attr("src", iconurlFive)
        // console.log(time)
        $(".temp-results-five").append(timeNine,IMGiconFive, tempFive, humidityFive);
});

}

// $("#button-addon2").on("click", weatherGenerator) 
// {
//   // event.preventDefault();
// }

weatherGenerator();

var testOne = moment().add(1, 'day').format('L')
var testTwo = moment().add(2, 'day').format('L')
console.log(testOne, testTwo)
var test = moment().format("MMM Do YY");
