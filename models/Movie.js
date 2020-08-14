var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    plot:String,
	genres:[String],
	runtime:Number,
	cast:[String],
	num_mflix_comments:Number,
	title:String,
    fullplot:String,
    poster: String,
	countries:[String],
	released:Date,
	directors:[String],
	rated:String,
	awards:{wins:Number,nominations:Number,text:String},
	lastupdated:Date,
	year:Number,
	imdb:{rating:Number,votes:Number,id:Number},
	type:String,
	tomatoes:{viewer:{rating:Number,numReviews:Number,meter:Number},lastupdated:Date}
},
{
    collection: 'movies'
}

);

module.exports = mongoose.model('Movie', movieSchema);