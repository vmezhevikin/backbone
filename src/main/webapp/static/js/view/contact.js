define(['bootstrap', 'underscore', 'backbone', 'view/delete-dialog', 'text!template/contact.html'],
    function ($, _, Backbone, DeleteDialog, contactTemplate) {

        return Backbone.View.extend({

            tagName: 'div',
            className: 'contact-view',
            template: _.template(contactTemplate),

            events: {
                'click .delete-button': 'showDeleteDialog'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template(this.model.attributes));
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

            deleteContact: function () {
                this.model.destroy();
                this.deleteDialog.remove();
                this.remove();
            }
        });
    });