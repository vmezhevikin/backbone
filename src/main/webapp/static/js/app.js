require.config({
    baseUrl: '/static/js/',
    paths: {
        'jquery': '../vendor/jquery/dist/jquery',
        'underscore-raw': '../vendor/underscore/underscore',
        'underscore-config': 'config/underscore',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap',
        'backbone': '../vendor/backbone/backbone',
        'validation': '../vendor/backbone-validation/dist/backbone-validation-amd',
        'pagination': '../vendor/backbone.paginator/lib/backbone.paginator',
        'text': '../vendor/requirejs-text/text'
    },
    shim: {
        'underscore-raw': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    },
    map: {
        '*': {
            'underscore': 'underscore-config'
        },
        'underscore-config': {
            'underscore': 'underscore-raw'
        }
    }
});
require(['model/contact-list', 'view/app'],
    function (ContactList, AppView) {
        var contacts = new ContactList;
        new AppView({
            collection: contacts
        });
    });