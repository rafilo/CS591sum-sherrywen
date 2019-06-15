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
/*
    unirest.get("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%22metric%22+or+%22imperial%22&mode=xml%2C+html&q=Boston")
    .header("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com")
    .header("X-RapidAPI-Key", "a6568f5a60mshc1044f620013b06p1fef7cjsnf86bccc06ed7")
    .end(function (result) {

      
      console.log(result.status, result.headers, result.body);
      const parsedBody = JSON.parse(result.body.slice(5,-1));

      res.render('weather', 
      {layout: 'layout', json: {
      name: JSON.stringify(parsedBody.name), 
      coord: JSON.stringify(parsedBody.coord),
      weather: JSON.stringify(parsedBody.weather),
      main: JSON.stringify(parsedBody.main),
      visibility: JSON.stringify(parsedBody.visibility),
      wind: JSON.stringify(parsedBody.wind),
      rain: JSON.stringify(parsedBody.rain),
      clouds: JSON.stringify(parsedBody.clouds),
      sys: JSON.stringify(parsedBody.sys)}});
      
    });

})
/*
/*
const getBosTemperatures = function (cb) {
  ewturn new Promise
}
*/
module.exports = router;