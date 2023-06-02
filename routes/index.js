const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find({})
        .then((movies) => 
        res.render('movies', {movies})
        )
        .catch((error) => `Error while fetching all movies: ${error}`);
})

router.get('/movies/:id', (req, res) => {
    const { id } = req.params;

    Movie.findById(id)
    .then((foundMovie) => {
        console.log('foundMovie', foundMovie)
        res.render("movie-details", {foundMovie} )
    })
    .catch((error) => `Error while find the movie: ${error}`);
});

module.exports = router;
