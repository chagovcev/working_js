'use strict';

let money = +prompt('Ваш месячный доход?', 1500),
 income = '500', 
 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
 deposit = confirm('Есть ли у вас депозит в банке?'),
 mission = 10000;
 

 let showTypeOf = function(data){
     console.log('type of: ', typeof(data), data);
 }
 console.log(showTypeOf(money));
 console.log(showTypeOf(income));
 console.log(showTypeOf(deposit));
 console.log('addExpenses: ', addExpenses.split(','));

 let expenses1 = prompt('Введите обязательную статью расходов?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдется?', 100),
  amount2 = +prompt('Во сколько это обойдется?', 50);
 
function getExpensesMonth(){
    let sum = amount1 + amount2;
    return sum;
};

console.log('getExpensesMonth: ', getExpensesMonth());

let accumulatedMonth = function getAccumulatedMonth(){
    let profit = money - (amount1 + amount2);
    return profit;
};

function getTargetMonth(){
    let period = Math.ceil(mission / accumulatedMonth());
    return period;
};

let budgetDay = Math.floor(accumulatedMonth() / 30);

let getStatusIncome = function(){
    if (budgetDay >= 50) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay >= 40 && budgetDay < 50) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay >= 0 && budgetDay < 40) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
        console.log('Что-то пошло не так');
    }
};

getStatusIncome();
console.log(`Цель заработать ${mission} евро`);
console.log('За ' + getTargetMonth() + ' месяцев достигнешь цели!');
console.log('budgetDay: ', budgetDay);






