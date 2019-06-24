const express = require('express');
const router = express.Router();
const db = require('../mongo/mongo');
const rp = require('request-promise')
const request = require('request');

/* GET home page. */
const getReq = function() {
    return new Promise(function (resolve, reject) {
      const options = {
        method: 'GET',
        url: 'https://localhost:3000/weather',
        headers:{
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

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

// how to initialize the database?
router.post('/', function (req, res, next) {
    // change to weather model
    let timezone = req.body.timezone;
    let minute = req.body.minute;
    let hour = req.body.hour;
    let day = req.body.day;

    let weatherObj = {
        timezone: timezone,
        minute: minute,
        hour: hour,
        day: day
    };

    let mongo = db.getDB();
    // mongo.collection('names').insertOne(nameObj, function (err, r) {
    //     res.send('success');
    // });
    mongo.collection('weathers').insertOne(req.body, function (err, r) {
        res.send('success');
    });
});


router.get('/:timezone', function (req, res, next)  {
    let mongo = db.getDB();
    mongo.collection('weathers').find({timezone: req.params.timezone}).
        toArray(function(err, docs) {
            console.log(docs)
            res.send(docs);
        })
    });


router.get('/bare', function (req, res, next)  {
  let mongo = db.getDB();
    mongo.collection('weathers').find().
    toArray(function(err, docs) {
        console.log(docs)
        res.send(docs);
    })
});

router.get('/', function(req, res, next) {
  let mongo = db.getDB();
  request('http://localhost:3000/weather', function(res, err, body){
    const parsedBody = JSON.parse(body);
    
    let arrangedData = {
      timezone: parsedBody.timezone,
      minute: parsedBody.minute,
      hour: parsedBody.hour,
      day: parsedBody.day
    }
    
    res.send(arrangedData);
    mongo.collection('weathers').insertOne(parsedBody, function (err, r) {
      res.send('success');
  });
  
});
});

module.exports = router;