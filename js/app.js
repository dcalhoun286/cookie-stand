'use strict';

var salmon = {
  title: 'salmon, adult',
  src: 'img/salmon.png',
  alt: 'photo of salmon',
  colors: [],
}
//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



//1st object literal - get it to work

var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,


  // successfully get random number between min and max provided
  getRandomNumber: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  renderCustomers: function(){
    for (var i = 0; )
  }

  getCustomersPerHour: function() {
    this.getRandomNumber / this.avg;

  }
  // populate hourlySales array 
  calculateHourlySales(){
    for (i = 0; i < hours.length; i++){
      function getRandomNumber(){
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      }
    }
    render(){

    }
    console.log(this.getRandomNumber());
  },

  // render my list with total at the end
  render: function(){
    this.calculateHourlySales();

    // proof of life
    console.log('Inside render method');
    // do thething

  }
};

seattleStore.render();

function randomNumber (min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}




