// var APIKEY = config.MY_KEY;
function weatherGenerator(city){
  // create a variable for the API KEY
    var APIKEY = '1b3cfcbab3962e57d2f22e946221f380';
    // Create a variable that takes in the api key and the city parameter inside of the API link
    var queryURLOne = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&cnt=50&appid=" + APIKEY;
    console.log(queryURLOne)
    $.ajax({
        url: queryURLOne,
        method: "GET",
      }).then(function(response) {
        // testing the results from the api for a certain city i.e. Dallas or New York
        console.log(response.list[34])
        console.log(response.list[2].main.temp)
        console.log(response.list[2].main.humidity)
        
        // Lines 18 I used moment.js library to disaply the current time
        // Lines 19-25 I created variables that would take the weather icon, temperature, humidity, and wind speed in the jumbotron
        var timeT = moment().format("MMM Do YY")
        var currentWeather = response.list[0].weather[0].icon;
        var currenticonurl = "http://openweathermap.org/img/w/" + currentWeather + ".png";
        var currenticon = $("<img>").attr("src", currenticonurl)
        var tempsearch = $(".Temp").text("Temperature:" + response.list[0].main.temp)
        var humiditysearch = $(".Humidity").text("Humidity:" + response.list[0].main.humidity + '%')
        var windspeed = $(".Wind-Speed").text("Wind Speed:" + response.list[0].wind.speed)
      // I created a p tag to put the following variables inside of that element
        $("<p>").text(tempsearch, humiditysearch, windspeed)

        // Lines 30 - 39 I defined a variable for one day after the current day for the temp, humidity, and icon 
        $(".hello").append(timeT, currenticon)
        var time = moment().add(1, 'day').format('MMM Do YY');
        var timeOne = $("<p>").text(time)
        var temp = $("<p>").text("Temp:" + response.list[2].main.temp)
        var humidity =  $("<p>").text("Humidity:" + response.list[2].main.humidity + '%')
        var iconcode = response.list[2].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        var IMGicon = $("<img>").attr("src", iconurl)
        console.log(time)
        $(".temp-results-one").append(timeOne, IMGicon, temp, humidity);

        // Lines 42 - 51 I defined a variable for two days after the current day for the temp, humidity, and icon 
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

        // Lines 54 - 63 I defined a variable for three days after the current day for the temp, humidity, and icon
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
        
        // Lines 66-75 I defined a variable for four days after the current day for the temp, humidity, and icon
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

        // Lines 78-87 I defined a variable for five days after the current day for the temp, humidity, and icon
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


// I created a click event to to take the value of a city entered in the search field and append it to the hello class along with the humidity, temp, and wind speed
$("#button-addon2").on("click", function(event) {
  event.preventDefault();

  var search = $("#search-field").val().trim()
  $(".hello").append(search)


// Created a li element with a class that will appear on the left after the search field text is added to the jumbotron
  var searchTwo = $('.list-group')
  var searchbutton = $("<li>").addClass("btn list-group-item")
  searchbutton.append(search)
  searchTwo.append(searchbutton)
  weatherGenerator(search)

  

})
// This is a function that will clear all information once the clear button is clicked. The click event is on line 123
function clear() {
  $(".hello").empty();
  $(".temp-results-one").empty();
  $(".temp-results-two").empty();
  $(".temp-results-three").empty();
  $(".temp-results-four").empty();
  $(".temp-results-five").empty();
  $(".Temp").empty();
  $(".Humidity").empty();
  $(".Wind-Speed").empty();
}
$("#clear").on("click", clear);


// I tested how to add certain days above the current day
var testOne = moment().add(1, 'day').format('L')
var testTwo = moment().add(2, 'day').format('L')
console.log(testOne, testTwo)
var test = moment().format("MMM Do YY");
