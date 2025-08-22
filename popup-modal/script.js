const model = document.querySelector(".popup")
const openModel = document.querySelector(".popup-btn")
const closeModel = document.querySelector(".close")


openModel.addEventListener("click", () => {
    model.classList.toggle("hidden")
})
closeModel.addEventListener("click", () => {
    model.classList.toggle("hidden")
})