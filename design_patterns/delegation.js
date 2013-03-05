// Uses a delegate (App.log.apply) to log all arguments to the log function.
// Converts arguments to array (as by default it is immutable)
// requires jquery

(function () {

  'use strict';

  var App = {
    log: function(){
      if(typeof console === "undefined"){
        return;
      }

      //var args = $.makeArray(arguments);
      //args.unshift("(App)");

      console.log.apply(console,arguments);
    }
  };

  App.log("bing","bong","the","cows","go","moo");

}());


