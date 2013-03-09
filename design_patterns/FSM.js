// Uses jQuery's event API to trigger and bind events on the FSM

var $ = require('jquery');

(function(){
  "use strict";
  var Events = {
  
    create_event_object : function(){
      if(!this.o){
        this.o = $({});
      }
    },
  
    bind: function(){
      if(!this.o){
        this.create_event_object();
      }
      this.o.bind.apply(this.o, arguments);
    },
  
    trigger : function(){
      if(!this.o){
        this.create_event_object();
      }
      this.o.trigger.apply(this.o, arguments);
    }
  };

  var StateMachine = function(){};
  StateMachine.fn = StateMachine.prototype;

  $.extend(StateMachine.fn, Events); // Add event/binding, triggering

  // Add the passed controller to the list of states
  StateMachine.fn.add = function(controller){
    this.bind("change", function(e, current){
      if(controller === current){
        controller.activate();
      }else{
        controller.deactivate();
      }
    });

    // Modifies the passed controller, providing for state transitions
    controller.active = $.proxy(function(){
      this.trigger("change", controller);
    }, this);
  };

  var con1 = {
    activate: function(){ console.log("con1 activated");},
    deactivate: function(){ console.log("con1 deactivated");}
  }, 
  con2 = {
    activate: function(){ console.log("con2 activated");},
    deactivate: function(){ console.log("con2 deactivated");}
  };

  var sm = new StateMachine();
  sm.add(con1);
  sm.add(con2);

  con1.active();

}());
