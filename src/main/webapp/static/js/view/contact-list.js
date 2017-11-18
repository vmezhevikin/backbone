define(['jquery', 'underscore', 'backbone', 'view/contact'],
    function ($, _, Backbone, ContactView) {

        return Backbone.View.extend({

            el: '#contact-list',

            initialize: function () {
                this.collection.fetch({reset: true});
                this.render();

                this.listenTo(this.collection, 'add', this.renderContact);
                this.listenTo(this.collection, 'reset', this.render);
            },

            render: function () {
                this.collection.each(function (contact) {
                    this.renderContact(contact);
                }, this);
            },

            renderContact: function (contact) {
                var contactView = new ContactView({
                    model: contact
                });
                this.$el.append(contactView.render().el);
            }
        });
    });