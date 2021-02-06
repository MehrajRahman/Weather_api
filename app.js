
function getLink(){
    const city = document.getElementById("city").value;
    let firstPart = "https://api.openweathermap.org/data/2.5/weather?q=" + city;
    let lastPart = "&appid=12d7dfe36432f04f7609c4c02a117545";
    const wholeLink = firstPart + lastPart;
    console.log(wholeLink)
    return wholeLink;

}
document.getElementById("search").addEventListener("click", function(){

    const wholeLink =  getLink();
    fetch(wholeLink)
    .then(res => res.json())
    .then(data => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273;
        document.getElementById("celcius").innerText = Math.floor(celcius);
        const cityName = document.getElementById("city").value;
        document.getElementById("city_name").innerText = cityName;
        document.getElementById("state").innerText = data.weather[0].main;
    })
    .catch(error => console.log(error));
});




