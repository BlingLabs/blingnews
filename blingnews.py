import webapp2

import tag_scrape
from prediction import Prediction


class MainPage(webapp2.RequestHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'text/plain'
    self.response.write('Hello, World!')
    self.response.write(tag_scrape.run_tag_scrape())


application = webapp2.WSGIApplication([
  ('/', MainPage),
  ('/prediction', Prediction)
], debug=True)
