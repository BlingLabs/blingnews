import webapp2
from prediction import Prediction
import rss_collector
class MainPage(webapp2.RequestHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'text/plain'
    self.response.write(rss_collector.get_rss_data())


application = webapp2.WSGIApplication([
  ('/', MainPage),
  ('/prediction', Prediction)
], debug=True)
