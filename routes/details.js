var express = require('express');
var Movie = require('../models/Movie.js');
var router = express.Router();

/* GET details page. */
router.get('/', function(req, res, next) {
    var q = Movie.find().limit(20);
    
    q.exec(function(err, movies) {
        if(err) return console.log(err);
    
        res.render('allMovies', {title:'Movie Detail List',movies:movies});
    });
});

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    var q = Movie.findById(req.params.id);

    q.exec((err, movie) => {
        if(err) {
            return next(err);
        }

        //console.log(movie);
        //res.send(movie);
        res.render("movieDetails", {title: `${movie.title}`, movie: movie});
    });
});

module.exports = router;