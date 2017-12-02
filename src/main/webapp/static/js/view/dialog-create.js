define(['bootstrap', 'underscore', 'view/dialog', 'text!template/dialog-create.html'],
    function ($, _, DialogView, dialogCreateTemplate) {

        return DialogView.extend({

            template: _.template(dialogCreateTemplate),

            events: {
                'click .contact-create-button': 'createContact',
                'hidden.bs.modal': 'removeErrorMessages'
            },

            initialize: function () {
                this.render();
                this.bindValidation();
            },

            createContact: function () {
                this.removeErrorMessages();
                this.setModelAttributes();
                if (this.isModelValid()) {
                    this.hide();
                    this.triggerEvent('contact-create');
                }
            }
        });
    });