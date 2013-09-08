require('scripts/models/article');

App.ArticlesController = Ember.ArrayController.extend({
  activeArticle: null,

  actions: {
    open: function(article) {
      this.set('activeArticle', article);
    },

    dismiss: function() {
      this.set('activeArticle', null);
    }
  },

  content: function() {
    return App.Article.find();
  }.property()
});
