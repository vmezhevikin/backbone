define(['bootstrap', 'underscore', 'backbone', 'text!template/dialog-delete.html'],
    function ($, _, Backbone, dialogDeleteTemplate) {

        return Backbone.View.extend({

            template: _.template(dialogDeleteTemplate),

            events: {
                'click .contact-delete-button': 'deleteContact'
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
                this.triggerEvent('contact-delete');
            },

            triggerEvent: function (event) {
                var that = this;
                this.$modalEl.on('hidden.bs.modal', function () {
                    that.trigger(event);
                });
            }
        });
    });