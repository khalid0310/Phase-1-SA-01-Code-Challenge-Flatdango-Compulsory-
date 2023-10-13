let tickets;

function fetchAll() {
  fetch('http://localhost:3000/films')
    .then((res) => res.json())
    .then((data) => {
      fetchmovie(data); // Display movies in the list
      if (data.length > 0) {
        fetchMovieDetails(data[0]); // Display the details of the first movie
      }
    })
    .catch((error) => console.log(error));
}

function fetchMovieDetails(movie) {
  fetch(`http://localhost:3000/films/${movie.id}`)
    .then((res) => res.json())
    .then((data) => {
      displayAllDetails(data);
    })
    .catch((error) => console.log(error));
}

function displayAllDetails(movie) {
  // Display movie details here
  const movieDetails = document.querySelector('.movie-details');
  // Update the content of movieDetails with movie information.
  movieDetails.innerHTML = `
    <h2>${movie.title}</h2>
    <img src="${movie.poster}" alt="Movie Poster">
    <p>Total minutes: ${movie.runtime}</p>
    <p>Start Time: ${movie.showtime}</p>
    <button id="buy-ticket">Buy Ticket</button>
    <span>Tickets Available: ${movie.capacity - movie.tickets_sold}</span>
  `;

  // Handle Buy Ticket button click
  const buyButton = document.getElementById('buy-ticket');
  buyButton.addEventListener('click', () => {
    buyTicket(movie);
  });
}

function buyTicket(movie) {
  // Handle ticket purchase logic here
  if (movie.capacity > movie.tickets_sold) {
    alert('Congratulations! You have successfully purchased a ticket.');
    const newTicketsSold = movie.tickets_sold + 1;
    Updatedata(movie, newTicketsSold);
  } else {
    alert('Sorry, no tickets available.');
  }
}

function Updatedata(movie, ticketsSold) {
  fetch(`http://localhost:3000/films/${movie.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tickets_sold: ticketsSold,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      fetchMovieDetails(data);
    });
}

function fetchmovie(movies) {
  const filmsList = document.getElementById('films');

  // Clear existing movie list
  filmsList.innerHTML = '';

  movies.forEach((movie, i) => {
    const listItem = document.createElement('li');
    listItem.textContent = movie.title;
    listItem.addEventListener('click', () => fetchMovieDetails(movie));
    filmsList.appendChild(listItem);

    if (i === 0) {
      fetchMovieDetails(movie);
    }
  });
}

document.addEventListener('DOMContentLoaded', fetchAll);

// Movie search functionality
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const movieListItems = document.querySelectorAll('#films li');

  movieListItems.forEach((item) => {
    const movieTitle = item.textContent.toLowerCase();
    if (movieTitle.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
