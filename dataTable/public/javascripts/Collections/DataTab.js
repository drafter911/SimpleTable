define([
    'backbone',
    'Models/TabElem'

], function (Backbone, Model) {
    'use strict';

    var Collection = Backbone.Collection.extend({
        model: Model,
        //url: 'http://ip.jsontest.com/'
        url: 'https://gist.githubusercontent.com/tvpmb/4734703/raw/b54d03154c339ed3047c66fefcece4727dfc931a/US%2520State%2520List'
    });

    return Collection;
});