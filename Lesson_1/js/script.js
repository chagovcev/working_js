'use strict';

var money = 1500;
var income = '500'; 
var addExpenses = 'Интернет, Такси, Коммуналка, Кино'; 
var deposit = true;
var mission = 10000; 
var period = 8;
var budgetDay = 50;



console.log('type of money: ', typeof money);
console.log('type of income: ', typeof income);
console.log('type of deposit: ', typeof deposit);
console.log('length of the addExpenses: ', addExpenses.length);
console.log('Период равен ', (period), ' месяцев. Цель заработать', (mission), 'евро');
console.log('addExpenses: ', addExpenses.toLowerCase().split(', '));
console.log('budgetDay: ', budgetDay);


