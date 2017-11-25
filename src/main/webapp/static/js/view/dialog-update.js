define(['bootstrap', 'underscore', 'view/dialog', 'text!template/dialog-create.html'],
    function ($, _, DialogView, dialogUpdateTemplate) {

        return DialogView.extend({

            template: _.template(dialogUpdateTemplate),

            events: {
                'click .contact-update-button': 'updateContact'
            },

            updateContact: function () {
                this.setModelAttributes();
                this.hide();
                this.triggerEvent('contact-update');
            }
        });
    });