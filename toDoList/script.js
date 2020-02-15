
//document.addEventListener('DOMContentLoaded', function(){    
    let add = document.getElementById('add'),
        headerInput = document.querySelector('.header-input'),
        todoList = document.getElementById('todo'),      
        completedList = document.getElementById('completed');


    //создаем объект
    let data = {
        todo: [],
        completed: []
    };

    // проверяем localStorage на наличие данных
    if(localStorage.getItem('local')) {
        data = JSON.parse(localStorage.getItem('local'));
    }

    // функция, которая рендерит наши данные если они есть в Storage
    const renderItemsForUpdate = function() {
        if(!data.todo.length && !data.completed.length) return
         for(let i = 0; i < data.todo.length; i++) {
             createItem(data.todo[i]);
         }
         for(let i = 0; i < data.completed.length; i++) {
            createItem(data.completed[i]);
        }
    };

    // добавляет данные в Storage
    const dataUpdateToLocalS = function() {
        localStorage.setItem('local', JSON.stringify(data));        
    };
    //добавляет елемент на страницу
    let addItem = function(text) {
        createItem(text);        
        headerInput.value = '';    
        data.todo.push(text);

        dataUpdateToLocalS();
    };

    //Удаляет элемент из его родителя
    let itemRemove = function(elem){
        const item = elem.parentNode.parentNode;
        const itemParent = item.parentNode;
        const id = itemParent.id;
        const text = item.textContent;

        if(id === 'todo') {
            data.todo.splice(data.todo.indexOf(text), 1);
        } else {
            data.completed.splice(data.completed.indexOf(text), 1);
        }
        
        itemParent.removeChild(item);

        dataUpdateToLocalS();
    };

    // Переносит элемент 
    let itemComplete = function(elem){
        const item = elem.parentNode.parentNode;
        const itemParent = item.parentNode;
        const id = itemParent.id;
        const text = item.textContent;

        let target;

        if(id === 'todo') {
            target = completedList;
        } else {
            target = todoList;
        }

        if(id === 'todo') {
            data.todo.splice(data.todo.indexOf(text), 1);
            data.completed.push(text);
        } else {
            data.completed.splice(data.completed.indexOf(text), 1);
            data.todo.push(text);
        }
        
        itemParent.removeChild(item);
        target.insertBefore(item, target.childNodes[0]);

        dataUpdateToLocalS();

    };
    
    // создает элемент и принимает текст. По умолчанию незаполненый
    let createItem = function(text, completed = false) {
        let item = document.createElement('li');
        let btnBlock = document.createElement('div');
        let btnRemove = document.createElement('button');
        let btnComplete = document.createElement('button');
        
        let list = todoList;

        if(completed){
            list = completedList;
        } else {
            list = todoList;
        }
        
        item.classList.add('todo-item');
        btnBlock.classList.add('todo-buttons');
        btnRemove.classList.add('todo-remove');
        btnComplete.classList.add('todo-complete');

        

        btnRemove.addEventListener('click', function(event) {
            itemRemove(event.target);
        });

        btnComplete.addEventListener('click', function(event) {
            itemComplete(event.target);
        });

        item.textContent = text;
        btnBlock.appendChild(btnRemove);
        btnBlock.appendChild(btnComplete);
        item.appendChild(btnBlock);

        list.insertBefore(item, list.childNodes[0]);
    };
    
    //обработчик события
    add.addEventListener('click', function() {
        event.preventDefault(); 

        if(headerInput.value !== '') {
            addItem(headerInput.value.trim());
        }  
    });

    // Вызов функции которая при наличии данных сторэдж запускается.
    renderItemsForUpdate();

//});

