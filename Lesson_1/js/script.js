'use strict';

let money,
    start = function() {
        do{
            money = prompt('Ваш месячный доход?', 2000);        
        }
        while (isNaN(money) || money === '' || money === null);
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 10000,
    period: 5,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');    
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0
}

 
let expenses1,
    expenses2;



function getExpensesMonth(){ 
    
}

let expensesAmount = getExpensesMonth();

console.log('Расходы на месяц: ' + expensesAmount);

let getAccumulatedMonth = function(){
    return  money - expensesAmount; 
};

let accumulatedMonth = getAccumulatedMonth()

function getTargetMonth(){
    let target = Math.ceil(appData.mission / accumulatedMonth);
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
console.log(`Цель заработать ${appData.mission} евро`);
console.log('Колличество месяцев, для достижения цели: ' + getTargetMonth());
console.log('budgetDay: ', budgetDay);
