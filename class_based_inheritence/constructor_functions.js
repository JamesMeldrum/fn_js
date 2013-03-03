// implemting classes the jQuery way
// TODO: ADerp

(function () {

  'use strict';
  
  var Person = function(name) {
    this.name = name;
  };
  
  // 'new' keyword with class
  // constructor function
  // Don't do this:

  var alice = new Person('alice');

  console.log( alice instanceof Person );

}());
