'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allLocations = [];
var cuttingBoard = document.getElementById('allLocations');
var tableForm = document.getElementById('tableForm');



function Store(location, minCust, maxCust, avgCookie) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.avgCustHour = [];
  this.avgCookieHour = [];
  this.totalCookieDay = 0;
  allLocations.push(this);
  this.hourlyCust();
  this.cookiePerCust();
  this.render();
}



Store.prototype.render = function () {
  var rowElem = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = this.location;
  rowElem.appendChild(tableData);
  for (var i = 0; i < this.avgCookieHour.length; i++) {
    var tdElem = document.createElement('td');
    tdElem.textContent = this.avgCookieHour[i];
    rowElem.appendChild(tdElem);
  }
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookieDay;
  rowElem.appendChild(tdTotal);
  cuttingBoard.appendChild(rowElem);
};
Store.prototype.hourlyCust = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookies = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.avgCustHour.push(cookies);
  }
};
Store.prototype.cookiePerCust = function () {
  for (var i = 0; i < hours.length; i++) {
    var custCookies = Math.ceil(this.avgCustHour[i] * this.averageCookie);
    this.avgCookieHour.push(custCookies);
    this.totalCookieDay += custCookies;
  }
};
//table

var renderHeaderRow = function () {
  var trElem = document.createElement('tr');
  var thElem = document.createElement('th');
  thElem.textContent = null;
  cuttingBoard.appendChild(trElem);
  trElem.appendChild(thElem);

  for (var i = 0; i < hours.length; i++) {
    thElem = document.createElement('th');
    thElem.textContent = hours[i];
    trElem.appendChild(thElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = 'Daily Location Total';
  trElem.appendChild(thElem);
  trElem.appendChild(cuttingBoard);
  cuttingBoard.appendChild(trElem);
};

var callItAll = function () {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
};
var calcFoot = function () {
  var trElem = document.createElement('tr');
  trElem.textContent = 'Total';
  cuttingBoard.appendChild(trElem);
  var grandTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var perHourTotal = 0;
    for (var j = 0; j < allLocations.length; j++) {
      perHourTotal = perHourTotal + allLocations[j].avgCookieHour[i];
      grandTotal += allLocations[j].avgCookieHour[i];
    }
    var dataElem = document.createElement('td');
    dataElem.textContent = perHourTotal;
    trElem.appendChild(dataElem);
  }
  dataElem = document.createElement('td');
  dataElem.textContent = grandTotal;
  trElem.appendChild(dataElem);
};

//Variables

var seattle = new Store('Seattle', 23, 65, 6.3);

var tokyo = new Store('Tokyo', 3, 24, 1.2);

var dubai = new Store('Dubai', 11, 38, 3.7);

var paris = new Store('Paris', 20, 38, 2.3);

var lima = new Store('Lima', 2, 16, 4.6);

//FORM//
function userInput(event) {
  event.preventDefault();
  //Validation
  if (!event.target.location.value || !event.target.avgCookie.value || !event.target.minCust.value || !event.target.maxCust.value) {
    return alert('Fields cannot be empty!');
  }

  event.target.location.value = null;
  event.target.avgCookie.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;

  var location = event.target.location.value;
  var avgCookie = parseFloat(event.target.avgCookie.value);
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);

  cuttingBoard.textContent = null;

  var previousStore = previousExistence(allLocations, location);
  var index;

  function previousExistence(x,y) {
    for (var i = 0; i < x.length; i++) {
      if (x[i].name === y) {
        index = i;
        return true;
      }
    }
    return false;
  }
  previousExistence(allLocations, name);

  if (previousStore === true) {
    allLocations[index].minCust = parseInt(minCust);
    allLocations[index].maxCust = parseInt(maxCust);
    allLocations[index].avgCookie = parseFloat(avgCookie);
    allLocations[index].avgCustHour = [];
    allLocations[index].avgCookieHour = [];
    allLocations[index].totalCookieDay = 0;
    allLocations[index].hourlyCust();
    allLocations[index].cookiePerCust();
  }

  if (previousStore === false) {
    var newStore = new Store(name, minCust, maxCust, avgCookie);
  }
  
  renderHeaderRow();
  callItAll();
  calcFoot();
}

renderHeaderRow();
callItAll();
calcFoot();

tableForm.addEventListener('submit', userInput);
