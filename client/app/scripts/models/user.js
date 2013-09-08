App.User = Ember.Model.extend({
  fbId: Ember.attr(),
  name: Ember.attr()
});

App.User.url = '/api/users';
App.User.adapter = Ember.RESTAdapter.create();
App.User.camelizeKeys = true;
