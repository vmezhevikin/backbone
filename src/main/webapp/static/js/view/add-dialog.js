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
                this.$modalEl = this.$el.children('.modal');

                //this.listenTo(this.$modalEl, 'hidden.bs.modal', this.clearForm);
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
                $('#name, #phone').val('');
            },

            getFormData:function () {
                return {
                    name: $('#name').val(),
                    phone: $('#phone').val(),
                    group: {
                        id: $('#group').val()
                    }
                };
            },

            createContact: function () {
                this.trigger('create-contact');
                this.hide();
            }
        });
    });