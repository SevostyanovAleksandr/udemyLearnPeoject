"use strict";
/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
жанры
P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов ты уже посмтрел", "");

    while (numberOfFilms == "", numberOfFilms == null, isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов ты уже посмтрел", "");
    }
}
start();

const personfMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
            b = prompt("Какая оценка у этого фимльма", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
            personfMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Error");
            i--;
            console.log(personfMovieDB);
        }

    }

}
console.log(personfMovieDB);
rememberMyFilms();

function detectPersonalLevel() {
    if (personfMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (personfMovieDB.count >= 10 && personfMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personfMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");

    }
}

detectPersonalLevel();


function showMyDB(hidden) { // hidden - это cвойства обьекта privat:false
    if (!hidden) {
        console.log(personfMovieDB);

    }
}
showMyDB(personfMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 3; i++) {
        const ganre = prompt("Ваш любимый жанр под номер $(i)");
        personfMovieDB.genres[i - 1] = genre;
    }

}
writeYourGenres();
