define([
    'underscore',
    'marionette',
    'text!Templates/DataTab/Item.html'
], function (_, Marionette, Item) {
    return Marionette.ItemView.extend({
        tagName: 'tr',
        template: _.template(Item),

        initialize: function(options) {
            this.listenTo(this.model, 'change', this.render);
        },

        serializeData: function () {
            this.model.set('longitude', (+(this.model.get('longitude'))).toFixed(1));
            return {
                model: this.model.toJSON()
            };
        },

        onRender: function(options) {
            //console.log('called sD', this.model.toJSON());
        }
    });
});