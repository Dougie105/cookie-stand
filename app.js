'use strict';

//Constructor

var allLocations = [];

var allElem = document.getElementById('tableElem');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var totalPerHour =[];

function Store(location, minCust, maxCust, avgCookie, totalCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalCookies = totalCookies;

  allLocations.push(this);
}


//Variables

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
  var totalEl = document.createElement('th');
  totalEl.textContent = `Daily Location Total: ${total} cookies`;
  rowElem.appendChild(totalEl);

  //Row Data (Footer Row)

  allElem.appendChild(rowElem);
};

/////////////////////////////////////TABLE////////////////////////////

var tableHead = document.getElementById('tableElem');

var renderHeaderRow = function(){
  var trElem = document.createElement('tr');
  var thElem = document.createElement('td');
  thElem.textContent = 'Location';
  trElem.appendChild(thElem);

  for (var i = 0; i < hours.length; i++){
    var storesHourlyTotals = document.createElement('td');
    storesHourlyTotals.textContent = hours[i];
    trElem.appendChild(storesHourlyTotals);
  }
  tableHead.appendChild(trElem);
};

renderHeaderRow();

for( var i = 0; i < allLocations.length; i++ ) {

  allLocations[i].cookiesPerHour();
  allLocations[i].generateHourlyCookies();
  allLocations[i].render();
}


console.log(allLocations);
////////////////////////////////

var calcFooterRow = function(){
  for(var i = 0; i < hours.length; i++){
    var perHourTotal = 0;

    for(var j = 0; j < allLocations.length; j++){
      perHourTotal = perHourTotal + allLocations[j].totalCookies[i];
    }
    totalPerHour.push(perHourTotal);
  }
  perHourTotal = document.createElement('td');

  allElem.appendChild(perHourTotal);
};
// footer row
var renderFooterRow = function(){
  var trFootElem = document.createElement('td');
  var thFootElem = document.createElement('th');

  thFootElem.textContent = 'Hourly Totals';
  trFootElem.appendChild(thFootElem);

  for (var i = 0; i < hours.length; i++){
    var perHourTotal = document.createElement('td');
    perHourTotal.textContent = totalPerHour[i];
    allElem.appendChild(perHourTotal);
  }

  tableFoot.appendChild(trFootElem);
};



var tableFoot = document.getElementById('tableElem');

console.log(totalPerHour);
calcFooterRow();
renderFooterRow();

//FORM//

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();

  var location = event.target.location.value;
  var avgCookie = event.target.avgCookie.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;

  //Validation
  if (isNaN(avgCookie)){
    alert('Please enter a number');
    event.target.avgCookie.value = null;
  }
  if (isNaN(minCust)){
    alert('Please enter a number');
    event.target.minCustElem.value = null;
  }
  if (isNaN(maxCust)){
    alert('Please enter a number');
    event.target.maxCustElem.value = null;
  }
  var custInput = new Store(location, avgCookie, minCust, maxCust);
  console.log(allLocations);
}
