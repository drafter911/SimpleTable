define([
    'marionette',
    'text!Templates/Header/Header.html'

], function (Marionette, template) {

    return Marionette.ItemView.extend({className: 'container',
        activeItemClassName: 'active',
        template: _.template(template),
        _hiddenMenuPages: ['404'],

        events:{
            //'click .js-logout':'_onLogout'
        },

        initialize: function (params) {
            //this.listenTo(this.model, {
            //    activateMenuItem: this._activateMenuItem
            //}, this);
        },

        onRender: function () {
            //this.$menu = this.$el.find('#menu');
            //this._toggleMenu(!this.model.id);
        },

        changeHeader: function (titleHeader) {
            //var title = Constants.TitlePre + (titleHeader ? ' - ' + titleHeader : '');
            //if (titleHeader) {
            //    $(document).attr('title', title);
            //}
        },

        _toggleMenu:function(showMenu){
            //this.$menu.toggleClass('hidden', showMenu ||false);
        },

        _activateMenuItem: function (target, titleHeader, currentTargetClass) {

            //this.$menu.toggleClass('hidden', !target || this._hiddenMenuPages.indexOf(target) != -1);
            //
            //var $items =  this.$menu.find('a');
            //
            //$items.parent().removeClass(this.activeItemClassName);
            //
            //var $selected = $items.filter('[href^="#' + target + '"]').parent().addClass(this.activeItemClassName);
            //
            //this.changeHeader(titleHeader || $selected.text());
            //
            //this._highLightCurrentMenuItem(currentTargetClass);
            //
            //return !!$selected.length;
        },

        _highLightCurrentMenuItem: function(currentHrefClass){
            //var cont = $('.nav-hef-div');
            //cont.find('a').removeClass('active-nav-hef');
            //cont.find(currentHrefClass).addClass('active-nav-hef');
        },

        _onLogout: function (){
            //this.model._onLogout();
            //return false;
        }
    });
});