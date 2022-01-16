"use strict";
/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
 - count - сюда передается ответ на первый вопрос
 - movies - в это свойство поместить пустой объект
 - actors - тоже поместить пустой объект
 - genres - сюда поместить пустой массив
 - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
 - 'Один из последних просмотренных фильмов?'
 - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
 фильмы: {
 "логан": "8.1"
    }
Проверить, чтобы все работало без ошибок в консоли */


const numberOfFilms = prompt ("Сколько фильмов ты уже посмтрел", "") ;


const personfMovieDB = {
    count: numberOfFilms ,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
if ( personfMovieDB.count < 10) {
    alert ( "Просмотренно довольно мало фильмов");
}
else if (personfMovieDB.count >= 10 && personfMovieDB.count <= 30) {
    alert ("Вы классический зритель");
}else if (personfMovieDB.count > 30 ) {
    alert ("Вы киноман");}
    else { alert("Произошла ошибка");

};

for (let i = 0; i <2; i++){
    const a  = prompt ("Один из последних просмотренных фильмов", ""),
          b = prompt ("Какая оценка у этого фимльма", "");

if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50){
    personfMovieDB.movies[a]=b;
    console.log("done");
}
 else {
    console.log("Error");
     i--;
     
}
}
console.log(personfMovieDB);