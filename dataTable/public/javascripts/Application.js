define([
        'backbone',
        'marionette',
        'Router',
        'Views/ApplicationView',
        'Controllers/TableController'
    ],
    function (Backbone, Marionette, Router, ApplicationView, DTController) {
        var app = new Marionette.Application({

            initialize: function(options) {
            }
        });

        app.applicationView = new ApplicationView({
            app: app
        });

        app.addRegions({
            'mainRegion': '#main'
        });

        app.mainRegion.show(app.applicationView);

        this.router = new Router(app);

        this.controller = new DTController(app);

        app.on('start', function(options) {
            debugger
            Backbone.history.start({
                pushState: true
            });
        });
        return app;
    });