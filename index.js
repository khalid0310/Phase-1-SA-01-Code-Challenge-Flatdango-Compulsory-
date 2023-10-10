const express = require('express');
const fetch = require('node-fetch'); // Import the 'node-fetch' library
const app = express();
const port = 3000;

app.use(express.json());

let moviesData = [];

// Use fetch to get JSON data from the file
fetch('db.json')
  .then((response) => response.json())
  .then((data) => {
    moviesData = data.films; // Access the 'films' array from the JSON data
  })
  .catch((err) => {
    console.error('Error fetching JSON data:', err);
  });

app.get('/films/:id', (req, res) => {
  const movieId = req.params.id;
  const movie = moviesData.find((movie) => movie.id === movieId);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

app.get('/films', (req, res) => {
  res.json(moviesData);
});

app.post('/films/:id/buy', (req, res) => {
  const movieId = req.params.id;
  const movie = moviesData.find((movie) => movie.id === movieId);

  if (!movie) {
    res.status(404).json({ error: 'Movie not found' });
    return;
  }

  if (movie.tickets_sold < movie.capacity) {
    movie.tickets_sold++;
    res.json({ success: 'Ticket purchased successfully' });
  } else {
    res.status(400).json({ error: 'Movie is sold out' });
  }
});
function updateMovieDetails(movie) {
    const movieDetails = {
      title: document.getElementById('movie-title'),
      runtime: document.getElementById('movie-runtime'),
      showtime: document.getElementById('movie-showtime'),
      tickets: document.getElementById('movie-tickets'),
      description: document.getElementById('movie-description'),
      poster: document.getElementById('movie-poster'),
    };
  
    movieDetails.title.textContent = movie.title;
    movieDetails.runtime.textContent = movie.runtime + ' minutes';
    movieDetails.showtime.textContent = movie.showtime;
    movieDetails.tickets.textContent = movie.capacity - movie.tickets_sold;
    movieDetails.description.textContent = movie.description;
    movieDetails.poster.src = movie.poster;
  }
  // Assuming you already have the moviesData array loaded from your JSON data

function loadMovieTitles() {
    const filmsList = document.getElementById('films');
  
    // Loop through the moviesData array
    moviesData.films.forEach((movie) => {
      // Create a list item element for each movie
      const listItem = document.createElement('li');
      listItem.classList.add('film', 'item');
  
      // Set the text content of the list item to the movie title
      listItem.textContent = movie.title;
  
      // Append the list item to the filmsList
      filmsList.appendChild(listItem);
    });
  }
  
  // Call the function to load movie titles when the page loads
  window.addEventListener('DOMContentLoaded', loadMovieTitles);
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});