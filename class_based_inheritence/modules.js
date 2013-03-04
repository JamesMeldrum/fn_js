// Once include and extend methods have been added, including modules
// is simply a matter of building objects of functions and passing them
// to the class prior to instance instantiation. No native way to manage imports.
// TODO: Package management. Require.js?

(function () {

  'use strict';

  var ORMModule = {
    save: function(){
      console.log("ORMModule.save called");
    }
  };

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
  var Asset = new Class();

  Person.include(ORMModule);

  var person = new Person();
  person.save();

}());

