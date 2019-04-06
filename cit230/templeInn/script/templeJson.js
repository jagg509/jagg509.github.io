
var section = document.getElementById('templesJson');
var requestURL = 'https://jagg509.github.io/json/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var templeLocations = request.response;
    showTemples(templeLocations);
}



function showTemples(jsonObj) {
    var templePlaces = jsonObj['members'];

    for (var i = 0; i < templePlaces.length; i++) {
        var myDiv = document.createElement('div');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');
        var myPara9 = document.createElement('p');
        var myPara10 = document.createElement('p');
        var mySpan = document.createElement('span');
        var mySpan1 = document.createElement('span');
        var myList = document.createElement('ul');
        var myList1 = document.createElement('ul');

        myH2.textContent = templePlaces[i].templeName;
        myPara1.textContent = 'Address: ' + templePlaces[i].address1;
        myPara2.textContent = templePlaces[i].address2;
        myPara3.textContent = templePlaces[i].address3;
        myPara4.textContent = 'Telephone: ' + templePlaces[i].telephone;
        myPara5.textContent = 'Services:';




        var servicesTemple = templePlaces[i].Services;
        for (var j = 0; j < servicesTemple.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = servicesTemple[j];
            myList.appendChild(listItem);
        }

        myPara6.textContent = 'Schedule:';

        var scheduleTemple = templePlaces[i].Schedule;
        for (var x = 0; x < scheduleTemple.length; x++) {
            var listItem = document.createElement('li');
            listItem.textContent = scheduleTemple[x];
            myList1.appendChild(listItem);
        }

        myH3.textContent = 'Milestones:';

        myPara7.textContent = 'Announced: ' + templePlaces[i].Announced;
        myPara8.textContent = 'Groundbreaking: ' + templePlaces[i].Groundbreaking;
        myPara9.textContent = 'Dedicated — dedicatory prayer: ' + templePlaces[i].Dedicated;

        mySpan.setAttribute('id',"weather" + templePlaces[i].city );

        mySpan1.textContent = " F";
        myPara10.textContent = 'Weather:';
        myPara10.append(mySpan);
        myPara10.append(mySpan1);

        myDiv.appendChild(myH2);
        myDiv.appendChild(myPara1);
        myDiv.appendChild(myPara2);
        myDiv.appendChild(myPara3);
        myDiv.appendChild(myPara4);
        myDiv.appendChild(myPara5);
        myDiv.appendChild(myList);
        myDiv.appendChild(myPara6);
        myDiv.appendChild(myList1);
        myDiv.appendChild(myH3);
        myDiv.appendChild(myPara7);
        myDiv.appendChild(myPara8);
        myDiv.appendChild(myPara9);
        myDiv.appendChild(myPara10);




        section.appendChild(myDiv);
    }
}