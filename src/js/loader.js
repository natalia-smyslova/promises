// Для вас реализованы функции-заглушки, которая эмулируют чтение файла и преобразование прочитанного в json. 
// Ваша задача - реализовать класс GameSavingLoader с методом load, который загружает данные 
// (с помощью функции read), парсит их (с помощью функции json()) и создаёт объект типа GameSaving.
import read from './reader';
import json from './parser';


export default class GameSavingLoader {
    static load() {
return new Promise((resolve, reject) => {
          read().then((data) => {
            json(data).then((result) => {
               try {
                 resolve(JSON.parse(result));
               } catch (error){
                  reject(error);
               }
            });
          });
        });
    };
};
