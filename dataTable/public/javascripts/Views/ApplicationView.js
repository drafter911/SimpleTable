define([
    'marionette',
    'Views/Header/HeaderView',
    'Views/DataTab/TableView',
    'Views/Footer/FooterView',
    'text!Templates/Main.html'
],function(Marionette, HeaderView, ContentView, FooterView, template) {

    var view = Marionette.LayoutView.extend({
        template: _.template(template),
        className: 'main-wrapper',

        regions : {
            main: '#content',
            header: '#header',
            footer: '#footer'
        },

        initialize:function(params){
            //this.model = params.model;
            //
            //this.listenTo(this.model, {
            //    logout: this.renderHeader
            //}, this);
        },

        onRender:function(){
            this.renderHeader();
            this.footer.show(new FooterView({
                //model:this.model
            }));
            this.showContent(new ContentView);
        },

        renderHeader: function() {
            this.header.show(new HeaderView({
                //model:this.model,
                //app: this.options.app
            }));
        },

        showContent:function(view){
            this.showChildView('main', view);

        }

    });

    return view;
});