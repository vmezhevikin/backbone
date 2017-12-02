define(['underscore', 'backbone', 'validation'],
    function (_, Backbone) {

        return Backbone.Model.extend({
            defaults: {
                'name': '',
                'phone': '',
                'image': '',
                'group': {
                    'id': 0,
                    'description': ''
                }
            },

            validation: {
                'name': {
                    required: true,
                    msg: 'Please enter a name'
                },
                'phone': [{
                    required: true,
                    msg: 'Please enter a phone number'
                }, {
                    pattern: /^(\+380)(\d){9}$/,
                    msg: 'Phone number format should be (+38-##-###-##-##)'
                }],
                'group': function (value) {
                    if (!value || !value.id) {
                        return 'Please select a group';
                    }
                }
            }
        });
    });