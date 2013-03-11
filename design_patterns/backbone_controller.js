// Example Controllers in backbone.
// All controllers are compatible with Google's AJAX crawling spec

(function(){
  "use strict";

  var Backbone = require("backbone");

  Backbone.history.start();                                   // Initialize history support

  var PageController = Backbone.Controller.extend({
    initialize : {
      this.route(/\!help\/(\d+)/, 'id', function(pageId){
        console.log("This route has been set specifically");
        Backbone.history.saveLocation("!help/"+pageId);       // Navigation with hash fragments
      })
    },
    routes : {
      "!/help" :                         "help",              // #!/help
      "!/search/:query" :                "search",
      "!/search/:query/p:page" :         "search",
      "!/file/*path" :                   "file"
    },

    index : function(){ console.log("Index called"); },
    help : function() { console.log("Help called"); },
    search : function(query, page) { console.log("Search called. Query:",query,". Page:",page); }

  });
}());
