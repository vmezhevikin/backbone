require.config({
    baseUrl: '/static/js/',
    paths: {
        jquery: 'lib/jquery/jquery-3.2.1',
        underscore: 'lib/underscore/underscore-1.8.3',
        bootstrap: 'lib/bootstrap/bootstrap-3.3.7',
        backbone: 'lib/backbone/backbone-1.3.3',
        text: 'lib/require/text-2.0.15'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});
require(['view/contactList'],
    function (ContactListView) {
        new ContactListView();
    });