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
        ddIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        mission: 10000,
        period: 5,
        asking: function(){
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = addExpenses.toLowerCase().split(',');    
                appData.deposit = confirm('Есть ли у вас депозит в банке?');

            for(let i = 0; i < 2; i++){     
                let expenses = prompt('Введите обязательную статью расходов?', 'бензин');
                
                 do{
                    appData.expenses[expenses] = prompt('Во сколько это обойдется?', 100);
                    }while (isNaN(appData.expenses[expenses]) || appData.expenses[expenses] === '  ' || appData.expenses[expenses] === null);
            
            }
            

            
    
        
        },
        budget: Number(money),
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        getExpensesMonth: function () {
            let res = 0;
            for (let key in appData.expenses){                 
                 res += +appData.expenses[key]                 
             }
            return res;     
        },
        getBudget: function () {
            appData.budgetMonth = appData.budget - appData.getExpensesMonth();
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        },
        getTargetMonth: function () {
            let target = Math.ceil(appData.mission / appData.budgetMonth);
            if(target < 0){
                console.log('Цель не будет достигнута');
            }
            return target;
        },
        getStatusIncome: function() {
            if (appData.budgetDay >= 50) {
                console.log('У вас высокий уровень дохода');
            } else if (appData.budgetDay >= 40 && appData.budgetDay < 50) {
                console.log('У вас средний уровень дохода');
            } else if (appData.budgetDay >= 0 && appData.budgetDay < 40) {
                console.log('К сожалению у вас уровень дохода ниже среднего');
            } else if (appData.budgetDay < 0) {
                console.log('Что-то пошло не так');
            }
        }
};

appData.asking();

let expensesAmount = appData.getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);

appData.getBudget();

appData.getStatusIncome();
console.log('Колличество месяцев, для достижения цели: ' + appData.getTargetMonth());

for(let key in appData){
    console.log('Наша программа включает в себя данные: ' + key);
}

