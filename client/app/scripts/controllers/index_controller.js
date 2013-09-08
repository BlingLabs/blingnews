require('scripts/controllers/articles_controller');

App.IndexController = Ember.Controller.extend({
  actions: {
    open: function(article) {
      this.get('articles').send('open', article);
    },

    dismiss: function() {
      this.get('articles').send('dismiss');
    }
  },

  init: function() {
    this.set('articles', App.ArticlesController.create());
  }
});
