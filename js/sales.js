"use strict";

let table = document.createElement("table");
let tableBody = document.createElement("tbody");
let section = document.getElementById("data");
let cityForm = document.getElementById("cityForm");
function City(cityName, cookieList, min, max, avg) {
  this.cityName = cityName;
  this.cookieList = cookieList;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.getCookieNumber = function () {
    let tempoCookie = Math.floor(
      (Math.random() * (this.max - this.min) + this.min) * this.avg
    );
    this.cookieList.push(tempoCookie);
    return tempoCookie;
  };
  this.render = function () {
    let tableRow = document.createElement("tr");
    let tableData = document.createElement("td");
    tableData.innerText = this.cityName;
    tableRow.appendChild(tableData);
    tableBody.appendChild(tableRow);
    let totalSum = 0;
    let randomlyCookie;
    for (let i = 0; i < 14; i++) {
      randomlyCookie = this.getCookieNumber();
      tableData = document.createElement("td");
      tableData.innerText = randomlyCookie;
      tableRow.appendChild(tableData);
      totalSum += randomlyCookie;
    }
    tableData = document.createElement("td");
    tableData.innerText = totalSum;
    tableRow.appendChild(tableData);
    cookieList.push(totalSum);
  };
}

function createCookieTableHeader() {
  let tableHeader = document.createElement("thead");
  let tableHead = document.createElement("th");
  let tableRow = document.createElement("tr");
  table.appendChild(tableHeader);
  tableHeader.appendChild(tableRow);
  tableHead.innerText = "Location";
  tableRow.appendChild(tableHead);
  for (let i = 6; i < 20; i++) {
    tableHead = document.createElement("th");
    if (i < 12) {
      tableHead.innerText = `${i}:00 am`;
    } else if (i === 12) {
      tableHead.innerText = `${i}:00 pm`;
    } else {
      tableHead.innerText = `${i - 12}:00 pm`;
    }
    tableRow.appendChild(tableHead);
  }
  tableHead = document.createElement("th");
  tableHead.innerText = "Daily Location Total";
  tableRow.appendChild(tableHead);
}

function createCookieTableFooter(city) {
  let tableFooter = document.createElement("thead");
  let tableFoot = document.createElement("th");
  let tableRow = document.createElement("tr");
  table.appendChild(tableFooter);
  tableFooter.appendChild(tableRow);
  tableFoot.innerText = "Totals";
  tableRow.appendChild(tableFoot);
  let sumVal = 0;
  for (let j = 1; j <= city[0].cookieList.length; j++) {
    sumVal = 0;
    for (var i = 2; i < table.rows.length; i++) {
      sumVal = sumVal + parseInt(table.rows[i].cells[j].innerHTML);
    }
    tableFoot = document.createElement("th");
    tableFoot.innerText = sumVal;
    tableRow.appendChild(tableFoot);
  }
}

let seattle = new City("Seattle", [], 23, 65, 6.3);
let tokyo = new City("Tokyo", [], 3, 24, 1.2);
let dubai = new City("Dubai", [], 11, 38, 3.7);
let paris = new City("Paris", [], 20, 38, 2.3);
let lima = new City("Lima", [], 2, 16, 4.6);
let cityArray = [seattle, tokyo, dubai, paris, lima];
createCookieTableHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function formSubmit (event) {
  let isItThere = false
  let name = event.target.cityName.value;
  name = name[0].toUpperCase()+name.slice(1);
  for (let c=0; c<cityArray.length; c++){
    if (cityArray[c].cityName == name) {
      isItThere = true;
      break;
    }
  }
  if (isItThere) {
    alert('The City name is already in the table');
    event.preventDefault();
  }
  else {
  event.preventDefault();
  let avg = event.target.avgCust.value;
  let min = event.target.minCust.value;
  let max = event.target.maxCust.value;
  let newCity = new City (name, [], min, max, avg);
  cityArray.push(newCity)
  newCity.render()
  for (let r = 1; r<16; r++ ){
    let fixedTotal = parseInt(table.rows[1].cells[r].innerHTML);
    table.rows[1].cells[r].innerHTML = fixedTotal + newCity.cookieList[r-1];
  }
  }
}


cityForm.addEventListener('submit',formSubmit);
table.appendChild(tableBody);
section.appendChild(table);
createCookieTableFooter(cityArray);

