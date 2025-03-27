const taskInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

//Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Add Task
function addTask() {
    const task = taskInput.value.trim()
    if (task === "") {
        alert('Please enter a task')
        return
    }
    tasks.push({ text: task })
    taskInput.value = ""
    saveTasks()
    renderTasks()
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1)
    saveTasks()
    renderTasks()
}

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Render tasks
function renderTasks() {
    todoList.innerHTML = ""
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li')
        taskItem.className = `todo-item`
        taskItem.innerHTML = `
        <span onClick="deleteTask(${index})">${task.text}</span>
        <div>
            <input type='checkbox' id='todo-check' style="display: none;" onClick="deleteTask(${index})" />
            <label for='todo-check' class='todo-check'></label>
        </div>`
        todoList.appendChild(taskItem)
    });
}

// Event listener for add button
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e)=> {
    if(e.key === "Enter") {
        addTask()
    }
})

// Initial render
renderTasks();