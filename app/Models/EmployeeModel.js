/**
 * Created by synerzip on 22/5/14.
 */

define(['backbone'],
    function(Backbone){
        // Backbone Model
        return Backbone.Model.extend({
            urlRoot: '/users'
        });
    }
)
