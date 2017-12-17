require.config({
    baseUrl: '/static/js/',
    paths: {
        'jquery': 'lib/jquery/jquery-3.2.1',
        'underscore-raw': 'lib/underscore/underscore-1.8.3',
        'underscore-config': 'config/underscore',
        'bootstrap': 'lib/bootstrap/bootstrap-3.3.7',
        'backbone': 'lib/backbone/backbone-1.3.3',
        'validation': 'lib/backbone/backbone-validation-amd-0.11.5',
        'pagination': 'lib/backbone/backbone-paginator-2.0.6',
        'text': 'lib/require/text-2.0.15'
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