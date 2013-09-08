require('scripts/controllers/articles_controller');

App.IndexController = Ember.Controller.extend({
  user: null,

  actions: {
    login: function() {
      if (Ember.isNone(this.get('user'))) {
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
    console.log(this.get('user'));
  }.observes('user'),

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
        console.log(response);
        if (response.authResponse) {
          self.set('user', App.User.find({ id: response.authResponse.userID }));
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
