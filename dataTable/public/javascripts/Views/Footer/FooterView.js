define([
    'marionette',
    'text!Templates/Footer/Footer.html'
],function(Marionette, template) {

    var view = Marionette.ItemView.extend({
        className: 'container',
        template: _.template(template),

        initialize:function(options){

        }

    });

    return view;
});