import webapp2
import tag_scrape
class MainPage(webapp2.RequestHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'text/plain'
    self.response.write('Hello, World!')
    self.response.write(scraper.run_tag_scrape())

application = webapp2.WSGIApplication([
  ('/', MainPage),
], debug=True)
