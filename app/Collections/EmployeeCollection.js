/**
 * Created by synerzip on 22/5/14.
 */

// Backbone Collection
define( ['backbone'],
    function(Backbone){
        return Backbone.Collection.extend({
            url : '/users'
        });
    }
)
