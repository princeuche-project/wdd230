const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");

//const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=475290c56462be6c690963bd17bb2398"

const api_key = "475290c56462be6c690963bd17bb2398"
const imgURL = "https://openweathermap.org/img/w/"
const k2f = (K) => {
    return (K - 273.15)* 1.8000 + 32.00
}
const rnd = (n,d) => {
    return (Math.round(n*10**d)/10**d)
}

fetch('https://api.openweathermap.org/data/2.5/weather?id=5604473&appid='+api_key)
    .then(res => {
        return res.json()
    })
    .then(jsonData => {
        console.log(jsonData)
        document.querySelector('#current-temp').textContent = rnd(k2f(jsonData.main.temp),1)

        let imageURL = imgURL+jsonData.weather[0].icon+'.png'
        let imageDesc = jsonData.weather[0].description
        document.querySelector('#imagesrc').textContent = imageURL
        document.querySelector('#icon').setAttribute('src',imageURL)
        document.querySelector('#icon').setAttribute('alt',imageDesc)
    })




























// async function apiFetch (){
//     try { 
//         const response = await fetch(url);
//         if (response.ok){
//             const data = await response.json();
//             displayResults(data)
//         }else{
//             throw error (await response.text());
//         }
//     } catch(error){
//         displayResults(error)
//     }
// }
// apiFetch()


// function displayResults(data) {
//     currentTemp.innerHTML= `${data.coord}&deg;F`
//     const iconsrc = `https://openweathermap.org/img/w/${weatherIcon}.10d@2x.png`
//     let desc = data.weather[0]
//     weatherIcon.setAttribute()
//     weatherIcon.setAttribute()
//     captionDesc.textContent= `${desc}`
// }
// displayResults()