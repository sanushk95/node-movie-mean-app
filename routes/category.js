var express = require('express');
var Movie = require('../models/Movie.js');
var router = express.Router();

/* GET details page. */
router.get('/:cat', function(req, res, next) {
    var q = Movie.find({genres: req.params.cat}).limit(20);
    var category = req.params.cat;
    q.exec(function(err, movies) {
        if(err) return console.log(err);
    
        //res.send(movies);
        res.render('categoryList', {title: `Category: ${category}`, movies: movies});
    });
});

module.exports = router;