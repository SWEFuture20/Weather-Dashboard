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

        var time = moment().format("MMM Do YY");
        var timeOne = $("<p>").text(time)
        var temp = $("<p>").text("Temp:" + response.list[2].main.temp)
        var humidity =  $("<p>").text("Humidity:" + response.list[2].main.humidity + '%')
        var iconcode = response.list[2].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        var IMGicon = $("<img>").attr("src", iconurl)
        console.log(time)
        $(".temp-results-one").append(timeOne, IMGicon, temp, humidity);

        // var time = moment().format("MMM Do YY");
        // var timeOne = $("<p>").text(time)
        var tempTwo = $("<p>").text("Temp:" + response.list[10].main.temp)
        // console.log(response.list[0].main.temp)
        var humidityTwo =  $("<p>").text("Humidity:" + response.list[10].main.humidity + '%')
        var iconcodeTwo = response.list[10].weather[0].icon;
        var iconurlTwo = "http://openweathermap.org/img/w/" + iconcodeTwo + ".png";
        var IMGiconTwo = $("<img>").attr("src", iconurlTwo)
        // console.log(time)
        $(".temp-results-two").append(IMGiconTwo, tempTwo, humidityTwo);


        var tempThree = $("<p>").text("Temp:" + response.list[18].main.temp)
        // console.log(response.list[0].main.temp)
        var humidityThree =  $("<p>").text("Humidity:" + response.list[18].main.humidity + '%')
        var iconcodeThree = response.list[18].weather[0].icon;
        var iconurlThree = "http://openweathermap.org/img/w/" + iconcodeThree + ".png";
        var IMGiconThree = $("<img>").attr("src", iconurlThree)
        // console.log(time)
        $(".temp-results-three").append(IMGiconThree, tempThree, humidityThree);

        var tempFour = $("<p>").text("Temp:" + response.list[26].main.temp)
        // console.log(response.list[0].main.temp)
        var humidityFour =  $("<p>").text("Humidity:" + response.list[26].main.humidity + '%')
        var iconcodeFour = response.list[26].weather[0].icon;
        var iconurlFour = "http://openweathermap.org/img/w/" + iconcodeFour + ".png";
        var IMGiconFour = $("<img>").attr("src", iconurlFour)
        // console.log(time)
        $(".temp-results-four").append(IMGiconFour, tempFour, humidityFour);

        var tempFive = $("<p>").text("Temp:" + response.list[34].main.temp)
        // console.log(response.list[0].main.temp)
        var humidityFive =  $("<p>").text("Humidity:" + response.list[34].main.humidity + '%')
        var iconcodeFive = response.list[34].weather[0].icon;
        var iconurlFive = "http://openweathermap.org/img/w/" + iconcodeFive + ".png";
        var IMGiconFive = $("<img>").attr("src", iconurlFive)
        // console.log(time)
        $(".temp-results-five").append(IMGiconFive, tempFive, humidityFive);
});

}


weatherGenerator();

function timeOne(){
    const currentMoment = moment().add(0, 'days');
const endMoment = moment().add(6, 'days');
while (currentMoment.isBefore(endMoment, 'day')) {
  console.log(`${currentMoment.format('l')}`);
  currentMoment.add(1, 'days');
}
}
timeOne()

function daysOfWeek(){
    var start = new Date();
var end = new Date();


var loop = new Date(start);
while(loop <= end){
   console.log(loop);           

   var newDate = loop.setDate(loop.getDate() + 1);
   loop = new Date(newDate);
} 

}

daysOfWeek();

var sec = 1614189600;
var date = new Date(sec * 1000);
var timestr = date.toLocaleTimeString();

console.log(date, timestr);

let unix_timestamp = 1614600000;
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);