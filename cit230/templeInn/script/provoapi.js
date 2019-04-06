let weatherObj2 = new XMLHttpRequest();
weatherObj2.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5780026&units=imperial&APPID=ddfec18fe14556473c9c515e0dfebb7a', true);

weatherObj2.send();

weatherObj2.onload = function () {

    let jsonRespObj = JSON.parse(weatherObj2.responseText);

    console.log(jsonRespObj);

    let t = document.getElementById('weatherprovo').innerHTML = jsonRespObj.list[0].main.temp_max;

}