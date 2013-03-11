// Demonstration of require packaging format
// Should be called in the data-main attribute of a page

  var require = require("requirejs");
  console.log(this);

  // Two follow up patterns may be used from here

  var client_module = require('client_module');
  console.log(client_module);

(function(){

  "use strict";

  require(["client_module"], function(client_module){
    console.log(client_module);
  });

}());

