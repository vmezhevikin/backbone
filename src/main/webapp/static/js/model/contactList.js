var app = app || {};

app.ContactList = Backbone.Collection.extend({
    model: app.Contact,
    url: '/api/contact'
});