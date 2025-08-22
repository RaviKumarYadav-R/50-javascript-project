const cityName = document.querySelector(".city-name");
const searchinput = document.querySelector(".search");
const weatherImg = document.querySelector(".weather-img");
const Temperature = document.querySelector(".temperature");
const searchBtn = document.querySelector(".search-btn")

async function getWeather(city) {
  const apiKey = "60b2898bf4bc513dd0a1792e8db39c82";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    console.log(data);

    cityName.innerHTML = `${data.name},${new Intl.DisplayNames(["en"], {
      type: "region",
    }).of(data.sys.country)}`;
    weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    Temperature.innerHTML = `${Math.floor(data.main.temp)}\u00B0C`;
  } catch (error) {
   alert(error)
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(searchinput.value.trim())
})
 