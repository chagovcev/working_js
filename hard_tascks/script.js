'use strict'

let lang = 'ru';
let result1;
let result2;
let langArr;
let namePerson = 'Роман';

if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sanday')
}

switch (lang) {
    case 'ru': 
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sanday')
        break;
    default: 
        console.log('Что-то не то')
}

langArr = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sanday']
];

result1 = (lang === 'ru') ? langArr[0] : 
         (lang ==='en') ? langArr[1] : 
         'Пустая строка';
console.log('result1: ', result1);

result2 = (namePerson === 'Артем') ? 'директор' :
          (namePerson === 'Максим') ?'преподаватель' :
          'студент';
console.log('result2: ', result2);


