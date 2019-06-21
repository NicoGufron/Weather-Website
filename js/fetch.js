
window.onload = function(){
    var key = "771bec044fb34de2a62164009191506";
    var city = "Surabaya";
    var btn = document.getElementById("qkota");
    var urlapixu = "https://api.apixu.com/v1/current.json?key=" + key + "&q=" + city + "&callback=?";
    fetch(urlapixu).then((resp)=>resp.json()).then(function(data){
            console.log(data);
            document.getElementById("city").innerHTML = data.location.name + ", " + data.location.country;
            document.getElementById("weather").innerHTML = data.current.condition.text;
            document.getElementById("weatherpic").innerHTML = "<img src='http:" + data.current.condition.icon + "' width='100'>";
            document.getElementById("suhu").innerHTML = " " + data.current.temp_c;
            document.getElementById("suhuf").innerHTML = " " + data.current.temp_f;
            document.getElementById("windspeed").innerHTML = " " + data.current.wind_kph;
            document.getElementById("compass").innerHTML = " " + data.current.wind_dir;
            document.getElementById("precipitation").innerHTML = " " + data.current.precip_in;
            document.getElementById("humid").innerHTML = " " + data.current.humidity;
        }).catch(function(error){
            console.log(error);
    });
}