define(['bootstrap', 'underscore', 'backbone'],
    function ($, _, Backbone) {

        return Backbone.View.extend({

            show: function () {
                this.$modalEl.modal('show');
            },

            hide: function () {
                this.$modalEl.modal('hide');
            },

            setModelAttributes: function () {
                this.model.set(this.getForm(), { validate : true });
            },

            isModelValid: function () {
                return this.model.isValid();
            },

            getForm: function () {
                return {
                    name: $('[name="name"]', this.$el).val(),
                    phone: $('[name="phone"]', this.$el).val(),
                    group: {
                        id: $('[name="group"]', this.$el).val()
                    }

                };
            },

            bindValidation: function () {
                var that = this;
                Backbone.Validation.bind(this, {
                    invalid: that.addErrorMessage
                });
            },

            addErrorMessage: function (view, attr, error) {
                var $help = $('<span>', {
                    class: 'help-block',
                    html: error
                });
                var $parentDiv = $('[name="' + attr + '"]', view.$el).parents('.form-group');
                $parentDiv.addClass('has-error');
                $parentDiv.append($help);
            },

            removeErrorMessages: function () {
                $('.help-block', this.$el).remove();
                $('.form-group', this.$el).removeClass('has-error');
            },

            unbindValidation: function () {
                Backbone.Validation.unbind(this);
            },

            triggerEvent: function (event) {
                var that = this;
                this.$modalEl.on('hidden.bs.modal', function () {
                    that.trigger(event);
                });
            }
        });
    });