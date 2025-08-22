const elements = document.querySelectorAll(".dragable-element");
const dragable = document.getElementById("myDroppable");
const dragable2 = document.getElementById("myDroppable2");

elements.forEach((elem) => {
  elem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
});

dragable.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dragable.addEventListener("drop", (e) => {
  const id = e.dataTransfer.getData("text/plain");
  const draggableElement = document.getElementById(id);
  dragable.appendChild(draggableElement);
});

dragable2.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dragable2.addEventListener("drop", (e) => {
  const id = e.dataTransfer.getData("text/plain");
  console.log(id);
  
  const draggableElement = document.getElementById(id);
  dragable2.appendChild(draggableElement);
});
