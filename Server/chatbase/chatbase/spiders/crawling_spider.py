import os
import json
from urllib.parse import urlparse
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from scrapy import signals
from pydispatch import dispatcher

class CrawlingSpider(CrawlSpider):
    name = 'myCrawler'

    rules = (
        Rule(LinkExtractor(), callback='parse_item', follow=True),
    )
    def extract_urls_from_json(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    urls = [item['url'] for item in data]
    return urls

    def __init__(self, start_url, *args, **kwargs):
        super(CrawlingSpider, self).__init__(*args, **kwargs)
        self.start_urls = [start_url]
        self.allowed_domains = [urlparse(start_url).netloc]
        self.found_urls = []
        self.data = []
        self.website_name = urlparse(start_url).netloc.split('.')[0]  # Extract website name from URL
        dispatcher.connect(self.spider_closed, signals.spider_closed)

    def parse_item(self, response):
        url = response.url
        self.found_urls.append(url)
        item = {
            'url': url,
            'title': response.css('title::text').get(),
            'content': {
                'headings': [heading.strip() for heading in response.css('h1::text, h2::text, h3::text, h4::text, h5::text, h6::text').getall() if heading.strip()],
                'paragraphs': [paragraph.strip() for paragraph in response.css('p::text').getall() if paragraph.strip()]
            }
        }
        self.data.append(item)  # Add item to data
        return item

    def spider_closed(self, spider):
        self.logger.info('Spider closed: %s', spider.name)
        self.logger.info('Found URLs:')
        for url in self.found_urls:
            self.logger.info(url)

        # Create directory with website name if it doesn't exist
        if not os.path.exists(self.website_name):
            os.makedirs(self.website_name)

        # Store data in JSON file in the created directory
        with open(f'{self.website_name}/data.json', 'w') as f:
            json.dump(self.data, f)
