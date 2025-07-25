
    const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=YOUR_API_KEY&units=metric';

    async function getWeather() {
      const city = document.getElementById('city').value.trim();
      const result = document.getElementById('result');
      if (!city) {
        result.innerHTML = '❗ Please enter a city name.';
        return;
      }

      try {
        
        const locUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${encodeURIComponent(city)}`;
        const locRes = await fetch(locUrl);
        const locData = await locRes.json();

        if (!locData || locData.length === 0) {
          result.innerHTML = '❌ City not found.';
          return;
        }

        const locationKey = locData[0].Key;
        const locationName = locData[0].LocalizedName + ', ' + locData[0].Country.LocalizedName;

        // 2. Get weather by location key
        const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        if (!weatherData || weatherData.length === 0) {
          result.innerHTML = '❌ Weather data not available.';
          return;
        }

        const temp = weatherData[0].Temperature.Metric.Value;
        const condition = weatherData[0].WeatherText;

        // 3. Display result
        result.innerHTML = `
          <h2>${locationName}</h2>
          <p>🌤️ Condition: ${condition}</p>
          <p>🌡️ Temperature: ${temp} °C</p>
        `;

      } catch (error) {
        result.innerHTML = '⚠️ Error fetching data: ' + error.message;
      }
    }
