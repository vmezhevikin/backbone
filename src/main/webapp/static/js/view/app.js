define(['bootstrap', 'underscore', 'backbone', 'view/menu', 'view/contactList', 'text!template/app.html'],
    function ($, _, Backbone, MenuView, ContactListView, appTemplate) {

        return Backbone.View.extend({

            el: 'body',
            tagName: 'div',
            template: _.template(appTemplate),

            initialize: function () {
                this.render();
                new MenuView({
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