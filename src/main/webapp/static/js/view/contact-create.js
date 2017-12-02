define(['bootstrap', 'underscore', 'backbone', 'model/contact', 'view/dialog-create', 'text!template/contact-create.html'],
    function ($, _, Backbone, Contact, DialogCreate, contactCreateTemplate) {

        return Backbone.View.extend({

            el: '#contact-create',
            tagName: 'div',
            template: _.template(contactCreateTemplate),

            events: {
                'click #show-dialog-create': 'showDialogCreate'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template);
                this.renderDialogCreate();
                return this;
            },

            renderDialogCreate: function () {
                this.dialogCreate = new DialogCreate({
                    model: new Contact()
                });
                this.$el.append(this.dialogCreate.$el);
                this.listenTo(this.dialogCreate, 'contact-create', this.createContact);
                return this;
            },

            showDialogCreate: function () {
                this.dialogCreate.show();
            },

            hideDialogCreate: function () {
                this.dialogCreate.hide();
            },

            removeDialogCreate: function () {
                this.dialogCreate.unbindValidation();
                this.dialogCreate.remove();
            },

            createContact: function () {
                this.collection.create(this.dialogCreate.model, { wait: true });
                this.removeDialogCreate();
                this.renderDialogCreate();
            }
        });
    });