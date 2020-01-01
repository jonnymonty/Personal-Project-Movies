// Initial Values
const MOVIE_DB_API = '';
const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
const MOVIE_DB_FULL_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';

const upcomingPlaceholder = document.querySelector('.upcomingPlaceholder');
const popularPlaceholder = document.querySelector('.popularPlaceholder');
const topRatedPlaceholder = document.querySelector('.topRatedPlaceholder');
const headerPlaceholder = document.querySelector('.headerPlaceholder');
const searchPlaceholder = document.querySelector('.searchPlaceholder');
const movieInfoHeaderPlaceholder = document.querySelector('.movieInfoHeaderPlaceholder');
const movieInfoSummaryPlaceholder = document.querySelector('.movieInfoSummaryPlaceholder');
const movieInfoCastPlaceholder = document.querySelector('.movieInfoCastPlaceholder');
const movieInfoTrailerPlaceholder = document.querySelector('.movieInfoTrailerPlaceholder');

var allGenres = {};

// Requests the movies that are playing now, displays them, then adds the header slider
function requestNowPlayingMovies(url, onError) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results;
            createNowPlayingContainer(movies);
        })
        .then(() => {
            addHeaderSlider();
        })
        .catch(onError);
}

// Requests the upcoming movies, displays them, and then adds the slider
function requestUpcomingMovies(url, onError) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results;
            createUpcomingContainer(movies);
        })
        .then(() => {
            addUpcomingSlider();
        })
        .catch(onError);
}

// Requests the popular movies, displays them, and then adds the slider
function requestPopularMovies(url, onError) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results;
            createPopularContainer(movies);
        })
        .then(() => {
            addPopularSlider();
        })
        .catch(onError);
}

// Requests the top rated movies, displays them, and then adds the slider
function requestTopRatedMovies(url, onError) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results;
            createTopRatedContainer(movies);
        })
        .then(() => {
            addTopRatedSlider();
        })
        .catch(onError);
}

// Requests the searched movie, displays the results
function requestSearchedMovies(url, onError) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results;
            createSearchedContainer(movies);
        })
        .catch(onError);
}

// Requests the movie info, displays the results
function requestMovieInfo(url, onError) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const movie = data;
            createMovieInfoContainer(movie);
        })
        .then(() => {
            addCastSlider();
            console.log('slider added')
        })
        .catch(onError);
}

// Uses the API to call the id and the corresponding genre names
function requestGenres(url, onError) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            allGenres = data.genres;
        })
        .catch(onError);
}

// Based on the genreId's passed in, it will return the genre name
function getGenreId(movieGenres) {
    var genreNames = '';
    var x = 0;
    movieGenres.forEach(function (item) {
        for (var i = 0; i < allGenres.length; i++) {
            var genre = allGenres[i];

            if (item == genre.id && x < 2) {
                genreNames += genre.name;

                if (x == 0 && movieGenres.length > 1) {
                    genreNames += ' | '
                }

                x++;
            }
        }
    });
    return genreNames;
}

function getGenreNames(movieGenres) {
    console.log(movieGenres);
    var genreNames = '';
    var x = 0;
    if (movieGenres) {
        movieGenres.forEach(function (genre) {
            if (x < 2) {
                genreNames += genre.name;
                if (x == 0 && movieGenres.length > 1) {
                    genreNames += ' | ';
                }

                x++;
            }
        });
    }
    return genreNames;
}

function createNowPlayingContainer(movies) {
    const sliderName = 'movie-slider';

    const movieElement = createHeaderContainer(movies, sliderName);

    headerPlaceholder.appendChild(movieElement);
}

// Names the slider and calls createMovieThumbnails and appends to the upcomingPlaceholder
function createUpcomingContainer(movies) {
    const sliderName = 'upcoming-slider';

    const movieElement = createMovieThumbnails(movies, sliderName);

    upcomingPlaceholder.appendChild(movieElement);
}

// Names the slider and calls createMovieThumbnails and appends to the popularPlaceholder
function createPopularContainer(movies) {
    const sliderName = 'popular-slider';

    const movieElement = createMovieThumbnails(movies, sliderName);

    popularPlaceholder.appendChild(movieElement);
}

// Names the slider and calls createMovieThumbnails and appends to the topRatedPlaceholder
function createTopRatedContainer(movies) {
    const sliderName = 'topRated-slider';

    const movieElement = createMovieThumbnails(movies, sliderName);

    topRatedPlaceholder.appendChild(movieElement);
}

function createSearchedContainer(movies) {
    const sliderName = 'test';

    const movieElement = createMovieThumbnails(movies, sliderName);

    searchPlaceholder.appendChild(movieElement);
}

function createMovieInfoContainer(movie) {
    const sliderName = 'cast-slider';

    const movieElement = createMovieHeaderContainer(movie);
    const summaryElement = createMovieSummaryContainer(movie);
    const castElement = createMovieCastContainer(movie.credits.cast, sliderName);
    const trailerElement = createMovieTrailerContainer(movie.videos.results)

    movieInfoHeaderPlaceholder.appendChild(movieElement);
    movieInfoSummaryPlaceholder.appendChild(summaryElement);
    movieInfoCastPlaceholder.appendChild(castElement);
    movieInfoTrailerPlaceholder.appendChild(trailerElement);
}

// Creates the movie thumbnails
function createMovieThumbnails(movies, slider) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', slider);
    const thelist = movies.map((movie) => {
        if (movie.poster_path) {
            const innercode = `<div class="movieThumbnail">
                <img class="thumbPoster" src="${MOVIE_DB_IMAGE_ENDPOINT + movie.poster_path}" data-movie-id=${movie.id}>
                <div class="thumbRating">
                    <p><i class="fas fa-star"></i> ${movie.vote_average}</p>
                </div>
                <div class="thumbInfo">
                    <span>
                        <p class="thumbTitle">${movie.title}</p>
                        <p class="thumbGenre">${getGenreId(movie.genre_ids)}</p>
                    </span>
                </div>
            </div>`;
            movieElement.innerHTML += innercode;
        }
    });
    return movieElement;
}

// Creates the header container
function createHeaderContainer(movies, slider) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', slider);
    const thelist = movies.map((movie) => {
        if (movie.poster_path && movie.backdrop_path) {
            const innercode = `<div class="movie">
        <div class="backdropContainer">
            <img class="backdrop" src="${MOVIE_DB_FULL_IMAGE_ENDPOINT + movie.backdrop_path}">
            <div class="movieInfoContainer">
                <img class="poster" src="${MOVIE_DB_IMAGE_ENDPOINT + movie.poster_path}" data-movie-id=${movie.id}>
                <div class="movieInfo">
                    <span>
                        <h1 class="title">${movie.title}</h1>
                        <p class="rating">${movie.vote_average} / 10 <i class="fas fa-star"></i></p>
                        <p class="genre">${getGenreId(movie.genre_ids)}</p>
                        <p class="release">${movie.release_date}</p>
                    </span>
                </div>
            </div>
        </div>
    </div>`;
            movieElement.innerHTML += innercode;
        }
    });
    return movieElement;
}

// Creates the header container for a specific movie
// TODO: Fix Genres
function createMovieHeaderContainer(movie) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'test');
    if (movie.poster_path && movie.backdrop_path) {
        const innercode = `<div class="movie">
        <div class="backdropContainer">
            <img class="backdrop" src="${MOVIE_DB_FULL_IMAGE_ENDPOINT + movie.backdrop_path}">
            <div class="movieInfoContainer">
                <img class="poster" src="${MOVIE_DB_IMAGE_ENDPOINT + movie.poster_path}">
                <div class="movieInfo">
                    <span>
                        <h1 class="title">${movie.title}</h1>
                        <p class="rating">${movie.vote_average} / 10 <i class="fas fa-star"></i></p>
                        <p class="genre">${getGenreNames(movie.genres)}</p>
                        <p class="release">${movie.release_date}</p>
                    </span>
                </div>
            </div>
        </div>
    </div>`;
        movieElement.innerHTML += innercode;
    }
    return movieElement;
}

function createMovieSummaryContainer(movie) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'test');
    if (movie.poster_path && movie.backdrop_path) {
        const innercode = `<div class="summary">
        <h1>Summary</h1>
        <div class="overview">
            <p>${movie.overview}</p>
        </div>
    </div>`;
        movieElement.innerHTML += innercode;
    }
    return movieElement;
}

// Creates the cast container
function createMovieCastContainer(cast, slider) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', slider);
    var i = 0;
    const thelist = cast.map((person) => {
        if (person.profile_path && i < 20) {
            const innercode = `<div class="movieThumbnail">
            <img class="thumbPoster" src="${MOVIE_DB_IMAGE_ENDPOINT + person.profile_path}">
            <div class="thumbInfo">
                <span>
                    <p class="thumbTitle">${person.name}</p>
                    <p class="thumbGenre">${person.character}</p>
                </span>
            </div>
        </div>`;
            movieElement.innerHTML += innercode;
            i++;
        }
    });
    return movieElement;
}

function createMovieTrailerContainer(trailers) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'test');
    i = 0;
    const thelist = trailers.map((trailer) => {
        if (i < 2) {
            const innercode = `<iframe src="http://www.youtube.com/embed/${trailer.key}" width="560" height="315" frameborder="0"
            allowfullscreen></iframe>`;
            movieElement.innerHTML += innercode;
            i++;
        }
    });
    return movieElement;
}

// Generates the movieDB url
function generateMovieDBUrl(path) {
    const url = `${MOVIE_DB_ENDPOINT}/3${path}?api_key=${MOVIE_DB_API}`;
    return url;
}

// Gets all the movie genres
function getAllMovieGenres() {
    const url = generateMovieDBUrl('/genre/movie/list');
    requestGenres(url, handleError);
}

// Search for the movies playing now
function searchNowPlayingMovies() {
    const url = generateMovieDBUrl('/movie/now_playing');
    requestNowPlayingMovies(url, handleError);
}


// function getTopRatedMovies() {
//     const url = generateMovieDBUrl(`/movie/top_rated`);
//     const render = renderMovies.bind({
//         title: 'Top Rated Movies'
//     })
//     requestMovies(url, render);
// }

// function getTrendingMovies() {
//     const url = generateMovieDBUrl('/trending/movie/day');
//     const render = renderMovies.bind({
//         title: 'Trending Movies'
//     })
//     requestMovies(url, render, handleError);
// }

// Search for the upcoming movies
function searchUpcomingMovies() {
    const url = generateMovieDBUrl('/movie/upcoming');
    requestUpcomingMovies(url, handleError);
}

// Search for the popular movies
function searchPopularMovies() {
    const url = generateMovieDBUrl('/movie/popular');
    requestPopularMovies(url, handleError);
}

// Search for the top rated movies
function searchTopRatedMovies() {
    const url = generateMovieDBUrl(`/movie/top_rated`);
    requestTopRatedMovies(url, handleError);
}

// Generates url and searches for movies by title
function searchMovie(value) {
    const url = generateMovieDBUrl('/search/movie') + '&query=' + value;
    SetSearchTitle(value);
    requestSearchedMovies(url, handleError);
}

// Generates url and loads the movie info by the movieId
function getMovieInfo(value) {
    const url = generateMovieDBUrl('/movie/' + value) + '&append_to_response=videos,credits';
    // SetSearchTitle(value);
    requestMovieInfo(url, handleError);
}

// Handle Errors
function handleError(error) {
    console.log('Error: ', error);
}


// function getVideosByMovieId(movieId, content) {
//     const url = generateMovieDBUrl(`/movie/${movieId}/videos`);
//     const render = createVideoTemplate.bind({
//         content
//     });
//     requestMovies(url, render);
// }