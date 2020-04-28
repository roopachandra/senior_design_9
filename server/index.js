const express = require('express');
const config = require('./config.js');
const app = express();
const port = 3001;
var bodyParser = require('body-parser')
var vogels = require('vogels');
const Joi = require('joi');

/***
 * Data Modeling
 */

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



//Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


// Route Definitions

/*app.post('/get_similar_articles', function(req, res) {
  const article = req.query.article;
  console.log(article);
  console.log("END");
  //console.log(req.param('article'));
  if(article) {
    console.log('Article ' + article);
    var results = "ARTICLES FOUND"
    res.send(results)
  }
})*/

app.post('/get_similar_articles', (req, res) => {
  const article = req.query.article
  if (article) {
    SimilarityStore.query(article).exec((err, data) => {
      if (err) {
        console.error(`/get_similar_articles?article=${article}`);
        console.error(err);
        res.status(500).send("Server encountered an error!")
      } else if (data.Items) {
        let results = data.Items.map((el) => el.attrs);
        results.sort((a,b) => {return b.score-a.score; })
        console.log("server side" + data)
        res.send(results)
      }
    });

  } else {
    res.status(400).send("Missing query parameter 'article', e.g. POST /get_similar_articles?article=a")
  }
});

app.post('/', function(req, res) {
  res.send("reload")
    // do something w/ req.body or req.files
});

/* serves all the static files */
 app.get(/^(.+)$/, function(req, res){
     console.log('static file request : ' + req.params);
     res.send( __dirname + req.params[0]);
 });

app.get('/favicon.ico', function(req, res) {
    res.send(204);
});

 app.listen(port, function() {console.log("Listening on " + port)});
