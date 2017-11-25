define(['bootstrap', 'underscore', 'backbone', 'model/contact', 'text!template/add-dialog.html'],
    function ($, _, Backbone, Contact, addDialogTemplate) {

        return Backbone.View.extend({

            template: _.template(addDialogTemplate),

            events: {
                'click button#create-button': 'createContact'
            },

            initialize: function () {
                this.model = new Contact();
                this.render();
            },

            render: function () {
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
                this.model = new Contact();
            }
        });
    });