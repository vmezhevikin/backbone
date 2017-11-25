define(['bootstrap', 'underscore', 'backbone', 'text!template/dialog-create.html'],
    function ($, _, Backbone, dialogUpdateTemplate) {

        return Backbone.View.extend({

            template: _.template(dialogUpdateTemplate),

            events: {
                'click .contact-update-button': 'updateContact'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template(this.model.attributes));
                this.$modalEl = $('.modal', this.$el);
                return this;
            },

            show: function () {
                this.$modalEl.modal('show');
            },

            hide: function () {
                this.$modalEl.modal('hide');
            },

            updateContact: function () {
                this.setModelAttributes();
                this.hide();
                this.triggerEvent('contact-update');
            },

            setModelAttributes: function () {
                this.model.set(this.getAttributes());
            },

            getAttributes: function () {
                return {
                    name: $('.input-name', this.$el).val(),
                    phone: $('.input-phone', this.$el).val(),
                    group: {
                        id: $('.input-group', this.$el).val()
                    }
                };
            },

            triggerEvent: function (event) {
                var that = this;
                this.$modalEl.on('hidden.bs.modal', function () {
                    that.trigger(event);
                });
            }
        });
    });