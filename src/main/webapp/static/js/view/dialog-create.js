define(['bootstrap', 'underscore', 'backbone', 'model/contact', 'text!template/dialog-create.html'],
    function ($, _, Backbone, Contact, dialogCreateTemplate) {

        return Backbone.View.extend({

            template: _.template(dialogCreateTemplate),

            events: {
                'click .contact-create-button': 'createContact'
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

            createContact: function () {
                this.setModelAttributes();
                this.hide();
                this.triggerEvent('contact-create');
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