define(['bootstrap', 'underscore', 'view/dialog', 'text!template/dialog-create.html'],
    function ($, _, DialogView, dialogCreateTemplate) {

        return DialogView.extend({

            template: _.template(dialogCreateTemplate),

            events: {
                'click .contact-create-button': 'createContact'
            },

            createContact: function () {
                this.setModelAttributes();
                this.hide();
                this.triggerEvent('contact-create');
            }
        });
    });