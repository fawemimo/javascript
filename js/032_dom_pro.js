console.log("Hello world");
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

// Loadd all event Listeners
loadEventListeners();

function loadEventListeners() {
  // DOM LOAD EVENT
  document.addEventListener("DOMContentLoaded", getTasks, false);

  // Add task
  form.addEventListener("submit", addTask, false);

  // Remove Task
  taskList.addEventListener("click", removeTask, false);

  // Clear Btn
  clearBtn.addEventListener("click", clearTasks, false);

  // Filter Task
  filter.addEventListener("keyup", filterTasks, false);
}

// Get tasks from ls
function getTasks() {
  let tasks;
  if (localStoragegetItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement("li");

    // Add class
    li.className = "collection-item";

    // create a text node and append to li
    li.appendChild(document.createTextNode(task));

    // create new link element
    const link = document.createElement("a");

    // add class
    link.className = "delete-item secondary-content";

    // Add icon html
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // const icon = document.createElement("i");
    // icon.className = "fa fa-remove";

    // Append icon to link
    // link.appendChild(icon);

    // Append the link to li
    li.appendChild(link);

    // Append the li to ul
    taskList.appendChild(li);
  });
}

// ADD Task event that triggers
function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("This field must not bbe empty");
  }

  // Create li element
  const li = document.createElement("li");

  // Add class
  li.className = "collection-item";

  // create a text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element
  const link = document.createElement("a");

  // add class
  link.className = "delete-item secondary-content";

  // Add icon html
  link.innerHtml = '<i class="fa fa-remove"></i>';
//   const icon = document.createElement("i");
//   icon.className = "fa fa-remove";

//   // Append icon to link
//   link.appendChild(icon);

  // Append the link to li
  li.appendChild(link);

  // Append the li to ul
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear Input
  taskInput.value = "";
}

// Remove Task
function removeTask(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure you want to delete")) {
      e.target.parentElement.parentElement.remove();

    //   Remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if (localStoragegetItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task) {
            tasks.splice(index, 1)
        }
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Clear Task
function clearTasks() {
     // taskList.innerHTML = '';
  // STEP 2
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

//   clear tasks from LS
  clearTasksFromLocalStorage();
}

// clear tasks from local storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  let li;
  li = document.querySelectorAll(".collection-item");
  li.forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// Store in localstorage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
