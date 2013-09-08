App.Article = Ember.Model.extend({
  title: Ember.attr(),
  date: Ember.attr(Date),
  author: Ember.attr(),
  body: Ember.attr(),
  link: Ember.attr(),
  source: Ember.attr(),
  liked: Ember.attr(),
  disliked: Ember.attr()
});

App.Article.url = '/api/articles';
App.Article.adapter = Ember.FixtureAdapter.create();
App.Article.camelizeKeys = true;

App.Article.FIXTURES = [
  {
    id: 1,
    title: 'Personalized E-commerce Startup Wantful Shuts Down',
    date: new Date(),
    author: 'John Smith',
    body: 'Wantful, a San Francisco and New York-based gift giving and personalized e-commerce startup founded in 2011 ' +
      'is shutting down after failing to secure follow-on investment as expected. According to founder and CEO ' +
      'John Poisson, the company had launched a series of well-received products for web, tablet, print and ' +
      'in-store, but did not achieve the kind of “highly accelerated growth” needed to secure the additional ' +
      'capital.\nThat additional investment, as it turns out, was from Nordstrom, which had taken a stake in the ' +
      'startup earlier this year. A Nordstrom spokesperson claims the retailer was “just a small minority investor,” ' +
      'and declined to comment further on Wantful’s shutdown.\nWantful had a number of other high-profile investors, ' +
      'including Polaris Venture Partners, Harrison Metal, Greylock, Forerunner, and angels Arjun Sethi, Dave Morin, ' +
      'Matt Mullenweg, and others. In total, it had raised $5.5 million in Series A funding.\nWhen the company ' +
      'launched ahead of the holiday shopping season in 2011, it began by offering personalized product ' +
      'recommendations for those you were buying gifts for, after you first provided the site with information ' +
      'about your friend’s gender, tastes and preferences. Around a year later, the company introduced what it ' +
      'called “phase two” of its vision, introducing both an iPad application and print magazine to the lineup.\nAt ' +
      'this time, Wantful began moving away from gift-giving and toward more personalized e-commerce. That is, ' +
      'instead of just finding gifts for friends and family, users could find items for themselves as well. But this ' +
      'move also put the startup up against a host of competitors, including other e-commerce services and ' +
      'aggregators like Wanelo, Wish, Fancy, Want, Svpply’s Want, Polyvore, and more.\nIn addition to the iPad app ' +
      'which blended both content and commerce, Wantful also tried a different approach by sending its most active ' +
      'customers their own personalized, print magazine featuring stories about retailers and products.\nToday, the ' +
      'Wantful website informs visitors that the company has suspended operations, but customers can reach out via ' +
      'email for support. (Clicking the “OK” button to close the message just feels wrong, though, you know?) Wantful ' +
      'had a number of happy customers, and the service will be missed.\nStill, it seems inevitable there will be some ' +
      'consolidation in the personalized e-commerce space in the months ahead, so stay tuned.',
    link: 'http://www.techcrunch.com',
    source: 'TechCrunch',
    liked: false,
    disliked: false
  },
  {
    id: 2,
    title: 'Scholly Helps Students Ideal Scholarships On Their Smartphones',
    date: new Date(),
    author: 'John Smith',
    body: '<img alt="crunchies monkey selfie" class="attachment-tc-carousel-river-thumb wp-post-image" height="70" src="http://tctechcrunch2011.files.wordpress.com/2013/09/crunchies-monkey-selfie.png?w=100&amp;h=70&amp;crop=1" style="float: left; margin: 0 10px 7px 0;" width="100" />It\u2019s not often that we get to see the Crunchies Monkey. When he\u2019s not busy shopping at the Facebook Store or taking a Lyft from Square to the TechCrunch office, he\u2019s usually working hard to identify the hottest new startups to launch every year. Today, the TC Disrupt Hackathon got a surprise visit from the Crunchies Monkey, who had fun giving high-fives and seeing what folks are hacking on.',
    source: 'TechCrunch',
    liked: false,
    disliked: false
  },
  {
    id: 3,
    title: 'Personalized E-commerce Startup Wantful Shuts Down',
    date: new Date(),
    author: 'John Smith',
    body: 'Wantful, a San Francisco and New York-based gift giving and personalized e-commerce startup founded in 2011 ' +
      'is shutting down after failing to secure follow-on investment as expected. According to founder and CEO ' +
      'John Poisson, the company had launched a series of well-received products for web, tablet, print and ' +
      'in-store, but did not achieve the kind of “highly accelerated growth” needed to secure the additional ' +
      'capital.\nThat additional investment, as it turns out, was from Nordstrom, which had taken a stake in the ' +
      'startup earlier this year. A Nordstrom spokesperson claims the retailer was “just a small minority investor,” ' +
      'and declined to comment further on Wantful’s shutdown.\nWantful had a number of other high-profile investors, ' +
      'including Polaris Venture Partners, Harrison Metal, Greylock, Forerunner, and angels Arjun Sethi, Dave Morin, ' +
      'Matt Mullenweg, and others. In total, it had raised $5.5 million in Series A funding.\nWhen the company ' +
      'launched ahead of the holiday shopping season in 2011, it began by offering personalized product ' +
      'recommendations for those you were buying gifts for, after you first provided the site with information ' +
      'about your friend’s gender, tastes and preferences. Around a year later, the company introduced what it ' +
      'called “phase two” of its vision, introducing both an iPad application and print magazine to the lineup.\nAt ' +
      'this time, Wantful began moving away from gift-giving and toward more personalized e-commerce. That is, ' +
      'instead of just finding gifts for friends and family, users could find items for themselves as well. But this ' +
      'move also put the startup up against a host of competitors, including other e-commerce services and ' +
      'aggregators like Wanelo, Wish, Fancy, Want, Svpply’s Want, Polyvore, and more.\nIn addition to the iPad app ' +
      'which blended both content and commerce, Wantful also tried a different approach by sending its most active ' +
      'customers their own personalized, print magazine featuring stories about retailers and products.\nToday, the ' +
      'Wantful website informs visitors that the company has suspended operations, but customers can reach out via ' +
      'email for support. (Clicking the “OK” button to close the message just feels wrong, though, you know?) Wantful ' +
      'had a number of happy customers, and the service will be missed.\nStill, it seems inevitable there will be some ' +
      'consolidation in the personalized e-commerce space in the months ahead, so stay tuned.',
    link: 'http://www.techcrunch.com',
    source: 'TechCrunch',
    liked: false,
    disliked: false
  },
  {
    id: 4,
    title: 'Personalized E-commerce Startup Wantful Shuts Down',
    date: new Date(),
    author: 'John Smith',
    body: 'Wantful, a San Francisco and New York-based gift giving and personalized e-commerce startup founded in 2011 ' +
      'is shutting down after failing to secure follow-on investment as expected. According to founder and CEO ' +
      'John Poisson, the company had launched a series of well-received products for web, tablet, print and ' +
      'in-store, but did not achieve the kind of “highly accelerated growth” needed to secure the additional ' +
      'capital.\nThat additional investment, as it turns out, was from Nordstrom, which had taken a stake in the ' +
      'startup earlier this year. A Nordstrom spokesperson claims the retailer was “just a small minority investor,” ' +
      'and declined to comment further on Wantful’s shutdown.\nWantful had a number of other high-profile investors, ' +
      'including Polaris Venture Partners, Harrison Metal, Greylock, Forerunner, and angels Arjun Sethi, Dave Morin, ' +
      'Matt Mullenweg, and others. In total, it had raised $5.5 million in Series A funding.\nWhen the company ' +
      'launched ahead of the holiday shopping season in 2011, it began by offering personalized product ' +
      'recommendations for those you were buying gifts for, after you first provided the site with information ' +
      'about your friend’s gender, tastes and preferences. Around a year later, the company introduced what it ' +
      'called “phase two” of its vision, introducing both an iPad application and print magazine to the lineup.\nAt ' +
      'this time, Wantful began moving away from gift-giving and toward more personalized e-commerce. That is, ' +
      'instead of just finding gifts for friends and family, users could find items for themselves as well. But this ' +
      'move also put the startup up against a host of competitors, including other e-commerce services and ' +
      'aggregators like Wanelo, Wish, Fancy, Want, Svpply’s Want, Polyvore, and more.\nIn addition to the iPad app ' +
      'which blended both content and commerce, Wantful also tried a different approach by sending its most active ' +
      'customers their own personalized, print magazine featuring stories about retailers and products.\nToday, the ' +
      'Wantful website informs visitors that the company has suspended operations, but customers can reach out via ' +
      'email for support. (Clicking the “OK” button to close the message just feels wrong, though, you know?) Wantful ' +
      'had a number of happy customers, and the service will be missed.\nStill, it seems inevitable there will be some ' +
      'consolidation in the personalized e-commerce space in the months ahead, so stay tuned.',
    link: 'http://www.techcrunch.com',
    source: 'TechCrunch',
    liked: false,
    disliked: false
  }
];
