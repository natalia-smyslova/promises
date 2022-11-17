// Для вас реализованы функции-заглушки, которая эмулируют чтение файла и преобразование прочитанного в json. 
// Ваша задача - реализовать класс GameSavingLoader с методом load, который загружает данные 
// (с помощью функции read), парсит их (с помощью функции json()) и создаёт объект типа GameSaving.


import GameSavingLoader from './loader';




GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log('resolve: ', saving);
}, (error) => {
  console.log('error: ', error);
  // ...
});
