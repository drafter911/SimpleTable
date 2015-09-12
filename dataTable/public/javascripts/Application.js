define([
        'backbone',
        'marionette',
        'Router',
        'Views/ApplicationView'
    ],
    function (Backbone, Marionette, Router, ApplicationView) {
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

        app.on('start', function(options) {
            Backbone.history.start({
                pushState: true
            });
        });
        return app;
    });