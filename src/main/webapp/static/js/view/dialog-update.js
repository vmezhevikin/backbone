define(['bootstrap', 'underscore', 'view/dialog', 'text!template/dialog-create.html'],
    function ($, _, DialogView, dialogUpdateTemplate) {

        return DialogView.extend({

            template: _.template(dialogUpdateTemplate),

            events: {
                'click .contact-update-button': 'updateContact',
                'hidden.bs.modal': 'removeErrorMessages'
            },

            initialize: function () {
                this.render();
                this.bindValidation();
            },

            updateContact: function () {
                this.removeErrorMessages();
                this.setModelAttributes();
                if (this.isModelValid()) {
                    this.hide();
                    this.triggerEvent('contact-update');
                }
            }
        });
    });