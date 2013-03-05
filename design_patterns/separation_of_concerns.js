// TODO:  Look at correct way to separate declarative HTML for functional JS. 
//        Use classes correctly to generate methods and properties on HTML objects

(function () {

  'use strict';

  var Button = new Class;

  Button.include({
    init: function(element){
      this.element = jQuery(element);
      this.element.click(this.proxy(this.click));
    },
    click: function(){}
  });


}());
