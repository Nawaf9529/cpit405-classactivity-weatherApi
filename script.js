let url="https://api.openweathermap.org/data/2.5/weather?lat=";
let key="97de504aa4c8beb05d816ab8b74db86b";



let btn= document.getElementById("btn");

btn.addEventListener("click",function(){

let lon=document.getElementById("lon").value;
let lan=document.getElementById("lan").value;

url+=lan+"&lon="+lon+"&appid="+key

sendFetchAwiat(url);
});


async function sendFetchAwiat(url){

    let proms= await fetch(url);
    let jsonObj= await proms.json();

    genrateOutput(jsonObj);
}

function genrateOutput(data){
let output=document.getElementById("result");
output.style.display="inline-block";


let cityname=document.createElement("span");
cityname.innerText="City name: "+data.name;

let weather=document.createElement("span");
weather.innerText="Weather: "+data.weather[0].description;

let wendspeed=document.createElement("span");
wendspeed.innerText="Wend speed: "+data.wind.speed;

let temperature=document.createElement("span");
temperature.innerText="Temperature: "+data.main.temp;

let maxtemp=document.createElement("span");
maxtemp.innerText="Maximum temperature: "+data.main.temp_max;

let mintemp=document.createElement("span");
mintemp.innerText="Minimum temperature: "+data.main.temp_min;

let timezone=document.createElement("span");
timezone.innerText="Time zone: "+data.timezone;

output.append(cityname);
output.append(document.createElement("br"));
output.append(document.createElement("br"));
output.append(weather);
output.append(document.createElement("br"));
output.append(document.createElement("br"));
output.append(wendspeed);
output.append(document.createElement("br"));
output.append(document.createElement("br"));
output.append(temperature);
output.append(document.createElement("br"));
output.append(document.createElement("br"));
output.append(maxtemp);
output.append(document.createElement("br"));
output.append(document.createElement("br"));
output.append(mintemp);
output.append(document.createElement("br"));
output.append(document.createElement("br"));
output.append(timezone);
}






