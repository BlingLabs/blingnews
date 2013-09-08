App.Resizable = Ember.Mixin.create({
  bindResizing: function(options) {
    var self = this;
    var onResize = function() {
      return self.resized();
    };

    $(window).bind('resize', onResize);
  },

  unbindResizing: function() {
    $(window).unbind('resize');
  }
});

App.FillHeight = Ember.Mixin.create(App.Resizable, {
  didInsertElement: function() {
    this.resized();
    this.bindResizing();
  },

  willRemoveElement: function() {
    this.unbindResizing();
  },

  resized: function() {
    var $elem = this.$();
    $elem.outerHeight($(window).innerHeight() - $elem.position().top);
  }
});

