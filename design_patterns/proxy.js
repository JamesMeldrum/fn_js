// Use of the proxy design pattern.
// Saves execution time by using apply to iterate over
// varied contexts. Example code uses Pub/Sub
// to co-ordinate global click events

(function () {

  'use strict';

  // Returns a closure that applies its arguments to
  // a delegated context when called

  var proxy = function(func, thisObject){
    return function(){
      return func.apply(thisObject, arguments);
    };
  };

  // Usage
  
  $('.anchor_clickable').click(function(){
    console.log("Anchor tag clicked!");
    console.log("Context:",this);
  });

  // Do this instead

  var globalClickChannel = {
    wasClicked: function(){
      console.log("Anchor tag clicked!");
      console.log("Context:",this);
    },

    addListeners: function(){
      var self = this;
      $('.anchor_clickable').click(proxy(this.wasClicked, this));
    }
  };

}());


