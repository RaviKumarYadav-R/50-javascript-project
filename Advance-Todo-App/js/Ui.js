import { toggleTask, editTask, removeTask } from "./Main.js";

// Render all tasks in the container
export function renderTask(tasks, filterVal, query = "") {
  const container = document.querySelector(".list-container");
  container.innerHTML = "";
  let filteredArr = tasks.filter((task) => {
    let filtredBy =
      filterVal === "all" ||
      (filterVal === "completed" && task.completed) ||
      (filterVal === "pending" && !task.completed);

    let filtredQuery = task.task.toLowerCase().includes(query.toLowerCase());

    return filtredBy && filtredQuery;
    // console.log(filtredBy && filtredQuery);
  });

  filteredArr.forEach((task, i) => {
    const taskElement = document.createElement("li");
    taskElement.classList.add("task");

    // Create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "toggleComplete";
    checkbox.checked = task.completed;
    checkbox.id = i;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    // Task text
    const input = document.createElement("input");
    input.type = "text";
    input.value = task.task;
    input.readOnly = true;
    input.className = "task-input";
    input.id = task.id;

    // Buttons
    const btnBox = document.createElement("div");
    btnBox.className = "btn-box";

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "🖋️";
    editBtn.addEventListener("click", (e) => {
      if (!task.completed) {
        editTask(task.id, e);
      }
    });

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.textContent = "❌";
    removeBtn.addEventListener("click", () => removeTask(task.id));

    btnBox.append(editBtn, removeBtn);
    taskElement.append(checkbox, input, btnBox);
    container.appendChild(taskElement);
  });
}
