define([
    'backbone',
    'marionette',
    'Collections/DataTab',
    'Views/DataTab/TableView'
], function (Backbone, Marionette, TabElemsCollection, DataTabView) {
    //var controller = Marionette.Object.extend({
    return Marionette.Object.extend({

        initialize: function(app) {
            this.app = app;
            console.log('controller initialize');
            this.collection = new TabElemsCollection();
        },

        showCollection: function(options) {
            this.view = new DataTabView({
                collection: this.collection
            });
            this.app.applicationView.showContent(this.view);
            this.collection.fetch();
            console.log(this.collection);
        }

    });
});