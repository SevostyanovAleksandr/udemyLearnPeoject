"use strict";
/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = prompt ("Сколько фильмов ты уже посмтрел", "") ;


const personfMovieDB = {
    count: numberOfFilms ,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
if ( personfMovieDB.count < 10) {
    console.log ( "Просмотренно довольно мало фильмов");
}
else if (personfMovieDB.count >= 10 && personfMovieDB.count <= 30) {
    console.log ("Вы классический зритель");
}else if (personfMovieDB.count > 30 ) {
    console.log ("Вы киноман");}
    else { console.log("Произошла ошибка");

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