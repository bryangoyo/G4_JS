document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '13fd320ea826dcf519670ed2757e0cf6';
    // const city = 'Madrid,es'; // 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=13fd320ea826dcf519670ed2757e0cf6&units=metric&lang=es`)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        // const imageMeteo = data.weather[0].main;
        const weatherInfoDiv = document.getElementById('weather-info');

        weatherInfoDiv.innerHTML = `
            <div class="meteo">
            <h1>Condiciones meteorológicas en Barcelona</h1>
            <p>Temperatura: ${temperature}°C</p>
            <p>Humedad: ${humidity}%</p>
            <p>Cielo: ${description}</p>
            <button type="button" text-align: right>Hide</button>
            </div>
        `;
    })
    .catch(error => {
        console.error('Error obteniendo datos meteorológicos:', error);
    });
});
