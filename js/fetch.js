
window.onload = function(){
    // var city = localStorage.getItem("cityName");
//     var key = "9df8a840d69a2493181ce680e72b344a";
    var key = "771bec044fb34de2a62164009191506";
    var city = "Surabaya";
    var btn = document.getElementById("qkota");
    var namak,suhu,suhuf,windspeed,compass,precip,humid;
    const urlapixu = "https://api.apixu.com/v1/current.json?key=" + key + "&q=" + city + "&callback=?";        fetch(urlapixu).then((resp)=>resp.json()).then(function(data){
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
    // namak = document.getElementById("city").value;
    // suhu = document.getElementById("suhu").value;
    // suhuf = document.getElementById("suhuf").value;
    // windspeed = document.getElementById("windspeed").value;
    // compass = document.getElementById("compass").value;
    // precip = document.getElementById("precipitation").value;
    // humid = document.getElementById("humid").value;

    // localStorage.setItem("nama",namak);
    // localStorage.setItem("suhu",suhu);
    // localStorage.setItem("suhuf",suhuf);
    // localStorage.setItem("windspeed",windspeed);
    // localStorage.setItem("compass",compass);
    // localStorage.setItem("precipitation",precip);
    // localStorage.setItem("humid",humid);

    btn.onclick = function(){
        city = document.getElementById("kota").value;
        // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=metric";
        const urlapixu = "https://api.apixu.com/v1/current.json?key=" + key + "&q=" + city + "&callback=?";
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
//     fetch(url).then((resp)=>resp.json()).then(function(data){
//             console.log(data);
//             document.getElementById("city").innerHTML = data.name + ", " + data.sys.country;
//             document.getElementById("weather").innerHTML = data.weather[0].description;
//             document.getElementById("weatherpic").innerHTML = "<img src= icon/" + data.weather[0].icon + ".svg width='100'>";
//             document.getElementById("suhu").innerHTML = " " + data.main.temp;
//             document.getElementById("highsuhu").innerHTML = " " + data.main.temp_max;
//             document.getElementById("lowsuhu").innerHTML = " " + data.main.temp_min;
//             document.getElementById("windspeed").innerHTML = " " + data.wind.speed;
//             document.getElementById("winddeg").innerHTML = " "+data.wind.deg;
        }).catch(function(error){
                console.log(error);
        });
    }
}