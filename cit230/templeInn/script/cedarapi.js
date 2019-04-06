let weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5536630&units=imperial&APPID=ddfec18fe14556473c9c515e0dfebb7a', true);

weatherObj.send();

weatherObj.onload = function () {

    let jsonRespObj = JSON.parse(weatherObj.responseText);

    console.log(jsonRespObj);

    let t = document.getElementById('weathercedar').innerHTML = jsonRespObj.list[0].main.temp_max;

}