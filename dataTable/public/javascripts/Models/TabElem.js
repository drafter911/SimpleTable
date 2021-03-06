define([
    'backbone'

], function (Backbone) {
    'use strict';

    var Model = Backbone.Model.extend({
        idAttribute: '_id',

        defaults: function () {
            return {
                "_id": null,
                "isActive": null,
                "age": null,
                "credit": null,
                "latitude": null,
                "longitude": null
            };
        }
    });

    return Model;
});