from urllib import urlopen
import string
import re
import feedparser
from future import Future

def build_rss_data_verge(verge_feed):
  rss_data = []
  for entry in verge_feed.entries:
    data = {'title':entry.title,
        'link': entry.link,
        'tags': find_tags_verge(entry.link),
        'body': entry.content[0].get('value'),
        'date': entry.published
        }
    rss_data.append(data)
  return rss_data

def build_rss_data_engadget(engadget_feed):
  rss_data = []
  for item in engadget_feed.entries:
    data = {'title':item.title,
        'link': item.link,
        'tags': [tag.term for tag in item.tags],
        'body': item.description,
        'date': item.published
        }
    rss_data.append(data)
  return rss_data

def find_tags_verge(site_url):
  # need to get all the feed
  site_to_scrape = urlopen(site_url)

  # dump site html
  # site_to_scrape = open(site_url,'r')
  page_html = site_to_scrape.read()

  # get tags from the section
  pattern = re.compile('(?<=<a href="http://www.theverge.com/tag/)[a-z]+(?=">)')
  matches = re.findall(pattern,page_html)
  return matches


def get_rss_data():
  feeds_list = {"http://www.theverge.com/rss/index.xml": "verge", "http://www.engadget.com/rss.xml":"engadget"}

  # pull down all feeds
  future_calls = [(Future(feedparser.parse,x),feeds_list.get(x)) for x in feeds_list.keys()]
  # blocks until all feeds received
  feeds = [(future_obj(),value) for future_obj,value in future_calls]

  rss_data = []
  for feed,source_name in feeds:
    rss_data.append((source_name, globals()["build_rss_data_" + source_name](feed)))

  return rss_data
