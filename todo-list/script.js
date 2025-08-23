const themeToggleBtn = document.querySelector(".theme");
const form = document.querySelector("form");
const inputEl = form.querySelector("input");
const todoList = document.querySelector(".task-list");
const activeTask = document.querySelector(".active-task");
let todoTasks = [];

themeToggleBtn.addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("todo-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem("todo-theme", "dark");
  }
});

// toggle completed tasks
function toggleTask(id) {
  tasks = todoTasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  todoTasks = tasks;
  renderTask();
}

//delete todo
function deleteTodo(id) {
  tasks = todoTasks.filter((task) => task.id !== id);
  todoTasks = tasks;
  renderTask();
}
// render tasks
function renderTask() {
  localStorage.setItem("todo-tasks", JSON.stringify(todoTasks));
  todoList.innerHTML = "";
  activeTask.innerText  = `${todoTasks.length} Active Tasks`
  todoTasks.forEach((tasks) => {
    const item = document.createElement("li");
    item.classList.add("item");
    if(tasks.completed) item.classList.add("completed")
    item.innerHTML = `<label>
            <input type="checkbox" onchange="toggleTask(${tasks.id})" ${
      tasks.completed ? "checked" : ""
    }>
            <span><i class="fa-solid fa-check"></i> </span>
          </label>

          <p class="task">${tasks.text}</p>
          <button class="delete" onclick="deleteTodo(${
            tasks.id
          })"> <i class="fa-solid fa-trash"></i></button>
        `;

    todoList.appendChild(item);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = inputEl.value.trim();
  if (!inputVal) return alert("Please enter a task");
  todoTasks.push({ id: Date.now(), text: inputVal, completed: false });
  inputEl.value = "";
  renderTask();
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("todo-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeToggleBtn.innerHTML =
      savedTheme === "dark"
        ? `<i class="fa-solid fa-sun"></i>`
        : `<i class="fa-solid fa-moon"></i>`;
  }

  document.querySelector(".date").innerText = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "short",
      day: "numeric",
    }
  );

  todoTasks = JSON.parse(localStorage.getItem("todo-tasks")) || [];
  renderTask();
});
