document.addEventListener("DOMContentLoaded", function(event) {
   const addBtn = document.querySelector('#addBtn');
    const inputTask = document.getElementById('inputTask');
    const listTasks = document.querySelector('.listTasks');
    
    addTasks = () => {
        let insertedInput = inputTask.value;
        console.log(insertedInput)
        let task = document.createElement('LI');
        task.textContent = insertedInput;
        task.style.cssText= 'list-style-type:circle; text-align:left';
        inputTask.value = '';
    }

    addBtn.addEventListener('click', addTasks)
});