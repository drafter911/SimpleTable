define([
    'underscore',
    'marionette',
    'text!Templates/DataTab/Tab.html',
    'Views/DataTab/ItemView',
    'simplePagination',
    'jquerySerialize'
], function (_, Marionette, template, Item) {
    return Marionette.CompositeView.extend({

        template: _.template(template),
        childView: Item,
        childViewContainer: '#table-content',

        data: {
            limit: 10,
            offset: 0
        },

        initialize: function (options) {
            var that = this;
            this.listenTo(this.collection, {
                'request': function () {
                    that.togglePreloader('req');
                },
                'sync': function (options, params) {
                    console.log('sync:', options, params);
                    that.togglePreloader('res');
                    that.initPagination(params.count, params.page);
                }
            });
        },

        initPagination: function (count, currentPage) {
            var that = this;
            $('.pagination').pagination({
                items: count,
                currentPage: currentPage,
                itemsOnPage: 10,
                cssStyle: 'light-theme',
                onPageClick: function (pageNumber, e) {
                    that.data.offset = (pageNumber - 1) * 10;
                    that.collection.trigger('changePage', that.data, $.param(that.data));
                    console.log(pageNumber);
                    //that.collection.trigger()
                }
            });
        },

        togglePreloader: function (param) {
            var pr = $('.preloader');
            if (param === 'req') {
                pr.removeClass('hidden');
            } else if (param === 'res') {
                pr.addClass('hidden');
            }
        }
    });
});