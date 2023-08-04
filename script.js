const apikey = "993d0b6dac56da6ba2d739c13e8f97fa";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    
    
    const reponse= await fetch(apiurl + city +`&appid=${apikey}` )
   if(reponse.status == 404)
   {
    document.querySelector(".error").style.display =" block";
    document.querySelectorAll(".weather").style.display="none";
   }
   else{
    var data = await reponse.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed+ " kh/h";

    if (data.weather[0].main == "Clouds") {
  console.log("Clouds condition matched");
  weatherIcon.src = "assets/images/clouds.png";
} else if (data.weather[0].main == "Clear") {
  console.log("Clear condition matched");
  weatherIcon.src = "assets/images/clear.png";
} else if (data.weather[0].main == "Rain") {
  console.log("Rain condition matched");
  weatherIcon.src = "assets/images/rain.png";
} else if (data.weather[0].main == "Drizzle") {
  console.log("Drizzle condition matched");
  weatherIcon.src = "assets/images/drizzle.png";
} else if (data.weather[0].main == "Mist") {
  console.log("Mist condition matched");
  weatherIcon.src = "assets/images/mist.png";
} else {
  console.log("Fallback condition matched");
  weatherIcon.src = "assets/images/snow.png";
}

  document.querySelector(".weather").style.display ="block";
  document.querySelector(".error").style.display =" none";
   }
   
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
  

