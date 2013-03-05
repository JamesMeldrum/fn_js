// implemting classes
// TODO: Add class method inheritance. Consider working hasOwnProperty checks

(function () {

  'use strict';
  
  var Class = function(parent){
    var klass = function(){
      console.log(arguments);
      this.init.apply(this, arguments);
    };

    if(parent){
      var Subclass = function() {};
      Subclass.prototype = parent.prototype;
      klass.prototype = new Subclass();
    }

    // jQuery does this weird thing where they bind 'fn' to 'prototype'

    klass.prototype.init = function(){
      console.log("Class instantiated");
    };

    klass.fn = klass.prototype;
    klass.fn.parent = klass;
    klass._super = klass.prototype;

    klass.extend = function(obj){
      var extended = obj.extended;
      var i = 0;
      for(i in obj){
        if(obj.hasOwnProperty(i)){                // DC recommends wrapping
          klass[i] = obj[i];                      // body of for loop in 
                                                  // if block to prevent pollution from inherited 
                                                  // methods and values.
        }
      }
      if(extended){
        extended(klass);
      }
    };

    klass.include = function(obj){
      var included = obj.included, i = 0;
      for(i in obj){
        if(obj.hasOwnProperty(i)){
          klass.fn[i] = obj[i];
        }
      }

      if(included){
        included(klass);
      }
    };

    return klass;
  };

  var Person = new Class();

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

  var _private_method = function(){ console.log("private method called"); }; // No real concept of
                                                                             // private methods.
                                                                             // Emulation through
                                                                             // separate contexts

  // Attach class methods
  Person.extend({
    find: function(id) { console.log("find class method called"); },
    exists: function(id) { console.log("find called"); }
  });

  // Attach instance methods
  Person.include({
    public_caller: _private_method,
    find: function(id) { console.log("find instance method called"); },
    exists: function(id) { console.log("find called"); }
  });

  var person = new Person();
  person.class_function();                        // No calling classmethods from instances 
                                                  // unless they're bound internally
                                                  // as from line 65
  person.method();
  Person.find(); // Calling 
  person.find();
  person.public_caller();

  var Programmer = new Class(Person);
  var programmer = new Programmer();
  //Programmer.find(); // Does not inherit class methods yet
  programmer.find();

}());
