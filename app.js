document.addEventListener("DOMContentLoaded", function(event) {
   const addBtn = document.querySelector('#addBtn');
    const inputTask = document.getElementById('inputTask');
    const listTasks = document.querySelector('.listTasks');
    const modalBox = document.querySelector('.modal');
    const modalInfo = document.querySelector('.modalText');
    const deleteTasksBtn = document.getElementById('deleteTasksBtn');
    const saveListBtn = document.getElementById('saveListBtn');
    
//    Add new task button
    
    addTask = () => {
        
        let insertedInput = inputTask.value;
        
//        Check if input is not blank
        
        if (insertedInput == '') {
            modalBox.style.display = 'block';
        } else {
            
//        Create new task
            
        let task = document.createElement('LI');
        task.textContent = insertedInput;
        task.classList.add('listElement');
            
//        Remove task button
            
        let removeBtn = document.createElement('BUTTON');
        removeBtn.classList.add('removeBtn');
        removeBtn.innerText = 'X';
        task.appendChild(removeBtn);
            
//        Mark task as complete button
            
        let completeBtn = document.createElement('BUTTON');
        completeBtn.classList.add('completeBtn');
        completeBtn.innerText = '✓';
        task.appendChild(completeBtn);
        listTasks.appendChild(task);    
        inputTask.value = '';  
        
        removeBtn.addEventListener('click', removeTask);
        completeBtn.addEventListener('click', function() {
            task.classList.add('taskDone');
        })
        }   
    }
    
    removeTask = (event) => {
        let item = event.target;       item.parentNode.parentNode.removeChild(item.parentNode);
        
        // REMOVE THIS ITEM FROM LOCAL STORAGE - TO DO
    };
    
    removeAllTasks = () => {
        localStorage.removeItem('toDoList');
        listTasks.innerHTML = '';
    };
    
    saveTasksToLocalStorage = (event) => {
//        Prevents form submission
        event.preventDefault();

//        Prevents submiting blank list
        if (listTasks.innerHTML == '') return;
        
//        Save tasks to localStorage
        
        localStorage.setItem('toDoList', listTasks.innerHTML);
        };
    
//        Check for saved list
        let saved = localStorage.getItem('toDoList');
        
        if (saved) {
            listTasks.innerHTML = saved;
        }

    
    addBtn.addEventListener('click', addTask);
    
    modalBox.addEventListener('click', function(event) {
        if (event.target != modalInfo) {
            modalBox.style.display = 'none';
        }
    });
    
    deleteTasksBtn.addEventListener('click', removeAllTasks);
    
    saveListBtn.addEventListener('click', saveTasksToLocalStorage);
    
});