var app = app || {};

app.Contact = Backbone.Model.extend({
    defaults: {
        'name': 'name',
        'phone': '+3801234567',
        'image': '/img/0.jpg',
        'group': {
            'id': 1
        }
    }
});