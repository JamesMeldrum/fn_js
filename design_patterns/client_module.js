// fn_js/design_patterns/client_module.js
// Desc: This module demonstrates correct coding practise
//       for working with require.js and javascript
//       modules.

(function(){

  "use strict";

  define(function(){
    console.log("client_module instantiated");
    return {
      color : "black",
      size : "unisize"
    };
  });

}());

