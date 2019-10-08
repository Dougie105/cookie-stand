'use strict';

/////////////////////////////////////////////////////////////////////////////////Seattle

var seattleListEl = document.getElementById('seattleList');

var seattle = {
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  totalCookies: [],

  cookiesPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  generateHourlyCookies: function(){
    for( var i = 0; i <this.hours.length; i++){
      var cookies = this.cookiesPerHour();
      this.totalCookies.push(cookies);
    }
  },

  render: function() {
    for( var i = 0; i < this.hours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `Hours: ${this.hours[i]} cookies: ${this.totalCookies[i]}`;
      seattleListEl.appendChild(childEl);
    }
  }
};
seattle.generateHourlyCookies();
seattle.render();

////////////////////////////////////////////////////////////////////////////////// Tokyo

var tokyoListEl = document.getElementById('tokyoList');

var tokyo = {
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  totalCookies: [],

  cookiesPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  generateHourlyCookies: function(){
    for( var i = 0; i<this.hours.length; i++){
      var cookies = this.cookiesPerHour();
      this.totalCookies.push(cookies);
    }
  },

  render: function(){
    for( var i = 0; i<this.hours.length; i++){
      var childEl = document.createElement('li');
      childEl.textContent = `Hours: ${this.hours[i]} cookies: ${this.totalCookies[i]}`;
      tokyoListEl.appendChild(childEl);
    }
  }
};
tokyo.generateHourlyCookies();
tokyo.render();

////////////////////////////////////////////////////////////////////////////////// Dubai

var dubaiListEl = document.getElementById('dubaiList');

var dubai = {
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  totalCookies: [],

  cookiesPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  generateHourlyCookies: function(){
    for( var i = 0; i<this.hours.length; i++){
      var cookies = this.cookiesPerHour();
      this.totalCookies.push(cookies);
    }
  },

  render: function(){
    for( var i = 0; i<this.hours.length; i++){
      var childEl = document.createElement('li');
      childEl.textContent = `Hours: ${this.hours[i]} cookies: ${this.totalCookies[i]}`;
      dubaiListEl.appendChild(childEl);
    }
  }
};
dubai.generateHourlyCookies();
dubai.render();

////////////////////////////////////////////////////////////////////////////////// Paris

var parisListEl = document.getElementById('parisList');

var paris = {
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  location: 'Dubai',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  totalCookies: [],

  cookiesPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  generateHourlyCookies: function(){
    for( var i = 0; i<this.hours.length; i++){
      var cookies = this.cookiesPerHour();
      this.totalCookies.push(cookies);
    }
  },

  render: function(){
    for( var i = 0; i<this.hours.length; i++){
      var childEl = document.createElement('li');
      childEl.textContent = `Hours: ${this.hours[i]} cookies: ${this.totalCookies[i]}`;
      parisListEl.appendChild(childEl);
    }
  }
};
paris.generateHourlyCookies();
paris.render();

////////////////////////////////////////////////////////////////////////////////// Lima

var limaListEl = document.getElementById('limaList');

var lima = {
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  location: 'Lima',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  totalCookies: [],

  cookiesPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  generateHourlyCookies: function(){
    for( var i = 0; i<this.hours.length; i++){
      var cookies = this.cookiesPerHour();
      this.totalCookies.push(cookies);
    }
  },

  render: function(){
    for( var i = 0; i<this.hours.length; i++){
      var childEl = document.createElement('li');
      childEl.textContent = `Hours: ${this.hours[i]} cookies: ${this.totalCookies[i]}`;
      limaListEl.appendChild(childEl);
    }
  }
};
lima.generateHourlyCookies();
lima.render();