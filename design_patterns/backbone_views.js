// Backbone Views are not templates but control classes that handle a model's presentation.
// Remember this.
// Each view has a this.el that is created from tagName, className or id properties, default is an empty div

(function(){
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");

  var User = Backbone.Model.extend();
  var UserView = Backbone.View.extend({
    className : "users",
    events : {
      "change input[type=checkbox]" : "toggleDone",   // Providing the selector leads to event 
      "click .destroy" : "clear"                      // delegation, saving RAM. Events are
    },                                                // also evaluated in the context of the
    toggleDone : function(e){                         // view instance
      console.log("done toggled");
    },
    clear : function(e) {
      console.log("cleared");
    },
    initialize : function(){
      console.log("Initialized");
      _.bindAll(this, 'render', 'close');             // Binds context and functions
                                                      // 'render' and 'close' bound to UserView
                                                      // instance
      this.model.bind('change', this.render);         
      this.model.bind('delete', this.remove);
      this.el = $(".users");                          // Manually setting the View's current
    },                                                // DOM element after page load
    model : User,
    render : function(){                              // Defaulted to a no-op
      console.log("Rendered");                        // called on re-draws
      $(this.el).html(this.model.toJSON());           // Bind model to view
    },
    remove : function(){
      $(this.el).remove();
    },
    tagName : "span"
  });

  var userview = new UserView({model : new User()});

}());
