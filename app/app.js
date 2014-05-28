/**
 * Created by synerzip on 28/5/14.
 */

require(['lib/bower_components/aura/lib/aura'],
    function(Aura) {
    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
    });

    Aura()
//        .use('extensions/aura-awesome-extension')
//        .use('extensions/aura-backbone')
        .use('lib/Helpers/HelperFunctions')
        .start({ components: 'body' }).then(function() {
            console.warn('Aura started...');
        });
});