// Hand-rolled basic type / identity / value testing
// Require compliant exporting.


(function(){

  "use strict";

  var window = {}; // Emulating the DOM

  (function(exports){

    var assert = {}, iKey, i;

    // Private
    
    var Errors = {
      not_equal : "Values were not equal",
      not_equivalent : "Values were not equivalent",
      not_identical : "Values were not identical",
      not_gt : "Value 1 was not greater than  to value 2",
      not_gte : "Value 1 was not greater than or equal to value 2",
      not_lt : "Value 1 was not less than value 2",
      not_lte : "Value 1 was not less than or equal to value 2",
      not_type : "The two values were of a different type"
    };

    // Public
    var Tests = {
      bool : function(LHS, RHS){
        var retVal;                         // Crockford HATES multiple return statements
        if (LHS === RHS){
          retVal = true;
        }else{
          retVal = false;
          throw Errors.not_equal;  
        }
        return retVal;
      },
      equivalent : function(LHS, RHS){
        var retVal;
        if (LHS == RHS){
          retVal = true;
        }else{
          retVal = false;
          throw Errors.not_equivalent;  
        }
        return retVal;
      },
      identical : function(LHS,RHS){
        var retVal;
        if (LHS === RHS){
          retVal = true;
        }else{
          retVal = false;
          throw Errors.not_identical;  
        }
        return retVal;
      },
      type : function(LHS, RHS){
        var retVal;
        if((typeof LHS) === (typeof RHS)){
          retVal = true;
        }else{
          retVal = false;
          throw Errors.not_type;
        }
      },
      gt : function(LHS, RHS){
        var retVal;
        if (LHS > RHS){
          retVal = true;
        }else{
          retVal = false;
          throw Errors.not_gt;  
        }
        return retVal;
      },
      gte : function(LHS, RHS){
        var retVal;
        if (LHS >= RHS){
          retVal = true;
        }else{
          retVal = false;
          throw Errors.not_gt;  
        }
        return retVal;
      },
      lt : function(LHS, RHS){
        var retVal;
        if (LHS < RHS){
          retVal = true;
        }else{
          retVal = false;
          throw Errors.not_lt;  
        }
        return retVal;
      },
      lte : function(LHS, RHS){
        var retVal;
        if (LHS <= RHS){
          retVal = true;
        }else{
          retVal = false;
          throw Errors.not_lte;  
        }
        return retVal;
      }
    };

    for(iKey in Tests){
      if(Tests.hasOwnProperty(iKey)){
        assert[iKey] = Tests[iKey];
      }
    }

    exports.assert = assert;

  }(window));

  console.log(window.assert);
  console.log(window.assert.lt(4,12));
 
}());
