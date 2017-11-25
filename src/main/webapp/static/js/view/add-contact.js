define(['bootstrap', 'underscore', 'backbone', 'view/add-dialog', 'text!template/add-contact.html'],
    function ($, _, Backbone, AddDialog, addContactTemplate) {

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
                this.addDialog = new AddDialog();
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

            createContact: function () {
                this.collection.create(this.addDialog.getFormData(), { wait: true });
            }
        });
    });