'use strict';

var salmon = {
  title: 'salmon, adult',
  src: 'img/salmon.png',
  alt: 'photo of salmon',
  colors: [],
};

// elements from DOM -- lists
var storeTable = document.getElementById('salestable');
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

// global variables declared for user input on form
var citystorename;
var minimum;
var maximum;
var average;
// var thElement = document.createElement('th');

// step 1: get element by id to listen to container
var myForm = document.getElementById('form');

//step 3: event handler
function handleSubmit(event) {
  event.preventDefault();

  citystorename = event.target.citystorename.value;
  console.log(citystorename);

  minimum = event.target.minimum.value;
  console.log(minimum);

  maximum = event.target.maximum.value;
  console.log(maximum);

  average = event.target.average.value;
  console.log(average);
}




storeTable.appendChild(theadElement);

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



function Store (name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailyTotal = 0;
  this.render = function() {
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = this.name;
    trElement.appendChild(thElement);
    // var tdElement = document.createElement('td');
    // for (var i = 0; i < hours.length; i++) {
      //   tdElement.textContent = this.calculateAndPopulateHourlySales();
    //   trElement.appendChild(tdElement);
    // }
    this.calculateAndPopulateHourlySales();
    for (var i = 0; i < hours.length; i++) {
      var tdElement = document.createElement('td');
      // the text inside the td element I just created
      tdElement.textContent = `${this.hourlySales[i]}`;
      this.dailyTotal += this.hourlySales[i];
      // append to DOM
      trElement.appendChild(tdElement);
    }
    
    var lasttdElement = document.createElement('td');
    lasttdElement.textContent = `Total: ${this.dailyTotal} cookies`;
    trElement.appendChild(lasttdElement);
    storeTable.appendChild(trElement);
    console.log('test');
  };
  // successfully get random number between min and max provided
  this.getRandomCustomersPerHour = function(){
    return Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
    //  var random = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
    //   console.log(random);
    //   return random;
  };
  
  this.calculateAndPopulateHourlySales = function(){
    for ( var i = 0; i < hours.length; i++){
      var hourlyTotal = Math.ceil(this.getRandomCustomersPerHour() * this.avg)
        ;
      console.log(hourlyTotal);
      this.hourlySales[i] = hourlyTotal;
      this.dailyTotal += hourlyTotal;
    }
  };

  stores.push(this);
  for (var i = 0; i < stores.length; i++) {
    stores[i];
  }
}

// these values will be stored into the stores array
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);
// var userstore = new Store(citystorename, parseInt(minimum), parseInt(maximum), parseFloat(average));
// console.log(userstore);

// functions / prototype methods
Store.prototype.storeInfo = function() {

};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// step 2: add event listener - we pass in two arguments! Event as string, and callback function
myForm.addEventListener('submit', handleSubmit);
