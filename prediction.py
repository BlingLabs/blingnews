import httplib2
import urllib
import urllib2
import webapp2
from apiclient.discovery import build
from oauth2client.appengine import AppAssertionCredentials
from oauth2client.appengine import OAuth2Decorator
from google.appengine.api import memcache


# Other constants
PROJECT_ID = '777306444769'
MODEL_ID = 'bling_engine'
MODEL_TYPE = 'CLASSIFICATION'
API_KEY = 'AIzaSyAX73uRLc69VmoyIv_qkSw9p1mmxkAnqgc'
OAUTH_SCOPE = 'https://www.googleapis.com/auth/prediction'
OAUTH_CLIENT_ID = '777306444769.apps.googleusercontent.com'
OAUTH_CLIENT_SECRET = 'Gn9rKtfjep-uvGMd_UuH6Bp-'

# Define API calls
# Creates a trained model
API_INSERT = 'https://www.googleapis.com/prediction/v1.6/projects/%(project_id)s/trainedmodels' % {'project_id': PROJECT_ID}
API_GET = 'https://www.googleapis.com/prediction/v1.6/projects/%(project_id)s/trainedmodels/%(model_id)s' % {'project_id': PROJECT_ID, 'model_id': MODEL_ID}


decorator = OAuth2Decorator(
    client_id=OAUTH_CLIENT_ID,
    client_secret=OAUTH_CLIENT_SECRET,
    scope=OAUTH_SCOPE)

http = httplib2.Http(memcache)
service = build('prediction', 'v1.6', http=http)

class Prediction(webapp2.RequestHandler):
  @decorator.oauth_aware
  def get(self):

    if decorator.has_credentials():
      self.response.headers['Content-Type'] = 'text/plain'
      self.response.write('prediction')
      http = decorator.http()
      result = service.trainedmodels().get(id=MODEL_ID, project=PROJECT_ID).execute(http=http)
      self.response.out.write('Result: ' + repr(result))
    else:
      self.redirect(decorator.authorize_url())


def create_model():
  params = {
      'key': API_KEY,
      'id': MODEL_ID,
      'modelType': MODEL_TYPE,
      'trainingInstances':[
        {
          'output': 'true',
          'csvInstance': [{
            ('health')
          }]
        },
        {
          'output': 'true',
          'csvInstance': [{
            ('health')
          }]
        },
        {
          'output': 'false',
          'csvInstance': [{
            ('tech')
          }]
        }
      ]
  }

  resp = urllib2.urlopen(http_request(API_INSERT, params, 'POST'))
  print resp.read()
  print 'done!'


def http_request(url, params, method='GET'):
  if method == 'GET':
    return urllib2.Request(url + '?' + urllib.urlencode(params))
  else:
    return urllib2.Request(url, data = urllib.urlencode(params))

def check_status():
  params = {
      'key': API_KEY,
      'id': MODEL_ID,
      'project': PROJECT_ID
  }

  resp = urllib2.urlopen(http_request(API_GET, params))
  print resp.read()
  print 'done!'


def main():
  create_model()
  #check_status()


if __name__ == '__main__':
  main()
