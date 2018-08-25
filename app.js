document.addEventListener("DOMContentLoaded", function(event) {
   const addBtn = document.querySelector('#addBtn');
    const inputTask = document.getElementById('inputTask');
    const listTasks = document.querySelector('.listTasks');
    const modalBox = document.querySelector('.modal');
    const modalInfo = document.querySelector('.modalText');
    
    
    addTask = () => {
        let insertedInput = inputTask.value;
        if (insertedInput == '') {
            modalBox.style.display = 'block';
        } else {
        let task = document.createElement('LI');
        task.textContent = insertedInput;
        task.classList.add('listElement');
        let removeBtn = document.createElement('BUTTON');
        removeBtn.classList.add('removeBtn');
        removeBtn.innerText = 'X';
        task.appendChild(removeBtn);
        listTasks.appendChild(task);    
        inputTask.value = '';  
        
        removeBtn.addEventListener('click', removeTask);
        }   
    }

    addBtn.addEventListener('click', addTask);
    
    modalBox.addEventListener('click', function(event) {
        if (event.target != modalInfo) {
            modalBox.style.display = 'none';
        }
    });
    
    removeTask = (event) => {
        let item = event.target;       item.parentNode.parentNode.removeChild(item.parentNode)
    };
    
});