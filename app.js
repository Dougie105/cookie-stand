'use strict';

//Constructor

var allLocations = [];

var allElem = document.getElementById('tableElem2');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(location, minCust, maxCust, avgCookie, totalCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalCookies = totalCookies;

  allLocations.push(this);
}

//Variables

var tableLocations = document.createElement('td');

var seattle = new Store('Seattle', 23, 65, 6.3, []);

var tokyo = new Store('Tokyo', 3, 24, 1.2, []);

var dubai = new Store('Dubai', 11, 38, 3.7, []);

var paris = new Store('Paris', 20, 38, 2.3, []);

var lima = new Store('Lima', 2, 16, 4.6, []);

////////////////////////////////////////////////////////Prototype

Store.prototype.cookiesPerHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
},

Store.prototype.generateHourlyCookies = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookies = Math.ceil(this.cookiesPerHour() * this.avgCookie);
    this.totalCookies.push(cookies);
  }
},

Store.prototype.render = function () {
  var total = 0;
  for (var i = 0; i < hours.length; i++) {
    var childEl = document.createElement('td');
    childEl.textContent = `${this.totalCookies[i]}`;
    allElem.appendChild(childEl);
    total = total + this.totalCookies[i];
  }
  var totalEl = document.createElement('tr');
  totalEl.textContent = `Daily Location Total: ${total} cookies`;
  allElem.appendChild(totalEl);
};
/////////////////////////////////////TABLE////////////////////////////

var tableBody = document.getElementById('tableElem');

var renderHeaderRow = function(){
  var trElem = document.createElement('th');
  var thElem = document.createElement('th');
  thElem.textContent = 'Location';
  trElem.appendChild(thElem);

  for (var i = 0; i < hours.length; i++){
    var tdElem = document.createElement('th');
    tdElem.textContent = hours[i];
    trElem.appendChild(tdElem);
  }
  tableBody.appendChild(trElem);
};
renderHeaderRow();

for( var i = 0; i < allLocations.length; i++ ) {

  allLocations[i].cookiesPerHour();
  allLocations[i].generateHourlyCookies();
  allLocations[i].render();
}
