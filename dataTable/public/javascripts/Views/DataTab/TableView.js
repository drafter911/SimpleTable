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
            offset: 0,
            sortBy: '_id',
            desc: false
        },

        events: {
            'click .fa-sort-numeric-desc': 'descendingSort',
            'click .fa-sort-numeric-asc': 'ascendingSort',
            'click .column-sort': 'sortByCurrentColumn'
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

        sortByCurrentColumn: function(e){
            var target = $(e.target),
                block = $('.table-header');
            this.data.sortBy = target.data('sort');
            this.sendRequest(this.data);
            block.find('.fa').removeClass('blue');
            target.find('.fa').addClass('blue');
            console.log($(e.target).data('sort'));
        },

        // descendingSort: function(e) {
        //     this.setSortDirection(true, e);
        // },

        // ascendingSort: function(e) {
        //     this.setSortDirection(false, e);
        // },

        // setSortDirection: function(bool, e) {
        //     this.data.desc = bool;
        //     this.sendRequest(this.data);
        //     $('.sort-buttons').find('.fa').removeClass('white bg-blue');
        //     $(e.target).addClass('white bg-blue');
        // },

        initPagination: function (count, currentPage) {
            var that = this;
            $('.pagination').pagination({
                hrefTextPrefix: '',
                items: count,
                currentPage: currentPage,
                itemsOnPage: 20,
                cssStyle: 'light-theme',
                onPageClick: function (pageNumber, e) {
                    that.data.offset = (pageNumber - 1) * 20;
                    that.sendRequest(that.data);
                    //that.collection.trigger('changePage', that.data, $.param(that.data));
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
        },

        sendRequest: function(data) {
            // debugger
            this.collection.trigger('changePage', data, $.param(data));
        }
    });
});