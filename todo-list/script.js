const form = document.querySelector("form");
const input = form.querySelector("#input");
const ulList = document.querySelector(".task-list");

let taskArr = JSON.parse(localStorage.getItem("todoTask")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value.trim();
  // check input field empty or not
  if (inputVal) {
    taskArr.push({
      task: inputVal,
      isComplete: false,
    });

    showTasks();
    input.value = "";
  } else {
    input.style.borderColor = "red";
  }
});

input.addEventListener("input", () => {
  if (input.value.length > 0) {
    input.style.borderColor = "white";
  }
});

function showTasks() {
  localStorage.setItem("todoTask", JSON.stringify(taskArr));
  ulList.innerHTML = "";
  taskArr.forEach((task, i) => {
    const list = document.createElement("li");
    list.classList.add("list");
    if (task && task.isComplete) {
      list.classList.add("complete");
    }
    list.innerHTML = ` <p class="task" data-id="${i}">${task.task}</p>
            <span data-id="${i}" class="delete">&#10006;</span>`;

    ulList.append(list);
  });
}

ulList.addEventListener("click", (e) => {
  let dataId;
  if (e.target.tagName === "P") {
    dataId = e.target.dataset.id;
    taskArr[dataId].isComplete = !taskArr[dataId].isComplete;
  } else if (e.target.tagName === "SPAN") {
    dataId = e.target.dataset.id;
    taskArr.splice(dataId, 1);
  }

  showTasks();
});

showTasks();
