import newspaper
from newspaper import Config, Article, news_pool
tc_paper = newspaper.build("http://techcrunch.com")
# cnn_paper = newspaper.b

# TOOD: make a json or something of usable URLS

news_sites = ["https://www.nbcnews.com", "https://www.nytimes.com/", "http://www.huffingtonpost.com", "http://cnn.com", "http://www.time.com"]

# design config
config  = Config()
config.language = 'en'
config.MIN_WORD_COUNT = 300

# downloads every article from every news source
papers = []
# for each news site, generate a 
for site in news_sites:
	papers.append(newspaper.build(site))

news_pool.set(papers, threads_per_source=2)
news_pool.join()

for article in papers[0].articles:
	print (article.url)


