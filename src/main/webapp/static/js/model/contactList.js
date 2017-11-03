define(['underscore', 'backbone', 'model/contact'],
    function (_, Backbone, Contact) {

        var ContactList = Backbone.Collection.extend({
            model: Contact,
            url: '/api/contact'
        });
        //return new ContactList();
        return ContactList;
    });