import webapp2

import prediction
import rss_collector

class MainPage(webapp2.RequestHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'text/plain'
    self.response.write(rss_collector.get_rss_data())


application = webapp2.WSGIApplication([
  ('/', MainPage),
  ('/prediction', prediction.Prediction),
  (prediction.decorator.callback_path, prediction.decorator.callback_handler()) #Oauth dance
], debug=True)
