from flask import Flask, request
from flask_cors import CORS  # Import the CORS module
from scrapy.crawler import CrawlerProcess
from crawling_spider import CrawlingSpider

app = Flask(__name__)
CORS(app)  # Enable CORS on the Flask app

@app.route('/start_crawl', methods=['POST'])
def start_crawl():
    urls = request.json['urls']
    process = CrawlerProcess()
    for url in urls:
        process.crawl(CrawlingSpider, start_url=url)
    process.start()
    return 'Crawl started', 200

if __name__ == '__main__':
    app.run(debug=True)