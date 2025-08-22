const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", (event) => {
  const file = fileInput.files[0];
  preview.innerHTML = "";
  if (file) {
    const render = new FileReader();
    render.addEventListener("load", ({ target }) => {
      const image = document.createElement("img");
      image.src = target.result;
      image.alt = file.name;
      preview.append(image);
    });

    render.readAsDataURL(file);
  }
});
