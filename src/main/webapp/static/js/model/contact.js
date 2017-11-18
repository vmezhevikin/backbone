define(['underscore', 'backbone'],
    function (_, Backbone) {

        return Backbone.Model.extend({
            defaults: {
                'name': 'name',
                'phone': '+3801234567',
                'image': '',
                'group': {
                    'id': 1
                }
            }
        });
    });