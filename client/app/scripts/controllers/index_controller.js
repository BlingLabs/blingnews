require('scripts/controllers/articles_controller');

App.IndexController = Ember.Controller.extend({
  init: function() {
    this.set('articles', App.ArticlesController.create());
  }
});
