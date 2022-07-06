//API KEY: 413414bfb03ac50065b96d9e34719ba8
//BASE URL: https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}


let op_key = "413414bfb03ac50065b96d9e34719ba8";
// let base_Url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai"
let weather = {
  fetchweather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
      + city +
      "&appid="
      + op_key)
      .then(res => res.json())
      .then(data => this.displayweather(data))
  },
  displayweather: function (data) {
    const { name } = data;
    const { temp } = data.main;
    const { icon } = data.weather[0];
    console.log(name, temp, icon);
    document.querySelector(".cityName").innerText = name;
    document.querySelector(".Temperature").innerText = Math.round(temp - 273.15)+"C";
    document.querySelector(".icon").src =
     "http://openweathermap.org/img/wn/" + icon +".png";
    
  },
search: function () {
    this.fetchweather(document.querySelector(".city").value)
  }
 
};

document.querySelector(".button").addEventListener("click", function () {
  weather.search();

})