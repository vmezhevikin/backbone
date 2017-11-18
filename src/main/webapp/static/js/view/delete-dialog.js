define(['bootstrap', 'underscore', 'backbone', 'text!template/delete-dialog.html'],
    function ($, _, Backbone, deleteDialogTemplate) {

        return Backbone.View.extend({

            template: _.template(deleteDialogTemplate),

            events: {
                'click .confirm-delete-button': 'deleteContact'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template(this.model.attributes));
                this.$modalEl = this.$el.children('.modal');
                return this;
            },

            show: function () {
                this.$modalEl.modal('show');
            },

            hide: function () {
                this.$modalEl.modal('hide');
            },

            deleteContact: function () {
                this.hide();
                var that = this;
                this.$modalEl.on('hidden.bs.modal', function () {
                    that.trigger('deletion-confirmed');
                });
            }
        });
    });