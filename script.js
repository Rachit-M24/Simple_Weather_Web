let Search = document.querySelector("#search");
let Temperature = document.querySelector(".temp");
let City = document.querySelector(".city");

const ApiKey = "5aedbcadf5102e63e4d5d89d1e567b83";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const SearchBox = document.querySelector("#searchbox");
const SearchButton = document.querySelector("#searchbtn");

let WeatherIcon = document.querySelector(".weatherpng");
let WeatherBackGround = document.querySelector(".weatherBG")
async function checkWeather(city){
   let response = await fetch(ApiUrl + city +`&appid=${ApiKey}`);

   if(response.status === 404){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".Check").style.display = "none";
   }else{
    var data  = await response.json();
    document.querySelector(".error").style.display ="none";
    //    console.log(data);
    
         document.querySelector(".city").innerHTML = data.name; 
         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
         document.querySelector(".humiditydata").innerHTML = data.main.humidity + " %";
         document.querySelector(".speed").innerHTML = data.wind.speed + " Km/hr";
    
         if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "images/clear.png";
            // WeatherBackGround = "weather_bg/ClearSky";
            WeatherBackGround.style.backgroundImage = "url('weather_bg/ClearSky')";
         }else if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "images/clouds.png";
            WeatherBackGround = "weather_bg/clouds"       
         }else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "images/drizzle.png"
            WeatherBackGround = "weather_bg/drizzle"
         }else if(data.weather[0].main == "Humidity"){
            WeatherIcon.src = "images/humidity.png"
         }else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "images/mist.png"
         }else if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "images/rain.png";
            // WeatherBackGround = "weather_bg/rain"
            document.WeatherBackGround.style.backgroundImage = "url('weather_bg/rain')";
         }else if(data.weather[0].main == "Snow"){
            WeatherIcon.src = "images/snow.png"
         }
    
         document.querySelector(".Check").style.display = "block";
   }
}
   SearchButton.addEventListener("click" , () =>{
    checkWeather(SearchBox.value);


});

