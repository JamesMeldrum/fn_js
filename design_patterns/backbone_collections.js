// Basic backbone collections set-up demonstrating built-ins

(function(){

  "use strict";

  var Backbone = require("backbone");

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
      validate : function(atts){
        // Special method called to validate variables
        // Called on setting all attributes of a model
        // Return undefined if Error
        if (atts.email.length <3){
          return "email must be at least 3 chars.";
        }
      }
    },{
      classProperty: function() { console.log("Class method called."); }
    }
  );

  // Insantiate a collection
  var Users = Backbone.Collection.extend({
    comparator: function(user){             // Comparator fn compares
      return user.get("name");
    },
    model : User
  });

  // Populate on instantiating the Collection, pass an array of models
  var users = new Users([
      {name: "TestOne", email: "testone@example.com"},
      {name: "TestTwo", email: "testtwo@example.com"},
      {name: "TestThree", email: "testthree@example.com"}
  ]);

  // Listening to the add / remove events
  // Will not fire added listeners for previous instantiated models
  users.bind("change", function(user) {
    console.log("User changed:", user);
  });
  users.bind("remove", function(user) {
    console.log("User removed:", user);
  });
  users.bind("add", function(user) {
    //console.log("User added:",user);
  });

  // TODO: Get record by id
  var get_by_cid = users.get("c2");
  console.log(get_by_cid);
  var get_by_model_instance = users.get(get_by_cid);
  console.log(get_by_model_instance);

  // Or with .add().
  users.add({name: "TestFour", email: "testfour@example.com"});
  users.add([{name: "TestFour", email: "testfour@example.com"},{name: "TestFive", email: "testfive@example.com"}]);
  
}());

