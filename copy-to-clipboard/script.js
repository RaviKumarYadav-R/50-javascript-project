const input = document.getElementById("text-input");
const copybtn = document.getElementById("copy-btn");

copybtn.addEventListener("click", () => {
  const textValue = input.value;
  if (!textValue) return alert("input field empty");
  navigator.clipboard.writeText(textValue).then(() => {
    alert("Your text Copied! " + input.value);
    copybtn.innerText = "copied";

    setTimeout(() => {
      copybtn.innerText = "copy text";
    }, 1000);
  });
});
