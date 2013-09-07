from urllib import urlopen
import string
import re
import feedparser

def find_tags(site_url):
  print("running scrape")
  site_to_scrape = urlopen(site_url)
  # site_url = "testpage.html"

  # dump site html
  # site_to_scrape = open(site_url,'r')
  page_html = site_to_scrape.read()

  # get tags from the section
  pattern = re.compile('(?<=<a href="http://www.theverge.com/tag/)[a-z]+(?=">)')
  matches = re.findall(pattern,page_html)
  return matches

def run_tag_scrape():
  # parse the rss link
  rss_url = "http://www.theverge.com/rss/index.xml"
  feed = feedparser.parse(rss_url)

  # get list of all links, titles, tags
  rss_data = []
  for entry in feed.entries:
    data = entry.title,entry.link,find_tags(entry.link)
    rss_data.append(data)

  return rss_data




