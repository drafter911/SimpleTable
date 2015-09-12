define([
    'backbone',
    'marionette',
    'Controllers/TableController'
],function(Backbone, Marionette, DTController) {
    return Marionette.AppRouter.extend({

        initialize: function(app) {
          this.controller = new DTController(app);
        },

        appRoutes: {
            "states": "showCollection"
        }
    });
});