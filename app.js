document.addEventListener("DOMContentLoaded", function(event) {
   const addBtn = document.querySelector('#addBtn');
    const inputTask = document.getElementById('inputTask');
    const listTasks = document.querySelector('.listTasks');
    const modalBox = document.querySelector('.modal');
    const modalInfo = document.querySelector('.modalText');
    
    
    addTasks = () => {
        let insertedInput = inputTask.value;
        if (insertedInput == '') {
            modalBox.style.display = 'block';
        } else {
          let task = document.createElement('LI');
        task.textContent = insertedInput;
        task.style.cssText= 'list-style-type:circle; text-align:left';
        listTasks.appendChild(task);
        inputTask.value = '';  
        }   
    }

    addBtn.addEventListener('click', addTasks);
    
    modalBox.addEventListener('click', function(event) {
        if (event.target != modalInfo) {
            modalBox.style.display = 'none';
        }
    })
});