define([
    'underscore',
    'marionette',
    'text!Templates/DataTab/Tab.html',
    'Views/DataTab/ItemView'
], function (_, Marionette, template, Item) {
    return Marionette.CompositeView.extend({
        template: _.template(template),
        childView: new Item,
        childViewContainer: "h1",

        initialize: function() {
            //debugger
            this.listenTo(this.collection, 'sync', function(){
                console.log(this.collection.toJSON());
            });
        }
    });
});