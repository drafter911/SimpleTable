define([
    'backbone',
    'Models/TabElem'

], function (Backbone, Model) {
    'use strict';

    var Collection = Backbone.Collection.extend({
        model: Model,
        url: 'http://localhost:4004/api/data'
    });

    return Collection;
});