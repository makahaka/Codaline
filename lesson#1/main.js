// Функція отримання даних погоди
function getWeather(cityName) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
          if (xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            addList(data);
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };
var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=e917db498668458f5559e2b5c819dbf8";
    xmlhttp.open("GET", urlApi);
    xmlhttp.send();
}


//Функція додавання нового елементу списку.
function addList (data) {
  var ul = document.getElementById("list"); 
  var li = document.createElement("li");
  li.className = 'list';
  li.innerHTML = data.name + " , " + data.sys.country + ": " + Math.round(data.main.temp - 273.16) + "C, " + data.weather[0].description;
  ul.appendChild(li);
}

//Кнопка пошуку міста
var searchButton = document.getElementById("search");
searchButton.addEventListener('click', function(){
  var cityName = document.getElementById("input_form").value;
  getWeather(cityName);

});

//Кнопка очищення
var clearButton = document.getElementById("clear");
clearButton.addEventListener('click', function(){
  var ul = document.getElementById("list");
  ul.innerHTML = '';

});

//Кнопка погоди Київ
var pressButton = document.getElementById("kyiv");
pressButton.addEventListener('click', function(){
  var cityName = "kyiv";
  getWeather(cityName);

});

//Кнопка погоди Харків
var pressButton = document.getElementById("kharkiv");
pressButton.addEventListener('click', function(){
  var cityName = "kharkiv";
  getWeather(cityName);

});

//Кнопка погоди Одеса
var pressButton = document.getElementById("odessa");
pressButton.addEventListener('click', function(){
  var cityName = "odessa";
  getWeather(cityName);

});

//Кнопка погоди Дніпропетровськ
var pressButton = document.getElementById("dnipropetrovsk");
pressButton.addEventListener('click', function(){
  var cityName = "dnipropetrovsk";
  getWeather(cityName);

});

//Кнопка погоди Донецьк
var pressButton = document.getElementById("donetsk");
pressButton.addEventListener('click', function(){
  var cityName = "donetsk";
  getWeather(cityName);

});