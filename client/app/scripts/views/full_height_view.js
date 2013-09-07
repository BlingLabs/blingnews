App.FullHeightView = Ember.View.extend(App.Resizing, {
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