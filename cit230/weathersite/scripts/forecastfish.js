let forecastObj = new XMLHttpRequest();
forecastObj.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&units=imperial&APPID=ddfec18fe14556473c9c515e0dfebb7a', true);

forecastObj.send();

let section = document.querySelector('section');

forecastObj.onload = function () {


    let jsonRespObj = JSON.parse(forecastObj.responseText);

    console.log(jsonRespObj);

    

    let listLoop = jsonRespObj['list'];
    
    for (let i = 0; i < listLoop.length; i++) {
        
            if (listLoop[i].dt_txt.includes('18:00:00')) {

                var divSection = document.createElement('div');
                var forecastDay = document.createElement('div');
                var imageIcon = document.createElement('img');
                var imageLink = 'http://openweathermap.org/img/w/'+listLoop[i].weather[0].icon+'.png';
                var tempForcast = document.createElement('div');

                divSection.setAttribute('class', 'fivedays');

                var n = new Date(listLoop[i].dt_txt);
                var day = n.getDay();

                switch (day) {
                    case 0:
                    day = "Sun";
                    break;
                  case 1:
                    day = "Mon";
                    break;
                  case 2:
                    day = "Tue";
                    break;
                  case 3:
                    day = "Wed";
                    break;
                  case 4:
                    day = "Thur";
                    break;
                  case 5:
                    day = "Fri";
                    break;
                  case  6:
                    day = "Sat";
                
                }

                             
                forecastDay.textContent = day;
                imageIcon.setAttribute('src', imageLink);
                tempForcast.textContent = listLoop[0].main.temp + "℉";

                divSection.appendChild(forecastDay);
                divSection.appendChild(imageIcon);
                divSection.appendChild(tempForcast);

                section.appendChild(divSection);
                
            }

        
    }

}




