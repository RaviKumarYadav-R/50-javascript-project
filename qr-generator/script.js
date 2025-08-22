const imgElem = document.querySelector("img");
const textInput = document.getElementById("text");
const sizeInput = document.getElementById("size");
const marginInput = document.getElementById("margin");
const bgcInput = document.getElementById("bgc");
const fgcinput = document.getElementById("fgc");
const urlInput = document.getElementById("url");
const downloadbtn = document.querySelector(".download");

let qrCode;

function generateQr() {
  qrCode = `https://quickchart.io/qr?text=${textInput.value}&size=${
    sizeInput.value
  }&margin=${marginInput.value}&dark=${fgcinput.value.slice(
    1
  )}&light=${bgcInput.value.slice(1)}&centerImageUrl=${urlInput.value}`;
  imgElem.src = qrCode;
}
downloadbtn.addEventListener("click", () => {
  fetch(qrCode)
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      a.download = `${Date.now()}.png`;
      a.href = URL.createObjectURL(blob);
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    })
    .catch((err) => console.error("Download failed", err));
});

generateQr();

textInput.addEventListener("input", generateQr);
sizeInput.addEventListener("input", generateQr);
marginInput.addEventListener("input", generateQr);
bgcInput.addEventListener("change", generateQr);
fgcinput.addEventListener("change", generateQr);
urlInput.addEventListener("input", generateQr);
