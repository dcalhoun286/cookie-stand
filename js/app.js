'use strict';

// var salmon = {
//   title: 'salmon, adult',
//   src: 'img/salmon.png',
//   alt: 'photo of salmon',
//   colors: [],
// };

// elements from DOM -- lists
var storeTable = document.getElementById('salestable');

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];
// var theadElement = document.createElement('thead');
// var tbodyElement = document.createElement('tbody');
// var tfootElement = document.createElement('tfoot');
// var thElement = document.createElement('th');
// var trElement = document.createElement('tr');
// var tdElement = document.createElement('td');

// var myForm = document.getElementById('form');

var renderHoursRow = function () {
  // create table head
  var theadElement = document.createElement('thead');
  storeTable.appendChild(theadElement);
  var trElement = document.createElement('tr');
  theadElement.appendChild(trElement);
  var thElement = document.createElement('th');
  // empty cell in thead
  thElement.textContent = 'Stores';
  // append it to the DOM
  trElement.appendChild(thElement);

  for (var i = 0; i < hours.length; i++) {
    // create element
    thElement = document.createElement('th');
    // give it content
    thElement.textContent = hours[i];
    //append it to the DOM
    trElement.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Total Hours';
  trElement.appendChild(thElement);
};
renderHoursRow();

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  stores.push(this);
  this.dailyTotal = 0;
}

Store.prototype.getRandomCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calculateAndPopulateHourlySales = function () {
  // create tbody element
  var tbodyElement = document.getElementById('tbody');

  // create tr element and append to DOM
  var trElement = document.createElement('tr');
  tbodyElement.appendChild(trElement);

  // add store name to DOM
  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = Math.ceil(this.getRandomCustomersPerHour() * this.avg);
    this.hourlySales[i] = hourlyTotal;
    this.dailyTotal += hourlyTotal;

    // create td element
    var tdElement = document.createElement('td');
    // give it content
    tdElement.textContent = this.hourlySales[i];
    //append it to the DOM
    trElement.appendChild(tdElement);
  }
  //append daily store total to DOM
  var lasttdElement = document.createElement('td');
  lasttdElement.textContent = this.dailyTotal;
  trElement.appendChild(lasttdElement);
};

Store.prototype.render = function() {
  this.calculateAndPopulateHourlySales();
};

// these values will be stored into the stores array
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// function renderFooter() {


// // step 2: add event listener - we pass in two arguments! Event as string, and callback function
// myForm.addEventListener('submit',
//   function handleSubmit(event) {
//     event.preventDefault();
//     var name = parseInt(event.target.name.value);
//     var min = parseInt(event.target.min.value);
//     var max = parseInt(event.target.max.value);
//     var avg = parseFloat(event.target.avg.value);

//     var userStore = new Store(name, min, max, avg);
//     userStore.render();
//   }
// );

// step 1: get element by id to listen to container
var myForm = document.getElementById('form');
myForm.addEventListener('submit',
  function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var min = event.target.name.value;
    var max = event.target.name.value;
    var avg = event.target.avg.value;

    var userStore = new Store(name, min, max, avg);
    userStore.render();
  }
);
