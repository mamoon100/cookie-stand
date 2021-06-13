'use strict'

let data = document.getElementById('data')
let seattle = {
    cookieList : [],
    min: 23,
    cityName: 'Seattle',
    max: 65,
    avg: 6.3,
    // sum: 0,
    getCookieNumber: function () {
        return Math.floor((Math.random() * (this.max - this.min) + this.min)*this.avg);
      }
}

let tokyo = {
    cookieList : [],
    min: 3,
    cityName: 'Tokyo',
    max: 24,
    avg: 1.2,
    // sum: 0,
    getCookieNumber: function () {
        return Math.floor((Math.random() * (this.max - this.min) + this.min)*this.avg);
      }
}

let dubai = {
    cookieList : [],
    min: 11,
    cityName: 'Dubai',
    max: 38,
    avg: 3.7,
    // sum: 0,
    getCookieNumber: function () {
        return Math.floor((Math.random() * (this.max - this.min) + this.min)*this.avg);
      }
}

let paris = {
    min: 20,
    cityName: 'Paris',
    max: 38,
    avg: 2.3,
    // sum: 0,
    getCookieNumber: function () {
        return Math.floor((Math.random() * (this.max - this.min) + this.min)*this.avg);
      },
    cookieList : []
}

let lima = {
    min: 2,
    cityName: 'Lima',
    max: 16,
    avg: 4.6,
    // sum: 0,
    getCookieNumber: function () {
        return Math.floor((Math.random() * (this.max - this.min) + this.min)*this.avg);
      },
    cookieList : [],
}

function addTheCookieCity (city) {
    let cookie;
    let randomCookie;
    let cookieSum;
    let naming;
    let unOrderCookie;
    let hourlyCookie;
    let totalCookie;
    // let newLine = document.createElement("br");
    // let cityName;

    for (let i = 0; i<city.length; i++){
        unOrderCookie = document.createElement("ul");
        naming = document.createElement("h1");
        cookieSum = 0;
        // cityName = city[i].cityName;
        for (let j = 6; j < 21 ; j++) {
            // cookieSum = 0;
            hourlyCookie = document.createElement('li')
            totalCookie = document.createElement('li')
            randomCookie = city[i].getCookieNumber();
            cookieSum+=randomCookie
            // console.log(randomCookie,cookieSum)
            if (j<12) {
                cookie = [`${j}am: ${randomCookie} cookies`];
            }
            else if (j === 12 ){
                cookie = [`${j}pm: ${randomCookie} cookies`];
            }
            else {
                cookie = [`${j-12}pm: ${randomCookie} cookies`];
            }
            hourlyCookie.innerHTML = cookie;
            unOrderCookie.appendChild(hourlyCookie);
        }
        totalCookie.innerHTML=`Total: ${cookieSum} cookies`;
        unOrderCookie.appendChild(totalCookie);
        naming.innerHTML=city[i].cityName;
        data.appendChild(naming);
        data.appendChild(unOrderCookie);
    }
}

let city = [seattle, tokyo, dubai, paris, lima];
addTheCookieCity(city);