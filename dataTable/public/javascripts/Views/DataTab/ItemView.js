define([
    'underscore',
    'marionette',
    'text!Templates/DataTab/Item.html'
], function (_, Marionette, Item) {
    return Marionette.ItemView.extend({
        tagName: 'p',
        template: _.template(Item),

        initialize: function(options) {
            //debugger
            console.log('ItemView:',options, this.model);
            var that = this;
            this.listenTo(this.model, 'change', function() {
                //that.render();
                console.log('collection view:', this.collection);
            });
        },

        onRender: function(options) {
            console.log('called sD', options);
        }
    });
});