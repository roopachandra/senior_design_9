const config = require('./config.js');
var vogels = require('vogels');
const Joi = require('joi');

// setup config
vogels.AWS.config.update({accessKeyId: config.accessKeyId, secretAccessKey: config.secretAccessKey, region: config.region});

// define data model
var SimilarityStore = vogels.define('SimilarityStore', {
  hashKey : 'this_article',
  rangeKey : 'other_article',
  schema : {
    this_article   : Joi.string(),
    other_article   : Joi.string(),
    score : Joi.number(),
  }
});

// create tables
vogels.createTables(function(err) {
  if (err) {
    console.log('Error creating tables: ', err);
  } else {
    console.log('Tables has been created');
  }
});


var data = [
/// A
  {
    this_article: 'https://www.wsj.com/articles/in-atlanta-many-business-owners-bristle-at-kemps-reopening-plan-11587549602?mod=hp_lead_pos8',
    other_article: 'https://www.cnn.com/2020/04/22/politics/trump-pence-georgia-governor-brian-kemp/index.html',
    score: 0.840,
  },
  {
    this_article: 'https://www.wsj.com/articles/in-atlanta-many-business-owners-bristle-at-kemps-reopening-plan-11587549602?mod=hp_lead_pos8',
    other_article: 'https://www.reuters.com/article/us-health-coronavirus-usa/trump-says-u-s-states-safely-reopening-despite-warnings-of-virus-resurgence-idUSKCN2241XD',
    score: 0.832,
  },
  {
    this_article: 'https://www.wsj.com/articles/in-atlanta-many-business-owners-bristle-at-kemps-reopening-plan-11587549602?mod=hp_lead_pos8',
    other_article: 'https://www.msnbc.com/rachel-maddow-show/georgia-s-kemp-neglected-warn-people-about-his-dangerous-gamble-n1189826',
    score: 0.834,
  },
  {
    this_article: 'https://www.wsj.com/articles/in-atlanta-many-business-owners-bristle-at-kemps-reopening-plan-11587549602?mod=hp_lead_pos8',
    other_article: 'https://www.foxnews.com/politics/trump-disagrees-strongly-with-georgia-governors-plan-to-reopen-some-businesses',
    score: 0.833,
  },
  {
    this_article: 'https://www.wsj.com/articles/in-atlanta-many-business-owners-bristle-at-kemps-reopening-plan-11587549602?mod=hp_lead_pos8',
    other_article: 'https://www.dailymail.co.uk/news/article-8247321/Trump-tells-Georgia-governor-NOT-open-tattoo-parlors-spas-immediately.html',
    score: 0.837,
  },

/// B
  {
    this_article: 'https://www.cnn.com/2020/04/21/investing/oil-prices/index.html',
    other_article: 'https://www.foxbusiness.com/energy/oil-producers-supertankers-storage-economy',
    score: 0.839,
  },
  {
    this_article: 'https://www.cnn.com/2020/04/21/investing/oil-prices/index.html',
    other_article: 'https://www.reuters.com/article/us-global-oil-storage/ships-trains-caves-oil-traders-chase-storage-space-in-world-awash-with-fuel-idUSKCN2240MF',
    score: 0.839,
  },
  {
    this_article: 'https://www.cnn.com/2020/04/21/investing/oil-prices/index.html',
    other_article: 'http://www.msnbc.com/rachel-maddow-show/syrian-oil-trump-says-us-should-be-able-take-some',
    score: 0.838,
  },
  {
    this_article: 'https://www.cnn.com/2020/04/21/investing/oil-prices/index.html',
    other_article: 'https://www.cnn.com/2020/04/20/business/oil-price-crash-bankruptcy/index.html',
    score: 0.843,
    other_title: "Oil prices turned negative. Hundreds of US oil companies could go bankrupt",
  },
  {
    this_article: 'https://www.cnn.com/2020/04/21/investing/oil-prices/index.html',
    other_article: 'https://www.dailymail.co.uk/news/article-8239035/Oil-price-crashes-negative-time-history-demand-dries-up.html',
    score: 0.833,
    
  },

]


SimilarityStore.create(data, function (err, res) {
  console.log('created ', res);
});
