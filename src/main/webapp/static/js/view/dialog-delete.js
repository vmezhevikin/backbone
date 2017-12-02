define(['bootstrap', 'underscore', 'view/dialog', 'text!template/dialog-delete.html'],
    function ($, _, DialogView, dialogDeleteTemplate) {

        return DialogView.extend({

            template: _.template(dialogDeleteTemplate),

            events: {
                'click .contact-delete-button': 'deleteContact'
            },

            initialize: function () {
                this.render();
            },

            deleteContact: function () {
                this.hide();
                this.triggerEvent('contact-delete');
            }
        });
    });