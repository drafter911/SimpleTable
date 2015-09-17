define([
    'backbone',
    'marionette',
    'Collections/DataTab',
    'Views/DataTab/TableView',
    'jquery',
    'jqueryParseParams'
], function (Backbone, Marionette, TabElemsCollection, DataTabView) {
    return Marionette.Object.extend({

        initialize: function (app) {
            this.app = app;
            this.collection = new TabElemsCollection();
            this.listenTo(this.collection, 'changePage', this.getTable);
        },

        showCollection: function (params) {
            var parsed = $.parseParams(params);
            this.view = new DataTabView({
                collection: this.collection,
                params: params ? parsed : {}
            });
            this.app.applicationView.showContent(this.view);
            this.getTable();
        },

        getTable: function (data, reqUrl) {
            // debugger
            // console.log($.parseParams(data));
            // console.log(Backbone.history);
            if(data === undefined){
                // debugger
                data = $.parseParams(Backbone.history.location.hash);
                // debugger
            }
            var that = this;
            options = _.extend({
                data: data,
                // url: that.collection.url + '/?',
                //url: that.collection.url + '/?' + reqUrl,
                success: function (collection, resp, xhr) {
                    that.collection.reset(resp.table);
                    console.log('succ:', xhr.xhr.responseJSON);
                    that.collection.trigger('getResponseParams', xhr.xhr.responseJSON);
                    if(reqUrl){
                        Backbone.history.location.hash = reqUrl;
                    }
                },
                error: function () {
                    alert('Collection.fetch() failed.');
                }
            });
            that.collection.fetch(options);
        }

    });
});