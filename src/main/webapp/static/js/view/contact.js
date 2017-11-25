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
                this.renderDialogDelete();
                this.renderDialogUpdate();
                return this;
            },

            renderDialogDelete: function () {
                this.dialogDelete = new DialogDelete({
                    model: this.model
                });
                this.$el.append(this.dialogDelete.$el);
                this.listenTo(this.dialogDelete, 'contact-delete', this.deleteContact);
                return this;
            },

            showDialogDelete: function () {
                this.dialogDelete.show();
            },

            hideDialogDelete: function () {
                this.dialogDelete.hide();
            },

            removeDialogDelete: function () {
                this.dialogDelete.remove();
            },

            deleteContact: function () {
                var that = this;
                this.model.destroy({
                    wait: true,
                    success: function () {
                        that.removeDialogDelete();
                        that.removeDialogUpdate();
                        that.remove();
                    }
                });
            },

            renderDialogUpdate: function () {
                this.dialogUpdate = new DialogUpdate({
                    model: this.model
                });
                this.$el.append(this.dialogUpdate.$el);
                this.listenTo(this.dialogUpdate, 'contact-update', this.updateContact);
                return this;
            },

            showDialogUpdate: function () {
                this.dialogUpdate.show();
            },

            hideDialogUpdate: function () {
                this.dialogUpdate.hide();
            },

            removeDialogUpdate: function () {
                this.dialogUpdate.remove();
            },

            updateContact: function () {
                var that = this;
                this.model.save(null, {
                    success: function () {
                        that.removeDialogDelete();
                        that.removeDialogUpdate();
                        that.render();
                    }
                });
            }
        });
    });