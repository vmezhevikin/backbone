define(['bootstrap', 'underscore', 'backbone', 'model/contact', 'text!template/add-dialog.html'],
    function ($, _, Backbone, Contact, addDialogTemplate) {

        return Backbone.View.extend({

            template: _.template(addDialogTemplate),

            events: {
                'click button#create-button': 'createContact'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                console.log('render');
                this.$el.html(this.template(this.model.attributes));
                this.$modalEl = $('.modal', this.$el);
                this.$modalEl.on('hidden.bs.modal', this.clearForm);
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
                this.triggerEvent('create-contact');
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