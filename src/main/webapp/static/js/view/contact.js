define(['jquery', 'underscore', 'backbone', 'text!template/contact.html'],
    function ($, _, Backbone, contactTemplate) {

        return Backbone.View.extend({

            tagName: 'div',
            className: 'contactView',
            template: _.template(contactTemplate),

            events: {
                'click .delete-button': 'deleteContact'
            },

            render: function () {
                this.$el.html(this.template(this.model.attributes));
                return this;
            },

            deleteContact: function () {
                this.model.destroy();
                this.remove();
            }
        });
    });