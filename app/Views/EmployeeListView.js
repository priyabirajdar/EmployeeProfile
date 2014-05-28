/**
 * Created by synerzip on 22/5/14.
 */

define( ['jquery',
         'underscore',
         'backbone',
         '../Models/EmployeeModel',
         'text!./employee-list-template'],
    function($,
             _,
             Backbone,
             EmployeeModel,
             listtemplate) {
        // Backbone View : Employee List View
        return Backbone.View.extend({
            el: '.page',
            render : function() {
                var thisElement = this;
                var employees = new Employees();
                employees.fetch({
                    success : function(employees){
                        // Underscore template functions
                        var template = _.template($('#listtemplate').html(), {employees : employees.models});
                        thisElement.$el.html(template);
                    }
                })
            }
        } );
    }
)
