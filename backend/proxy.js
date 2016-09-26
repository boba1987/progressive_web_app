/**
 * @ngdoc service
 * @name tamedia.proxy
 *
 * @description
 * Small proxy server to avoid CORS
 * Will run on 'gulp serve'
 *
 */

var request = require('request');
var express = require('express');
var app = express();
var q = require('q');
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false })

app.listen(8090, function () {
  console.log('Proxy server started at port 8090');
});

var baseUrl = 'https://www.ricardo.ch';
var options = {
	url: baseUrl + '/nsf/home/getrecommendedarticles?nbArticles=20',
	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	}
};

/**
 * @ngdoc interface
 * @name tamedia.proxy.getArticles
 *
 * @description
 * Do a http call from required endpoint
 *
 * @param {object} config Accepts params object in this format:
 * <pre>
 * params:{
 *  url: 'https://www.ricardo.ch?nbArticles=20',
 *  headers: {
 *   'X-Requested-With': 'XMLHttpRequest'
 *  }
 * }
 * </pre>
 */
function getArticles(config){
  var deferred = q.defer();
  request(config, function callback(error, response, body) {
  	if (!error && response.statusCode == 200) {
  		deferred.resolve(body);
  	}
  });

  return deferred.promise;
}

/**
 * @ngdoc interface
 * @name tamedia.proxy.getSingleArticle
 *
 * @description
 * Scrate requested resource using nightmare
 *
 * @param {object} config Accepts params object in this format:
 * <pre>
 * params:{
 *
 * }
 * </pre>
 */
function getSingleArticle(config){

}

/**
 * @ngdoc interface
 * @name tamedia.proxy.getArticles.route
 *
 * @description
 * Handles http call on '/articles' route
 *
 * @param {object} req Accepts query param object in this format:
 * <pre>
 * query:{
 *  nbArticles: 20
 * }
 * </pre>
 */
app.get('/articles', function(req, res) {
  if(req.query.nbArticles){
    options.url = baseUrl + '/nsf/home/getrecommendedarticles?nbArticles=' + req.query.nbArticles;
  }
  getArticles(options).then(function success(data){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
  }, function error(err){
    console.log(err);
  });
});

/**
 * @ngdoc interface
 * @name tamedia.proxy.getSingleArticle.route
 *
 * @description
 * Handles http call on '/getSingleArticle' route
 *
 * @param {object} req Accepts query param object in this format:
 * <pre>
 * query:{
 *
 * }
 * </pre>
 */
app.get('/getSingleArticle', function(req, res) {
  console.log(req.query.url);
  nightmare
    .goto(req.query.url)
    .wait('.ric-main')
    .evaluate(function () {
      return  document.querySelector('.ric-main .ric-description-user').textContent
    })
    .then(function(link) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(link);
    })
});
