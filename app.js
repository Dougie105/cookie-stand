var seattle = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,

    whatsThat: function(){
        seattle.minCust = Math.ceil(seattle.minCust);
        seattle.maxCust = Math.floor(seattle.maxCust);
        return Math.floor(Math.random() * (seattle.maxCust - seattle.minCust)) + seattle.minCust;
    } 

}
console.log(seattle.whatsThat());



var tokyo = {
    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,

    whatsThat: function(){
        tokyo.minCust = Math.ceil(tokyo.minCust);
        tokyo.maxCust = Math.floor(tokyo.maxCust);
        return Math.floor(Math.random() * (tokyo.maxCust - tokyo.minCust)) + tokyo.minCust;
    } 

}
console.log(tokyo.whatsThat());



var dubai = {
    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,

    whatsThat: function(){
        dubai.minCust = Math.ceil(dubai.minCust);
        dubai.maxCust = Math.floor(dubai.maxCust);
        return Math.floor(Math.random() * (dubai.maxCust - dubai.minCust)) + dubai.minCust;
    } 

}
console.log(dubai.whatsThat());



var paris = {
    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,

    whatsThat: function(){
        paris.minCust = Math.ceil(paris.minCust);
        paris.maxCust = Math.floor(paris.maxCust);
        return Math.floor(Math.random() * (paris.maxCust - paris.minCust)) + paris.minCust;
    } 

}
console.log(paris.whatsThat());



var lima = {
    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,

    whatsThat: function(){
        lima.minCust = Math.ceil(lima.minCust);
        lima.maxCust = Math.floor(lima.maxCust);
        return Math.floor(Math.random() * (lima.maxCust - lima.minCust)) + lima.minCust;
    } 

}
console.log(lima.whatsThat());


