const headingInput = document.getElementById("heading");
const textbox = document.getElementById("para");
const model = document.querySelector(".model");
const close = document.querySelector(".close");
const openModel = document.querySelector(".add-new-note");
const addNewNotes = document.querySelector(".add-notes");
const notesWrapper = document.querySelector(".notes-wrapper");

let notesArr = [];

openModel.addEventListener("click", () => {
  model.classList.remove("hidden");
});
close.addEventListener("click", () => {
  model.classList.add("hidden");
});

addNewNotes.addEventListener("click", () => {
  let headingVal = headingInput.value.trim();
  let paraVal = textbox.value.trim();
  let time = new Date().toLocaleString("en-IN", {
    timeStyle: "short",
    dateStyle: "short",
    hour12: false,
  });

  if (!headingVal && !paraVal) {
    alert("fill all fields");
    return;
  }

  notesArr.push({
    heading: headingVal,
    notes: paraVal,
    date: time,
  });

  renderNotes();
  model.classList.add("hidden");
});

function renderNotes() {
  localStorage.setItem("notes", JSON.stringify(notesArr));
  notesWrapper.innerHTML = "";
  notesArr.forEach((note, i) => {
    let div = document.createElement("div");
    div.classList.add("notes-card");
    div.innerHTML = `<h2 class="heading">${note.heading}</h2>
          <p class="notes-para">${note.notes}</p>
          <div class="date-box">${note.date}</div>`;
    div.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      notesArr.splice(i, 1);
      renderNotes();
    });
    notesWrapper.append(div);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  notesArr = JSON.parse(localStorage.getItem("notes")) || [];
  renderNotes();
});
