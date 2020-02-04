'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money,
 income = 'Freelance', 
 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
 deposit = confirm('Есть ли у вас депозит в банке?'),
 mission = 10000;
 

let start = function() {
    // money = prompt('Ваш месячный доход?');

    do{
        money = prompt('Ваш месячный доход?');        
    }
    while (!isNumber(money));
};

start();

 let showTypeOf = function(data){
     console.log('type of: ', typeof(data), data);
 }
 console.log(showTypeOf(money));
 console.log(showTypeOf(income));
 console.log(showTypeOf(deposit));
 console.log(addExpenses.toLowerCase().split(','));

let expenses = []; 
let sum = 0;
function getExpensesMonth(){
    
    
    for(let i = 0; i < 2; i++){
        
        expenses[i] = prompt('Введите обязательную статью расходов?');       
       
        do{
            sum = +prompt('Во сколько это обойдется?');
        }
        while (!isNumber(sum));

    }
    console.log(expenses);
    return sum += sum;
    
};





let expensesAmount = getExpensesMonth();

console.log('Расходы на месяц: ' + expensesAmount);

let getAccumulatedMonth = function(){
    return  money - expensesAmount; 
};

let accumulatedMonth = getAccumulatedMonth()

function getTargetMonth(){
    let target = Math.ceil(mission / accumulatedMonth);
    if(target < 0){
        console.log('Цель не будет достигнута');
    }
    return target;
};

let budgetDay = Math.floor(accumulatedMonth / 30);

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
console.log('Колличество месяцев, для достижения цели: ' + getTargetMonth());
console.log('budgetDay: ', budgetDay);




