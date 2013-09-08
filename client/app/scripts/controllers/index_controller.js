require('scripts/controllers/articles_controller');

App.IndexController = Ember.Controller.extend({
  user: null,
  users: null,
  fbId: 0,

  actions: {
    login: function() {
      if (Ember.isNone(this.get('users'))) {
        var FB = window.FB;
        FB.login(function(response) {
          if (response.authResponse) {
            // user logged in
          }
        });
      }
    }
  },

  userDidChange: function() {
    var self = this;
    var users = self.get('users');
    if (users.get('isLoaded')) {
      if (!Ember.isNone(users.get('firstObject'))) {
        self.set('user', users.get('firstObject'));
      } else {
        FB.api('/me', function(response) {
          var user = App.User.create({ fbId: self.get('fbId'), name: response.name });
          user.save();
          self.set('user', user);
        });
      }
    }
  }.observes('users.isLoaded'),

  init: function() {
    var self = this;
    self.set('articles', App.ArticlesController.create());

    window.fbAsyncInit = function() {
      FB.init({
        appId: '708925709122600',
        channelUrl: '//' + window.host + '/channel.html',
        status: true,
        cookie: true
      });

      FB.Event.subscribe('auth.authResponseChange', function(response) {
        if (response.authResponse) {
          var fbId = response.authResponse.userID;
          self.set('fbId', fbId);
          self.set('users', App.User.find({ 'fb_id': fbId }));
        }
      });
    };

    (function(d) {
      var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement('script'); js.id = id; js.async = true;
      js.src = '//connect.facebook.net/en_US/all.js';
      ref.parentNode.insertBefore(js, ref);
    }(document));
  }
});
