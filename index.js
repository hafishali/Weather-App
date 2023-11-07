function search() {
    let city = inputcity.value
    console.log(city);
    const http = new XMLHttpRequest()
    http.open('get', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4952b918384066e5388f5f384e8a3b89`)
    http.send()
    console.log(http.readyState);
    http.onreadystatechange = () => {
        if (http.readyState == 4) {
            if (http.status >= 200 || http.status < 300) {

                console.log(http.responseText);
                let weatherData = JSON.parse(http.responseText)
                console.log(weatherData);
                if (city == weatherData.name) { }
                // cityname
                let cityname = weatherData.name
                console.log(cityname);

                // weather
                let cw = weatherData.weather
                let cityWeather = cw[0].main
                console.log(cityWeather);
                // Update the weather image based on cityWeather
                // let weatherImage = document.getElementById("weather-image");
                // if (cityWeather === "Clear") {
                //     weatherImage.src = "./gallery/sun.png";
                // } else if (cityWeather === "Clouds") {
                //     weatherImage.src = "./gallery/cloud.png";
                // } else if (cityWeather === "Rain") {
                //     weatherImage.src = "./gallery/rain.png";
                // } else {
                //     // Default image for other conditions
                //     weatherImage.src = "./gallery/other.png";
                // }






                // description
                let description = cw[0].description
                console.log(description);
                // country
                let c = weatherData.sys
                let country = c.country
                console.log(country);
                // temperature
                let t = weatherData.main
                let temperature = parseFloat((t.temp - 273.15).toFixed(1));
                console.log(temperature);
                // humidity
                let humidity = t.humidity
                console.log(humidity);
                // pressure
                let pressure = t.pressure
                console.log(pressure);
                // wind
                let w = weatherData.wind
                let wind = w.speed
                console.log(wind);


                result.innerHTML = ` <div class="m_cont text-center">
            <h2>${cityname}</h2>
            <h2 id="cun">-${country} </h2>
        </div>
        <div class="w_desc mt-5 text-center">
            <div class="weather-image-container">
        </div>

            <h2>${cityWeather}</h2>
            <h3>${description}</h3>
        </div>

        <div class="row m_det mt-3 d-flex justify-content-center align-items-center m-lg-5 m-md-3 m-sm-3 ">
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><i class="fas fa-temperature-high" style="color: #111212;"></i></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">TEMPERATURE</h6>
                        <h2>${temperature}°C</h2>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><img class="c_img" src="./gallery/icons8-pressure-24.png" alt=""></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">PRESSURE</h6>
                        <h2>${pressure}hPa</h2>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><img class="c_img" src="./gallery/humidity.png" alt=""></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">HUMIDITY</h6>
                        <h2>${humidity}</h2>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><i class="fas fa-wind" style="color: #111213;"></i></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">WIND</h6>
                        <h2>${wind}m/s</h2>
                    </div>
                </div>
            </div>`





            }







        }


    }


}
