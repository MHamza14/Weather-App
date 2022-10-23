let x = document.getElementById("location");
let CurrentLocationLat;
let CurrentLocationLon;

let  getLocation= () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else {
        alert("Sorry! your browser is not supporting")
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${CurrentLocationLat}&lon=${CurrentLocationLon}&appid=dc09701a59ef1086a22811caa497b1d7&q`)
         .then(getLiveWeather())
}
let showPosition = (position) => {
    let CurrentLocation = "Your current location is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
    document.getElementById("location").innerHTML = CurrentLocation;
    let CurrentLocationLat = showPosition().position.coords.latitude
    console.log(CurrentLocationLat);
    
    let CurrentLocationLon = showPosition().position.coords.longitude
    console.log(CurrentLocationLon);
}
let getLiveWeather = () => {
    
    let UserInput = document.querySelector('#UserInput').value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?&appid=dc09701a59ef1086a22811caa497b1d7&q=${UserInput}`)
        .then(function (response) {
            console.log("Getting Response");
            console.log(response.data);

            /* Icon list */
            if (response.data.weather[0].description == `clear sky`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/754419/pexels-photo-754419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;background-size: cover;`
              }
              else if (response.data.weather[0].description == `few clouds`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/14042086/pexels-photo-14042086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;background-size: cover;`
              }
              else if (response.data.weather[0].description == `scattered clouds`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/14042086/pexels-photo-14042086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                  background-repeat: no-repeat;
                  background-size: cover;`
              }
              else if (response.data.weather[0].description == `broken clouds`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/6334811/pexels-photo-6334811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                  background-repeat: no-repeat;
                  background-size: cover;`
              }
              else if (response.data.weather[0].description == `overcast clouds`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/9907238/pexels-photo-9907238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                  background-repeat: no-repeat;
                  background-size: cover;`
              }
              else if (response.data.weather[0].description == `shower rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/9166300/pexels-photo-9166300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                  background-repeat: no-repeat;
                  background-size: cover;`
              }
              else if (response.data.weather[0].description == `thunderstorm`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/6510369/pexels-photo-6510369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                  background-repeat: no-repeat;
                  background-size: cover;`
              }
              else if (response.data.weather[0].description == `snow`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                  background-repeat: no-repeat;
                  background-size: cover;`
              }
              else if (response.data.weather[0].description == `mist`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/1743392/pexels-photo-1743392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                  background-repeat: no-repeat;
                  background-size: cover;`
              }

              /* Group 2xx: Thunderstorm */
              else if (response.data.weather[0].description == `thunderstorm with light rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/2985923/pexels-photo-2985923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `thunderstorm with rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/13996626/pexels-photo-13996626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `thunderstorm with heavy rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `light thunderstorm`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/4224768/pexels-photo-4224768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `thunderstorm`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/531318/pexels-photo-531318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `heavy thunderstorm`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `ragged thunderstorm`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/8698559/pexels-photo-8698559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `thunderstorm with light drizzle`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/2499840/pexels-photo-2499840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `thunderstorm with drizzle`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/12529857/pexels-photo-12529857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              
              /* Group 3xx: Drizzle */
              else if (response.data.weather[0].description == `light intensity drizzle`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/6858659/pexels-photo-6858659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `drizzle`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/9807325/pexels-photo-9807325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `heavy intensity drizzle`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/6858659/pexels-photo-6858659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `light intensity drizzle rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/1743392/pexels-photo-1743392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `drizzle rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/13996626/pexels-photo-13996626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `heavy intensity drizzle rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `shower rain and drizzle`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/2838561/pexels-photo-2838561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                  background-repeat: no-repeat;
                  background-size: cover;`
              }
              else if (response.data.weather[0].description == `heavy shower rain and drizzle`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/3387175/pexels-photo-3387175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `shower drizzle`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/2838561/pexels-photo-2838561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
            
              /* Group 5xx: Rain */
              else if (response.data.weather[0].description == `light rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/3234559/pexels-photo-3234559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `moderate rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/13732475/pexels-photo-13732475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `heavy intensity rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/3178798/pexels-photo-3178798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `very heavy rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/6826867/pexels-photo-6826867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `extreme rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/1530423/pexels-photo-1530423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `freezing rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `light intensity shower rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/9166303/pexels-photo-9166303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `shower rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/5483850/pexels-photo-5483850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `heavy intensity shower rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `ragged shower rain`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/9166304/pexels-photo-9166304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }

              /* Group 7xx: Atmosphere */
              else if (response.data.weather[0].description == `mist`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/691031/pexels-photo-691031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `Smoke`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/2771744/pexels-photo-2771744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `Haze`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `sand/ dust whirls`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/4711862/pexels-photo-4711862.jpeg?auto=compress&cs=tinysrgb&w=600');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `fog`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/69825/sunbeam-fog-autumn-nature-69825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `sand`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/4017971/pexels-photo-4017971.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `dust`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/1058144/pexels-photo-1058144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `volcanic ash`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/1185330/pexels-photo-1185330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `squalls`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.allthescience.org/squall-line.jpg');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }
              else if (response.data.weather[0].description == `tornado`) {
                document.querySelector("#MainDashboard").style =
                  `background-image: url('https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                   background-repeat: no-repeat;
                   background-size: cover;`
              }

            let date = moment(response.data.dt * 1000).format('dddd, MMMM Do YYYY'); 
            let time = moment(response.data.dt * 1000).format('h:mm a');
            let sunrise = moment(response.data.sys.sunrise * 1000).format('h:mm a');
            let sunset = moment(response.data.sys.sunset * 1000).format('h:mm a');
            let temp = Math.round((response.data.main.temp)-273.15);
            let min_temp = Math.round((response.data.main.temp_min)-273.15);
            let max_temp = Math.round((response.data.main.temp_max)-273.15);
            let windSpeed = Math.round(response.data.wind.speed * 3.6);



            document.querySelector("#MainDashboard").innerHTML = 
            `<h1>Weather in ${response.data.name}</h1>
            <img src='https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png' class='weather_icon' />
            <div class="font-50pt">${temp}°C</div>
            <div class="font-15pt">${response.data.weather[0].description}</div>
            <br>
            <div class="font-25pt">${response.data.name}, ${ response.data.sys.country}</div>
            <div class="font-15pt">${date}</div>
            <div class="font-15pt">${time}</div>
            `
            document.querySelector("#WindStatus").innerHTML = 
            `<h2> Wind Status </h2>
            <i class='fa-solid fa-gauge' style='color: white'></i> ${windSpeed} km/h
            <div>${response.data.wind.deg} /Degrees</div>
            <div><h3>${time}</h3></div>
            `
            document.querySelector("#UVIndex").innerHTML = 
            `<h2> UV Index </h2>
            <div>${response.data.main.pressure} /KM</div>
            <div>${time}</div>
            `
            document.querySelector("#SunriseSunset").innerHTML = 
            `<h2> Sun Rise and Sun Set </h2>
            <div>${sunrise}</div>
            <div>${sunset}</div>
            `

            document.querySelector("#Humidity").innerHTML = 
            `<h2> Humidity </h2>
            <div>${response.data.main.humidity} %
            The dew point is 27° Right Now
            </div>
            `

            document.querySelector("#Visibility").innerHTML = 
            `<h2> Visibility </h2>
            <div>${response.data.visibility} Km
            Haza is effecting visibility
            </div>
            `
            document.querySelector("#FeelsLike").innerHTML = 
            `<h2> Feels Like </h2>
            <div>${response.data.main.feels_like}° Km
            Humidity is making is feel hotter
            </div>
            `

        })
        .catch(function (error) {
            console.log(error);
        })
}
//let windSpeed = Math.round(response.data.wind.speed * 3.6);
//////////////////  Wind Status /////////////////////////////////////
const wind = document.getElementById('Can-WindStatusChart').getContext('2d');
const labels = ["Mon", "Tue", "Wed", "Thur", "Fri"];
const data = {
    labels,
    datasets: [
        {
            data: [11, 17, 22, 30, 25],
            labels: "Wind Speed Meter",
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
    ],
};
let delayed;
const config = {
    type: 'line',
    data: data,
    options: {
        // (property) animation: {
        //     onComplete: () => void;
        //     delay: (context: any)  => number;
        // },
        // animation: {
        //     onComplete:() => {
        //         delayed = true;
        //     },
        //     delay: (context) => {
        //         let delay = 0;
        //         if(context.type === "data" && context.mode === "default" && !delayed) {
        //             delay = context.dataIndex * 300 + context.datasetIndex * 100;
        //         }
        //         return delay;
        //     },
        // },
        radius: 5,
        hitRadius: 30,
        hoverRadius: 10,
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return value + ' km/h';
                    }
                },
            },
        },
    },
};
const windStatus = new Chart(wind, config);
//////////////////  UV Index /////////////////////////////////////
