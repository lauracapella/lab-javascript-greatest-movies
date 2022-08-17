const movies = require('./data.js');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
 function getAllDirectors(moviesArray) {
    const rawList = moviesArray.map((movie) => {
        return movie.director;
    })
    return rawList
}

console.log(`1.List of All Directors: ${getAllDirectors(movies)} `) 



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const steven = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg';
    });
    const stevenDrama = steven.filter((movie) => { return movie.genre.includes("Drama")});
    return stevenDrama;
}
console.log(howManyMovies(movies)) 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sumaMovies = moviesArray.reduce((acc,movieScore ) => acc + movieScore.score, 0 );
    const scoreAverage = (sumaMovies / movies.length).toFixed(2);
    return scoreAverage;
    
}
console.log(movies.length)
console.log(`Score Average: ${scoresAverage(movies)}`)


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const moviesDrama = moviesArray.filter(
        (movie) => {return movie.genre.includes('Drama') }
    )
    const sumaMoviesDrama = moviesDrama.reduce((acc,movieScore)=> acc + movieScore.score,0)
    console.log(moviesDrama.length)

    const dramaScoreAverage = (sumaMoviesDrama / moviesDrama.length).toFixed(2);
    return dramaScoreAverage;

}
console.log(`Score Drama Average: ${dramaMoviesScore(movies)}`)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = moviesArray.sort((a,b) => a.year - b.year)
    //const moviesByYear = moviesArray.map(movie => movie.year )
    return moviesByYear;
}
//|| a.title.localeCompare(b.title)


console.log(`Movies by year:`, orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesTitleArray = moviesArray.map(e => e.title);
    const moviesTitleSortArray = moviesTitleArray.sort();
    const moviesTitleSortArray20 = moviesTitleSortArray.slice(0,20)
    return moviesTitleSortArray20;
}

console.log(`Movies by title:`, orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
