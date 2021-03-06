define(['jquery', 'underscore', 'backbone', 'view/contact'],
    function ($, _, Backbone, ContactView) {

        return Backbone.View.extend({

            el: '#contact-list',

            initialize: function () {
                this.collection.fetch();
                this.render();
                
                this.listenTo(this.collection, 'add', this.render);
                this.listenTo(this.collection, 'reset', this.render);
                this.listenTo(this.collection, 'remove', this.render);
            },

            render: function () {
                this.$el.empty();
                this.collection.each(function (contact) {
                    this.renderContact(contact);
                }, this);
            },

            renderContact: function (contact) {
                var contactView = new ContactView({
                    model: contact
                });
                this.$el.append(contactView.$el);
            }
        });
    });