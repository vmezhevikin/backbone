define(['bootstrap', 'underscore', 'backbone', 'view/dialog-delete', 'view/dialog-update', 'text!template/contact.html'],
    function ($, _, Backbone, DialogDelete, DialogUpdate, contactTemplate) {

        return Backbone.View.extend({

            tagName: 'div',
            className: 'contact-view',
            template: _.template(contactTemplate),

            events: {
                'click .show-dialog-delete': 'showDialogDelete',
                'click .show-dialog-update': 'showDialogUpdate'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template(this.model.attributes));
                this.dialogDelete = this.renderDialog(DialogDelete, 'contact-delete', this.deleteContact);
                this.dialogUpdate = this.renderDialog(DialogUpdate, 'contact-update', this.updateContact);
                return this;
            },

            renderDialog: function (Dialog, event, callback) {
                var dialog = new Dialog({
                    model: this.model
                });
                this.$el.append(dialog.$el);
                this.listenTo(dialog, event, callback);
                return dialog;
            },

            showDialogUpdate: function () {
                this.dialogUpdate.show();
            },

            showDialogDelete: function () {
                this.dialogDelete.show();
            },

            removeDialogs: function () {
                this.dialogUpdate.remove();
                this.dialogDelete.remove();
            },

            deleteContact: function () {
                var that = this;
                var options = {
                    success: function () {
                        that.removeDialogs();
                        that.remove();
                    }
                };
                this.model.destroy(options);
            },

            updateContact: function () {
                var that = this;
                var options = {
                    success: function () {
                        that.removeDialogs();
                        that.render();
                    }
                };
                this.model.save(null, options);
            }
        });
    });