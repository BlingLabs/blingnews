import webapp2
import os

import prediction
import rss_collector
from database import db

from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
  def get(self):
    path = os.path.join(os.path.dirname(__file__), 'dist/index.html')
    self.response.headers['Content-Type'] = 'text/html'
    self.response.write(template.render(path, None))

    # self.response.headers['Content-Type'] = 'text/plain'
    # self.response.write(rss_collector.get_rss_data())

application = webapp2.WSGIApplication([
  ('/', MainPage),
  ('/api/users.json', db.UserHandler), #create /api/user.json
  ('/api/articles.json', db.ArticleHandler),
  ('/prediction', prediction.Prediction),
  ('/loadarticles', rss_collector.Loader),
  (prediction.decorator.callback_path, prediction.decorator.callback_handler()) #Oauth dance
], debug=True)
