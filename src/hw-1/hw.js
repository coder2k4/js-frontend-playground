/*

Реализовать модуль  по следующим правилам.

	- из модуля экспортируются 2 функции:
		- wordsCount(str) - возвращает количество слов в строке
		- getWords(str) - возвращает итерируемый объёкт, перебирающий слова.
			Внимание! Не массив! Слова не доступны по индексам - только перебор for-of.
	- внутри модуля могут быть вспомогательные перемнные и функции
	- функции wordsCount и getWords производят предобработку строки, удаляя лишнии
      пробелы слева и справа, а также приводя множественные пробелы к одному
	- функция getWords реализуется с помощью генератора, либо вручную, решать вам
	  в любом случае она должна подставить в for of

Пример вызова функций:

import {wordsCount, getWords} from './your-file.js';

let str = '  Всем  привет! Ура ура! ';

this.console.log(wordsCount(str)); // 4

for(let some of getWords(str)){
	this.console.log(some);			// выводит 4 слова
}

Данное ДЗ присылайте в виде ровно одного js-файла, содержащего модуль.
Файл назван латиницей, название содержит ваше имя или превдонимом.

Если почтовый клиент будет блокировать отправку js-файла, просто поменяйте расширение на txt.

 */



// Возвращает количество слов в строке
function wordsCount(str) {
    str = str.trim()
    if (!str.length) {
        console.log(0)
        return
    }

    let counter = 1
    for (let i = 0; i < str.length; i++)
        if (str[i] === ' ' && str.length > 0)
            counter++
    console.log(counter)
}

// Возвращает интерируемый объект
function* getWords(str) {
    let start = 0
    str = str.trim()
    for (let i = 0; i <= str.length; i++) {
        if(str[i] === ' ' || i=== str.length) {
            yield str.substr(start, i-start)
            start = i+1
        }
    }
}

export {wordsCount, getWords}