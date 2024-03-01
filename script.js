const apiKey = "185fbd7a4db2910e614bba85af93a628";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`; 

const searchBox = document.querySelector("#searchCity");
const searchBtn = document.querySelector("#searchBtn");
const iconWeather = document.querySelector(".weathers");


async function checkWeather (city){
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
   try{
    if(response.status == 200){
      var data = await response.json();
      
      document.querySelector(".city").textContent = data.name;
      document.querySelector(".temp").textContent = Math.round(data.main.temp) 
      + "°C";
      document.querySelector(".humidity").textContent = data.main.humidity + "%";
      document.querySelector(".wind").textContent = data.wind.speed + "km/h";
  
      if(data.weather[0].main === "Clouds") {
          iconWeather.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
          iconWeather.src = "images/clear.png";
        } else if (data.weather[0].main === "Drizzle") {
          iconWeather.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
          iconWeather.src = "images/mist.png";
        } else if (data.weather[0].main === "Snow") {
          iconWeather.src = "images/snow.png";
        } else if (data.weather[0].main === "Rain") {
          iconWeather.src = "images/rain.png";
        }
        document.querySelector('.all-info').style.display = 'block';
        document.querySelector('.all-info').style.transition = '1s ease';
        document.querySelector('.error').style.display = 'none';
  
    }else if(searchBox == ' '){
      document.querySelector('.error').style.display = "block";
      alert(`my`)
      document.querySelector('.all-info').style.display = "none";
     

  }else{
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.all-info').style.display = 'none';


}
   }catch(err){ 
    alert('ERROR', err);
  }
  

  

      }
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

const spaceBtn = document.querySelector('.space');
const toggleBtn = document.querySelector('.toggle');
const container = document.querySelector('.container');


spaceBtn.addEventListener('click', ()=>{
  spaceBtn.classList.toggle('open');
  toggleBtn.classList.toggle('open');
  container.classList.toggle('open');


})













