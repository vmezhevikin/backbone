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

            render: function () {
                this.$el.html(this.template({
                    type: 'update',
                    contact: this.model.attributes
                }));
                this.$modalEl = $('.modal', this.$el);
                return this;
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