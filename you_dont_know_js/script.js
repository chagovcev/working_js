'use strict';

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

let collectionBooks = document.querySelector('.books'),
 elemBook = document.querySelectorAll('.book'),
 colectionUl = document.getElementsByTagName('ul'),
 elemLi = document.getElementsByTagName('li'), 
 book3 = document.getElementsByTagName('a'),
 adv = document.querySelector('.adv'),
 newChapter = document.createElement('li');

 collectionBooks.insertBefore(elemBook[1], elemBook[0]);
 collectionBooks.insertBefore(elemBook[4], elemBook[2]);
 collectionBooks.insertBefore(elemBook[3], elemBook[2]);
 collectionBooks.insertBefore(elemBook[5], elemBook[2]);

 colectionUl[1].insertBefore(elemLi[12], elemLi[10]);
 colectionUl[1].insertBefore(elemLi[14], elemLi[11]);
 colectionUl[4].insertBefore(elemLi[45], elemLi[38]);
 colectionUl[4].insertBefore(elemLi[40], elemLi[39]);
 colectionUl[4].insertBefore(elemLi[41], elemLi[40]);
 colectionUl[5].appendChild(newChapter);
 colectionUl[5].insertBefore(elemLi[57], elemLi[56]);

 newChapter.textContent = 'Глава 8: За пределами ES6';

 book3[2].textContent = 'Книга 3. this и Прототипы Объектов';

 adv.setAttribute('style', 'display: none');

 
console.log(colectionUl);
console.log(elemLi)
