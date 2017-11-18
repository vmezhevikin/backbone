define(['bootstrap', 'underscore', 'backbone', 'text!template/menu.html'],
    function ($, _, Backbone, menuTemplate) {

        return Backbone.View.extend({

            el: '#menu',
            tagName: 'div',
            template: _.template(menuTemplate),

            events: {
                'click button#createButton': 'createContact'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template);
                return this;
            },

            createContact: function () {
                this.collection.create(this.getFormData());
                this.hideModal();
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

            hideModal: function () {
                $('#createDialog').modal('hide');
                $('#name, #phone').val('');
            }
        });
    });