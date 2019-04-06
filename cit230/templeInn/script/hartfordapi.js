let weatherObj1 = new XMLHttpRequest();
weatherObj1.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=4992519&units=imperial&APPID=ddfec18fe14556473c9c515e0dfebb7a', true);

weatherObj1.send();

weatherObj1.onload = function () {

    let jsonRespObj = JSON.parse(weatherObj1.responseText);

    console.log(jsonRespObj);

    let t = document.getElementById('weatherhartford').innerHTML = jsonRespObj.list[0].main.temp_max;

}