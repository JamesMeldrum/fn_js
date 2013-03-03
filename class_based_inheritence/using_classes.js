// implemting classes
// TODO: ADerp

(function () {

  'use strict';
  
  var Class = function(){

    var klass = function(){
      console.log(arguments);
      this.init.apply(this, arguments);
    };

    klass.prototype.init = function(){
      console.log("Class instantiated");
    };

    return klass;
  };

  var Person = new Class();
  console.log("Person is a class now");

  Person.prototype.init = function(arg1,arg2){
    console.log("Person instantiated", arg1, arg2);
  };

  Person.class_function = function(arg){
    console.log("Class function called");
  };

  Person.prototype.class_function = Person.class_function;

  Person.prototype.method = function(arg){
    console.log("Method called");
  };

  // jQuery does this weird thing where they bind 'fn' to 'prototype'

  Person.fn = Person.prototype;

  var person = new Person();
  person.class_function(); // No calling classmethods from instances unless they're bound internally
                           // as from line 33
  person.method();

}());
