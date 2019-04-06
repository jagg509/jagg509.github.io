let weatherObj3 = new XMLHttpRequest();
weatherObj3.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=4393217&units=imperial&APPID=ddfec18fe14556473c9c515e0dfebb7a', true);

weatherObj3.send();

weatherObj3.onload = function () {

    let jsonRespObj = JSON.parse(weatherObj3.responseText);

    console.log(jsonRespObj);

    let t = document.getElementById('weatherkansas').innerHTML = jsonRespObj.list[0].main.temp_max;

}