require('scripts/models/article');

App.ArticlesController = Ember.ArrayController.extend({
  activeArticle: null,
  mobileVisible: false,

  content: function() {
    return App.Article.find();
  }.property(),

  actions: {
    open: function(article) {
      this.set('activeArticle', article);
      this.set('mobileVisible', true);
    },

    dismiss: function() {
      this.set('mobileVisible', false);
    },

    like: function(article) {
      article.toggleProperty('liked');
      article.set('disliked', false);
      article.save();
    },

    dislike: function(article) {
      article.toggleProperty('disliked');
      article.set('liked', false);
      article.save();
    }
  }
});
