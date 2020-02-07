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
        percentDeposit: 0,
        moneyDeposit: 0,
        mission: 10000,
        period: 5,
        asking: function(){

            if(confirm('Есть ли у вас дополнительный заработок?')){
                let itemIncome = prompt('Какой у вас дополнительный заработок?');
                let cashIncome = prompt('Сколько в месяц зарабатывайте на этом', 300)
                appData.income[itemIncome] = +cashIncome;
            }

            let costs = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
               appData.addExpenses = costs.split(',');
               for(let i = 0; i < appData.addExpenses.length; i++){
                appData.addExpenses[i].charAt().toUpperCase() + appData.addExpenses[i].substr(1).toLowerCase();
            } 
                   
                appData.deposit = confirm('Есть ли у вас депозит в банке?');

            for(let i = 0; i < 2; i++){     
                let itemExpenses = prompt('Введите обязательную статью расходов?', 'бензин');
                
                let cashExpenses;
                 do{
                    cashExpenses = prompt('Во сколько это обойдется?', 100);
                    }while (isNaN(cashExpenses) || cashExpenses === '  ' || cashExpenses === null);
                
                appData.expenses[itemExpenses] = +cashExpenses;            
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
        },
        getInfoDeposit: function() {
            if(appData.deposit){
                appData.percentDeposit = +prompt('Какой годовой процент?', '10');
                appData.moneyDeposit = +prompt('Ккаая сумма заложена', 5000);
            }
        },
        calcSavedMoney: function(){
            return appData.budgetMonth * appData.period;
        }

};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

console.log('Расходы за месяц: ' + appData.getExpensesMonth());



appData.getStatusIncome();
console.log('Колличество месяцев, для достижения цели: ' + appData.getTargetMonth());

for(let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}