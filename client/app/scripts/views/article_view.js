require('scripts/mixins/dynamic_sizing');

App.ArticleView = Ember.View.extend(App.FillHeight, {
  articleDidChange: function() {
    this.$().scrollTop(0);
  }.observes('controller.activeArticle')
});