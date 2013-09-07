App.Resizing = Ember.Mixin.create({
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