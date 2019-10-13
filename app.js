'use strict';

var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'Salmon Cookie Sales Page';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var allLocations = [];

function Store(location, minCust, maxCust, avgCookie) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.dailyCookies = 0;
  allLocations.push(this);
}

//////////////New Locations/////////////////////

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

///////////////////////Form/////////////////////

var custInput = document.getElementById('custForm');
custInput.addEventListener('submit', userInput);

function userInput(event) {
  event.preventDefault();
  tableData.deleteRow(-1);
  var location = event.target.storeNames.value;
  var minCust = Number(event.target.minCustHour.value);
  var maxCust = Number(event.target.maxCustHour.value);
  var avgCookie = Number(event.target.avgCust.value);
  var newStore = new Store(location, minCust, maxCust, avgCookie);

  newStore.hourlyCust();
  newStore.hourlyCookie();
  newStore.render();
  renderFooterRow();
}

/////////////////Prototypes////////////////////////////

Store.prototype.hourlyCust = function () {
  for (var i = 0; i < hours.length; i++) {
    var customers = randomNumber(this.minCust, this.maxCust);
    this.customersEachHour.push(customers);
  }
};
Store.prototype.hourlyCookie = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiePerHour = Math.ceil(this.customersEachHour[i] * this.avgCookie);
    this.cookiesEachHour.push(cookiePerHour);
    this.dailyCookies += cookiePerHour;
  }
};

///////////////////////Table///////////////////////

var tableData = document.getElementById('tableData');
function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Location';
  tableRow.appendChild(tableHeader);
  tableData.appendChild(tableRow);

  //////////////////////StoreHoursOnTable//////////////
  for (var i = 0; i < hours.length; i++) {
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
    tableData.appendChild(tableRow);
  }
  tableData = document.getElementById('tableData');
  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Location Total';
  tableRow.appendChild(tableHeader);
  tableData.appendChild(tableRow);
}
makeHeaderRow();

/////Prototype that makes new row of cust input/////
Store.prototype.render = function () {

  var tableRow = document.createElement('tr');
  var tableInfo = document.createElement('td');
  tableInfo.textContent = this.location;

  tableRow.appendChild(tableInfo);

  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    tableInfo = document.createElement('td');
    tableInfo.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableInfo);
  }
  tableInfo = document.createElement('td');
  tableInfo.textContent = this.dailyCookies;
  tableRow.appendChild(tableInfo);

  tableData.appendChild(tableRow);
};

var renderFooterRow = function () {
  var tableRow = document.createElement('tr');
  var tableInfo = document.createElement('td');
  tableInfo.textContent = 'Total';
  tableRow.appendChild(tableInfo);

  for (var i = 0; i < (hours.length); i++) {
    var grandTotals = 0;
    var allTotal = document.createElement('td');

    for (var j = 0; j < (allLocations.length); j++) {
      grandTotals += allLocations[j].cookiesEachHour[i];
    }
    allTotal.textContent = grandTotals;
    tableRow.appendChild(allTotal);
  }
  tableData.appendChild(tableRow);
};

for (var i = 0; i < allLocations.length; i++) {
  allLocations[i].hourlyCust();
  allLocations[i].hourlyCookie();
  allLocations[i].render();
}

renderFooterRow();
