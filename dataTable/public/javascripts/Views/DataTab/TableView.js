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
            'click .column-sort': 'sortByCurrentColumn',
            'click .toggle-pan .btn': 'toggleAddPanel',
            'click #add-new-item-btn': 'addNewItem'
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

        toggleAddPanel: function(){
            console.log('sdsdvff');
            $('.toggle-pan .btn').toggleClass('hidden');
            $('.add-form-pan').toggleClass('hidden');
        },

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
            this.collection.trigger('changePage', data, $.param(data));
        },

        addNewItem: function(e){
            e.preventDefault();
            var form = $('#add-new-item-form').serializeJSON({parseAll: true});
            this.data = {
            limit: 20,
            offset: 0,
            sortBy: '_id',
            desc: false
        };
            this.collection.trigger('addNewItem', form, this.data, $.param(this.data));
            console.log('eeeeeeeeeee',form);
        }
    });
});