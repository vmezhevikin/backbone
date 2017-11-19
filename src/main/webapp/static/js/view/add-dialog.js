define(['bootstrap', 'underscore', 'backbone', 'text!template/add-dialog.html'],
    function ($, _, Backbone, addDialogTemplate) {

        return Backbone.View.extend({

            template: _.template(addDialogTemplate),

            events: {
                'click button#create-button': 'createContact'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template);
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

            clearForm: function () {
                $('.input-name, .input-phone', this.$el).val('');
            },

            getFormData:function () {
                return {
                    name: $('.input-name', this.$el).val(),
                    phone: $('.input-phone', this.$el).val(),
                    group: {
                        id: $('.input-group', this.$el).val()
                    }
                };
            },

            createContact: function () {
                this.trigger('create-contact');
                this.hide();
            }
        });
    });