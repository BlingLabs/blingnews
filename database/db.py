import json
import logging
import re
import unicodedata
import webapp2
from google.appengine.api import memcache
from google.appengine.api import rdbms

#import predict as p

#Database constants
INSTANCE_NAME = 'blingpenn:blingsql'
DATABASE_NAME = 'blingnews'


class ArticleHandler(webapp2.RequestHandler):
  def get(self, user_id, attr):
    pass

  def post(self):
    """ Put article in database.
      Args:
        title: string
        link: string
        body: string
        author: string
        source: string
        date: string
        tags: json ['tag1', 'tag2']
    """
    #title = self.request.get('title')
    #link = self.request.get('link')
    #body = self.request.get('body')
    #author = self.request.get('author')
    #source = self.request.get('source')
    #date = self.request.get('date')
    #tags = json.loads(self.request.get('tags'))

    title = 'title'
    link = 'www.google.com'
    body = 'some text'
    author = 'tim cheng'
    source = 'the google'
    date = '1003-01-01'
    tags = ['lol', 'cool', 'sucks']

    conn = rdbms.connect(instance=INSTANCE_NAME, database=DATABASE_NAME)
    cursor = conn.cursor()

    # make sure source is in database
    SQL_INSERT_SOURCE = 'INSERT IGNORE INTO sources (name) VALUES (%s)'
    cursor.execute(SQL_INSERT_SOURCE, (source))

    SQL_GET_SOURCE_ID = 'SELECT id FROM sources where name like %s'
    cursor.execute(SQL_GET_SOURCE_ID, (source))
    if cursor.rowcount == -1:
      #Source doesn't exist in database still.
      logging.error('db insert error')
      self.error(500)
      return

    source_id = cursor.fetchone()[0]

    # insert article
    SQL_INSERT_ARTICLE = 'INSERT INTO articles (title, link, body, author, source_id, date) VALUES (%s, %s, %s, %s, %s, %s)'
    cursor.execute(SQL_INSERT_ARTICLE, (title, link, body, author, str(source_id), date))

    if cursor.rowcount > 0:
      # Get the id of article for inserting tags
      cursor.execute('SELECT last_insert_id()')
      article_id = cursor.fetchone()[0]
      print 'article id = ' + str(article_id)
    else:
      article_id = None

    # Insert article tags
    values = []
    for tag in tags:
      values.append((article_id, tag))

    SQL_INSERT_TAG = 'INSERT INTO tags (article_id, tag) VALUES (%s, %s)'
    cursor.executemany(SQL_INSERT_TAG, values)

    conn.commit()
    conn.close()


class UserHandler(webapp2.RequestHandler):
  def get(self):
    """ Get the specified attribute. """
    user_id = self.request.get('fb_id')
    #attr = self.request.get('attr')

    if re.match('[a-zA-z\d]+', user_id) is None:
      logging.error('bad user id')
      self.error(400)

    #if attr in ('name'):
    #  result = self.get_simple_attr(user_id, attr)
    #elif attr == 'articles':
    #  result = self.get_user_articles(user_id)
    #else:
    #  result = None

    # Return everything about this user instead.

    name = self.get_simple_attr(user_id, 'name')

    if name is None:
      json_resp = json.dumps([])
    else:
      json_resp = json.dumps([{'name': name, 'fb_id': user_id}])

    self.response.out.write(json_resp)


  def get_user_articles(self, user_id):
    # Get all articles
    conn = rdbms.connect(instance=INSTANCE_NAME, database=DATABASE_NAME)
    cursor = conn.cursor()

    SQL_GET_ARTICLE_IDS = 'SELECT id FROM articles'
    cursor.execute(SQL_GET_ARTICLE_IDS)
    if cursor.rowcount == -1:
      # There are no article.
      return None

    for article in cursor.fetchall():
      # Run prediction to see if this use is interested in article
      article_id = article[0]
      # get tags of the article
      SQL_GET_ARTICLE_TAGS = 'SELECT tag FROM tags WHERE article_id = %s'







  def get_simple_attr(self, user_id, attr):
    conn = rdbms.connect(instance=INSTANCE_NAME, database=DATABASE_NAME)
    cursor = conn.cursor()

    SQL_GET_ATTR = 'SELECT %s FROM users WHERE id = %s'
    cursor.execute(SQL_GET_ATTR % (attr, user_id))

    if cursor.rowcount == -1:
      logging.error('no db result for attr ' + attr)
      return None

    result = cursor.fetchone()[0]
    return result


  def post(self):
    """ Create user.

      Args:
        id: string (fb id)
        name: string
    """
    data = json.loads(self.request.body)
    id = data['fb_id']
    name = data['name']
    logging.debug(id)
    logging.debug(name)

    conn = rdbms.connect(instance=INSTANCE_NAME, database=DATABASE_NAME)
    cursor = conn.cursor()
    SQL_CREATE_USER = r'INSERT INTO users (id, name) VALUES (%s, %s)'
    cursor.execute(SQL_CREATE_USER, (id, name))

    conn.commit()
    conn.close()
