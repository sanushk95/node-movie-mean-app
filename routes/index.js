var express = require('express');
var Movie = require('../models/Movie.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var q = Movie.find().limit(20);
    
    q.exec(function(err, movies) {
    if(err) return console.log(err);
    //res.json(movies);
    console.log(movies);
    //res.send(movies);
    res.render('index', {title:'Movie List',movies:movies});
    //res.send(movies); 
  });
  //res.render('index', { title: 'Express' });
  
});



module.exports = router;
