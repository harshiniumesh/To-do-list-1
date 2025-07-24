// This file contains the main JavaScript logic for the to-do list application.
// It handles user interactions, such as adding and removing tasks, and updates the DOM accordingly.

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-btn';
        removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        removeButton.addEventListener('click', () => {
            // Animate removal
            taskItem.style.transition = 'opacity 0.4s, transform 0.4s';
            taskItem.style.opacity = '0';
            taskItem.style.transform = 'translateX(40px)';
            setTimeout(() => {
                taskList.removeChild(taskItem);
            }, 400);
        });

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});