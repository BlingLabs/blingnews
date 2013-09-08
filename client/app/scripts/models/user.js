App.User = Ember.Model.extend({
  name: Ember.attr()
});

App.User.url = '/api/users';
App.User.adapter = Ember.RESTAdapter.create();
