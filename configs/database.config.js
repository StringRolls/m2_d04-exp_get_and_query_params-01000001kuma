const mongoose = require('mongoose');
const Movies = require('../models/movie.model.js');
// CONNECT YOUR APP TO THE MONGODB

const data = require ('../movies');
mongoose
  //                               the name of our database
  //                                   |
  .connect('mongodb+srv://aKuma:elEfante32@supercuster.guubw.mongodb.net/movies?retryWrites=true&w=majority')

  .then(x =>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Movies.deleteMany().then(()=>Movies.insertMany(data)).catch(err=> console.log(err))
  }
  )
  .catch(err => console.error('Error connecting to mongo', err));
