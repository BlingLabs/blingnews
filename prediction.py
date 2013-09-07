import httplib2
import urllib
import urllib2
import webapp2
from oauth2client.appengine import AppAssertionCredentials
from apiclient.discovery import build


# Other constants
PROJECT_ID = '777306444769'
MODEL_ID = 'bling_engine'
MODEL_TYPE = 'CLASSIFICATION'
API_KEY = 'AIzaSyAX73uRLc69VmoyIv_qkSw9p1mmxkAnqgc'

# Define API calls
# Creates a trained model
API_INSERT = 'https://www.googleapis.com/prediction/v1.6/projects/%(project_id)s/trainedmodels' % {'project_id': PROJECT_ID}
API_GET = 'https://www.googleapis.com/prediction/v1.6/projects/%(project_id)s/trainedmodels/%(model_id)s' % {'project_id': PROJECT_ID, 'model_id': MODEL_ID}


class Prediction(webapp2.RequestHandler):
  def get(self):
    http = AppAssertionCredentials('https://www.googleapis.com/auth/prediction').authorize(httplib2.Http())
    service = build('prediction', 'v1.6', http=http)

    result = service.hostedmodels().predict(project='414649711441', hostedModelName='sample.sentiment', body={'input': {'csvInstance': ['hello']}}).execute()

    #result = service.trainedmodels().get(id=

    self.response.headers['Content-Type'] = 'text/plain'
    self.response.write('prediction')
    self.response.out.write('Result: ' + repr(result))


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
