const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        li.appendChild(taskSpan);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';

        // Edit Task
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit your task', taskSpan.textContent);
            if (newTaskText) {
                taskSpan.textContent = newTaskText;
            }
        });

        // Delete Task
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});