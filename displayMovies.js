// Function to display movie posters in the specified container
function displayMoviePosters(containerId) {
    fetch('db.json')
      .then((response) => response.json())
      .then((data) => {
        const moviePostersContainer = document.getElementById(containerId);
  
        // Loop through the movies in the JSON data
        data.films.forEach((movie) => {
          // Create an <img> element for each movie poster
          const imgElement = document.createElement('img');
          imgElement.src = movie.poster;
          imgElement.alt = movie.title;
  
          // Append the <img> element to the container
          moviePostersContainer.appendChild(imgElement);
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Call the function to display movie posters in the specified container
  displayMoviePosters('moviePosters');
  // displayMovies.js

// Function to fetch and display movie data
function displayMovies() {
    // Fetch movie data from your JSON file (adjust the path as needed)
    fetch('db.json') // Adjust the path to your JSON file
      .then((response) => response.json())
      .then((data) => {
        // Call a function to populate the movie menu with film items
        populateMovieMenu(data.films);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }
  
  // Function to populate the movie menu with film items
  function populateMovieMenu(films) {
    const filmsList = document.getElementById('films');
  
    // Loop through the films data and create list items
    films.forEach((film) => {
      const listItem = document.createElement('li');
      listItem.textContent = film.title; // You can customize the content as needed
      filmsList.appendChild(listItem);
    });
  }
  
  // Call the function to start fetching and displaying movie data
  displayMovies();