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
            limit: 20,
            offset: 0
        },

        initialize: function (options) {
            var that = this;
            this.listenTo(this.collection, {
                'request': function () {
                    that.togglePreloader('req');
                },
                'sync': function (options, params) {
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
                itemsOnPage: 20,
                cssStyle: 'light-theme',
                onPageClick: function (pageNumber, e) {
                    that.data.offset = (pageNumber - 1) * 20;
                    that.collection.trigger('changePage', that.data, $.param(that.data));
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