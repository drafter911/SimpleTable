define([
    'backbone'

], function (Backbone) {
    'use strict';

    var Model = Backbone.Model.extend({
        idAttribute: 'name',

        defaults: function () {
            return {
                'name': null,
                'alpha-2': null
            };
        }
    });

    return Model;
});