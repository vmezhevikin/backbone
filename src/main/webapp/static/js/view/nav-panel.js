define(['bootstrap', 'underscore', 'backbone', 'model/contact', 'view/dialog-create', 'text!template/nav-panel.html'],
    function ($, _, Backbone, Contact, DialogCreate, navPanelTemplate) {

        return Backbone.View.extend({

            el: '#nav-panel',
            tagName: 'div',
            template: _.template(navPanelTemplate),

            events: {
                'click #show-dialog-create': 'showDialogCreate',
                'click #firstPage': 'goToFirstPage',
                'click #previousPage': 'goToPreviousPage',
                'click #nextPage': 'goToNextPage',
                'click #lastPage': 'goToLastPage'
            },

            initialize: function () {
                this.render();
            },

            goToFirstPage: function() {
                this.collection.getFirstPage({reset:true});
            },

            goToPreviousPage: function() {
                this.collection.getPreviousPage({reset:true});
            },

            goToNextPage: function() {
                this.collection.getNextPage({reset:true});
            },

            goToLastPage: function() {
                this.collection.getLastPage({reset:true});
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