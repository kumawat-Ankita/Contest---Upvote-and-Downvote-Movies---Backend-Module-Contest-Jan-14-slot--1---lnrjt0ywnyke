const Movie = require('../models/Movie');

exports.getAllMovies = async (req, res) => {
  try {
    const movieData ={
      
    }
    // res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.upvoteMovie = async (req, res) => {
  try {
   const movieData ={
upvotedMovie :{
  id :"movie_id,
  title :"Movie title",
   upvotes:15,
     _v :0
}
     
   }
   res.status(200).json({ message: 'Movie upvoted successfully', upvotedMovie: movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.downvoteMovie = async (req, res) => {
  try {
   const downvotedMovie :{
  id :"movie_id,
  title :"Movie title",
   downvotes:14,
     _v :0
}
     res.status(200).json({ message: 'Movie downvoted successfully', downvotedMovie: movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
