import { type KanbanTask } from "./types";
console.log("TypeScript скрипт успешно загружен и работает!");

const todoForm = document.querySelector<HTMLFormElement>('#todo-form');
const todoInput = document.querySelector<HTMLInputElement>('#todo-input');
const todoList = document.querySelector<HTMLDivElement>('#todo-list');
const progressList = document.querySelector<HTMLDivElement>('#progress-list');
const doneList = document.querySelector<HTMLDivElement>('#done-list');

const savedTasks = localStorage.getItem('kanban-tasks');
let tasks: KanbanTask[] = savedTasks ? JSON.parse(savedTasks) : [];

function saveToLocalStorage() {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
}

function renderTasks() {

    todoList.innerHTML = '';
    progressList.innerHTML = '';
    doneList.innerHTML = '';

    tasks.forEach(task => {

        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        taskCard.draggable = true;

        const taskText = document.createElement('span');
        taskText.innerText = task.title;
        taskCard.appendChild(taskText);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;';
        taskCard.appendChild(deleteBtn);

        taskCard.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', task.id);
        });

        deleteBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
            saveToLocalStorage();
        });

        if (task.column === 'todo') {
            todoList.appendChild(taskCard);
        } else if (task.column === 'progress') {
            progressList.appendChild(taskCard);
        } else if (task.column === 'done') {
            doneList.appendChild(taskCard);
        }
    });
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (todoInput.value.trim() === '') return; 

    const newTask: KanbanTask = {
            id: Date.now().toString(),
            title: todoInput.value,
            column: 'todo'
        };
        tasks.push(newTask);
        todoInput.value = '';
        renderTasks();
        saveToLocalStorage();
});

const columns = [
    { element: todoList, status: 'todo' },
    { element: progressList, status: 'progress' },
    { element: doneList, status: 'done' }
];

columns.forEach(col => {
    col.element.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    col.element.addEventListener('drop', (event) => {
        const taskId = String(event.dataTransfer.getData('text/plain'));
        const task = tasks.find(t => t.id === taskId);
        
        if (task) {
            task.column = col.status as KanbanTask['column']; 
            renderTasks();
            saveToLocalStorage();
            renderTasks();
        }
    });
});

renderTasks();
