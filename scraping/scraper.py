import newspaper
from newspaper import Article
from newspaper import fulltext

cnn_paper = newspaper.build('http://cnn.com', memoize_articles=False) # IN
fox_paper = newspaper.build('https://www.foxnews.com/', memoize_articles=False)
msnbc_paper = newspaper.build('https://www.msnbc.com/', memoize_articles=False) 
daily_paper = newspaper.build('https://www.dailymail.co.uk/ushome/index.html', memoize_articles=False) # IN
reuters_paper = newspaper.build('https://www.reuters.com/', memoize_articles=False)

# Print number of articles pulled per website
# print ("cnn: ", len(cnn_paper.articles))
# print ("fox: ", len(fox_paper.articles))
# print ("msnbc: ", len(msnbc_paper.articles))
# print ("daily: ", len(daily_paper.articles))
# print ("reuters: ", len(reuters_paper.articles))

# cnn:  1009
# fox:  262
# msnbc:  195
# huff:  68
# daily:  4676
# cnn:  1009
# bloom 0

# How to get an article's url
# for article in cnn_paper.articles:
# 	print(article.url)

# Divide articles by category
# print (len (cnn_paper.category_urls))
# # for category in cnn_paper.category_urls():
# 	# print(category)

# How to access the text of a specific article
# cnn_article = cnn_paper.articles[0]
# cnn_article.download()
# cnn_article.parse()
# cnn_article.nlp()

# How to access the html of the webpage
# html = requests.get(...).text