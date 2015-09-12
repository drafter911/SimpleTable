define([
    'backbone',
    'marionette',
    'Controllers/TableController'
],function(Backbone, Marionette, DTController) {
    return Marionette.AppRouter.extend({

        appRoutes: {
            "states": "DTController"
        }
    });
});