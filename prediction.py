import httplib2
import urllib
import urllib2
import webapp2
from apiclient.discovery import build
from oauth2client.appengine import AppAssertionCredentials
from oauth2client.appengine import OAuth2Decorator
from google.appengine.api import memcache

# Prediction API: https://google-api-client-libraries.appspot.com/documentation/prediction/v1.6/python/latest/

# Other constants
PROJECT_ID = '777306444769'
MODEL_ID = 'bling_engine' #replaced with user_id
MODEL_TYPE = 'CLASSIFICATION'

# Oauth stuff
OAUTH_SCOPE = 'https://www.googleapis.com/auth/prediction'
OAUTH_CLIENT_ID = '777306444769.apps.googleusercontent.com'
OAUTH_CLIENT_SECRET = 'Gn9rKtfjep-uvGMd_UuH6Bp-'
API_KEY = 'AIzaSyAX73uRLc69VmoyIv_qkSw9p1mmxkAnqgc'

# Other constants
NUM_FEATURES = 1

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
      self.response.write('prediction\n')
    else:
      self.redirect(decorator.authorize_url())


class CreateModel(webapp2.RequestHandler):
  @decorator.oauth_aware
  def post(self):
    user_id = self.request.get('user_id')
    self.create_model(user_id)

  def get(self):
    user_id = MODEL_ID
    self.create_model(user_id)

    self.response.headers['Content-Type'] = 'text/plain'
    self.response.out.write('Result: ' + repr(result) + '\n')

  def create_model(self, user_id):
    """ Creates the prediction model (untrained) for a user
      Args:
        user_id: String
    """
    body = {
        'id': user_id,
        'modelType': MODEL_TYPE,
        'trainingInstances':[
          {
            'output': 'true',
            'csvInstance': [
              'health'
            ]
          },
          {
            'output': 'true',
            'csvInstance': [
              'health'
            ]
          },
          {
            'output': 'false',
            'csvInstance': [
              'health'
            ]
          }
        ]
    }

    http = decorator.http()
    result = service.trainedmodels().insert(project=PROJECT_ID, body=body).execute(http=http)
    return result

  def create_model_with_training_set(self, user_id, training_set):
    """ Creates model with training set
      Args:
        user_id: String
        training_set:
          [{'output': '(output)', 'csvInstance': ['feature1', (feature2 double), ...]}]
    """
    body = {
        'id': user_id,
        'modelType': MODEL_TYPE,
        'trainingInstances': training_set,
    }


    http = decorator.http()
    result = service.trainedmodels().insert(project=PROJECT_ID, body=body).execute(http=http)
    return result


class UpdateModel(webapp2.RequestHandler):
  @decorator.oauth_aware
  def post(self):
    user_id = self.request.get('user_id')
    data = self.request.get('data')

    body = {
        'output': data[0],
        'csvInstance': data[1:]
    }

    http = decorator.http()
    result = service.trainedmodels().update(id=user_id, project=PROJECT_ID, body=body).execute(http=http)

  @decorator.oauth_aware
  def get(self):
    user_id = MODEL_ID

    body = {
        'output': 'true',
        'csvInstance': ['science']
    }

    http = decorator.http()
    result = service.trainedmodels().update(id=user_id, project=PROJECT_ID, body=body).execute(http=http)
    self.response.headers['Content-Type'] = 'text/plain'
    self.response.out.write('Result: ' + repr(result) + '\n')



class CheckModelStatus(webapp2.RequestHandler):
  @decorator.oauth_aware
  def get(self):
    user_id = self.request.get('user_id')
    result = self.get_model_status(user_id)
    self.response.headers['Content-Type'] = 'text/plain'
    self.response.out.write('Result: ' + repr(result) + '\n')


  def get_model_status(self, user_id):
    http = decorator.http()
    result = service.trainedmodels().get(id=user_id, project=PROJECT_ID).execute(http=http)
    return result

class Predict(webapp2.RequestHandler):
  @decorator.oauth_aware
  def get(self):
    user_id = MODEL_ID
    input = ['health']
    result = self.predict(user_id, input)
    self.response.headers['Content-Type'] = 'text/plain'
    self.response.out.write('Result: ' + repr(result) + '\n')


  def predict(self, user_id, input):
    """ Request a prediction
      Args:
        input: list of features ['feature1', (feature2)]
    """

    body = {
        'input': {
          'csvInstance': input
        }
    }
    http = decorator.http()
    result = service.trainedmodels().predict(project=PROJECT_ID, id=user_id, body=body).execute(http=http)
    return result


def main():
  create_model()
  #check_status()


if __name__ == '__main__':
  main()
