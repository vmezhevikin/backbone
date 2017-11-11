define(['underscore', 'backbone', 'model/contact'],
    function (_, Backbone, Contact) {

        return Backbone.Collection.extend({
            model: Contact,
            url: '/api/contact'
        });
    });