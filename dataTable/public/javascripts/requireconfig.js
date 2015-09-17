// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    //baseUrl: '/javascripts',

    shim: {
        'underscore': { 'exports': '_' },
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        },

        'marionette': {
            'deps': ['backbone'],
            'exports': 'Marionette'
        },

        'jquery': {'exports': ['$', 'jquery', 'jQuery', 'JQuery']},

        'jqueryParseParams': ['jquery'],

        'simplePagination': ['jquery'],

        'jquerySerialize': ['jquery']
    },

    paths: {
        'backbone': '/assets/backbone/backbone-min',
        'marionette': '/assets/backbone.marionette/backbone.marionette.min',
        'underscore': '/assets/underscore/underscore-min',
        'jquery': '/assets/jquery/jquery.min',
        'text': '/assets/text/text',
        'simplePagination': '/assets/simplePagination/jquery.simplePagination',
        'jquerySerialize': '/assets/jquerySerialize/jquery.serializejson.min',
        'jqueryParseParams': '/assets/parseparams/jquery.parseparams'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['Application'], function(Application) {
    Application.start();
});