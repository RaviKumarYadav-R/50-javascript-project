const fileInput = document.getElementById("fileInput");
const showFile = document.querySelector(".show-files");
const dragBox = fileInput.parentElement;
const image = document.getElementById("preview");
fileInput.addEventListener("change", handleFiles);

function handleFiles() {
  const files = fileInput.files;
  if (files.length > 0) {
    for (const file of files) {
      const pElem = document.createElement("p");
      pElem.className = "file";
      pElem.innerText = file.name;
      showFile.appendChild(pElem);
      pElem.addEventListener("click", () => {
        const render = new FileReader();
        render.onload = (e) => {
          image.src = e.target.result;
          image.alt = file.name;
        };

        render.readAsDataURL(file);
      });
    }
  }
}
dragBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  dragBox.classList.add("drag-over");
});
dragBox.addEventListener("dragleave", () => {
  dragBox.classList.remove("drag-over");
});
dragBox.addEventListener("drop", (e) => {
  e.preventDefault();
  dragBox.classList.remove("drag-over")
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;
    handleFiles();
  }
});
