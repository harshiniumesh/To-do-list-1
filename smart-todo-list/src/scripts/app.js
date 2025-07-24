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
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';

        // Call animation function from animation.js
        animateTaskAddition(taskItem);
    }

    function animateTaskAddition(taskItem) {
        // Add animation logic here
        taskItem.classList.add('fade-in');
    }
});