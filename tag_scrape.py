from urllib import urlopen
import string
import re
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
  print("Tags are", matches)

site_url = "http://www.theverge.com/2013/9/6/4699358/after-prism-lawyers-struggle-to-keep-attorney-client-privilege-safe"
find_tags(site_url)
