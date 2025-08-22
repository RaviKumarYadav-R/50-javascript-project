import { renderTask } from "./Ui.js";
import { createTask } from "./Todo.js";
import { saveTasks, loadTasks } from "./Storage.js";

let tasks = loadTasks();
let query = "";
let currentFilter = "all";
renderTask(tasks, currentFilter, query);

// Dom emements for form and input
const form = document.querySelector("form"),
  input = form.querySelector("#todo-input");

// Dom elements for search and filter
const searchInput = document.querySelector("#search-input");
const filterBtn = document.querySelector("#filter");
const filterList = document.querySelectorAll("input[type='radio']");
const filterListContainer = document.querySelector(".filter-btn-box");

// filter Btn functionality
filterBtn.addEventListener("click", () => {
  filterListContainer.classList.toggle("hidden");
});

// filter functionality
filterList.forEach((item) => {
  item.addEventListener("click", () => {
    currentFilter = item.value;
    renderTask(tasks, currentFilter, query);
  });
});

searchInput.addEventListener("input", () => {
  query = searchInput.value.trim();
  renderTask(tasks, currentFilter, query);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = input.value.trim();
  if (!val) return alert("Empty task!");

  const newTask = createTask(val);
  tasks.push(newTask);
  saveTasks(tasks);
  renderTask(tasks);
  input.value = "";
});

// Handle task toggle
export function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks(tasks);
  renderTask(tasks, currentFilter, query);
}

// Handle task removal
export function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks(tasks);
  renderTask(tasks, currentFilter, query);
}

// Handle editing task
export function editTask(id, e) {
  const inputEl = e.target.closest("li").querySelector("input[type=text]");
  if (!inputEl.readOnly) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, task: inputEl.value.trim() } : task
    );
    saveTasks(tasks);
    renderTask(tasks, currentFilter, query);
  }
  inputEl.readOnly = !inputEl.readOnly;
  e.target.innerText = inputEl.readOnly ? "🖋️" : "📂";
  inputEl.focus();
}
