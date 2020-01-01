const searchTitle = document.querySelector('.searchTitle');
window.onload = function() {
    var value = loadLocalString();
    // removeLocalString();
    if (value) {
        searchMovie(value);
    }
};