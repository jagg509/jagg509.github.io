let weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=ddfec18fe14556473c9c515e0dfebb7a', true);

weatherObj.send();

let section = document.querySelector('section');

weatherObj.onload = function () {


    let jsonRespObj = JSON.parse(weatherObj.responseText);

    console.log(jsonRespObj);

    

    let listLoop = jsonRespObj.list;
    
    for (let i = 0; i < listLoop.length; i++) {
        
            if (listLoop[i].dt_txt.includes('18:00:00')) {

                var divSection = document.createElement('article');
                var forecastDay = document.createElement('p');
                var imageIcon = document.createElement('img');
                var imageLink = 'http://openweathermap.org/img/w/10d.png'+listLoop[i].weather[0].icon+'.png';
                var tempForcast = document.createElement('p');


                
                forecastDay.textContent = listLoop[i].weather[0].id;
                imageIcon.setAttribute('src', imageLink);
                tempForcast.textContent = listLoop[i].main.temp;

                divSection.appendChild(forecastDay);
                divSection.appendChild(imageIcon);
                divSection.appendChild(tempForcast);

                section.appendChild(divSection);
                
            }

        
    }

}




