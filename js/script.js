"use strict";


const numberOfFilms = +prompt ("Сколько фильмов ты уже посмтрел", "") ;


// const luchshiifilm = "Один из просмотренных фильмов?";
// const estimation = "На сколько оцените его?";

const personfMovieDB = {
    count: numberOfFilms ,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a  = prompt ("Один из последних просмотренных фильмов", ""),
b = +prompt ("Какая оценка у этого фимльма", ""),
c = prompt ("Один из последних просмотренных фильмов", ""),
d = +prompt ("Какая оценка у этого фимльма", "");

personfMovieDB.movies[a]=b;
personfMovieDB.movies[c]=d;



console.log(personfMovieDB);