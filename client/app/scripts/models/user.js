App.User = Ember.Model.extend({
  fbId: Ember.attr(),
  name: Ember.attr(),
  articles: Ember.hasMany('App.Articles', { key: 'article_id' })
});

App.User.url = '/api/users';
App.User.adapter = Ember.RESTAdapter.create();
App.User.camelizeKeys = true;
