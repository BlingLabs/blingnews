App.Article = Ember.Model.extend({
  title: Ember.attr(),
  date: Ember.attr(Date),
  body: Ember.attr(),
  link: Ember.attr(),
  sourceName: Ember.attr(),
  liked: Ember.attr(),
  disliked: Ember.attr()
});

App.Article.url = '/api/articles';
App.Article.adapter = Ember.RESTAdapter.create();
//App.Article.adapter = Ember.FixtureAdapter.create();
App.Article.camelizeKeys = true;

//App.Article.FIXTURES = [
//  {
//    id: 1,
//    title: "Yahoo's redesigned logo: What the internet is saying",
//    date: new Date('September 5, 2013'),
//    author: 'Chris Gayomali',
//    body: '<div id="nfLargeImageBlock"><div id="nfLargeImage"><img width="660" height="395" ' +
//      'src="http://media.theweek.com/img/dir_0104/52197_article_full/meet-the-new-logo.jpg?182" alt="Meet the new logo">' +
//      '</div>' +
//      '<p>Late last night, Yahoo <a href="http://yahoo.tumblr.com/post/60332693287/introducing-our-new-logo" target="_blank">formally unveiled a new logo</a> after about a month of teasing out a redesign. The "30 days of change campaign," <a href="http://qz.com/121544/what-all-of-yahoos-fake-logos-look-like-smushed-together/" target="_blank">said chief marketing officer Kathy Savitt</a>, was ' +
//      "Yahoo's" + ' way of "having some fun while honoring the legacy of our present logo."</p>' +
//      '<p><iframe width="482" height="292" style="display: block; margin-left: auto; margin-right: auto;" src="http://www.youtube.com/embed/_0b6qaPY-CQ" frameborder="0" allowfullscreen=""></iframe></p>' +
//      "<p>It's" + ' the first logo redesign in 18 years for the purple-clad web giant. "We knew we wanted a logo that reflected Yahoo — whimsical, yet sophisticated. Modern and fresh, with a nod to our history," <a href="http://marissamayr.tumblr.com/post/60336044815/geeking-out-on-the-logo" target="_blank">Mayer wrote on her shiny new billion-dollar Tumblr</a>. "Having a human touch, personal. Proud."</p>' +
//      '<p><img src="http://media.tumblr.com/f2bf5ab8261f9617a9daf268a40d1db8/tumblr_inline_msmy7pgCbW1qz4rgp.jpg" width="475" height="367" style="display: block; margin-left: auto; margin-right: auto;"></p>' +
//      "<p>Mayer went on to note that Yahoo's designers didn't" + ' want any straight lines in the logo, since straight lines "' + "don't" + ' exist in the human form and are extremely rare in nature." The team also considered using all lowercase letters, but in the end decided that uppercase was more easily readable, especially from a mobile device.<br><br>"The end result eschews many of the design trends to come out of Silicon Valley in recent years," <a href="http://www.fastcodesign.com/3016853/how-yahoos-clown-logo-finally-grew-up" target="_blank">writes John Brownlee at <em>Fast Co. Design</em></a>. "Where the zeitgeist is to go flat, Yahoo has gone beveled, almost three-dimensional."</p>' +
//      '<p>Initial reaction has, at least so far, been less than kind:</p>' +
//      "<p>I don't think it's that bad, especially with the white-on-purple background. It's certainly not" + ' <a href="http://theweek.com/article/index/237710/8-logo-revisions-that-had-people-howling" target="_blank">a GAP-level atrocity</a>, and probably a level or two below say, <a href="http://www.businessinsider.com/what-aol-can-teach-you-about-rebranding-2010-3" target="_blank">' + "Aol's</a> latest refresh. Is it functional? Sure. Brilliant? Meh. Still distinctively Yahoo, weird exclamation point and all? Surely.</p>" +
//      "<p>And hey! Tech logos aren't exactly the kinds of things designers daydream about when they're reclining in a cushy Eames lounger; 98 percent of the logos out there are atrocities that we've quickly grown accustomed to, anyway. (Google, eBay, and Facebook's obsession with blue immediately come to mind. Sony's fat, austere lettering still wins as my all-time personal fave.)</p>" +
//      "<p><em>TIME</em>'s Harry McCracken hits the Yahoo logo redesign on the nose here:</p>" +
//      "<p>So let's all take a deep breath. Marissa Mayer's" + ' Yahoo is still one of <a href="http://theweek.com/article/index/248643/yahoo-hasnt-really-dethroned-google-as-king-of-the-internet-yet" target="_blank">the two biggest sites on the internet</a>. And' + " it's still really, really purple.</p>",
//    link: 'http://www.theweek.com',
//    source: 'The Week',
//    liked: false,
//    disliked: false
//  },
//  {
//    id: 2,
//    title: 'Typographic Posters',
//    date: new Date(),
//    author: 'John Smith',
//    body: '<p>BERLIN — Samsung Electronics unveiled on Wednesday its highly anticipated digital wristwatch that can ' +
//      'snap photos, track workouts and use an array of apps — gadgetry that the company hopes will catapult it into a ' +
//      "market of smart portable devices that leave cellphones in users pockets.</p>" + '<p><img src="http://i.dailymail.co.uk/i/pix/2013/03/19/article-2295739-18C6FE49000005DC-13_634x422.jpg"></p>' + "<p>Named the Samsung Galaxy Gear, " +
//      'the so-called smartwatch will join Google Glass as the latest example of wearable technology. The watch is ' +
//      'synced to a cellphone, allowing users to answer calls and receive text messages from their wrists. The timing ' +
//      'of the release could also give Samsung a leg up over Apple, which has yet to unveil a similar device but ' +
//      "has long been rumored to be working on one.</p><p>At a much-hyped unveiling ceremony ahead of Berlin’s " +
//      'Internationale Funkausstellung, one of the world’s largest trade shows for consumer electronics, ' +
//      "Samsung’s head of mobile communications, J.K. Shin, introduced the new device by pretending to receive a text " +
//      'message on stage.</p><p>“Don’t forget to mention Android,” Mr. Shin’s message read.</p><p>He then raised his ' +
//      'left arm, exposing the watch to applause from both the Berlin crowd and people in Times Square in New York, ' +
//      'who were patched into the event via video stream. Like other smartphones and tablets Samsung produces, Gear ' +
//      'runs on Google’s Android operating system.</p><p>From the Gear’s small screen, which measures 1.63 inches ' +
//      'diagonally, users can also receive e-mails, share pictures and use myriad apps designed for Gear. It does ' +
//      'not, however, function as a stand-alone device and must be paired with a Samsung phone or tablet.</p><p>Pranav ' +
//      'Mistry, the head of research at Samsung Research America, said the watch was “packed with technologies from ' +
//      'the next decade.”</p><p>The watch has a rubbery wristband in which a small 1.9-megapixel camera is embedded. ' +
//      'Its display surface has stainless steel bezels with four visible screws in each corner.</p><p>The watch is ' +
//      'activated by pressing a button on the outer right side of the display or aiming the wristband lens at an ' +
//      'object. A gentle swipe downward quickly turns on the camera, a feature Samsung calls the “Memographer.”</p>' +
//      '<p>“This is a feature that changes the way we interact, the way we express and the way we capture,” Mr. ' +
//      'Mistry said.</p><p>From the home screen, swiping upward brings up a number pad where a user can make a ' +
//      'call. Because a gyroscope and accelerometer detect the Gear&#8217;s movement, a user can answer incoming ' +
//      'calls by lifting his wrist to his ear.</p><p>“We have uniquely positioned the speakers and microphones so you ' +
//      'can talk as you would on a regular phone,” Mr. Mistry said.</p><p>The Gear is set to be released worldwide ' +
//      'next month, although neither Mr. Shin nor Mr. Mistry gave a date. Also under wraps was the cost, something ' +
//      'many believe could be a determining factor in whether the next-generation technology hits home with consumers ' +
//      'who have historically been reluctant to adopt such “wearables of tomorrow,” as Mr. Mistry called the Gear.</p>' +
//      '<p>Samsung, which overtook Apple last year as the world’s largest producer of smartphones, got into the watch ' +
//      'business in 1999 with a model that consumers shunned.</p><p>Galaxy Gear has 512 megabytes of RAM and an ' +
//      'internal memory of four gigabytes. It has an 800-megahertz, single-core central processing unit and weighs ' +
//      '73.8 grams. Available colors include lime green, oatmeal beige, wild orange, mocha gray, jet black and ' +
//      'rose gold.</p>,',
//    link: 'http://www.techcrunch.com',
//    source: 'Dribbble',
//    liked: false,
//    disliked: false
//  },
//  {
//    id: 3,
//    title: 'Cloning iOS in HTML',
//    date: new Date(),
//    author: 'John Smith',
//    body: '<img alt="crunchies monkey selfie" class="attachment-tc-carousel-river-thumb wp-post-image" height="70" src="http://tctechcrunch2011.files.wordpress.com/2013/09/crunchies-monkey-selfie.png?w=100&amp;h=70&amp;crop=1" style="float: left; margin: 0 10px 7px 0;" width="100" />It\u2019s not often that we get to see the Crunchies Monkey. When he\u2019s not busy shopping at the Facebook Store or taking a Lyft from Square to the TechCrunch office, he\u2019s usually working hard to identify the hottest new startups to launch every year. Today, the TC Disrupt Hackathon got a surprise visit from the Crunchies Monkey, who had fun giving high-fives and seeing what folks are hacking on.',
//    source: 'DesignerNews',
//    liked: false,
//    disliked: false
//  },
//  {
//    id: 4,
//    title: 'Future of Design',
//    date: new Date(),
//    author: 'John Smith',
//    body: 'Wantful, a San Francisco and New York-based gift giving and personalized e-commerce startup founded in 2011 ' +
//      'is shutting down after failing to secure follow-on investment as expected. According to founder and CEO ' +
//      'John Poisson, the company had launched a series of well-received products for web, tablet, print and ' +
//      'in-store, but did not achieve the kind of “highly accelerated growth” needed to secure the additional ' +
//      'capital.\nThat additional investment, as it turns out, was from Nordstrom, which had taken a stake in the ' +
//      'startup earlier this year. A Nordstrom spokesperson claims the retailer was “just a small minority investor,” ' +
//      'and declined to comment further on Wantful’s shutdown.\nWantful had a number of other high-profile investors, ' +
//      'including Polaris Venture Partners, Harrison Metal, Greylock, Forerunner, and angels Arjun Sethi, Dave Morin, ' +
//      'Matt Mullenweg, and others. In total, it had raised $5.5 million in Series A funding.\nWhen the company ' +
//      'launched ahead of the holiday shopping season in 2011, it began by offering personalized product ' +
//      'recommendations for those you were buying gifts for, after you first provided the site with information ' +
//      'about your friend’s gender, tastes and preferences. Around a year later, the company introduced what it ' +
//      'called “phase two” of its vision, introducing both an iPad application and print magazine to the lineup.\nAt ' +
//      'this time, Wantful began moving away from gift-giving and toward more personalized e-commerce. That is, ' +
//      'instead of just finding gifts for friends and family, users could find items for themselves as well. But this ' +
//      'move also put the startup up against a host of competitors, including other e-commerce services and ' +
//      'aggregators like Wanelo, Wish, Fancy, Want, Svpply’s Want, Polyvore, and more.\nIn addition to the iPad app ' +
//      'which blended both content and commerce, Wantful also tried a different approach by sending its most active ' +
//      'customers their own personalized, print magazine featuring stories about retailers and products.\nToday, the ' +
//      'Wantful website informs visitors that the company has suspended operations, but customers can reach out via ' +
//      'email for support. (Clicking the “OK” button to close the message just feels wrong, though, you know?) Wantful ' +
//      'had a number of happy customers, and the service will be missed.\nStill, it seems inevitable there will be some ' +
//      'consolidation in the personalized e-commerce space in the months ahead, so stay tuned.',
//    link: 'http://www.techcrunch.com',
//    source: 'YouTube',
//    liked: false,
//    disliked: false
//  },
//  {
//    id: 5,
//    title: 'Designing for Glass',
//    date: new Date(),
//    author: 'Hacker',
//    body: 'Wantful, a San Francisco and New York-based gift giving and personalized e-commerce startup founded in 2011 ' +
//      'is shutting down after failing to secure follow-on investment as expected. According to founder and CEO ' +
//      'John Poisson, the company had launched a series of well-received products for web, tablet, print and ' +
//      'in-store, but did not achieve the kind of “highly accelerated growth” needed to secure the additional ' +
//      'capital.\nThat additional investment, as it turns out, was from Nordstrom, which had taken a stake in the ' +
//      'startup earlier this year. A Nordstrom spokesperson claims the retailer was “just a small minority investor,” ' +
//      'and declined to comment further on Wantful’s shutdown.\nWantful had a number of other high-profile investors, ' +
//      'including Polaris Venture Partners, Harrison Metal, Greylock, Forerunner, and angels Arjun Sethi, Dave Morin, ' +
//      'Matt Mullenweg, and others. In total, it had raised $5.5 million in Series A funding.\nWhen the company ' +
//      'launched ahead of the holiday shopping season in 2011, it began by offering personalized product ' +
//      'recommendations for those you were buying gifts for, after you first provided the site with information ' +
//      'about your friend’s gender, tastes and preferences. Around a year later, the company introduced what it ' +
//      'called “phase two” of its vision, introducing both an iPad application and print magazine to the lineup.\nAt ' +
//      'this time, Wantful began moving away from gift-giving and toward more personalized e-commerce. That is, ' +
//      'instead of just finding gifts for friends and family, users could find items for themselves as well. But this ' +
//      'move also put the startup up against a host of competitors, including other e-commerce services and ' +
//      'aggregators like Wanelo, Wish, Fancy, Want, Svpply’s Want, Polyvore, and more.\nIn addition to the iPad app ' +
//      'which blended both content and commerce, Wantful also tried a different approach by sending its most active ' +
//      'customers their own personalized, print magazine featuring stories about retailers and products.\nToday, the ' +
//      'Wantful website informs visitors that the company has suspended operations, but customers can reach out via ' +
//      'email for support. (Clicking the “OK” button to close the message just feels wrong, though, you know?) Wantful ' +
//      'had a number of happy customers, and the service will be missed.\nStill, it seems inevitable there will be some ' +
//      'consolidation in the personalized e-commerce space in the months ahead, so stay tuned.',
//    link: 'http://www.theverge.com',
//    source: 'HackerNews',
//    liked: false,
//    disliked: false
//  },
//  {
//    id: 6,
//    title: '5 Best Designs for Mobile First',
//    date: new Date(),
//    author: 'John Smith',
//    body: 'Wantful, a San Francisco and New York-based gift giving and personalized e-commerce startup founded in 2011 ' +
//      'is shutting down after failing to secure follow-on investment as expected. According to founder and CEO ' +
//      'John Poisson, the company had launched a series of well-received products for web, tablet, print and ' +
//      'in-store, but did not achieve the kind of “highly accelerated growth” needed to secure the additional ' +
//      'capital.\nThat additional investment, as it turns out, was from Nordstrom, which had taken a stake in the ' +
//      'startup earlier this year. A Nordstrom spokesperson claims the retailer was “just a small minority investor,” ' +
//      'and declined to comment further on Wantful’s shutdown.\nWantful had a number of other high-profile investors, ' +
//      'including Polaris Venture Partners, Harrison Metal, Greylock, Forerunner, and angels Arjun Sethi, Dave Morin, ' +
//      'Matt Mullenweg, and others. In total, it had raised $5.5 million in Series A funding.\nWhen the company ' +
//      'launched ahead of the holiday shopping season in 2011, it began by offering personalized product ' +
//      'recommendations for those you were buying gifts for, after you first provided the site with information ' +
//      'about your friend’s gender, tastes and preferences. Around a year later, the company introduced what it ' +
//      'called “phase two” of its vision, introducing both an iPad application and print magazine to the lineup.\nAt ' +
//      'this time, Wantful began moving away from gift-giving and toward more personalized e-commerce. That is, ' +
//      'instead of just finding gifts for friends and family, users could find items for themselves as well. But this ' +
//      'move also put the startup up against a host of competitors, including other e-commerce services and ' +
//      'aggregators like Wanelo, Wish, Fancy, Want, Svpply’s Want, Polyvore, and more.\nIn addition to the iPad app ' +
//      'which blended both content and commerce, Wantful also tried a different approach by sending its most active ' +
//      'customers their own personalized, print magazine featuring stories about retailers and products.\nToday, the ' +
//      'Wantful website informs visitors that the company has suspended operations, but customers can reach out via ' +
//      'email for support. (Clicking the “OK” button to close the message just feels wrong, though, you know?) Wantful ' +
//      'had a number of happy customers, and the service will be missed.\nStill, it seems inevitable there will be some ' +
//      'consolidation in the personalized e-commerce space in the months ahead, so stay tuned.',
//    link: 'http://www.techcrunch.com',
//    source: 'HackerNews',
//    liked: false,
//    disliked: false
//  },
//  {
//    id: 7,
//    title: 'Personalized E-commerce Startup Wantful Shuts Down',
//    date: new Date(),
//    author: 'John Smith',
//    body: 'Wantful, a San Francisco and New York-based gift giving and personalized e-commerce startup founded in 2011 ' +
//      'is shutting down after failing to secure follow-on investment as expected. According to founder and CEO ' +
//      'John Poisson, the company had launched a series of well-received products for web, tablet, print and ' +
//      'in-store, but did not achieve the kind of “highly accelerated growth” needed to secure the additional ' +
//      'capital.\nThat additional investment, as it turns out, was from Nordstrom, which had taken a stake in the ' +
//      'startup earlier this year. A Nordstrom spokesperson claims the retailer was “just a small minority investor,” ' +
//      'and declined to comment further on Wantful’s shutdown.\nWantful had a number of other high-profile investors, ' +
//      'including Polaris Venture Partners, Harrison Metal, Greylock, Forerunner, and angels Arjun Sethi, Dave Morin, ' +
//      'Matt Mullenweg, and others. In total, it had raised $5.5 million in Series A funding.\nWhen the company ' +
//      'launched ahead of the holiday shopping season in 2011, it began by offering personalized product ' +
//      'recommendations for those you were buying gifts for, after you first provided the site with information ' +
//      'about your friend’s gender, tastes and preferences. Around a year later, the company introduced what it ' +
//      'called “phase two” of its vision, introducing both an iPad application and print magazine to the lineup.\nAt ' +
//      'this time, Wantful began moving away from gift-giving and toward more personalized e-commerce. That is, ' +
//      'instead of just finding gifts for friends and family, users could find items for themselves as well. But this ' +
//      'move also put the startup up against a host of competitors, including other e-commerce services and ' +
//      'aggregators like Wanelo, Wish, Fancy, Want, Svpply’s Want, Polyvore, and more.\nIn addition to the iPad app ' +
//      'which blended both content and commerce, Wantful also tried a different approach by sending its most active ' +
//      'customers their own personalized, print magazine featuring stories about retailers and products.\nToday, the ' +
//      'Wantful website informs visitors that the company has suspended operations, but customers can reach out via ' +
//      'email for support. (Clicking the “OK” button to close the message just feels wrong, though, you know?) Wantful ' +
//      'had a number of happy customers, and the service will be missed.\nStill, it seems inevitable there will be some ' +
//      'consolidation in the personalized e-commerce space in the months ahead, so stay tuned.',
//    link: 'http://www.techcrunch.com',
//    source: 'TechCrunch',
//    liked: false,
//    disliked: false
//  },
//  {
//    id: 8,
//    title: 'Personalized E-commerce Startup Wantful Shuts Down',
//    date: new Date(),
//    author: 'John Smith',
//    body: 'Wantful, a San Francisco and New York-based gift giving and personalized e-commerce startup founded in 2011 ' +
//      'is shutting down after failing to secure follow-on investment as expected. According to founder and CEO ' +
//      'John Poisson, the company had launched a series of well-received products for web, tablet, print and ' +
//      'in-store, but did not achieve the kind of “highly accelerated growth” needed to secure the additional ' +
//      'capital.\nThat additional investment, as it turns out, was from Nordstrom, which had taken a stake in the ' +
//      'startup earlier this year. A Nordstrom spokesperson claims the retailer was “just a small minority investor,” ' +
//      'and declined to comment further on Wantful’s shutdown.\nWantful had a number of other high-profile investors, ' +
//      'including Polaris Venture Partners, Harrison Metal, Greylock, Forerunner, and angels Arjun Sethi, Dave Morin, ' +
//      'Matt Mullenweg, and others. In total, it had raised $5.5 million in Series A funding.\nWhen the company ' +
//      'launched ahead of the holiday shopping season in 2011, it began by offering personalized product ' +
//      'recommendations for those you were buying gifts for, after you first provided the site with information ' +
//      'about your friend’s gender, tastes and preferences. Around a year later, the company introduced what it ' +
//      'called “phase two” of its vision, introducing both an iPad application and print magazine to the lineup.\nAt ' +
//      'this time, Wantful began moving away from gift-giving and toward more personalized e-commerce. That is, ' +
//      'instead of just finding gifts for friends and family, users could find items for themselves as well. But this ' +
//      'move also put the startup up against a host of competitors, including other e-commerce services and ' +
//      'aggregators like Wanelo, Wish, Fancy, Want, Svpply’s Want, Polyvore, and more.\nIn addition to the iPad app ' +
//      'which blended both content and commerce, Wantful also tried a different approach by sending its most active ' +
//      'customers their own personalized, print magazine featuring stories about retailers and products.\nToday, the ' +
//      'Wantful website informs visitors that the company has suspended operations, but customers can reach out via ' +
//      'email for support. (Clicking the “OK” button to close the message just feels wrong, though, you know?) Wantful ' +
//      'had a number of happy customers, and the service will be missed.\nStill, it seems inevitable there will be some ' +
//      'consolidation in the personalized e-commerce space in the months ahead, so stay tuned.',
//    link: 'http://www.techcrunch.com',
//    source: 'TechCrunch',
//    liked: false,
//    disliked: false
//  },
//];
