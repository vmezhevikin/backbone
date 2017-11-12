define(['bootstrap', 'underscore', 'backbone', 'view/deleteModal', 'text!template/contact.html'],
    function ($, _, Backbone, DeleteModal, contactTemplate) {

        return Backbone.View.extend({

            tagName: 'div',
            className: 'contactView',
            template: _.template(contactTemplate),

            events: {
                'click .delete-button': 'showModal'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template(this.model.attributes));
                this.deleteModal = new DeleteModal({
                    model: this.model
                });
                this.$el.append(this.deleteModal.$el);
                this.listenTo(this.deleteModal, 'deletion-confirmed', this.deleteContact);
                return this;
            },

            showModal: function () {
                this.deleteModal.show();
            },

            hideModal: function () {
                this.deleteModal.hide();
            },

            deleteContact: function () {
                this.model.destroy();
                this.deleteModal.remove();
                this.remove();
            }
        });
    });