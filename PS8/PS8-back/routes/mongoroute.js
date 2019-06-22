const express = require('express');
const router = express.Router();
const db = require('../mongo/mongo');
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

router.post('/', function (req, res, next) {
    // change to weather model
    getReq().
    then(function(body){
    let timezone = body.timezone;
    let minute = body.minute;
    let hour = body.hour;
    let day = body.day;

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
    mongo.collection('weather').insertOne(body, function (err, r) {
        res.send('success');
    });
});
});

router.get('/:timezone', function (req, res, next)  {
    let mongo = db.getDB();
    mongo.collection('weather').find({timezone: req.params.timezone}).
        toArray(function(err, docs) {
            console.log(docs)
            res.send(docs);
        })
    });


router.get('/bare', function (req, res, next)  {

    let mongo = db.getDB();
    mongo.collection('weather').find().
    toArray(function(err, docs) {
        console.log(docs)
        res.send(docs);
    })
});


module.exports = router;