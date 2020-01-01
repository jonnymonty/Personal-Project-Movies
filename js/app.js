// Initial Values
const INITIAL_SEARCH_VALUE = 'spiderman';

// Selecting elements from the DOM
const homeSearchButton = document.querySelector('#homeSearch');
const homeSearchInput = document.querySelector('#homeSearchText');
const searchInput = document.querySelector('#searchText');
const searchButton = document.querySelector('#search');
var searchInputValue = '';
// const moviesContainer = document.querySelector('#movies-container');
// const moviesSearchable = document.querySelector('#movies-searchable');

function saveLocalString(value) {
    window.localStorage.setItem('title', value);
}

function saveLocalMovieId(value) {
    window.localStorage.setItem('id', value);
}

function loadLocalString() {
    var title = window.localStorage.getItem('title');
    return title;
}

function loadLocalMovieId() {
    var id = window.localStorage.getItem('id');
    return id;
}

function removeLocalString() {
    window.localStorage.removeItem('title');
}

function removeLocalMovieId() {
    window.localStorage.removeItem('id');
}

searchInput.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        searchButton.click();
    }
});

homeSearchInput.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        homeSearchButton.click();
    }
});

searchButton.onclick = function (event) {
    event.preventDefault();
    searchInputValue = searchInput.value;

    searchPlaceholder.innerHTML = '';

    if (searchInputValue) {
        searchMovie(searchInputValue);
    }
    resetInput();
}

function SetSearchTitle(value) {
    searchTitle.innerHTML = `Results for: ${value}`;
}

// function createImageContainer(imageUrl, id) {
//     const tempDiv = document.createElement('div');
//     tempDiv.setAttribute('class', 'imageContainer');
//     tempDiv.setAttribute('data-id', id);

//     const movieElement = `
//         <img src="${imageUrl}" alt="" data-movie-id="${id}">
//     `;
//     tempDiv.innerHTML = movieElement;

//     return tempDiv;
// }

function resetInput() {
    searchInput.value = '';
    homeSearchInput.value = '';
}

// function createSectionHeader(title) {
//     const header = document.createElement('h2');
//     header.innerHTML = title;

//     return header;
// }



// function renderSearchMovies(data) {
//     moviesSearchable.innerHTML = '';
//     const moviesBlock = generateMoviesBlock(data);
//     moviesSearchable.appendChild(moviesBlock);
// }

// function generateMoviesBlock(data) {
//     const movies = data.results;
//     const section = document.createElement('section');
//     section.setAttribute('class', 'section');

//     for (let i = 0; i < movies.length; i++) {
//         const {
//             poster_path,
//             id
//         } = movies[i];

//         if (poster_path) {
//             const imageUrl = MOVIE_DB_IMAGE_ENDPOINT + poster_path;

//             const imageContainer = createImageContainer(imageUrl, id);
//             section.appendChild(imageContainer);
//         }
//     }

//     const movieSectionAndContent = createMovieContainer(section);
//     return movieSectionAndContent;
// }

// Inserting section before content element
// function createMovieContainer(section) {
//     const movieElement = document.createElement('div');
//     movieElement.setAttribute('class', 'movie');

//     const template = `
//         <div class="content">
//             <p id="content-close">X</p>
//         </div>
//     `;

//     movieElement.innerHTML = template;
//     movieElement.insertBefore(section, movieElement.firstChild);
//     return movieElement;
// }

homeSearchButton.onclick = function (event) {
    event.preventDefault();
    searchInputValue = homeSearchInput.value;
    saveLocalString(searchInputValue);
    location.href = "searchMovie.html";
}

// Click on any movies
// Event Delegation
document.onclick = function (event) {
    event.preventDefault();
    if (event.target.nodeName.toLowerCase() == 'img') {
        const movieId = event.target.dataset.movieId;
        if (movieId != null) {
            saveLocalMovieId(movieId);
            console.log(movieId);
            location.href = "movieInfo.html";
        }
        // const section = event.target.parentElement.parentElement;
        // const content = section.nextElementSibling;
        // content.classList.add('content-display');
        // getVideosByMovieId(movieId, content);
    }
}

// Initialize the search
//searchMovie(INITIAL_SEARCH_VALUE);

var stepTime = 20;
var docBody = document.body;
var focElem = document.documentElement;

var scrollAnimationStep = function (initPos, stepAmount) {
    var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;

    docBody.scrollTop = focElem.scrollTop = newPos;

    newPos && setTimeout(function () {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}

var scrollTopAnimated = function (speed) {
    var topOffset = docBody.scrollTop || focElem.scrollTop;
    var stepAmount = topOffset;

    speed && (stepAmount = (topOffset * stepTime)/speed);

    scrollAnimationStep(topOffset, stepAmount);
};

function goHome() {
    location.href = "index.html";
}

getAllMovieGenres();