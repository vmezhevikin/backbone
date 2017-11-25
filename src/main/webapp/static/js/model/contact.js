define(['underscore', 'backbone'],
    function (_, Backbone) {

        return Backbone.Model.extend({
            defaults: {
                'name': '',
                'phone': '',
                'image': '',
                'group': {
                    'id': 1,
                    'description': ''
                }
            }
        });
    });