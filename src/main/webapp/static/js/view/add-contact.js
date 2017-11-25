define(['bootstrap', 'underscore', 'backbone', 'model/contact', 'view/add-dialog', 'text!template/add-contact.html'],
    function ($, _, Backbone, Contact, AddDialog, addContactTemplate) {

        return Backbone.View.extend({

            el: '#add-contact',
            tagName: 'div',
            template: _.template(addContactTemplate),

            events: {
                'click button#add-button': 'showAddDialog'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template);
                this.renderAddDialog();
                return this;
            },

            renderAddDialog: function () {
                this.addDialog = new AddDialog({
                    model: new Contact()
                });
                this.$el.append(this.addDialog.$el);
                this.listenTo(this.addDialog, 'create-contact', this.createContact);
                return this;
            },

            showAddDialog: function () {
                this.addDialog.show();
            },

            hideAddDialog: function () {
                this.addDialog.hide();
            },

            removeAddDialog: function () {
                this.addDialog.remove();
            },

            createContact: function () {
                this.collection.create(this.addDialog.model, { wait: true });
                this.removeAddDialog();
                this.renderAddDialog();
            }
        });
    });