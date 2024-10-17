const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskHeading = document.getElementById('taskHeading');

// Add Task
addTaskBtn.addEventListener('click', () => {
    taskHeading.style.display = 'block';// Show the heading when the first task is added
    
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert('Please fill in the task first!'); // Show alert if input is empty
        return; // Stop further execution
    }

    if (taskText) { 
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.classList.add('save-btn');
        saveBtn.style.display = 'none'; // Initially hidden

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        li.appendChild(taskSpan);
        li.appendChild(editBtn);
        li.appendChild(saveBtn); // Add save button
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';

        // Edit Task
        editBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = taskSpan.textContent;
            input.classList.add('task-input');
            taskSpan.replaceWith(input); // Replace task text with input field
            input.focus();

            editBtn.style.display = 'none';  // Hide Edit button during edit
            deleteBtn.style.display = 'none';  // Hide Delete button during edit
            saveBtn.style.display = 'inline-block';  // Show Save button during edit

            // Save Task
            saveBtn.addEventListener('click', () => {
                if (input.value.trim()) {
                    taskSpan.textContent = input.value; // Update task text
                }

                input.replaceWith(taskSpan);  // Replace input with updated task text
                saveBtn.style.display = 'none';  // Hide Save button after saving
                editBtn.style.display = 'inline-block';  // Show Edit button again
                deleteBtn.style.display = 'inline-block';  // Show Delete button again
            });
        });

        // Delete Task
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            if (taskList.children.length === 0) {
                taskHeading.style.display = 'none'; // Hide heading if no tasks remain
    }});
    }
});
