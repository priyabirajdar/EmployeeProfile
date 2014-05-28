/**
 * Created by synerzip on 22/5/14.
 */

define( ['jquery',
         'underscore',
         'backbone',
         '../Models/EmployeeModel',
         'text!./employee-edit-template.html'],
    function($,
             _,
             Backbone,
             EmployeeModel,
             edittemplate) {

        return Backbone.View.extend({
            el: '.page',
            events: {
                'submit .edit-employee-form': 'saveUser',
                'click .cancel': 'cancelOperation'
            },
            render : function(options){
                var thisElement = this;
                if(options.id) {
                    thisElement.employee = new EmployeeModel({id: options.id});
                    thisElement.employee.fetch({
                        success: function (employee) {
                            var template = _.template($('#edittemplate').html(), {employee:employee });
                            thisElement.$el.html(template);
                        }
                    })
                } else {
                    var template = _.template($('#edittemplate').html(), {employee : null});
                    this.$el.html(template);
                }
            },
            saveUser : function(ev) {
                var employeeDetails = $(ev.currentTarget).serializeObject();
                var employeeModel = new EmployeeModel();
                employeeModel.save(employeeDetails, {
                    success: function (employeeModel) {
                        router.navigate('', {trigger:true});
                    }
                });
                return false;
            },
            cancelOperation : function(){
                router.navigate('', {trigger:true});
            },
            deleteUser: function (options) {
                this.employee = new EmployeeModel({id: options.id});
                this.employee.destroy({
                    success: function () {
                        router.navigate('', {trigger:true});
                    }
                });
                return false;
            }
        });
    }
)
