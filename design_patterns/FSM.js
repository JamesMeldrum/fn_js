// Uses jQuery's event API to trigger and bind events on the FSM


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
}());
