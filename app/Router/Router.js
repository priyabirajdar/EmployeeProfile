/**
 * Created by synerzip on 28/5/14.
 */
define(['backbone',
        './EmployeeListView',
        './EmployeeEditView'],
    function(Backbone,
             EmployeeList,
             EmployeeEdit){

        function askConfirmation() {
            return router.navigate('', {trigger:true}) ||
                window.confirm("Are you sure you want to delete this entry?");
        }

        // Router Configuration
        var Router = Backbone.Router.extend({
            routes : {
                '': 'home',
                'add':'editEmployee',
                'edit/:id': 'editEmployee',
                'delete/:id': 'deleteEmployee'
            }
        });
        var employeeList= new EmployeeList();
        var newEmployee = new EmployeeEdit();

        var router = new Router();
        router.on('route:home', function() {
            employeeList.render();
        });
        router.on('route:editEmployee', function(id) {
            newEmployee.render({id : id});
        });
        router.on('route:deleteEmployee', function(id) {
            if (askConfirmation())
                newEmployee.deleteUser({id : id});
        });
    });