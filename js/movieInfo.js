window.onload = function() {
    var value = loadLocalMovieId();
    console.log(value);
    // removeLocalMovieId();
    if (value) {
        // searchMovie(value);
        getMovieInfo(value);
    }
};