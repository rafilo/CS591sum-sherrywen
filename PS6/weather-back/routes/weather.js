var express = require('express');
var unirest = require('unirest');
var rp = require('request-promise');
var async = require('async');
var router = express.Router();

const getReq = function() {
  return new Promise(function (resolve, reject) {
    const options = {
      method: 'GET',
      url: 'https://api.darksky.net/forecast/78aa9644b58037543b33e38991978d35/51.509865,-0.118092',
      headers:{
        'key' : '78aa9644b58037543b33e38991978d35',
        'cache-control': 'no-cache',
      }
    }
    rp(options, function(error, response, body){
      if (error) reject(new Error(error));
      else{
        resolve(body);
      }
    });
  });
};

router.get('/', (req, res, next) =>{
  getReq()
  .then(function(body){
    const parsedBody = JSON.parse(body);
    let arrangedData = {
      timezone: parsedBody.timezone,
      minute: parsedBody.minutely.summary,
      hours: parsedBody.hourly.summary,
      days: parsedBody.daily.summary,

    }
    res.send(arrangedData);
    //res.render('weather', {json:arrangedData});
  })
  .catch(function(err){
    console.log('Error!');
  })
})

module.exports = router;