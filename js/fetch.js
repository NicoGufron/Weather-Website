
window.onload = function(){
    var key = "771bec044fb34de2a62164009191506";
    var city = document.getElementById("city").innerHTML = localStorage.getItem("City");;
    var btn = document.getElementById("qkota");

    var urlapixu = "https://api.apixu.com/v1/forecast.json?key=" + key + "&q=" + city + "&days=7";
    fetch(urlapixu).then((resp)=>resp.json()).then(function(data){
            console.log(data);
            document.getElementById("city").innerHTML = data.location.name + ", " + data.location.country;
            document.getElementById("weather").innerHTML = data.forecast.forecastday[1].day.condition.text;
            document.getElementById("weatherpic").innerHTML = "<img src='http:" + data.forecast.forecastday[1].day.condition.icon + "' width='100'>";
            document.getElementById("suhu").innerHTML = " " + data.forecast.forecastday[1].day.maxtemp_c;
            document.getElementById("suhuf").innerHTML = " " + data.forecast.forecastday[1].day.maxtemp_f;
            document.getElementById("precipitation").innerHTML = " " + data.forecast.forecastday[1].day.totalprecip_in;
            document.getElementById("humid").innerHTML = " " + data.forecast.forecastday[1].day.avghumidity;
            document.getElementById("uv").innerHTML = " " + data.forecast.forecastday[1].day.uv;
            document.getElementById("visual").innerHTML = " " + data.forecast.forecastday[1].day.avgvis_km;
            document.getElementById("sunrise").innerHTML = " " + data.forecast.forecastday[1].astro.sunrise;
            document.getElementById("sunset").innerHTML = " " + data.forecast.forecastday[1].astro.sunset;
            document.getElementById("tanggal").innerHTML = " " + data.forecast.forecastday[1].date;
        }).catch(function(error){
            console.log(error);
    });
    btn.onclick = function(){
        city = document.getElementById("kota").value;
        var urlapixu = "https://api.apixu.com/v1/forecast.json?key=" + key + "&q=" + city + "&days=7";
        fetch(urlapixu).then((resp)=>resp.json()).then(function(data){
            console.log(data);
            
            document.getElementById("city").innerHTML = data.location.name + ", " + data.location.country;
            document.getElementById("weather").innerHTML = data.forecast.forecastday[1].day.condition.text;
            document.getElementById("weatherpic").innerHTML = "<img src='http:" + data.forecast.forecastday[1].day.condition.icon + "' width='100'>";
            document.getElementById("suhu").innerHTML = " " + data.forecast.forecastday[1].day.maxtemp_c;
            document.getElementById("suhuf").innerHTML = " " + data.forecast.forecastday[1].day.maxtemp_f;
            document.getElementById("precipitation").innerHTML = " " + data.forecast.forecastday[1].day.totalprecip_in;
            document.getElementById("humid").innerHTML = " " + data.forecast.forecastday[1].day.avghumidity;
            document.getElementById("uv").innerHTML = " " + data.forecast.forecastday[1].day.uv;
            document.getElementById("visual").innerHTML = " " + data.forecast.forecastday[1].day.avgvis_km;
            document.getElementById("sunrise").innerHTML = " " + data.forecast.forecastday[1].astro.sunrise;
            document.getElementById("sunset").innerHTML = " " + data.forecast.forecastday[1].astro.sunset;
            document.getElementById("tanggal").innerHTML = " " + data.forecast.forecastday[1].date;

            localStorage.setItem("City", data.location.name + ", " + data.location.country);
            localStorage.setItem("Weather", data.forecast.forecastday[1].day.condition.text);
            localStorage.setItem("Weather Picture", "<img src='http:" + data.forecast.forecastday[1].day.condition.icon + "'width='100'>");
            localStorage.setItem("Max Temp C", data.forecast.forecastday[1].day.maxtemp_c);
            localStorage.setItem("Max Temp F", data.forecast.forecastday[1].day.maxtemp_f);
            localStorage.setItem("Precipitation", data.forecast.forecastday[1].day.totalprecip_in);
            localStorage.setItem("Humidity", data.forecast.forecastday[1].day.avghumidity);
            localStorage.setItem("UV", data.forecast.forecastday[1].day.uv);
            localStorage.setItem("Avg Visual", data.forecast.forecastday[1].day.avgvis_km);
            localStorage.setItem("Sunrise", data.forecast.forecastday[1].astro.sunrise);
            localStorage.setItem("Sunset", data.forecast.forecastday[1].astro.sunset);
            localStorage.setItem("Date", data.forecast.forecastday[1].date);
        }).catch(function(error){
            console.log(error);
    })};
}
