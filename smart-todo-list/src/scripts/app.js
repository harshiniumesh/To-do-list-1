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
        taskItem.innerHTML = `<span class="task-text">${taskText}</span>`;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'remove-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            // Animate removal
            taskItem.style.animation = 'fade-out-right 0.4s forwards';
            setTimeout(() => {
                if (taskItem.parentNode === taskList) {
                    taskList.removeChild(taskItem);
                }
            }, 400);
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});