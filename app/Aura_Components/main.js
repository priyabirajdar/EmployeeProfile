/**
 * Created by synerzip on 28/5/14.
 */
define(['backbone',
    'text!./homepage-template.html',
    '../Router/Router.js'],
    function(Backbone,
             hometemplate,
             Router){
    window.router = new Router();
    Backbone.history.start();
    return {
        type: "Backbone",
        el:'.container',
        initialize: function() {
            this.render();
        },
        render:function(){
            this.$el.html(_.template(hometemplate)());
        }
    };
});