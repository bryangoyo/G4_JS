document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '13fd320ea826dcf519670ed2757e0cf6';
    // const city = 'Barcelona,es'; // 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=13fd320ea826dcf519670ed2757e0cf6&units=metric&lang=en`)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const wIcon = data.weather[0].icon;
        
        const weatherInfoDiv = document.getElementById('weather-info');
        
        
        weatherInfoDiv.innerHTML = `
            <div class="meteo" style= "text-align:center;">
            <h2>Barcelona</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Sky: ${description}</p>
            <img src="assets/img/icons/${wIcon}.png">
            <button type="button" style="text-align:right;">Hide</button>
            </div>
        `;
    })
    .catch(error => {
        console.error('Error obteniendo datos meteorológicos:', error);
    });
});
