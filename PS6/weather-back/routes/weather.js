var express = require('express');
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
        'Access-Control-Allow-Origin': '*' 
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

const getreqid = (id) =>{
  return new Promise(function (resolve, reject){
    const options = {
      method: 'GET',
      url: 'https://api.darksky.net/forecast/78aa9644b58037543b33e38991978d35/' + id,
      headers:{
        'key' : '78aa9644b58037543b33e38991978d35',
        'cache-control': 'no-cache',
        'Access-Control-Allow-Origin': '*' 
      }
    }
    rp(options, function(error, response, body){
      if (error) reject(new Error(error));
      else{
        resolve(body);
      }
    });
  })
}

router.get('/', (req, res, next) =>{
  getReq()
  .then(function(body){
    const parsedBody = JSON.parse(body);
    let arrangedData = {
      timezone: parsedBody.timezone,
      minute: parsedBody.minutely.summary,
      hour: parsedBody.hourly.summary,
      day: parsedBody.daily.summary,

    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.send(arrangedData);
    //res.render('weather', {json:arrangedData});
  })
  .catch(function(err){
    console.log('Error!');
  })
})

router.get('/:latilongti', (req, res, next) =>{
  getreqid(req.params.latilongti)
  .then(function(body){
    const parsedBody = JSON.parse(body);
    let arrangedData = {
      timezone: parsedBody.timezone,
      minute: parsedBody.minutely.summary,
      hour: parsedBody.hourly.summary,
      day: parsedBody.daily.summary,

    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.send(arrangedData);
    //res.render('weather', {json:arrangedData});
  })
  .catch(function(err){
    console.log('Error!');
  })
})

router.post('/',(req, res, next) =>{
  const body = JSON.parse(res.body);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.send(body);
})
module.exports = router;