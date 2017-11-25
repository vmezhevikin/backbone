define(['bootstrap', 'underscore', 'backbone', 'view/delete-dialog', 'view/edit-dialog', 'text!template/contact.html'],
    function ($, _, Backbone, DeleteDialog, EditDialog, contactTemplate) {

        return Backbone.View.extend({

            tagName: 'div',
            className: 'contact-view',
            template: _.template(contactTemplate),

            events: {
                'click .delete-button': 'showDeleteDialog',
                'click .edit-button': 'showEditDialog'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template(this.model.attributes));
                this.renderDeleteDialog();
                this.renderEditDialog();
                return this;
            },

            renderDeleteDialog: function () {
                this.deleteDialog = new DeleteDialog({
                    model: this.model
                });
                this.$el.append(this.deleteDialog.$el);
                this.listenTo(this.deleteDialog, 'deletion-confirmed', this.deleteContact);
                return this;
            },

            showDeleteDialog: function () {
                this.deleteDialog.show();
            },

            hideDeleteDialog: function () {
                this.deleteDialog.hide();
            },

            removeDeleteDialog: function () {
                this.deleteDialog.remove();
            },

            deleteContact: function () {
                console.log('deleteContact');
                var that = this;
                this.model.destroy({
                    wait: true,
                    success: function () {
                        that.removeDeleteDialog();
                        that.removeEditDialog();
                        that.remove();
                    }
                });
            },

            renderEditDialog: function () {
                this.editDialog = new EditDialog({
                    model: this.model
                });
                this.$el.append(this.editDialog.$el);
                this.listenTo(this.editDialog, 'update-contact', this.editContact);
                return this;
            },

            showEditDialog: function () {
                this.editDialog.show();
            },

            hideEditDialog: function () {
                this.editDialog.hide();
            },

            removeEditDialog: function () {
                this.editDialog.remove();
            },

            editContact: function () {
                var that = this;
                this.model.save(null, {
                    success: function () {
                        that.removeDeleteDialog();
                        that.removeEditDialog();
                        that.render();
                    }
                });
            }
        });
    });