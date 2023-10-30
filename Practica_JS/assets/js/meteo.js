if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const pToShowWeather = document.getElementById("weatherData");
        pToShowWeather.style.display = "block";
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
      const apiKey = '13fd320ea826dcf519670ed2757e0cf6';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const description = data.weather[0].description;
            const wIcon = data.weather[0].icon;
            document.getElementById("weatherData").innerHTML = `
                <div class="meteo" style= "text-align:center;">
                <h2>Barcelona</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
            <p>Sky: ${description}</p>
            <img src="assets/img/icons/${wIcon}.png">
            <button type="button" id="hideButton">Hide</button>
            </div>`;
            document.getElementById("hideButton").addEventListener("click", function() {
            document.getElementById("weatherData").style.display = "none";
              });
            
        })
        .catch(error => console.error(error));
    });
  } else {
    console.error('Please load again to authorize geolocation permissions');
  }
