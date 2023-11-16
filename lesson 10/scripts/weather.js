const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=475290c56462be6c690963bd17bb2398"


async function apiFetch (){
    try { 
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data)
        }else{
            throw error (await response.text());
        }
    } catch(error){
        displayResults(error)
    }
}
apiFetch()


function displayResults(data) {
    currentTemp.innerHTML= `${data.coord}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${weatherIcon}.10d@2x.png`
    let desc = data.weather[0]
    weatherIcon.setAttribute()
    weatherIcon.setAttribute()
    captionDesc.textContent= `${desc}`
}
displayResults()