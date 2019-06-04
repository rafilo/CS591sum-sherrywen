var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function (req, res, next) {
    const sample = {string:'hi there!'};
    res.render('fixstr', {layout : 'layout', json: JSON.stringify(sample)});
});


router.post('/', (req, res, next) =>{   
    const initbody = req.body['string'];
    console.log(initbody);
    const sample = {
        string: initbody,
        length: req.body.string.length};
    res.render('fixstr', {layout : 'layout', json: JSON.stringify(sample)})
});

module.exports = router;