define(['bootstrap', 'underscore', 'backbone', 'view/contact-create', 'view/contact-list', 'text!template/app.html'],
    function ($, _, Backbone, ContactCreateView, ContactListView, appTemplate) {

        return Backbone.View.extend({

            el: '#app',
            tagName: 'div',
            template: _.template(appTemplate),

            initialize: function () {
                this.render();
                new ContactCreateView({
                    collection: this.collection
                });
                new ContactListView({
                    collection: this.collection
                });
            },

            render: function () {
                console.log(_.templateSettings);
                this.$el.html(this.template);
                return this;
            }
        });
    });