const mongoose = require('mongoose');
const {Schema, model } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String
    },
    stars: {
        type: [ String ]
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: {
        type: [ String ]
    },
},
{timestamps: true});


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;