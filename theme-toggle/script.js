const toggleBtn = document.querySelector("#toggle")

toggleBtn.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})