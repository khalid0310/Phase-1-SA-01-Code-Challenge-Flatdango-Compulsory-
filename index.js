fetchMovieData();

handleBuyTicket();
handleSearch();
const moviesData = [];

function fetchMovieData() {
  fetch('db.json')
    .then((response) => response.json())
    .then((data) => {
      moviesData.push(...data.films);
      displayMoviePosters('moviePosters', moviesData);
      populateMovieMenu('films', moviesData);
    })
    .catch((error) => {
      console.error('Error fetching JSON data:', error);
    });
}

function displayMoviePosters(containerId, movies) {
  const moviePostersContainer = document.getElementById(containerId);

  movies.forEach((movie) => {
    const imgElement = document.createElement('img');
    imgElement.src = movie.poster;
    imgElement.alt = movie.title;

    imgElement.addEventListener('click', () => {
      fetchMovieDetails(movie);
    });

    moviePostersContainer.appendChild(imgElement);
  });
}

function populateMovieMenu(menuId, movies) {
  const menu = document.getElementById(menuId);

  movies.forEach((movie) => {
    const listItem = document.createElement('li');
    listItem.textContent = movie.title;
    listItem.addEventListener('click', () => {
      fetchMovieDetails(movie);
    });
    menu.appendChild(listItem);
  });
}

function handleBuyTicket() {
  const buyTicketButton = document.getElementById('buy-ticket');
  buyTicketButton.addEventListener('click', () => {
    alert('Congratulations! You have successfully purchased a ticket.');
  });
}

function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const filmsList = document.getElementById('films');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    moviesData.forEach((movie) => {
      const title = movie.title.toLowerCase();
      const listItem = filmsList.querySelector(`li:contains("${movie.title}")`);

      if (title.includes(searchTerm)) {
        listItem.style.display = 'block';
      } else {
        listItem.style.display = 'none';
      }
    });
  });
}
