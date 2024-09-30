$(function() {
    init();  // Call your init function instead of Infinity()
});

function init() {
    console.log('jQuery goodness has loaded');
    setUpMovieLoader();
}

function setUpMovieLoader() {
    $('#btnLoadMovies').on('click', function () {
        console.log('loading button clicked');
        const URL_MOVIES = './data/movies.json';

        $.getJSON(URL_MOVIES, function(moviedata) {  // Corrected here
            RenderMovieDataAsTable(moviedata);
        });
    });
}

function RenderMovieDataAsTable(moviedata) {
    console.log(moviedata);
    console.log("===============");
    console.log({ moviedata });

    let htmlString = [];

    for (const movie of moviedata) {
        const { title, year, director } = movie;

        htmlString.push('<tr>');
        htmlString.push('<td>' + title + '</td>');
        htmlString.push('<td>' + year + '</td>');
        htmlString.push('<td>' + director + '</td>');
        htmlString.push('</tr>');
    }

    $('#movieBody').append(htmlString.join(""));
}
