'use strict';

let money;
let income = '500'; 
let addExpenses; 
let expenses1;
let expenses2;
let amount1;
let amount2;
let deposit;
let mission = 10000; 
let period;
let budgetDay;
let budgetMonth;



console.log('type of income: ', typeof income);

money = +prompt('Ваш месячный доход?');
console.log('money: ', money);
console.log('type of money: ', typeof money);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('addExpenses: ', addExpenses.split(','));
console.log('length of the addExpenses: ', addExpenses.length);
deposit = Boolean(prompt('Есть ли у вас депозит в банке?'))
console.log('deposit: ', deposit);
expenses1 = +prompt('Введите обязательную статью расходов?');
expenses2 = +prompt('Введите обязательную статью расходов?');
amount1 = +prompt('Во сколько это обойдется?')
amount2 = +prompt('Во сколько это обойдется?')
budgetMonth = money - (expenses1 + expenses2);
console.log('Прибыль за месяц: ', budgetMonth);

period = Math.ceil(mission / budgetMonth)
console.log('Цель заработать', (mission), 'евро');
console.log('За ', period, ' месяцев достигнешь цели!')

budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);

if (budgetDay >= 50) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 40 && budgetDay < 50) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 40) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что-то пошло не так');
}
