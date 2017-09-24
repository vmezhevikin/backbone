var app = app || {};

app.ContactView = Backbone.View.extend({

    tagName: 'div',
    className: 'contactView',
    template: _.template($('#contactTemplate').html()),

    events: {
        'click .delete-button': 'deleteContact'
    },

    render: function () {
        _.templateSettings.interpolate = /\{\{(.+?)\}\}/g;
        this.$el.html(_.template($('#contactTemplate').html())(this.model.attributes));
        //this.$el.html(this.template(this.model.attributes));
        return this;
    },

    deleteContact: function () {
        this.model.destroy();
        this.remove();
    }
});