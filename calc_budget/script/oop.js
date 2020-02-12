'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],   
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0], 
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    targetMonthValue = document.querySelector('.target_month-value'),    
    salaryAmount = document.querySelector('.salary-amount'),
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],   
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'); 
    
    


let change = function(){
    start.disabled = true;
    if(salaryAmount.value !== ''){
        start.disabled = false;
    }
};

change();
    
    
    
    
    

let appData = {
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0,
        income: {},
        incomeMonth: 0,
        addIncome: [],
        expenses: {},        
        expensesMonth: 0,
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        start: function() {  
            
                      
            appData.budget = +salaryAmount.value;
            
            appData.blockBtn();
            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth(); 
            appData.getAddExpenses();                       
            appData.getAddIncome();            
            appData.getBudget();
            appData.calcPeriod();


            appData.showResult();
            
            // appData.getInfoDeposit();
        },
        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
                      
            periodSelect.addEventListener('input', appData.getPeriodAmount);
            periodSelect.addEventListener('input',appData.calcPeriod);
            

        },
        addExpensesBlock: function(){
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3){
                expensesPlus.style.display = 'none';
            }
        },
        addIncomeBlock: function(){
            let cloneIncomeItems = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
            incomeItems = document.querySelectorAll('.income-items');
            if (incomeItems.length === 3){
                incomePlus.style.display = 'none';
            }
        },
        getExpenses: function(){
            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if(itemExpenses !== '' && cashExpenses !== ''){
                    appData.expenses[itemExpenses] = cashExpenses;
                }
            });

        },
        getIncome: function(){
            incomeItems.forEach(function(item){
                let incomeTitle = item.querySelector('.income-title').value;
                let incomeAmount = item.querySelector('.income-amount').value;
                if(incomeTitle !== '' && incomeAmount !== ''){
                    appData.income[incomeTitle] = incomeAmount;
                }
                
            }); 
            
            for (let key in appData.income){
                appData.incomeMonth += +appData.income[key];
            }

        },
        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if(item !== ''){
                    appData.addExpenses.push(item);
                }
            });
        },
        getAddIncome: function(){
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if(itemValue !== ''){
                    appData.addIncome.push(itemValue);
                }
            });
        },
        getExpensesMonth: function () {
            for (let key in appData.expenses){                 
                appData.expensesMonth += +appData.expenses[key];                 
            }              
        },
        getBudget: function () {
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        },
        getTargetMonth: function () {
            return targetAmount.value / appData.budgetMonth;
            
            // if(target < 0){
            //     console.log('Цель не будет достигнута');
            // }
        },
        getPeriodAmount: function(){
           periodAmount.innerHTML = periodSelect.value;
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
        calcPeriod: function(){
            let res = appData.budgetMonth * periodSelect.value; 
            incomePeriodValue.value = res;                       
        },
        blockBtn: function(){
            if (salaryAmount.value === ''){
                return console.log('ПУСТО');
            } else {
                start.disabled = false;
                start.addEventListener('click', appData.start);
            }
        }
        

};


// start.setAttribute('disabled', 'disabled');

 start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);





// appData.getStatusIncome();
// console.log('Колличество месяцев, для достижения цели: ' + appData.getTargetMonth());

// for(let key in appData){
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// }