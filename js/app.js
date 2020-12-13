'use strict';

// elements from DOM -- lists
var storeTable = document.getElementById('salestable');

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];

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
  thElement.textContent = 'Total Sales';
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
    this.hourlySales.push(hourlyTotal);
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

Store.prototype.render = function () {
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
var tfootElement;

function renderTableFooter() {
  // create table footer and final row
  tfootElement = document.getElementById('tfoot');
  storeTable.appendChild(tfootElement);
  var lasttrElement = document.createElement('tr');
  tfootElement.appendChild(lasttrElement);
  var lastthElement = document.createElement('th');
  lastthElement.textContent = 'Global';
  lasttrElement.appendChild(lastthElement);
  var globalHourlyTotal = 0;
  var dailyGlobalSalesTotal = 0;
  for (var k = 0; k < hours.length; k++) {
    for (var l = 0; l < stores.length; l++) {
      globalHourlyTotal += stores[l].hourlySales[k];
      // console.log(globalHourlyTotal);
      dailyGlobalSalesTotal += stores[l].hourlySales[k];
    }
    var tfoottdElement = document.createElement('td');
    tfoottdElement.textContent = globalHourlyTotal;
    lasttrElement.appendChild(tfoottdElement);
    globalHourlyTotal = 0;
  }
  // total of all totals
  tfoottdElement = document.createElement('td');
  tfoottdElement.textContent = dailyGlobalSalesTotal;
  lasttrElement.appendChild(tfoottdElement);
}
renderTableFooter();

// step 1: get element by id to listen to container
var myForm = document.getElementById('form');
myForm.addEventListener('submit',
  function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var min = event.target.min.value;
    var max = event.target.max.value;
    var avg = event.target.avg.value;

    min = parseInt(min);
    max = parseInt(max);
    avg = parseInt(avg);
    // console.log(name);
    // console.log(min);
    // console.log(max);
    // console.log(avg);

    var userStore = new Store(name, min, max, avg);
    userStore.render();
    // document.getElementById('salestable').removeChild(tfootElement);
    // renderTableFooter();
  }
);
