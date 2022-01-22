 "use strict";
/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

 const personfMovieDB = {

     count: 0,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
     start: function () {
         personfMovieDB.count = +prompt("Сколько фильмов ты уже посмтрел", "");

         while (personfMovieDB.count == "" || personfMovieDB.count == null || isNaN(personfMovieDB.count)) {
             personfMovieDB.count = +prompt("Сколько фильмов ты уже посмтрел", "");

         }
     },


     rememberMyFilms: function () {
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

     },


     detectPersonalLevel: function () {
         if (personfMovieDB.count < 10) {
             console.log("Просмотренно довольно мало фильмов");
         } else if (personfMovieDB.count >= 10 && personfMovieDB.count <= 30) {
             console.log("Вы классический зритель");
         } else if (personfMovieDB.count > 30) {
             console.log("Вы киноман");
         } else {
             console.log("Произошла ошибка");

         }
     },
     showMyDB: function (hidden) {
         if (!hidden) {
             console.log(personfMovieDB);

         }
     },
     writeYourGenres: function () {
         for (let i = 1; i <= 3; i++) {

             let genre = prompt(`Ваш любимый жанр под номером ${i}`);
             if (genre === "" || genre == null) {

                 console.log("Вы ввели не корректное значение или их вовсе не ввели ")
                 i--;
             } else {
                 personfMovieDB.genres[i - 1] = genre;
             }
         }
         personfMovieDB.genres.forEach(function (item, i) {
                 console.log(`Любимый жанр ${i} - это ${item}`)
             }

         );
     },
     toggleVisibleMyDB: function () {

         if (personfMovieDB.privat) {
             personfMovieDB.privat = true;

         } else {
             personfMovieDB.privat = false;

         }
     }

 };
 personfMovieDB.start();
 personfMovieDB.rememberMyFilms();
 personfMovieDB.detectPersonalLevel();
 personfMovieDB.showMyDB(personfMovieDB.privat);
 personfMovieDB.writeYourGenres();
 // personfMovieDB.toggleVisibleMyDB();