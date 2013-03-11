// Basic backbone model set-up demonstrating built-ins

(function(){

  "use strict";

  var Backbone = require("backbone"); // Node uses AMD through CommonJS API

  var User = Backbone.Model.extend(
    {
      defaults : {
        "name": "Steve",
        "email": "example@domain.com"
      },
      instanceProperty: "foo",
      initialize : function(name){
        // Constructor
        this.set({name:name});
      },
      url : '/users',                                     // Returns the model's endpoint
      validate : function(atts){
        // Special method called to validate variables
        // Called on setting all attributes of a model
        // Return undefined if Error
        if (!atts.email || atts.email.length <3){
          return "email must be at least 3 chars.";
        }
      }
    },{
      classProperty: function() { console.log("Class method called."); }
    }
  );


  var user = new User("Jimmy Jams");

  // As of 0.9, validation only occurs on saving through 'invalid' event

  user.bind("invalid", function(model, error){
    console.log("Model in error");
  });

  user.set({name:"Not the former"});

  // Calling bind to trigger events to a model

  user.set({email:"to"},{validate: true}); // Option on set forces validation

  console.log(user.instanceProperty, User.classProperty());
  console.log(user.get("name"));

  console.log((new User()).get("email"));

  // Listening to failed save attempts
  user.bind("error", function(model, error){
    console.log("Failed to save to server");
  });

  // Saving a model to the server

  user.save(null, {
    success: function(){ console.log("success");}, 
    failure: function(){ console.log("success");}
  });

  // Requesting update model
  user.fetch();

}());
