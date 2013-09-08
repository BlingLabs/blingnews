import json
import logging
import webapp2
from google.appengine.api import rdbms

#Database constants
INSTANCE_NAME = 'blingpenn:blingsql'
DATABASE_NAME = 'blingnews'

class UserHandler (webapp2.RequestHandler):
  def get(self, user_id, attr):
    """ Get the specified attribute. """
    print user_id
    print attr

    conn = rdbms.connect(instance=INSTANCE_NAME, database=DATABASE_NAME)
    cursor = conn.cursor()

    SQL_GET_ATTR = 'SELECT %s FROM users WHERE id = %s'
    cursor.execute(SQL_GET_ATTR, (attr, str(user_id)))

    #if cursor.rowcount == -1:
    #  logging.error('Found nothing in database')
    #  self.error(400)
    #  return

    # Fetch twice because first row is column name
    
    print cursor.rowcount

    result = cursor.fetchone()

    json_resp = json.dumps({attr: str(result[1])})
    self.response.out.write(json_resp)


  def post(self):
    """ Create user.

      Args:
        name
        fb_token
    """
    name = self.request.get('name')
    fb_token = self.request.get('fb_token')

    conn = rdbms.connect(instance=INSTANCE_NAME, database=DATABASE_NAME)
    cursor = conn.cursor()
    SQL_CREATE_USER = 'INSERT INTO users (name, fb_token) VALUES (%s, %s)'
    cursor.execute(SQL_CREATE_USER, (name, fb_token))

    conn.commit()
    conn.close()
