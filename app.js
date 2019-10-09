'use strict';

//Constructor

var allLocations = [];

var allElem = document.getElementById('tableElem');

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

  var rowElem = document.createElement('tr');

  //Row Header (Seattle)
  var headerEl = document.createElement('th');
  headerEl.textContent = this.location;
  rowElem.appendChild(headerEl);

  var total = 0;

  //Row Data (Cookie Sales)
  for (var i = 0; i < hours.length; i++) {

    var childEl = document.createElement('td');
    childEl.textContent = `${this.totalCookies[i]}`;
    rowElem.appendChild(childEl);

    total = total + this.totalCookies[i];
  }
  //Row Data (Cookie Sales Total)
  var totalEl = document.createElement('td');
  totalEl.textContent = `Daily Location Total: ${total} cookies`;
  rowElem.appendChild(totalEl);

  allElem.appendChild(rowElem);
};
/////////////////////////////////////TABLE////////////////////////////

var tableHead = document.getElementById('tableElem');

var renderHeaderRow = function(){
  var trElem = document.createElement('tr');
  var thElem = document.createElement('th');
  thElem.textContent = 'Location';
  trElem.appendChild(thElem);

  for (var i = 0; i < hours.length; i++){
    var tdElem = document.createElement('td');
    tdElem.textContent = hours[i];
    trElem.appendChild(tdElem);
  }
  tableHead.appendChild(trElem);
};
renderHeaderRow();

////////////////////////////////Final Totals//////////////////////////



//////////////////////////////////////////////////////////////////////
for( var i = 0; i < allLocations.length; i++ ) {

  allLocations[i].cookiesPerHour();
  allLocations[i].generateHourlyCookies();
  allLocations[i].render();
}
