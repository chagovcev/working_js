'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
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
    periodAmount = document.querySelector('.period-amount'),
    leftInputs = document.querySelector('.data').querySelectorAll('input[type=text]'),
    checkBox = document.querySelector('.deposit-checkmark'); 
    
   
const AppData = function () {

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};        
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
};

AppData.prototype.check = function() {
    if (salaryAmount.value !== '') {
        start.removeAttribute('disabled');
    }
};  

AppData.prototype.start = function() {
    if (salaryAmount.value === '') {
        start.setAttribute('disabled', 'true');
        return;
    }
    let allInput = document.querySelectorAll('.data input[type = text');
        allInput.forEach(function (item) {
            item.setAttribute('disabled', 'true')
        });

    incomePlus.setAttribute('disabled', 'true');
    expensesPlus.setAttribute('disabled', 'true');
    start.style.display = 'none';
    cancel.style.display = 'block';

    this.budget = +salaryAmount.value;
       
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth(); 
    this.getAddExpenses();                       
    this.getAddIncome();            
    this.getBudget();
    this.calcPeriod();
    this.getStatusIncome();
    this.showResult();
};

AppData.prototype.showResult = function(){
    const _this = this;

    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth()); 
    periodSelect.addEventListener('change', function () {
        incomePeriodValue.value = _this.calcPeriod();
    });
};

AppData.prototype.addExpensesBlock = function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
    }
};
AppData.prototype.getExpenses = function(){
    const _this = this;
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3){
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.getIncome = function(){
    const _this = this;

    incomeItems.forEach(function(item){
        let incomeTitle = item.querySelector('.income-title').value;
        let incomeAmount = item.querySelector('.income-amount').value;
        if(incomeTitle !== '' && incomeAmount !== ''){
            _this.income[incomeTitle] = incomeAmount;
        }
        
    }); 
    
    for (let key in this.income){
        this.incomeMonth += +this.income[key];
    }

};
AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    const _this = this;
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            _this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getAddIncome = function(){
    const _this = this;
    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};
AppData.prototype.getExpensesMonth = function () {
    for (let key in this.expenses){                 
        this.expensesMonth += +this.expenses[key];                 
    }              
};
AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};
AppData.prototype.getStatusIncome = function() {
    if (this.budgetDay >= 50) {
        console.log('У вас высокий уровень дохода');
    } else if (this.budgetDay >= 40 && this.budgetDay < 50) {
        console.log('У вас средний уровень дохода');
    } else if (this.budgetDay >= 0 && this.budgetDay < 40) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (this.budgetDay < 0) {
        console.log('Что-то пошло не так');
    }
};
AppData.prototype.getInfoDeposit = function() {
    if(this.deposit){
        this.percentDeposit = +prompt('Какой годовой процент?', '10');
        this.moneyDeposit = +prompt('Ккаая сумма заложена', 5000);
    }
};
AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * periodSelect.value; 
                           
};
AppData.prototype.reset = function () {
    let inputTextData = document.querySelectorAll('.data input[type = text]'),
        resultInputAll = document.querySelectorAll('.result input[type = text]');
        
    inputTextData.forEach(function (elem) {
        elem.value = '';
        elem.removeAttribute('disabled');
        periodSelect.value = '0';
        periodAmount.innerHTML = periodSelect.value; 
    });
    resultInputAll.forEach(function (elem) {
        elem.value = '';
    });

    for (let i = 1; i < incomeItems.length; i++) {
        incomeItems[i].parentNode.removeChild(incomeItems[i]);
        incomePlus.style.display = 'block';
    }
    for (let i = 1; i < expensesItems.length; i++) {
        expensesItems[i].parentNode.removeChild(expensesItems[i]);
        expensesPlus.style.display = 'block';
    }

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};        
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    cancel.style.display = 'none'; 
    start.style.display = 'block';
    incomePlus.removeAttribute('disabled');
    expensesPlus.removeAttribute('disabled');
    checkBox.checked = false;
};
const appData = new AppData();

console.log(appData);

AppData.prototype.eventListeners = function () {
    start.addEventListener('click', this.start.bind(appData));
    cancel.addEventListener('click', this.reset.bind(appData));
    salaryAmount.addEventListener('keyup', this.check);
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);

    periodSelect.addEventListener('change', function () {
        periodAmount.innerHTML = periodSelect.value;
    });

    let addExp = [];
    for (let i = 0; i < appData.addExpenses.length; i++) {
        let element = appData.addExpenses[i].trom();
        element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
        addExp.push(element);
}
};

appData.eventListeners();