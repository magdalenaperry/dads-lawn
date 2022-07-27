// var API = process.env.API
var openCallWeatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
var geoCodeWeatherUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=';

searchInput = document.getElementById('search-field')
searchBtn = document.getElementById('search-btn')

const searchHandler = function (event) {
  event.preventDefault();

  const citySearch = searchInput.value.trim();
  if(citySearch) {
    console.log(citySearch);
    getCityInfoByName(citySearch);
    searchInput.value = citySearch;
    searchInput.value = '';

  //   let duplicateCities = false;
  //   for (let i = 0; i < array.length; i++) {
  //     const element = array[i];
      
  //   }
  } else {
    // add modal here
    alert('Please enter a valid city.')
  }
}

const getCityInfoByName = function (city) {
  const cityRequestUrl = geoCodeWeatherUrl + city + '&appid=' + API;
  fetch(cityRequestUrl)
  .then(function(response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayWeather(data, city);
      });

    } else {
      // add modal here
      alert('Error' + response.statusText)
    }
  })
  .catch(function (error){
    alert ("Unable to find data for this city");
  })
}

const displayWeather = function (weatherData, searchTerm) {
  
  if (!weatherData) {
    // display nothing
    console.log("no weather data")
    return;
  }

  const coordinateRequestUrl = openCallWeatherUrl + 'lat=' + lat + '&lon=' + lon + '&appid=' + API + '&units=imperial'

  fetch(coordinateRequestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // add everything to html here
    })
    .catch(function (err) {
      console.log(err);
    });
  return;
};

searchBtn.addEventListener('click', searchHandler);