const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
        title: {type: String},
        year : {type: String },
        director : {type: String },
        duration: {type: String},
        genre: [{type: String}],
        rate: {type: Number}
});

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;
