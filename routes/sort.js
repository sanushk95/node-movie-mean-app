var express = require('express');
var Movie = require('../models/Movie.js');
var router = express.Router();

/* GET details page. */
router.get('/', function(req, res, next) {
    var q = Movie.find().sort( { title: 1 } ).limit(20);
    
    q.exec(function(err, movies) {
        if(err) return console.log(err);
    
        res.render('sortedList', {title:'Sorted Movies List',movies:movies});
        //res.send(movies);
    });
});

router.get('/desc', function(req, res, next) {
    var q = Movie.find().sort( { title: -1 } ).limit(20);
    
    q.exec(function(err, movies) {
        if(err) return console.log(err);
    
        res.render('sortedList', {title:'Sorted Movies List',movies:movies});
        //res.send(movies);
    });
});

module.exports = router;