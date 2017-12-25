define(['bootstrap', 'underscore', 'backbone', 'model/contact', 'view/dialog-create', 'text!template/nav-panel.html'],
    function ($, _, Backbone, Contact, DialogCreate, navPanelTemplate) {

        return Backbone.View.extend({

            el: '#nav-panel',
            tagName: 'div',
            template: _.template(navPanelTemplate),

            events: {
                'click #show-dialog-create': 'showDialogCreate',
                'click #first-page': 'goToFirstPage',
                'click #previous-page': 'goToPreviousPage',
                'click #next-page': 'goToNextPage',
                'click #last-page': 'goToLastPage',
                'click #sort-default': 'sortDefault',
                'click #sort-name': 'sortName',
                'click #sort-group': 'sortGroup',
                'click #sort-asc': 'sortAsc',
                'click #sort-desc': 'sortDesc'
            },

            initialize: function () {
                this.render();

                this.sortOrder = -1;
                this.sortKey = 'id';

                this.listenTo(this.collection, 'all', this.updatePageButtons);
            },

            goToFirstPage: function() {
                this.collection.getFirstPage({fetch: true});
            },

            goToPreviousPage: function() {
                this.collection.getPreviousPage({fetch: true});
            },

            goToNextPage: function() {
                this.collection.getNextPage({fetch: true});
            },

            goToLastPage: function() {
                this.collection.getLastPage({fetch: true});
            },

            updatePageButtons: function() {
                var $previousButtons = $('#first-page-li, #previous-page-li');
                var $nextButtons = $('#next-page-li, #last-page-li');
                $previousButtons.addClass('disabled');
                $nextButtons.addClass('disabled');
                if (this.collection.hasPreviousPage()) {
                    $previousButtons.removeClass('disabled');
                }
                if (this.collection.hasNextPage()) {
                    $nextButtons.removeClass('disabled');
                }
            },

            sortDefault: function() {
            	this.sortKey = 'id';
                this.sortCollection();
            },

            sortName: function() {
            	this.sortKey = 'name';
                this.sortCollection();
            },

            sortGroup: function() {
                this.sortKey = 'group_id';
                this.sortCollection();
            },

            sortAsc: function() {
                this.sortOrder = -1;
                this.sortCollection();
            },

            sortDesc: function() {
                this.sortOrder = 1;
                this.sortCollection();
            },

            sortCollection: function() {
                this.collection.setSorting(this.sortKey, this.sortOrder, {side: 'server', full: false});
                this.collection.getFirstPage();
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