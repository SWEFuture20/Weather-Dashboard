// var APIKEY = config.MY_KEY;
function weatherGenerator(city){
    var APIKEY = '1b3cfcbab3962e57d2f22e946221f380';
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
        var humidity =  $("<p>").text("Humidity:" + response.list[0].main.humidity + '%')
        var iconcode = response.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        var IMGicon = $("<img>").attr("src", iconurl)
        console.log(time)
        $(".temp-results").append(timeOne, IMGicon, temp, humidity);

        
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