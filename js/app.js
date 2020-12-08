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



//1st object literal - get it to work

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,


  // successfully get random number between min and max provided
  getRandomCustomersPerHour: function(){
    return Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
  //  var random = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
  //   console.log(random);
  //   return random;
  },

  calculateAndPopulateHourlySales: function(){
    for ( var i = 0; i < hours.length; i++){
      var hourlyTotal = Math.ceil(this.getRandomCustomersPerHour() * this.avg)
      ;
      console.log(hourlyTotal);
      this.hourlySales[i] = hourlyTotal;
      this.dailyTotal += hourlyTotal;
    }
  },

  // iteratively render each list item
  render: function() {
    this.calculateAndPopulateHourlySales();
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      // the text inside the li element I just created
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // append to DOM
      seattleList.appendChild(liElement);
    }

    liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
    seattleList.appendChild(liElement);
  }
};

var tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  hourlySales: [],
  dailyTotal: 0,


  // successfully get random number between min and max provided
  getRandomCustomersPerHour: function(){
    return Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
  //  var random = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
  //   console.log(random);
  //   return random;
  },

  calculateAndPopulateHourlySales: function(){
    for ( var i = 0; i < hours.length; i++){
      var hourlyTotal = Math.ceil(this.getRandomCustomersPerHour() * this.avg)
      ;
      console.log(hourlyTotal);
      this.hourlySales[i] = hourlyTotal;
      this.dailyTotal += hourlyTotal;
    }
  },

  // iteratively render each list item
  render: function() {
    this.calculateAndPopulateHourlySales();
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      // the text inside the li element I just created
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // append to DOM
      tokyoList.appendChild(liElement);
    }

    liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
    tokyoList.appendChild(liElement);
  }
};


// executables
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();






