define([
    'underscore',
    'marionette',
    'text!Templates/DataTab/Tab.html',
    'Views/DataTab/ItemView'
], function (_, Marionette, template, Item) {
    return Marionette.CompositeView.extend({
        template: _.template(template),
        childView: Item,
        childViewContainer: '#table-content',

        initialize: function() {
            this.listenTo(this.collection, 'sync', function(){
                console.log(this.collection.toJSON());
            });
        }
    });
});