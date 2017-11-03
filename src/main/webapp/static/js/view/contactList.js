define(['bootstrap', 'underscore', 'backbone', 'model/contactList', 'view/contact'],
    function ($, _, Backbone, ContactList, ContactView) {

        var ContactListView = Backbone.View.extend({

            el: '#contactList',

            events: {
                'click button#createButton': 'createContact'
            },

            initialize: function () {
                this.collection = new ContactList();
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
            },

            createContact: function () {
                var formData = {
                    name: $('#name').val(),
                    phone: $('#phone').val(),
                    group: {
                        id: $('#group').val()
                    }
                };
                this.collection.create(formData);
                $('#createDialog').modal('hide');
            }
        });
        return ContactListView;
    });