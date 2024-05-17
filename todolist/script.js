document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete', 'btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});

