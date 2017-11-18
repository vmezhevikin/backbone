define(['bootstrap', 'underscore', 'backbone', 'view/add-contact', 'view/contact-list', 'text!template/app.html'],
    function ($, _, Backbone, AddContactView, ContactListView, appTemplate) {

        return Backbone.View.extend({

            el: '#app',
            tagName: 'div',
            template: _.template(appTemplate),

            initialize: function () {
                this.render();
                new AddContactView({
                    collection: this.collection
                });
                new ContactListView({
                    collection: this.collection
                });
            },

            render: function () {
                this.$el.html(this.template);
                return this;
            }
        });
    });