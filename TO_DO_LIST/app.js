// Variables to store DOM elements
let form = document.querySelector('form');
let input1 = document.querySelector('#task');
let btn = document.getElementsByClassName('black')[0];
let ul = document.querySelector('.collection');
let fill = document.querySelector('#filter');

// Function to load all events and start functionality



function loadAllEvent() {
    // Trigger loading from storage on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', FromStorage);
    // Event to add a new task on form submission
    form.addEventListener('submit', addList);
    // Event to remove a task from the list
    ul.addEventListener('click', cancelItem);
    // Event to clear all tasks from the list
    btn.addEventListener('click', clearAll);
    // Event for filtering tasks in the list
    fill.addEventListener('keyup', filterOut);
}

// Load tasks from local storage on DOMContentLoaded
function FromStorage() {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(value) {
        // Create a new list item and insert into the task list
        let element = createListItem(value);
        insertItemIntoList(element);
    });
}

// Add a new task to the list and local storage
function addList(e) {
    if (input1.value === '') {
        alert("Empty task, please type a task");
    } else {
        let element = createListItem(input1.value);
        insertItemIntoList(element);
        storeLocal(input1.value);
        input1.value = "";
        alert("New to-do list added successfully");
    }
    e.preventDefault();
}

// Store a new task in local storage
function storeLocal(value) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove a task from the list and local storage
function cancelItem(e) {
    if (e.target.parentElement.parentElement.classList.contains('collection-item')) {
        let itemToRemove = e.target.parentElement.parentElement;
        ul.removeChild(itemToRemove);
        clearFromMemory(itemToRemove);
    }
}

// Remove a task from local storage
function clearFromMemory(value) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let store = value.textContent.trim();

    tasks = tasks.filter(task => task.trim() !== store);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks from the list and local storage
function clearAll(e) {
    if (confirm("Are you sure you want to clear all lists?")) {
        while (ul.firstChild) {
            ul.removeChild(ul.firstElementChild);
        }
        removeALL();
    }
}

// Clear all tasks from local storage
function removeALL() {
    localStorage.clear();
}

// Filter tasks based on user input
function filterOut(e) {
    let store = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        let taskText = task.firstChild.textContent.toLowerCase();
        if (taskText.indexOf(store) !== -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

// Create a list item element
function createListItem(value) {
    let element = document.createElement('li');
    element.appendChild(document.createTextNode(value));
    element.className = "collection-item";

    let link = document.createElement('a');
    link.className = "delete-item";
    link.classList.add("secondary-content");
    link.innerHTML = '<i class="fa fa-remove"></i>';
    element.appendChild(link);

    return element;
}

// Insert an item into the list
function insertItemIntoList(item) {
    if (ul.childElementCount === 0) {
        ul.appendChild(item);
    } else {
        ul.insertBefore(item, ul.firstElementChild);
    }
}

// Start the application by loading all events
loadAllEvent();
