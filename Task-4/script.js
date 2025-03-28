const input = document.getElementById("search");
const API_KEY = "YOUR_API_KEY";
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchWeather(input.value);
        searchHourly(input.value);
    }
});

async function searchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (response.status == "404") {
            document.querySelector(".weather-info-item-text h1").textContent = "City not found";
            throw new Error("City not found");
        }
        const data = await response.json();
        console.log(data);
        updateWeather(data);
        updateAirQuality(data);
    } catch (error) {
        console.error(error.message);
    }
}

async function searchHourly(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (response.status == "404") {
            throw new Error("City not found");
        }
        const data = await response.json();
        console.log("Hourly",data);
        updateHourly(data);
        updateWeekly(data);
    } catch (error) {
        console.error(error.message);
    }
}

function updateWeather(data) {
    document.querySelector(".weather-info-item-text h1").textContent = data.name;
    document.querySelector(".weather-info-item-text p").textContent = data.sys.country;
    document.getElementById("temp").textContent = `${data.main.temp}°C`;

    const temp = data.main.temp;
    let bgColor;
    if (temp <= 0) {
        bgColor = "#00aaff";
    } else if (temp > 0 && temp <= 15) {
        bgColor = "#87ceeb";
    } else if (temp > 15 && temp <= 30) {
        bgColor = "#ffd700";
    } else {
        bgColor = "#e36a3d";
    }

    document.querySelector("body").style.backgroundColor = bgColor;
    document.querySelector(".weather-info-item img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function updateHourly(data) {
    const forecastItems = document.querySelectorAll(".forecast-item");

    forecastItems.forEach((item, index) => {
        let [hour, minute] = data.list[index].dt_txt.split(" ")[1]
            .split(":").slice(0, 2);
        hour = parseInt(hour);
        const period = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;

        let [date] = data.list[index].dt_txt.split(" ")[0]
            .split("-").slice(2, 3);
        const time = `${date}th ${hour}:${minute} ${period}`;
        item.querySelector(".time").textContent = time
        item.querySelector("img").src = `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}.png`;
        item.querySelector(".temp").textContent = `${data.list[index].main.temp} °C`;
    });
}

function updateAirQuality(data) {
    const airCondItems = document.querySelectorAll(".air-cond-item");

    airCondItems[0].querySelector("p").textContent = `${data.main.feels_like}°C`
    airCondItems[1].querySelector("p").textContent = `${data.wind.speed} km/hr`;
    airCondItems[2].querySelector("p").textContent = `${data.clouds.all}%`;
    airCondItems[3].querySelector("p").textContent = `${data.main.pressure}`;
}

function updateWeekly(data) {
    const weeklyItems = document.querySelectorAll(".forecast-value");

    weeklyItems.forEach((item, index) => {
        const dailyData = data.list[index * 8];
        if (dailyData) {
            const date = new Date(dailyData.dt_txt);
            const day = date.toLocaleDateString("en-US", { weekday: "long" });
            const temp = `${dailyData.main.temp} °C`;
            const icon = `https://openweathermap.org/img/wn/${dailyData.weather[0].icon}.png`;

            item.querySelector(".day").textContent = day;
            item.querySelector("img").src = icon;
            item.querySelector(".temp").textContent = temp;
        }
    });
}