'use strict';

var salmon = {
  title: 'salmon, adult',
  src: 'img/salmon.png',
  alt: 'photo of salmon',
  colors: [],
};

// elements from DOM -- lists
var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];
var theadElement = document.createElement('thead');
var trElement = document.createElement('tr');
// var thElement = document.createElement('th');

document.getElementById('salestable').appendChild(theadElement);

var renderHours = function() {
  // create empty th element
  var thElement = document.createElement('th');
  // do not give first th element any content
  thElement.textContent = '';
  // append it to the DOM
  theadElement.appendChild(thElement);

  for (var i = 0; i <= hours.length; i++) {
    // create element
    var thElement = document.createElement('th');
    // give it content
    thElement.textContent = hours[i];
    //append it to the DOM
    theadElement.appendChild(thElement);
  }
};
renderHours();

// function Store (name, min, max, avg) {
//   this.name = name;
//   this.min = min;
//   this.max = max;
//   this.avg = avg;
//   stores.push(this);
//   for (var i = 0; i < stores.length; i++) {
//     stores[i];
//   }
// }

// for (var i = 0; i < hours.length; i++) {
  
// }

// new Store('Seattle', 23, 65, 6.3);
// // functions / prototype methods
// Store.prototype.storeInfo = function() {

// };


// var seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   hourlySales: [],
//   dailyTotal: 0,


//   // successfully get random number between min and max provided
//   getRandomCustomersPerHour: function(){
//     return Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //  var random = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //   console.log(random);
//   //   return random;
//   },

//   calculateAndPopulateHourlySales: function(){
//     for ( var i = 0; i < hours.length; i++){
//       var hourlyTotal = Math.ceil(this.getRandomCustomersPerHour() * this.avg)
//       ;
//       console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   // iteratively render each list item
//   render: function() {
//     this.calculateAndPopulateHourlySales();
//     for (var i = 0; i < hours.length; i++) {
//       var liElement = document.createElement('li');
//       // the text inside the li element I just created
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       // append to DOM
//       seattleList.appendChild(liElement);
//     }

//     liElement = document.createElement('li');
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     seattleList.appendChild(liElement);
//   }
// };

// var tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   hourlySales: [],
//   dailyTotal: 0,


//   // successfully get random number between min and max provided
//   getRandomCustomersPerHour: function(){
//     return Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //  var random = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //   console.log(random);
//   //   return random;
//   },

//   calculateAndPopulateHourlySales: function(){
//     for ( var i = 0; i < hours.length; i++){
//       var hourlyTotal = Math.ceil(this.getRandomCustomersPerHour() * this.avg)
//       ;
//       console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   // iteratively render each list item
//   render: function() {
//     this.calculateAndPopulateHourlySales();
//     for (var i = 0; i < hours.length; i++) {
//       var liElement = document.createElement('li');
//       // the text inside the li element I just created
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       // append to DOM
//       tokyoList.appendChild(liElement);
//     }

//     liElement = document.createElement('li');
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     tokyoList.appendChild(liElement);
//   }
// };

// var dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   hourlySales: [],
//   dailyTotal: 0,


//   // successfully get random number between min and max provided
//   getRandomCustomersPerHour: function(){
//     return Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //  var random = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //   console.log(random);
//   //   return random;
//   },

//   calculateAndPopulateHourlySales: function(){
//     for ( var i = 0; i < hours.length; i++){
//       var hourlyTotal = Math.ceil(this.getRandomCustomersPerHour() * this.avg)
//       ;
//       console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   // iteratively render each list item
//   render: function() {
//     this.calculateAndPopulateHourlySales();
//     for (var i = 0; i < hours.length; i++) {
//       var liElement = document.createElement('li');
//       // the text inside the li element I just created
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       // append to DOM
//       dubaiList.appendChild(liElement);
//     }

//     liElement = document.createElement('li');
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     dubaiList.appendChild(liElement);
//   }
// };

// var paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   hourlySales: [],
//   dailyTotal: 0,


//   // successfully get random number between min and max provided
//   getRandomCustomersPerHour: function(){
//     return Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //  var random = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //   console.log(random);
//   //   return random;
//   },

//   calculateAndPopulateHourlySales: function(){
//     for ( var i = 0; i < hours.length; i++){
//       var hourlyTotal = Math.ceil(this.getRandomCustomersPerHour() * this.avg)
//       ;
//       console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   // iteratively render each list item
//   render: function() {
//     this.calculateAndPopulateHourlySales();
//     for (var i = 0; i < hours.length; i++) {
//       var liElement = document.createElement('li');
//       // the text inside the li element I just created
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       // append to DOM
//       parisList.appendChild(liElement);
//     }

//     liElement = document.createElement('li');
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     parisList.appendChild(liElement);
//   }
// };

// var lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   hourlySales: [],
//   dailyTotal: 0,


//   // successfully get random number between min and max provided
//   getRandomCustomersPerHour: function(){
//     return Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //  var random = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
//   //   console.log(random);
//   //   return random;
//   },

//   calculateAndPopulateHourlySales: function(){
//     for ( var i = 0; i < hours.length; i++){
//       var hourlyTotal = Math.ceil(this.getRandomCustomersPerHour() * this.avg)
//       ;
//       console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   // iteratively render each list item
//   render: function() {
//     this.calculateAndPopulateHourlySales();
//     for (var i = 0; i < hours.length; i++) {
//       var liElement = document.createElement('li');
//       // the text inside the li element I just created
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       // append to DOM
//       limaList.appendChild(liElement);
//     }

//     liElement = document.createElement('li');
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     limaList.appendChild(liElement);
//   }
// };


// // executables
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();






