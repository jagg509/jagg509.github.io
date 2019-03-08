var section = document.querySelector('section');


var resquestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', resquestURL);
request.responseType = 'json';
request.send();

request.onload = function () {

    var town = request.response;
    showTowns(town);

}

function showTowns(jsonObj) {
    var cities = jsonObj['towns'];
    

    for (let i = 0; i < cities.length; i++) {
        

        if (cities[i].name == "Soda Springs" || cities[i].name == "Preston" || cities[i].name == "Fish Haven" ) {

        

        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');


        
            myH2.textContent = cities[i].name;
            myPara1.textContent = 'motto: ' + cities[i].motto;
            myPara2.textContent = 'yearFounded: ' + cities[i].yearFounded;
            myPara3.textContent = 'currentPopulation:' + cities[i].currentPopulation;
            myPara4.textContent = 'averageRainfall:' + cities[i].averageRainfall;
        
        

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);

        section.appendChild(myArticle);
    
        }
    }
}