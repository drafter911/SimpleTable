define([
    'backbone',
    'marionette',
    'Collections/DataTab',
    'Views/DataTab/TableView'
], function (Backbone, Marionette, TabElemsCollection, DataTabView) {
    return Marionette.Object.extend({

        initialize: function (app) {
            this.app = app;
            //console.log('controller initialize');
            this.collection = new TabElemsCollection();
            this.listenTo(this.collection, 'changePage', this.getTable);
        },

        showCollection: function (options) {
            this.view = new DataTabView({
                collection: this.collection
            });
            this.app.applicationView.showContent(this.view);
            this.getTable();
        },

        getTable: function (data, reqUrl) {
            var that = this;
            options = _.extend({
                data: data,
                url: that.collection.url + '/?',
                success: function (collection, resp, xhr) {
                    that.collection.reset(resp.table);
                    that.collection.trigger('getResponseParams', xhr.xhr.responseJSON);
                },
                error: function () {
                    alert('Collection.fetch() failed.');
                }
            });
            that.collection.fetch(options);
        }

    });
});