window.onload = function(){
    // var city = localStorage.getItem("cityName");
    var key = "9df8a840d69a2493181ce680e72b344a";
    var city = "Surabaya";
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=metric";
    fetch(url).then((resp)=>resp.json()).then(function(data){
            console.log(data);
            document.getElementById("city").innerHTML = data.name + ", " + data.sys.country;
            document.getElementById("weather").innerHTML = data.weather[0].description;
            document.getElementById("weatherpic").innerHTML = "<img src= icon/" + data.weather[0].icon + ".svg width='100'>";
            document.getElementById("suhu").innerHTML = "<img src='icon/temperature.svg' height='24'/> " + data.main.temp;
            document.getElementById("highsuhu").innerHTML = "<img src='icon/highest-temperature.svg' height='24'/> " + data.main.temp_max;
            document.getElementById("lowsuhu").innerHTML = "<img src='icon/lowest-temperature.svg' height='24'/> " + data.main.temp_min;
            document.getElementById("windspeed").innerHTML = "<img src='icon/wind-speed.svg' height='24'/> " + data.wind.speed;
    }).catch(function(error){
            console.log(error);
    });
}