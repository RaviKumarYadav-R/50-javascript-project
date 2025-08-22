const form = document.querySelector("form");
const titleInput = form.querySelector("#title");
const urlInput = form.querySelector("#url");
const bookmarkList = document.querySelector(".bookmark-list");

const bookmarks = JSON.parse(localStorage.getItem("bookmarkList")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  bookmarks.push({
    title: titleInput.value.trim(),
    url: urlInput.value.trim(),
    date: new Date().toLocaleDateString("en-IN", { dateStyle: "medium" }),
  });

  form.reset();
  renderBookmarkList();
});

// open link in new tab
function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

// remove bookmark
function removeBookmark(index) {
  bookmarks.splice(index, 1);
  renderBookmarkList();
}

function renderBookmarkList() {
  bookmarkList.innerHTML = "";
  localStorage.setItem("bookmarkList", JSON.stringify(bookmarks));
  bookmarks.forEach((list, i) => {
    let listEl = document.createElement("li");
    listEl.classList.add("list");
    listEl.innerHTML = `   <div class="details">
            <small class="date">${list.date}</small>
            <p><strong>Title: </strong>${list.title}</p>
            <p><strong>URL: </strong>${list.url}</p>
          </div>

          <div class="btn-box">
            <button onclick="openLink('${list.url}')" class="open">Open</button>
            <button onclick="removeBookmark(${i})" class="delete">
              <span>Delete</span> <i class="fa-solid fa-bookmark"></i>
            </button>
          </div>`;

    bookmarkList.appendChild(listEl);
  });
}

renderBookmarkList();
